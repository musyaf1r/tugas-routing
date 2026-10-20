import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="w-full bottom-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-10 bg-black dark:bg-black shadow-md rounded-t-lg text-white">
            <div>
                <h2 className="text-xl font-semibold">Mykisah.scrt</h2>
                <p className="text-sm text-gray-400 mt-2 max-w-xs">
                    Tempat menulis dan berbagi cerita dengan mudah, kapan saja, di mana saja.
                </p>
                </div>
            <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Navigasi</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                    <li><Link href="/" className="hover:text-white">Home</Link></li>
                    <li><Link href="/isicerita" className="hover:text-white">My Kisah</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Akun</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                    <li><Link href="/sign-in" className="hover:text-white">Sign-in</Link></li>
                    <li><Link href="/log-in" className="hover:text-white">Log-in</Link></li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer