import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import multiSchema from "./multiSchema";
import { Outlet } from "react-router";

function MultiStepForm() {
  const methods = useForm({
    resolver: zodResolver(multiSchema),
    defaultValues: {
      personal: {
        firstName: "",
        lastName: "",
        age: "",
      },
      address: {
        city: "",
        postalCode: "",
      },
      taskes: [{ name: "" }],
    },
    mode: "onChange",
  });

  return (
    <>
      <FormProvider {...methods}>
        <Outlet />
      </FormProvider>
    </>
  );
}

export default MultiStepForm;
