import React, { useState } from "react";

import "./App.css";

import DataStep from "./pages/data-step";
import TemplateStep from "./pages/template-step";
import DownloadStep from "./pages/download-step";

const App = () => {
    const [currentStep, setStep] = useState("data-step");

    const [data, setData] = useState();
    const [template, setTemplate] = useState();

    const onNextStep = () => {
        const steps = ["data-step", "template-step", "download-step"];

        setStep(steps[steps.indexOf(currentStep) + 1]);
    };

    return (
        <>
            {currentStep === "data-step" && (
                <DataStep
                    {...{ data, template, setData, setTemplate, onNextStep }}
                />
            )}
            {currentStep === "template-step" && (
                <TemplateStep {...{ template, setTemplate, onNextStep }} />
            )}
            {currentStep === "download-step" && (
                <DownloadStep {...{ data, template, setData, setTemplate }} />
            )}
        </>
    );
};

export default App;
