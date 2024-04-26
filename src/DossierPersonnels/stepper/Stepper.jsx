import  { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";

// Importez vos formulaires ici
import AdminInfoForm from "../../compenents/forms/AdminInfoForm"
import AffectationInfoForm from "../../compenents/forms/AffectationInfoForm";
import DiplomeInfoForm from "../../compenents/forms/DiplomeInfoForm";
import FamilyInfoForm from "../../compenents/forms/FamilyInfoForm";
import MouvementInfoForm from "../../compenents/forms/MouvementInfoForm";
import NotationInfoForm from "../../compenents/forms/NotationInfoForm";
import PersonalInfoForm from "../../compenents/forms/PersonalInfoForm";
import PrevoyanceSocialeForm from "../../compenents/forms/PrevoyenceSocialleForm"
const Stepper = () => {
 const steps = ["AdminInfo", "AffectationInfo", "DiplomeInfo", "FamilyInfo","MouvementInfo","NotationInfo","PersonalInfo","PrevoyenceSocialle"];
 const [currentStep, setCurrentStep] = useState(1);
 const [complete, setComplete] = useState(false);

 const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <AdminInfoForm />;
      case 2:
        return <AffectationInfoForm />;
      case 3:
        return <DiplomeInfoForm />;
      case 4:
        return <FamilyInfoForm />;
      case 5:
        return <MouvementInfoForm />;
      case 6:
        return <NotationInfoForm />;
      case 7:
        return <PersonalInfoForm />;
      case 8:
        return <PrevoyanceSocialeForm />;
      default:
        return null;
    }
 };

 return (
    <div className="flex flex-col gap-10 h-screen ">
     <div className="flex justify-between items-center max-w m-auto ">
 

        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      <div>
 {renderForm()}
 <div className="flex items-center justify-center mb-24 space-x-8">
    
      <button
        className="btn btn-previous"
        onClick={() => {
          currentStep > 1 ? setCurrentStep((prev) => prev - 1) : null;
        }}
        disabled={currentStep === 1}
      >
        Previous
      </button>
    
      {!complete && (
        <button
          className={`btn btn-next ${currentStep === steps.length ? "btn-finish" : ""}`}
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
    </div>
 </div>
</div>

 );
};

export default Stepper;