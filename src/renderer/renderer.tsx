import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const app = document.getElementById("root");

// create a root
const root = createRoot(app);

//render app to root
root.render(<App />);
