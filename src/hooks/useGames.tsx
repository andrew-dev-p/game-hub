import { GameQuery } from "@/App";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import APIClient from "@/services/api-client";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platform: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,

    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useGames;
