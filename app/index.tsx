import { router } from "expo-router";
import "./globals.css";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    router.replace("/login");
  }, []);

  return null;
}
