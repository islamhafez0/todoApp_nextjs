import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

async function addTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  await prisma.todo.create({ data: { title: title, complete: false } });
  redirect("/");
}

const NewTodo = () => {
  return (
    <>
      <header className="align-center justify-between mb-4 flex">
        <h2 className="text-2xl">New</h2>
      </header>
      <form action={addTodo} className="flex flex-col align-center">
        <input
          type="text"
          name="title"
          className="border border-slate-500 focus-within:border-slate-300 text-slate-300 px-2 py-1 rounded outline-none bg-slate-700 transition-all"
        />
        <div className="flex gap-1 justify-end mt-3">
          <Link
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded outline-none hover:bg-slate-700 focus-within:bg-slate-700 transition-all"
            href=".."
          >
            Cancel
          </Link>
          <button className="border border-slate-300 text-slate-300 px-2 py-1 rounded outline-none hover:bg-slate-700 focus-within:bg-slate-700 transition-all">
            create
          </button>
        </div>
      </form>
    </>
  );
};

export default NewTodo;
