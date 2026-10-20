import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getKisah, formatTanggal } from "@/app/lib/isine/mykisah"

const DetailCerita = ({ id }: { id: string }) => {
  const k = getKisah(id)
  if (!k) notFound()

  return (
    <article className="max-w-3xl flex-1 px-10 py-12">
      <Link
        href="/isicerita"
        className="text-sm text-gray-500 hover:text-black dark:hover:text-white"
      >
        ← Kembali ke My Kisah
      </Link>

      <div className="relative mt-6 h-72 w-full overflow-hidden rounded-xl">
        <Image
          src={k.gambar}
          alt={k.judul}
          fill
          priority
          sizes="768px"
          className="object-cover"
        />
      </div>

      <h1 className="mt-8 text-4xl font-semibold text-black dark:text-white">
        {k.judul}
      </h1>
      <time dateTime={k.tanggal} className="text-sm text-gray-500">
        {formatTanggal(k.tanggal)}
      </time>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-black dark:text-gray-200">
        {k.isi.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  )
}

export default DetailCerita