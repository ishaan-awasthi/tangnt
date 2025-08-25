"use client";
import Image from "next/image";
import cortextemp from "@/assets/cortextemp.png";

export default function CortexPage() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-light-main dark:text-dark-main text-center">
        <h1 className="text-2xl font-bold mb-4">Cortex</h1>
        <Image src={cortextemp} alt="Cortex visualization" width={400} height={300} />
      </div>
    </div>
  );
}
