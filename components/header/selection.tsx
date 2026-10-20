import Link from "next/link"

const Selection = () => {
  return (
    <aside className="w-64 shrink-0 px-8 py-12">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="rounded-lg bg-black px-6 py-3 text-center text-lg text-white hover:opacity-80 dark:bg-white dark:text-black"
        >
          Home
        </Link>
        <Link
          href="/isicerita"
          className="rounded-lg border px-6 py-3 text-center text-lg text-black hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-800"
        >
          My Kisah
        </Link>
      </nav>
    </aside>
  )
}

export default Selection