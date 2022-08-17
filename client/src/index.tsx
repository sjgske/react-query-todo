import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./components/common/ErrorPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<div>로딩 중...</div>}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </QueryClientProvider>,
);
