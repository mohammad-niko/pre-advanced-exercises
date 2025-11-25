import { useForm, FormProvider } from "react-hook-form";
import hrSchema from "./hrSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Outlet } from "react-router";

export default function MultiStepHRForm() {
  const methods = useForm({
    resolver: zodResolver(hrSchema),
    defaultValues: {
      personal: {
        firstName: "",
        lastName: "",
        nationalCode: "",
        birthDate: null,
        gender: "",
      },
      job: {
        jobTitle: "",
        department: "",
        employeeType: "",
        startDate: null,
      },
      address: {
        city: "",
        street: "",
        postalCode: "",
      },
      skills: [],
      documents: [],
    },
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <Outlet />
    </FormProvider>
  );
}
