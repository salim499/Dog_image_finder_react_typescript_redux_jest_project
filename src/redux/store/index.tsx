/*import { con } from "react-redux";
// types
import {
  DogBreedsType,
  SubDogBreedsType,
  DogImagesType,
  DogBreedType,
  SubDogBreedType,
  DogNumberImagesType,
  actionType,
} from "../../types/index";

interface StoreType {
  dogBreeds: DogBreedsType;
  subDogBreeds: SubDogBreedsType;
  images: DogImagesType;
  dogBreed: DogBreedType;
  subDogBreed: SubDogBreedType;
  numberImages: DogNumberImagesType;
}

const SET_DOG_BREEDS = "SET_DOG_BREEDS";
const SET_SUB_DOG_BREEDS = "SET_SUB_DOG_BREEDS";
const SET_IMAGES = "SET_IMAGES";
const SET_DOG_BREED = "SET_DOG_BREED";
const SET_SUB_DOG_BREED = "SET_SUB_DOG_BREED";
const SET_NUMBER_IMAGES = "SET_NUMBER_IMAGES";

const initialState: StoreType = {
  dogBreeds: {},
  subDogBreeds: [],
  images: [],
  dogBreed: null,
  subDogBreed: null,
  numberImages: 0,
};

const reducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case SET_DOG_BREEDS:
      return { state, dogBreeds: action.payload };
    case SET_SUB_DOG_BREEDS:
      return { state, subDogBreeds: action.payload };
    case SET_IMAGES:
      return { state, images: action.payload };
    case SET_DOG_BREED:
      return { state, dogBreed: action.payload };
    case SET_SUB_DOG_BREED:
      return { state, subDogBreed: action.payload };
    case SET_NUMBER_IMAGES:
      return { state, numberImages: action.payload };
    default:
      return state;
  }
};

const store = CreateStore(reducer, initialState);
export default store;*/
