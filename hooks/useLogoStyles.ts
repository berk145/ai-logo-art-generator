import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export function useLogoStyles() {
  const [logoStylesData, setLogoStylesData] = useState<LogoStyle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStyles() {
      try {
        const snapshot = await getDocs(collection(db, "logoStyles"));
        const data = snapshot.docs.map((doc) => doc.data() as LogoStyle);
        setLogoStylesData(data.reverse());
      } catch (error) {
        console.error("Error fetching logo styles:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStyles();
  }, []);

  return { logoStylesData, loading };
}
