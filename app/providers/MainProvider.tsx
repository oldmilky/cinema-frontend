// import ReduxToast from "./ReduxToast";
import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import Navigation from "../components/Navigation/Navigation";
import Sidebar from "../components/Sidebar/Sidebar";
import { TypeComponentAuthFields } from "../shared/types/auth.types";
import { store } from "../store/store";
import AuthProvider from "./AuthProvider/AuthProvider";
import HeadProvider from "./HeadProvider/HeadProvider";
import ReduxToast from "./ReduxToast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

type MainProviderProps = {
  children: React.ReactNode;
};

type TypeAppProps = MainProviderProps & TypeComponentAuthFields;

const MainProvider: FC<TypeAppProps> = ({
  children,
  Component,
}: TypeAppProps) => {
  return (
    <HeadProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReduxToast />
          <AuthProvider Component={Component}>
            <div className="layout">
              <Navigation />
              <div className="container">{children}</div>
              <Sidebar />
            </div>
          </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </HeadProvider>
  );
};

export default MainProvider;
