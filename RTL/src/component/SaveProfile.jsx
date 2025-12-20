import { useState } from "react";

function SaveProfile({ save }) {
  const [error, setError] = useState("");

  const handleSave = async () => {
    try {
      await save();
    } catch (e) {
      setError("Something went wrong");
    }
  };

  return (
    <>
      <button onClick={handleSave}>Save</button>
      {error && <p role="alert">{error}</p>}
    </>
  );
}

export default SaveProfile;
