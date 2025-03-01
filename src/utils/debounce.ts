import { useEffect, useRef } from "react";

export const useDebouncedSearch = (callback: (query: string) => void, delay: number = 1000) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (query: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(query);
    }, delay);
  };
};
