import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { App } from "./util/App.jsx";
import { getImages, results } from "./data.js";

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
    <React.StrictMode>     
        <App getImages={getImages} results={results} />
    </React.StrictMode>
);