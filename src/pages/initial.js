import React, { useState } from "react";

import Button from "../components/button";
import FileInput from "../components/file-input";
import Container from "../components/container";
import Error from "../components/error";

export default ({ data, template, setData, setTemplate, setPage }) => {
    const [error, setError] = useState("");

    const handleNext = () => {
        if (data === undefined || template === undefined) {
            setError("Selecione o template e os dados a serem carregados");
            return;
        }

        setPage("");
    };

    return (
        <Container>
            <h1>PDF form filler</h1>
            <h2>1. Selecione o pdf a servir de template</h2>
            <FileInput onSelectFile={setTemplate} />
            <h2>2. Selecione o arquivo csv a preencher o PDF</h2>
            <FileInput onSelectFile={setData} />
            {error === "" && <Error>{error}</Error>}
            <Button onClick={handleNext}>Gerar PDFs</Button>
        </Container>
    );
};
