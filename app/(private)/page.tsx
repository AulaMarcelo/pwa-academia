
import { Card } from '@/components/ui/card'

import Link from 'next/link'

export default function Home() {
  return (
      
       <div className='flex items-center justify-center flex-col '>
          <div className='flex items-center justify-center mt-10 md:mt-14'>
          <img src="/images/fit.png" alt=""  />
          </div>
          <div className='grid grid-rows-2 grid-cols-2 md:w-[600px] md:mt-12 gap-8 mt-6 ps-4 pe-4 pt-4 pb-1 flex-1  w-full'>

          
          <Card className='h-20 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-400'>
          <Link href="/exercise" className='text-zinc-50 font-bold text-xl'>Treino</Link>
          </Card>
          <Card className='h-20 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-400'> 
          <Link href="/modulos" className='text-zinc-50 font-bold text-xl'>Modulos</Link>
          </Card>

          <Card className='h-20 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-400'>
            <h1 className='text-zinc-50 font-bold text-xl'>Historico</h1>
          </Card >

          <Card className='h-20 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-400'>
            <Link href="/perfil" className='text-zinc-50 font-bold text-xl'>Perfil</Link>
          </Card>
          </div>
      </div>
     
   
  )
}
