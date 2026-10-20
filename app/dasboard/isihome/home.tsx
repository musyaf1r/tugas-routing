import React from "react"
import Link from "next/link"

const Home = () => {
  return (
    <section className="flex flex-1 items-center justify-center px-10 py-24">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-semibold text-black dark:text-white">
          Welcome to Mykisah.scrt
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          Ini adalah website untuk menulis dan membagikan cerita. Kamu juga bisa
          membaca cerita dari orang lain dan memberi pendapat tentang cerita
          tersebut. Desainnya sederhana dan mudah digunakan, di HP maupun
          tablet. Yuk, mulai tulis ceritamu sekarang!
        </p>
        <Link
          href="/isicerita"
          className="mt-8 inline-flex items-center rounded-lg bg-black px-6 py-3 text-white hover:opacity-80 dark:bg-white dark:text-black"
        >
          Baca My Kisah
        </Link>
      </div>
    </section>
  )
}

export default Home