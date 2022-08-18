import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider, QueryCache, MutationCache } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.details);
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.details);
      }
    },
  }),
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={<div>로딩 중...</div>}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  </QueryClientProvider>,
);
