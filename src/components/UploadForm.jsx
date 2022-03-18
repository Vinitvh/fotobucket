import { useState } from "react";
import Progress from "./Progress";

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
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <Progress file={file} setFile={setFile} />}
      </div>
    </form>
  );
}
export default UploadForm;
