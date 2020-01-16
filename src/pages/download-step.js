import React from "react";

import styled from "styled-components";

import Container from "../components/container";

import generatePDF from "../utils/generatePDF";

import contratosTemplate from "../templates/newTemplates";

const DownloadButton = styled.button`
    border: none;
    outline: none;
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;

    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

    i {
        margin-right: 5px;
    }
`;

const ItemContainer = styled.div`
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.05);
    margin-bottom: 10px;

    .aluno {
        margin-bottom: 10px;
        padding: 5px;
        font-weight: bold;
    }

    .downloads {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
`;

const Item = ({ item }) => (
    <ItemContainer>
        <div className="aluno">{item["ALUNO"]}</div>
        <div className="downloads">
            {contratosTemplate.map(contrato => (
                <DownloadButton onClick={() => generatePDF(contrato, item)}>
                    <i className="lni-download"></i>
                    {contrato.name}
                </DownloadButton>
            ))}
        </div>
    </ItemContainer>
);

export default ({ data }) => {
    return (
        <Container>
            <h1>Baixe os arquivos</h1>
            <div>
                {data.map(item => (
                    <Item item={item} />
                ))}
            </div>
        </Container>
    );
};
