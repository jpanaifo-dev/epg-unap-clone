'use client'

import { Spinner } from '@nextui-org/react'

export default function loading () {
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-screen">
        <Spinner label="Loading..." color="primary" size='lg' />
    </div>
  )
}
