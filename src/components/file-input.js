import React, { useRef } from "react";
import styled from "styled-components";

import Button from "./button";

const FileInput = styled.input`
    display: none;
    width: 0;
    height: 0;
`;

export default ({ label = "Selecionar arquivo", onSelectFile = () => {} }) => {
    const fileInput = useRef();

    const handleClick = () => {
        fileInput.current.click();
    };

    const handleFileSelect = e => {
        onSelectFile(e.target.files[0]);
    };

    return (
        <>
            <FileInput
                ref={fileInput}
                onChange={handleFileSelect}
                type="file"
            />
            <Button onClick={handleClick}>{label}</Button>
        </>
    );
};
