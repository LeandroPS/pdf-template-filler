import React, { useState } from "react";

import "./App.css";

import Initial from "./pages/initial";
import SecondStep from "./pages/secondStep";
import Final from "./pages/final";

const App = () => {
    const [currentPage, setPage] = useState("select-tsv");

    const [data, setData] = useState();
    const [template, setTemplate] = useState();

    return (
        <>
            {currentPage === "select-tsv" && (
                <Initial
                    {...{ data, template, setData, setTemplate, setPage }}
                />
            )}
            {currentPage === "define-template" && (
                <SecondStep {...{ template, setTemplate }} />
            )}
            {currentPage === "download-pdfs" && (
                <Final {...{ data, template, setData, setTemplate }} />
            )}
        </>
    );
};

export default App;
