"use client";

import { Button } from "@heroui/react";
import { useFormStatus } from "react-dom";

export default function FormButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}
