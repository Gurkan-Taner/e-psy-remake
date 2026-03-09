"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import React from "react";

import { UserState } from "@/hooks/use-chat";
import FirstStep from "./first-step";
import SecondStep from "./second-step";
import LastStep from "./last-step";
import { Button } from "@/components/ui/button";
import CheckIcon from "@/public/icons/check.svg";

const STEPS = [
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
] as const;

const LAST_FORM_STEP = STEPS.length - 2;

interface MultiStepFormProps {
  userState: UserState;
  joinChat: () => void;
  setMode: (mode: string) => void;
  setTherapieSubject: (subject: string) => void;
  setListenerSubject: (updateFn: (prev: string[]) => string[]) => void;
}

const MultiStepForm = ({
  userState,
  joinChat,
  setMode,
  setTherapieSubject,
  setListenerSubject,
}: MultiStepFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = useCallback(() => {
    if (currentStep === LAST_FORM_STEP) joinChat();
    setCurrentStep((prev) => prev + 1);
  }, [currentStep, joinChat]);

  const previousStep = useCallback(() => {
    setCurrentStep((prev) => prev - 1);
  }, []);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === STEPS.length - 1;
  const isJoinStep = currentStep === LAST_FORM_STEP;

  const CurrentStepComponent = STEPS[currentStep].component;

  const stepProps = {
    userState,
    setMode,
    setTherapieSubject,
    setListenerSubject,
  };

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-12 h-full">
      <div className="hidden sm:flex w-full justify-around gap-4">
        {STEPS.map((step, i) => {
          const isActive = i === currentStep;
          const isDone = i < currentStep;
          return (
            <div key={step.title} className="flex">
              <div className="flex flex-col items-center gap-4">
                <div
                  className={`rounded-full w-6 h-6 flex items-center justify-center transition-colors ${
                    isDone
                      ? "bg-[rgb(255,257,256)]"
                      : isActive
                        ? "bg-gray-400"
                        : "bg-gray-200"
                  }`}
                >
                  {isDone ? (
                    <Image
                      alt="Étape complétée"
                      className="ml-[1px]"
                      src={CheckIcon}
                      width={28}
                      height={28}
                    />
                  ) : (
                    <div
                      className={`rounded-full w-2 h-2 ${isActive ? "bg-gray-700" : ""}`}
                    />
                  )}
                </div>
                <div className="flex flex-col items-center text-center">
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-sm w-[90%]">{step.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="sm:hidden text-center font-semibold">
        Étape {currentStep + 1} / {STEPS.length}
      </p>

      <CurrentStepComponent {...stepProps} />

      <div className="flex gap-8 mt-auto w-full">
        {!isFirstStep && (
          <Button
            className="mr-auto bg-gray-100"
            variant="secondary"
            onClick={previousStep}
          >
            <span>{"<-"}</span>
            <span>Précédent</span>
          </Button>
        )}
        {!isLastStep && (
          <Button className="ml-auto bg-primary-600" onClick={nextStep}>
            <span>{isJoinStep ? "Rejoindre" : "Suivant"}</span>
            <span>{"->"}</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;

