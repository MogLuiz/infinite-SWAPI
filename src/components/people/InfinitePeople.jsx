import InfiniteScroll from "react-infinite-scroller";
import { Person } from "./parts/Person";
import { useInfiniteQuery } from "react-query";

const initialUrl = "https://swapi.dev/api/people/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfinitePeople() {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError, error } =
    useInfiniteQuery(
      "sw-people",
      ({ pageParam = initialUrl }) => fetchUrl(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.next || undefined,
      }
    );

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div>Error: {error.toString()}</div>;

  return (
    <>
    {isFetching && <div className="loading">Loading...</div>}
    <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
      {data?.pages.map((pageData) =>
        pageData?.results.map(({ name, hair_color, eye_color }) => (
          <Person
            key={name}
            name={name}
            hairColor={hair_color}
            eyeColor={eye_color}
          />
        ))
      )}
    </InfiniteScroll>
    </>
  );
}
