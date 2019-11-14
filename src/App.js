import React, { useState } from "react";

import Main from "./pages/main";

const App = () => {
    const [data, setData] = useState();
    const [template, setTemplate] = useState();

    return (
        <>
            <Main {...{ data, template, setData, setTemplate }} />
        </>
    );
};

export default App;
