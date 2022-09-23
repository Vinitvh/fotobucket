import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { onSnapshot, orderBy, query, collection } from "@firebase/firestore";

const useFirestore = (collections) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const collectionRef = collection(projectFirestore, collections);
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, [collections]);
  return { docs };
};

export default useFirestore;
