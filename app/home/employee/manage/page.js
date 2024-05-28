import ListData from '@/app/components/(Home)/ListData'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full p-3 py-5 flex flex-col gap-5 justify-center items-center'>
        <h1 className='text-slate-900 text-5xl font-semibold w-full '>Employee Data</h1>
    <ListData/></div>
  )
}

export default page