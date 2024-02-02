import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  //?? : if any of these fails give me an empty array
  return [results?.data?.breeds ?? [], results.status];
}