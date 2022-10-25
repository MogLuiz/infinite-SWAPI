import InfiniteScroll from "react-infinite-scroller";

import { Person } from "./parts/Person";

import { usePeopleInfiniteQuery } from "../../hooks/usePeopleInfiniteQuery";

export function InfinitePeople() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
    error,
  } = usePeopleInfiniteQuery();

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
