import Link from 'next/link'
import React from 'react'
import ArrowIcon from '../src/components/icons/ArrowIcon'

const NotFound = () => {
    return (
		<div className='flex flex-col h-screen w-full items-center justify-center'>
			<h1 className='font-bold text-3xl dark:text-slate-100'>404 - Not Found</h1>
			<p className='block mt-3 dark:text-slate-100'>Data tidak ditemukan</p>	
			<Link href={"/"}>
				<div className='flex gap-2 p-2 bg-emerald-500 rounded items-center text-white mt-3'>
					<ArrowIcon className="h-5"/>
					<span>Kembali ke Home</span>
				</div>
			</Link>
		</div>
    )
}

export default NotFound