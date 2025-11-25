import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";

export default function StepSummary() {
  const { handleSubmit, getValues } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Final Submit Data:", data);
    alert("Form submitted successfully!");
  };

  const handleBack = () => {
    navigate("/register/tasks");
  };

  const data = getValues(); 

  return (
    <div style={{ padding: "20px" }}>
      <h2>Summary</h2>

      <h3>Personal Info</h3>
      <p>First Name: {data.personal.firstName}</p>
      <p>Last Name: {data.personal.lastName}</p>
      <p>Age: {data.personal.age}</p>

      <h3>Address</h3>
      <p>City: {data.address.city}</p>
      <p>Postal Code: {data.address.postalCode}</p>

      <h3>Tasks</h3>
      <ul>
        {data.taskes.map((t, i) => (
          <li key={i}>{t.name}</li>
        ))}
      </ul>

      <button onClick={handleBack}>← Back</button>

      <button
        onClick={handleSubmit(onSubmit)}
        style={{ marginLeft: 10 }}
      >
        Submit Form
      </button>
    </div>
  );
}
