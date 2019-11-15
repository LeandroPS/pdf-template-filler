import React, { useState, useEffect } from "react";

import "./App.css";

import Initial from "./pages/initial";
import Final from "./pages/final";

const App = () => {
    const [currentPage, setPage] = useState("select-documents");

    const [data, setData] = useState();
    const [template, setTemplate] = useState();

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <>
            {currentPage === "select-documents" && (
                <Initial
                    {...{ data, template, setData, setTemplate, setPage }}
                />
            )}
            {currentPage === "download-pdfs" && (
                <Final {...{ data, template, setData, setTemplate }} />
            )}
        </>
    );
};

export default App;
