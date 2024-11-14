"use client";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  function getMessageFromBackend() {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .catch((error) => console.error("Error fetching message:", error))
      .then((data) => setMessage(`${data.message}`));
  }

  return (
    <>
      <h1>Message from backend: {message}</h1>
      <button
        onClick={getMessageFromBackend}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Get Message
      </button>
    </>
  );
}
