"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider as MarriedQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface QueryClientProviderProps {
  children: ReactNode;
}

const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <MarriedQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </MarriedQueryClientProvider>
  );
};

export default QueryClientProvider;
