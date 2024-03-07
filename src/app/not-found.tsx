'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function NotFound () {
  const router = useRouter()

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-5'>
        <h1 className='text-9xl font-bold'>404</h1>
        <p className='text-2xl font-medium'>Page not found</p>
        <p>La página que estás buscando no existe o no está disponible.</p>
        <Button onClick={ () => {
          router.back()
        } }>Volver a un lugar seguro</Button>
    </div>
  )
}
