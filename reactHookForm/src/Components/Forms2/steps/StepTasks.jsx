import { useFieldArray, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";

export default function StepTasks() {
  const {
    control,
    register,
    trigger,
    formState: { errors }
  } = useFormContext();

  const navigate = useNavigate();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "taskes"
  });

  const handleNext = async () => {
    const valid = await trigger("taskes");
    if (valid) {
      navigate("/register/summary");
    }
  };

  const handleBack = () => {
    navigate("/register/address");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tasks</h2>

      {fields.map((field, index) => (
        <div key={field.id} style={{ marginBottom: 15 }}>
          <input
            {...register(`taskes.${index}.name`)}
            placeholder={`Task #${index + 1}`}
          />

          {errors.taskes?.[index]?.name && (
            <p style={{ color: "red" }}>
              {errors.taskes[index].name.message}
            </p>
          )}

          <button
            type="button"
            onClick={() => remove(index)}
            style={{ marginLeft: 10 }}
          >
            Delete
          </button>
        </div>
      ))}

      <button type="button" onClick={() => append({ name: "" })}>
        + Add Task
      </button>

      <div style={{ marginTop: 20 }}>
        <button onClick={handleBack}>← Back</button>
        <button onClick={handleNext} style={{ marginLeft: 10 }}>
          Next →
        </button>
      </div>
    </div>
  );
}
