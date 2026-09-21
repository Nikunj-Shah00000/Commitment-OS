"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-3">
  <h1 className="text-4xl font-bold">CommitmentOS</h1>

  <p className="text-lg text-zinc-400">
    Turn spoken commitments into actions into reality.
  </p>

  <p className="max-w-md text-center text-zinc-400">
    AI listens to conversations, detects real commitments, and turns them into actionable tasks.
  </p>

  <button className="mt-4 rounded-lg bg-white px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-zinc-200">
    Start a conversation
  </button>
</main>
    </div>
  );
}
