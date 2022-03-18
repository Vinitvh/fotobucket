import { useState } from "react";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please upload an image (png or jpeg)");
    }
  };

  return (
    <form>
      <input type="file" onChange={handleChange} />
      {error && <div className="error">{error}</div>}
      {file && <div>{file.name}</div>}
    </form>
  );
}
export default UploadForm;
