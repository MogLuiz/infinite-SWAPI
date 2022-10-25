import { useInfiniteQuery } from "react-query";

import { apiEndpoints } from "./endpoints";

const getPeoplesData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export const usePeopleInfiniteQuery = () => {
  const peopleQuery = useInfiniteQuery(
    "sw-people",
    ({ pageParam = apiEndpoints["GET"]["getPeoplesData"] }) =>
      getPeoplesData(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    }
  );

  return peopleQuery;
};
