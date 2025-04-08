"use client";
import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="green-bg-and-color font-bold py-2 px-12 text-xs rounded shadow-lg hover:opacity-90 transition-opacity"
    >
      Go back
    </button>
  );
}
