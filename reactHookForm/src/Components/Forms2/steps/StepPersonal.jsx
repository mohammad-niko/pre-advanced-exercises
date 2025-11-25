import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";

export default function StepPersonal() {
  const {
    trigger,
    register,
    formState: { errors },
  } = useFormContext();
  const navigate = useNavigate();

  const handleNext = async () => {
    const valid = await trigger("personal");
    if (valid) navigate("/register/address");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Personal Information</h2>

      <div>
        <label>First Name</label>
        <input {...register("personal.firstName")} />
        {errors.personal?.firstName && (
          <p style={{ color: "red" }}>{errors.personal.firstName.message}</p>
        )}
      </div>

      <div>
        <label>Last Name</label>
        <input {...register("personal.lastName")} />
        {errors.personal?.lastName && (
          <p style={{ color: "red" }}>{errors.personal.lastName.message}</p>
        )}
      </div>

      <div>
        <label>Age</label>
        <input {...register("personal.age")} />
        {errors.personal?.age && (
          <p style={{ color: "red" }}>{errors.personal.age.message}</p>
        )}
      </div>

      <button onClick={handleNext}>Next →</button>
    </div>
  );
}
