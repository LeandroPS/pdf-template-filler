import React, { useRef } from "react";
import styled from "styled-components";

import Button from "./button";

import colors from "../utils/colors";

const Wrapper = styled.div`
    margin-bottom: 20px;
`;

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
        <Wrapper>
            <FileInput
                ref={fileInput}
                onChange={handleFileSelect}
                type="file"
            />
            <Button
                textColor={colors.dark}
                color={colors.gray}
                onClick={handleClick}
            >
                {label}
            </Button>
        </Wrapper>
    );
};
