import React, { useState } from "react";

import Initial from "./pages/initial";
import Final from "./pages/final";

const App = () => {
    const [currentPage, setPage] = useState("select-documents");

    const [data, setData] = useState();
    const [template, setTemplate] = useState();

    return (
        <>
            {currentPage === "select-documents" && (
                <Initial {...{ data, template, setData, setTemplate }} />
            )}
            {currentPage === "download-pdfs" && (
                <Final {...{ data, template, setData, setTemplate }} />
            )}
        </>
    );
};

export default App;
