"use client";

import { useState } from "react";
import FirstStep from "./first-step";
import SecondStep from "./second-step";
import LastStep from "./last-step";

import React from "react";
import { Button } from "@/components/ui/button";
import CheckIcon from "@/public/icons/check.svg";
import Image from "next/image";

const steps = [
  {
    title: "Choix du mode",
    description: "Êtes-vous interlocuteur ou locuteur ?",
    component: FirstStep,
  },
  {
    title: "Sélection des sujets",
    description: "Choisissez de quoi vous voulez discuter.",
    component: SecondStep,
  },
  {
    title: "Recherche de partenaire",
    description: "Vous allez être mis en relation.",
    component: LastStep,
  },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex flex-col items-center gap-12 md:min-h-[28rem] md:max-h-[400px] max-w-[800px]">
      <div className="flex w-full justify-around gap-4">
        {steps.map((step, i) => {
          return (
            <div key={`${step} - ${i}`} className="flex">
              <div className="flex flex-col items-center gap-4">
                <div
                  className={`rounded-full w-6 h-6 flex items-center justify-center ${
                    i === currentStep ? "bg-gray-400" : "bg-gray-200"
                  }
                  ${i < currentStep ? "bg-[rgb(255, 257, 256)]" : ""}`}
                >
                  {i < currentStep && (
                    <Image
                      alt="Check icon"
                      src={CheckIcon}
                      width={22}
                      height={22}
                    />
                  )}
                  <div
                    className={`rounded-full w-2 h-2 ${
                      i === currentStep ? "bg-gray-700" : ""
                    }`}
                  ></div>
                </div>
                <div key={`${step} - ${i}`} className="text-center">
                  <p className="font-semibold">{step.title}</p>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <>
        {steps.map((step, i) =>
          i === currentStep && step.component ? (
            <step.component key={`${step}-${i}`} />
          ) : null
        )}
      </>
      <div className="flex gap-8 mt-auto w-full">
        {currentStep !== 0 && (
          <Button
            className="mr-auto"
            variant="secondary"
            onClick={previousStep}
          >
            <p>{"<-"}</p>
            <p>Précèdent</p>
          </Button>
        )}
        <Button className="ml-auto bg-primary-600" onClick={nextStep}>
          <p>Suivant</p>
          <p>{"->"}</p>
        </Button>
      </div>
    </div>
  );
};

export default MultiStepForm;
