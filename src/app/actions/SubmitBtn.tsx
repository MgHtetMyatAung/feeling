"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

function SubmitBtn({ lable, className }: { lable: string; className?: any }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className={className}>
      {pending ? "loading" : lable}
    </Button>
  );
}

export default SubmitBtn;
