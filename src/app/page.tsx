import { ListItem } from "@/components/ListItem";
import { prisma } from "@/db";
import Link from "next/link";

const getTodo = () => {
  return prisma.todo.findMany();
};
const toggleChecked = async (id: string, complete: boolean) => {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
};
export default async function Home() {
  const todos = await getTodo();
  console.log(todos);
  return (
    <>
      <header className="align-center justify-between mb-4 flex">
        <h2 className="text-2xl">Todos</h2>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded outline-none hover:bg-slate-700 focus-within:bg-slate-700 transition-all"
          href="newTodo"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => {
          return (
            <ListItem key={todo.id} {...todo} toggleChecked={toggleChecked} />
          );
        })}
      </ul>
    </>
  );
}
