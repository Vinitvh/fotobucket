import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            layout
            whileHover={{ opacity: 1 }}
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="Uploaded Pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ dealy: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}
export default ImageGrid;
