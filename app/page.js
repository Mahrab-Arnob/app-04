import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-center font-extrabold  text-6xl'>
      <h1>App 04 Home Page</h1>
      <Link href="/files/docs/tutorial" className='text-3xl text-blue-600 underline'>
        Go to File Path
      </Link>
    </div>
  )
}

export default page
