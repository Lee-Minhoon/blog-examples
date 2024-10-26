"use client";

import { useEffect } from "react";
import ServerComponent from "./server-component";

export default function ClientComponent() {
  useEffect(() => {
    console.log("Client Component mounted");
  }, []);

  return (
    <div>
      Client Component
      <ServerComponent />
    </div>
  );
}
