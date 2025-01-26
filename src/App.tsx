import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import Header from "./components/header";
import Dropdown from "./components/dropdown";
import ImagesList from "./components/ImagesList";
//types
import {
  DogBreedsResponse,
  DogSubBreedsResponse,
  DogImagesResponse,
} from "./types";

const App = () => {
  // functions
  const getDogBreeds = async () => {
    try {
      const response = await axios.get<DogBreedsResponse>(
        "https://dog.ceo/api/breeds/list/all"
      );
      setDogBreeds(response?.data?.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getDogSubBreeds = async (dogBreed: string) => {
    try {
      const response = await axios.get<DogSubBreedsResponse>(
        `https://dog.ceo/api/breed/${dogBreed}/list`
      );
      setSubDogBreeds(response?.data?.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getImages = async (
    dogBreed: string,
    subDogBreed: string,
    numberImages: number
  ) => {
    try {
      const response = await axios.get<DogImagesResponse>(
        `https://dog.ceo/api/breed/${dogBreed}/${subDogBreed}/images/random/${numberImages}`
      );
      setImages(response?.data?.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSetDogBreed = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDogBreed(e.target.value);
  };

  const handleSetSubDogBreed = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubDogBreed(e.target.value);
  };

  const handleSetNumberImages = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberImages(parseInt(e.target.value));
  };

  // hooks
  const [dogBreeds, setDogBreeds] = useState<Record<string, string[]>>({});
  const [subDogBreeds, setSubDogBreeds] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [numberImages, setNumberImages] = useState<number>(0);
  const [dogBreed, setDogBreed] = useState<string | null>(null);
  const [subDogBreed, setSubDogBreed] = useState<string | null>(null);

  useEffect(() => {
    getDogBreeds();
  }, []);

  useEffect(() => {
    if (!dogBreed) return;
    setSubDogBreed(null);
    setImages([]);
    getDogSubBreeds(dogBreed);
  }, [dogBreed]);

  useEffect(() => {
    if (!dogBreed || !subDogBreed || numberImages <= 0) return;
    getImages(dogBreed, subDogBreed, numberImages);
  }, [dogBreed, subDogBreed, numberImages]);

  return (
    <div className="container" style={{ height: "100vh" }}>
      <Header />
      <div className="d-flex justify-content-center mt-5">
        <form className="d-flex flex-column align-items-center bg-secondary-subtle w-75 p-3">
          <Dropdown
            items={Object.keys(dogBreeds)}
            selectedItem={dogBreed}
            defaultText="Select dog breed"
            handleChange={handleSetDogBreed}
          />
          <Dropdown
            items={subDogBreeds}
            selectedItem={subDogBreed}
            defaultText="Select sub dog breed"
            handleChange={handleSetSubDogBreed}
          />
          <Dropdown
            items={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            selectedItem={numberImages}
            defaultText="Select images number"
            handleChange={handleSetNumberImages}
          />
          <ImagesList images={images} />
        </form>
      </div>
    </div>
  );
};

export default App;
