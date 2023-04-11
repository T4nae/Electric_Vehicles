import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
    <p id="blocked">Please access this website from Desktop</p>
        <App className="main" />
    </>
);
