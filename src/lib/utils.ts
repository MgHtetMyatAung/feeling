import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNowStrict } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cutString(text: string, total: number) {
  return text.length > total ? text.slice(0, total) + " ..." : text;
}

export function getFirstLine(text: string) {
  return text.split("<%br%!!>")[0] + " ...";
}

export function formatDate(time: Date) {
  return formatDistanceToNowStrict(time, { addSuffix: true });
}
