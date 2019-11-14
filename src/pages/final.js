import React from "react";

import Container from "../components/container";
import Table from "../components/table";

export default ({ data, template }) => {
    return (
        <Container>
            <h1>Baixe os arquivos</h1>
            <Table></Table>
        </Container>
    );
};
