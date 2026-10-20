import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

const Selection = () => {
  return (
    <div className="my-50 pl-25">
        <div className="flex flex-col text-black dark:text-white px-10 space-y-5">
            <Link href={"/"}>
            <Button  size="lg" className="text-2xl px-10 py-6">home</Button>
            </Link>
            <Link href={"/isicerita"}>
            <Button  variant={"outline"}size="lg" className="text-2xl px-10 py-6">My Kisah</Button>
            </Link>
        </div>
    </div>
  )
}

export default Selection