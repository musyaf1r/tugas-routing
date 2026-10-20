import Image from "next/image"
import Link from "next/link"
import { daftarKisah, formatTanggal } from "@/app/lib/isine/mykisah"

const Cerita = () => {
  return (
    <section className="flex-1 px-10 py-12">
      <h1 className="text-4xl font-semibold text-black dark:text-white">
        My Kisah
      </h1>
      <p className="mt-2 text-gray-500">Kumpulan sinopsis anime romance.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {daftarKisah.map((k) => (
          <article
            key={k.id}
            className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900"
          >
            <div className="relative h-48 w-full">
              <Image
                src={k.gambar}
                alt={k.judul}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h2 className="text-lg font-semibold text-black dark:text-white">
                {k.judul}
              </h2>
              <time dateTime={k.tanggal} className="text-xs text-gray-500">
                {formatTanggal(k.tanggal)}
              </time>
              <p className="flex-1 text-sm text-gray-600 dark:text-gray-400">
                {k.cuplikan}
              </p>
              <Link
                href={`/isicerita/${k.id}`}
                className="mt-2 inline-flex w-fit items-center rounded-lg bg-black px-4 py-2 text-sm text-white hover:opacity-80 dark:bg-white dark:text-black"
              >
                Baca
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Cerita