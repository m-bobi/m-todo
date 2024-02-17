import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/db";
import { TodoItem } from "@/components/TodoItem";
import { redirect } from "next/navigation";

async function getTodos() {
  return await prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
  redirect("..");
}

async function deleteTodo(id: string) {
  "use server";
  await prisma.todo.delete({ where: { id } });
  redirect("..");
}

async function CreateTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title!");
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("..");
}


export default async function Home() {
  const todos = getTodos();

  return (
    <>
      <header className="flex justify-between items-center">
        <Link
          href={"#"}
          className="text-1xl font-medium px-4 py-2 rounded hover:bg-slate-100 outline-none  md:block lg:block hidden"
        >
          Lists
        </Link>
        <h1 className="text-3xl font-extrabold">TODO</h1>
        <Link
          href={"#"}
          className="text-1xl font-medium px-4 py-2 rounded hover:bg-slate-100 outline-none  md:block lg:block hidden"
        >
          Settings
        </Link>
        <Link href={"#"} className="md:hidden lg:hidden block">
          <Image
            src={"assets/menu.svg"}
            width={30}
            height={30}
            alt={"menu"}
          ></Image>
        </Link>
      </header>
      <hr className="w-auto" />

      <form
        action={CreateTodo}
        className="flex gap-2 flex-col translate-y-52 sm:translate-y-52"
      >
        <input
          type="text"
          name="title"
          placeholder="Create TODO"
          className="border border-t-0 border-l-0 border-r-0 w-60 border-slate-300 bg-transparent rounded px-2 py-1 outline-none"
        />

        <div className="gap-2 flex sm:hidden">
          <button
            type="submit"
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          >
            Create{" "}
          </button>
        </div>
      </form>

      <ul className="pl-4 flex flex-col translate-y-96 md:translate-y-96 lg:translate-y-96 sm:translate-y-96 flex-wrap text-wrap">
        {(await todos).map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
