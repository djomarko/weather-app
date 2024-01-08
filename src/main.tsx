import App from "app/app";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// The root element where React will be mounted.
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (import.meta.env.VITE_MODE === "mock") {
  // When development, setup the MSW.
  // import the worker (under the browser.ts file)
  import("./mocks/browser")
    .then(({ worker }) => {
      // Start the worker.
      worker.start();
      console.log("Workr started");
    })
    .then(() => {
      // Render the application.
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    });
} else {
  // Render the application in production without the MSW.
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
