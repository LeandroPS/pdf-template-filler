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

export default ({ data, setData, onNextStep }) => {
    const [error, setError] = useState("");

    const handleNext = () => {
        if (!data) {
            setError("Selecione os dados a serem carregados");
            return;
        }

        onNextStep();
    };

    const handleDataChange = file => {
        setError("");
        try {
            setData(TSVtoJSON(file));
        } catch (e) {
            setError("Arquivo .tsv com formatação inválida");
        }
    };

    return (
        <CenteredContainer>
            <h1>PDF form filler</h1>
            <h2>1. Selecione o arquivo tsv a preencher o template</h2>
            <FileInput onSelectFile={handleDataChange} readAs="Text" />
            {error !== "" && <Error>{error}</Error>}
            <Button onClick={handleNext}>Gerar PDFs</Button>
        </CenteredContainer>
    );
};
