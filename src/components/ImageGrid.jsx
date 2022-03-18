import useFirestore from "../hooks/useFirestore";

function ImageGrid() {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div className="img-wrap" key={doc.id}>
            <img src={doc.url} alt="Uploaded Pic" />
          </div>
        ))}
    </div>
  );
}
export default ImageGrid;
