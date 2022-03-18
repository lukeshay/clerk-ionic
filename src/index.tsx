import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-expo";
import { getItem, setItem } from "./services/storage-service";

ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider
      frontendApi="fronted.lcl.dev"
      tokenCache={{
        getToken: async (): Promise<string | null | undefined> =>
          getItem("token"),
        saveToken: async (token: string): Promise<void> => {
          await setItem("token", token);
        },
      }}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
