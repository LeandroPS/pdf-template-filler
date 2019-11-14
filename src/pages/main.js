import React from "react";

import Button from "../components/button";
import FileInput from "../components/file-input";
import Container from "../components/container";

export default ({ data, template, setData, setTemplate }) => {
    return (
        <Container>
            <h1>PDF form filler</h1>
            <h2>1. Selecione o pdf a servir de template</h2>
            <FileInput onSelectFile={setTemplate} />
            <h2>2. Selecione o arquivo csv a preencher o PDF</h2>
            <FileInput onSelectFile={setData} />
            <Button>Gerar PDFs</Button>
        </Container>
    );
};
