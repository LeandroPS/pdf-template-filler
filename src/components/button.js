import styled from "styled-components";

import colors from "../utils/colors";

export default styled.button`
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    display: inline-block;
    color: ${props => props.textColor || "#fff"};
    height: 40px;
    background-color: ${props => props.color || colors.red};
    outline: none;
    cursor: pointer;
    font: inherit;

    &:hover {
        opacity: 0.8;
    }
`;
