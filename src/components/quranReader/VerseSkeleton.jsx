import React from 'react'
import Skeleton from '../Skeleton/Skeleton'

const VerseSkeleton = () => {
  return (
    <>
        <div className='flex justify-between py-3 md:flex-row flex-col'>
            <div className='flex md:flex-col flex-row items-center mb-4'>
                <div className='relative grid place-items-center h-9 w-9 md:h-12 md:w-12'>
                    <Skeleton color='gray' className="h-8 w-8"/>
                </div>
                <div className='md:mt-3 md:ml-0 ml-2  flex md:flex-col flex-row items-center justify-between w-full md:w-fit'>
                    <div className='flex md:flex-col gap-3'>
                        <Skeleton color='gray' className='h-7 w-7'/>
                        <Skeleton color='gray' className='h-7 w-7'/>
                        <Skeleton color='gray' className='h-7 w-7'/>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[92%] flex flex-col gap-2'>
                <Skeleton color='gray' className="h-14 w-5/6 ml-auto"/>
                <Skeleton color='gray' className="h-7 w-3/4"/>
            </div>
        </div>
        <hr  className='border-none my-3 lg:my-5 h-[1px] bg-emerald-500'/>
    </>
  )
}

export default VerseSkeleton