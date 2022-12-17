import { useMediaQuery } from '@chakra-ui/react';

/**
 * Wrapper hook for useMediaQuery with SSR support which is useful
 * for this Next.js project.
 * @param query
 */
const useSSRMediaQuery = (query: string | string[]) => {
  return useMediaQuery(query, {
    fallback: false,
    ssr: true,
  });
};

export default useSSRMediaQuery;
