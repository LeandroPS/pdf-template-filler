import React from "react";

import styled from "styled-components";

import Container from "../components/container";
import Table from "../components/table";

import generatePDF from "../utils/generatePDF";

const DownloadButton = styled.button`
    border: none;
    outline: none;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
`;

export default ({ data, template }) => {
    const getHeaders = () => {
        let headers = [];
        for (var header in data[0]) {
            if (headers.length < 4) headers.push(header);
        }
        return headers;
    };

    const mapTableHeaders = () => (
        <thead>
            <tr>
                {getHeaders().map((item, index) => (
                    <th key={index}>{item}</th>
                ))}
                <th></th>
            </tr>
        </thead>
    );

    const mapTableContent = () => (
        <tbody>
            {data.map(item => (
                <tr>
                    {getHeaders().map((prop, index) => (
                        <td key={index}>{item[prop]}</td>
                    ))}
                    <td>
                        <DownloadButton onClick={() => generateDocument(item)}>
                            <i className="lni-download"></i>
                        </DownloadButton>
                    </td>
                </tr>
            ))}
        </tbody>
    );

    const generateDocument = item => {
        let itemTemplate = template;

        getHeaders().forEach(header => {
            itemTemplate = itemTemplate.replace(
                `%${header.toLowerCase()}%`,
                item[header]
            );
        });

        generatePDF(itemTemplate);

        console.log(itemTemplate);
    };

    return (
        <Container>
            <h1>Baixe os arquivos</h1>
            <Table>
                {mapTableHeaders()}
                {mapTableContent()}
            </Table>
        </Container>
    );
};
