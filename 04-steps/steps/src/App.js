import React, { useState } from "react";
// import DateCounter from "./components/DateCounter";
import Button from "./components/Button";
import StepMessage from "./components/StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step === 1) return;
    setStep((currentStepValue) => currentStepValue - 1);
  }

  function handleNext() {
    if (step === 3) return;
    setStep((currentStepValue) => currentStepValue + 1);
  }
  return (
    <>
      {/* <DateCounter /> */}
      <button
        className="close"
        onClick={() => setIsOpen((currentIsOpenValue) => !currentIsOpenValue)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
