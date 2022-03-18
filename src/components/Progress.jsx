import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

function Progress({ file, setFile }) {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
}
export default Progress;
