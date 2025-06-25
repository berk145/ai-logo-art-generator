import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useCallback, useState } from "react";

export function useRandomPrompt() {
  const [prompt, setPrompt] = useState<string | null>(null);

  const fetchRandomPrompt = useCallback(async () => {
    try {
      const snapshot = await getDocs(collection(db, "prompts"));
      const docs = snapshot.docs.map((doc) => doc.data().text);
      const random = docs[Math.floor(Math.random() * docs.length)];
      setPrompt(random);
    } catch (error) {
      console.error("Failed to fetch prompt:", error);
      setPrompt(null);
    }
  }, []);

  return {
    prompt,
    fetchRandomPrompt,
  };
}
