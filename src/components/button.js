import styled from "styled-components";

import colors from "../utils/colors";

export default styled.button`
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    display: block;
    color: #fff;
    height: 40px;
    background-color: ${colors.red};
    outline: none;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        opacity: 0.8;
    }
`;
