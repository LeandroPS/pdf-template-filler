import React, { useState } from "react";

import styled from "styled-components";

import Button from "../components/button";
import FileInput from "../components/file-input";
import Container from "../components/container";
import Error from "../components/error";

import TSVtoJSON from "../utils/tsv-json";

const CenteredContainer = styled(Container)`
    text-align: center;
`;

export default ({ data, template, setData, setTemplate, setPage }) => {
    const [error, setError] = useState("");

    const handleNext = () => {
        if (!data || !template) {
            setError("Selecione o template e os dados a serem carregados");
            return;
        }

        setPage("download-pdfs");
    };

    const handleTemplateChange = file => {
        setTemplate(file);
    };

    const handleDataChange = file => {
        setError("");
        try {
            setData(TSVtoJSON(file));
            console.log("foi");
        } catch (e) {
            setError("Arquivo .tsv com formatação inválida");
        }
    };

    return (
        <CenteredContainer>
            <h1>PDF form filler</h1>
            <h2>1. Selecione o pdf a servir de template</h2>
            <FileInput onSelectFile={handleTemplateChange} readAs="DataURL" />
            <h2>2. Selecione o arquivo tsv a preencher o PDF</h2>
            <FileInput onSelectFile={handleDataChange} readAs="Text" />
            {error !== "" && <Error>{error}</Error>}
            <Button onClick={handleNext}>Gerar PDFs</Button>
        </CenteredContainer>
    );
};
