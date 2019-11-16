import styled from "styled-components";

import colors from "../utils/colors";

export default styled.table`
    border-collapse: collapse;

    thead {
        background-color: ${colors.dark};
        color: #fff;
    }

    tr:nth-child(odd) {
        background-color: ${colors.gray};
    }

    td,
    th {
        padding: 10px;
    }
`;
