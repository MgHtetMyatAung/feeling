"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

function SubmitBtn({ lable }: { lable: string }) {
  const { pending } = useFormStatus();
  return <Button type="submit">{pending ? "loading" : lable}</Button>;
}

export default SubmitBtn;
