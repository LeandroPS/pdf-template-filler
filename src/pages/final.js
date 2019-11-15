import React from "react";

import Container from "../components/container";
import Table from "../components/table";

export default ({ data }) => {
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
                {getHeaders().map(item => (
                    <th>{item}</th>
                ))}
                <th></th>
            </tr>
        </thead>
    );

    const mapTableContent = () => (
        <tbody>
            {data.map(item => (
                <tr>
                    {getHeaders().map(prop => (
                        <td>{item[prop]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );

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
