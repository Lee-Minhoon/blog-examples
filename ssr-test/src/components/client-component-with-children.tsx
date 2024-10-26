"use client";

import { useEffect } from "react";

interface ClientComponentWithChildrenProps {
  children: React.ReactNode;
}

export default function ClientComponentWithChildren({
  children,
}: ClientComponentWithChildrenProps) {
  useEffect(() => {
    console.log("Client Component mounted");
  }, []);

  return <div>Client Component With Children{children}</div>;
}
