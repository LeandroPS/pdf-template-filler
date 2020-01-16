import React, { useState } from "react";

import "./App.css";

import DataStep from "./pages/data-step";
import DownloadStep from "./pages/download-step";

const App = () => {
    const [currentStep, setStep] = useState("download-step");

    const [data, setData] = useState();

    const onNextStep = () => {
        const steps = ["data-step", "download-step"];

        setStep(steps[steps.indexOf(currentStep) + 1]);
    };

    return (
        <>
            {currentStep === "data-step" && (
                <DataStep {...{ data, setData, onNextStep }} />
            )}
            {currentStep === "download-step" && (
                <DownloadStep {...{ data, setData }} />
            )}
        </>
    );
};

export default App;
