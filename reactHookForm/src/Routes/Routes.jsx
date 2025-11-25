import MultiStepForm from "../Components/Forms2/MultiStepForm.jsx";
import StepAddress from "../Components/Forms2/steps/StepAddress.jsx";
import StepPersonal from "../Components/Forms2/steps/StepPersonal.jsx";
import StepSummray from "../Components/Forms2/steps/StepSummray.jsx";
import StepTasks from "../Components/Forms2/steps/StepTasks.jsx";
import PersonalStep from "../Components/HRForm/HRSteps/PersonalStep.jsx";
import MultiStepHRForm from "../Components/HRForm/MultiStepHRForm.jsx";

export const routes = [
  {
    path: "/register",
    element: <MultiStepForm />,
    children: [
      { path: "address", element: <StepAddress /> },
      { path: "personal", element: <StepPersonal /> },
      { path: "summary", element: <StepSummray /> },
      { path: "tasks", element: <StepTasks /> },
    ],
  },
    {
      path: "/hr",
      element: <MultiStepHRForm />,
      children: [
          { path: "personal", element: <PersonalStep /> },
  
      ],
    },
];
