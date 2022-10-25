import { useInfiniteQuery } from "react-query";

import { apiEndpoints } from "./endpoints";

const getSpeciesData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export const useSpeciesInfiniteQuery = () => {
  const speciesQuery = useInfiniteQuery(
    "sw-species",
    ({ pageParam = apiEndpoints["GET"]["speciesData"] }) =>
      getSpeciesData(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    }
  );

  return speciesQuery;
};
