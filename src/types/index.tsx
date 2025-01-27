export type DogBreedsType = Record<string, string[]>;

export type SubDogBreedsType = string[];

export type DogImagesType = string[];

export type DogBreedType = string | null;

export type SubDogBreedType = string | null;

export type DogNumberImagesType = number;

export type actionType = {
  type: string;
  payload: Record<string, string[]> | string[] | number;
};
