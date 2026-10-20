import { Button } from '@/components/ui/button'
import React from 'react'

const navbars = () => {
  return (
  <div className='flex justify-between items-center p-5 bg-white dark:bg-black shadow-md rounded-lg'>
    <div className="text-2xl  text-black dark:text-white">
      Mykisah.scrt
    </div>
    <div className="space-x-4">
      <Button variant={"outline"}  size="lg" className="px-5 py-5">sign-in</Button>
      <Button  size="lg" className="px-5 py-5">Log-in</Button>
    </div>
  </div>
  )
}

export default navbars