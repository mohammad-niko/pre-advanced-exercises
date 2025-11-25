import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";

export default function StepAddress() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();

  const navigate = useNavigate();

  const handleNext = async () => {
    const valid = await trigger("address");

    if (valid) {
      navigate("/register/tasks");
    }
  };

  const handleBack = () => {
    navigate("/register/personal");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Address Information</h2>

      <div>
        <label>City</label>
        <input {...register("address.city")} />
        {errors.address?.city && (
          <p style={{ color: "red" }}>{errors.address.city.message}</p>
        )}
      </div>

      <div>
        <label>Postal Code</label>
        <input {...register("address.postalCode")} />
        {errors.address?.postalCode && (
          <p style={{ color: "red" }}>{errors.address.postalCode.message}</p>
        )}
      </div>

      <button onClick={handleBack}>← Back</button>
      <button onClick={handleNext} style={{ marginLeft: 10 }}>
        Next →
      </button>
    </div>
  );
}
