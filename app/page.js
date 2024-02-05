import Image from "next/image";
import { getSortedPostsData } from "./lib/posts";
import Link from "next/link";
import 'tailwindcss/tailwind.css';

function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="grid grid-cols-2 gap-4">
      {allPostsData.map((post) => (
        <Link
          href={`/blog/${post.id}`}
          key={post.id}
          className="bg-slate-20 rounded-lg border-2 border-gray p-4"
        >
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-500">{post.date}</p>
        </Link>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <div className="absolute top-0 left-0 right-0 text-center mt-10 z-10">
        <h1 className="text-4xl font-medium italic text-black">Paddy's Blog</h1>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative border-pink rounded-full"
          src="/WhatsApp Image Phindile.jpg"
          alt="Your Image Alt Text"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Welcome To My Space</code>
        </p>
        <div className="fixed font-medium leading-light bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <span
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            managed by Paddy
          </span>
        </div>
      </div>

      <BlogPage />
    </main>
  );
}
