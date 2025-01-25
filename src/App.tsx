import { useEffect, useState } from "react";
import axios from "axios";
// components
import Header from "./components/header";
import Dropdown from "./components/dropdown";
function App() {
  // functions
  const getDogBreeds = async () => {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/list/all");
      setDogBreeds(response?.data?.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getDogSubBreeds = async (dogBreed) => {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${dogBreed}/list`
      );
      setSubDogBreeds(response?.data?.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getImages = async (dogBreed, subDogBreed, numberImages) => {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${dogBreed}/${subDogBreed}/images/random/${numberImages}`
      );
      setImages(response?.data?.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSetDogBreed = (e: any) => {
    setDogBreed(e.target.value);
  };

  const handleSetSubDogBreed = (e: any) => {
    setSubDogBreed(e.target.value);
  };

  const handleSetNumberImages = (e: any) => {
    setNumberImages(e.target.value);
  };

  // hooks
  const [dogBreeds, setDogBreeds] = useState({});
  const [subDogBreeds, setSubDogBreeds] = useState([]);
  const [images, setImages] = useState([]);
  const [numberImages, setNumberImages] = useState(0);
  const [dogBreed, setDogBreed] = useState(null);
  const [subDogBreed, setSubDogBreed] = useState(null);

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
    if (!dogBreed) return;
    if (!subDogBreed) return;
    if (numberImages == 0) return;
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
          {images.map((image, index) => (
            <img
              style={{ height: "300px", width: "400px" }}
              key={index}
              src={image}
              className="rounded mx-auto d-block m-2"
              alt="..."
            ></img>
          ))}
        </form>
      </div>
    </div>
  );
}

export default App;
