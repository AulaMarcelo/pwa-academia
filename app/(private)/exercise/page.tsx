"use client"
import React, { useEffect, useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card } from '@/components/ui/card';
import { Dumbbell, FileDown, ListRestart, Repeat2 } from 'lucide-react';
import YouTube, { YouTubeProps } from "react-youtube"; 

import {
     Dialog,
     DialogContent,
     DialogDescription,
     DialogHeader,
     DialogTitle,
     DialogTrigger,
   } from "@/components/ui/dialog"


   import {
     AlertDialog,
     AlertDialogAction,
     AlertDialogCancel,
     AlertDialogContent,
     AlertDialogDescription,
     AlertDialogFooter,
     AlertDialogHeader,
     AlertDialogTitle,
     AlertDialogTrigger,
   } from "@/components/ui/alert-dialog"
   

   

export default function Exercise(){
    const [date, setDate] = useState<Date | undefined>(new Date())
    useEffect(() =>{
        console.log(date)
    },[date])
    const id = 'sqOw2Y6uDWQ'
//     const id = null

    function VideoYoutube(id:string) {
     const onPlayerReady: YouTubeProps['onReady'] = (event) => {
       // access to player in all event handlers via event.target
       event.target.pauseVideo();
     }
   
     const opts: YouTubeProps['opts'] = {
       height: '218',
       width: '320',
       playerVars: {
         // https://developers.google.com/youtube/player_parameters
         autoplay: 1,
       },
     };
   
     return <YouTube videoId={id} opts={opts} onReady={onPlayerReady} />;
   }
    return (
      
               <div className='flex flex-col items-center justify-center mt-9 ml-2 mr-2 gap-4 mb-28'>
                    <h1 className='font-bold text-xl'>  Módulo:Força </h1>
                    <h1 className='font-bold text-xl mb-4'>  Treino A</h1>
                    
            
                
                    <Card className='p-8 w-full md:w-[600px]'>
                         <div className='flex  justify-center items-center'>
                         
                              <h1 className='font-semibold text-center mb-4 text-2xl'>Supino reto com barra</h1>
                              
                         </div>
                         <div className='flex  justify-center items-center'>
                              <Repeat2 />
                              <h1 className='ml-2'>12 Reps</h1>
                              <Dumbbell size={20 } className='ml-4'/>
                              <h1 className='ml-2'>10 kg</h1>
                              <ListRestart size={20 } className='ml-4'/>
                              <h1 className='ml-2'>10 Sets</h1>
                             
                              
                         </div>
                         
                         <div className='flex items-center justify-center mt-4'>
                         {/* sqOw2Y6uDWQ */}
                         {id? VideoYoutube(id) : <img src="/images/imgpadraoexercisio.jpg" alt="" className='w-[340px] h-[240px]'/>}
                         
                         </div>

                         <div className='flex  justify-center items-center mt-4 hover:animate-bounce'>
                       
   
                              <Dialog>
                                   <DialogTrigger> 
                                        <div className='flex gap-3 hover:animate-bounce text-purple-600 hover:text-red-900'>
                                        <FileDown  className=' text-purple-600 hover:text-red-900' /> Descrição
                                        </div>
                                   </DialogTrigger>
                                        
                                   <DialogContent className="flex me-4">
                                             <DialogHeader>
                                                  <DialogTitle>Supino reto com barra</DialogTitle>
                                                  <DialogDescription>
                                                  This action cannot be undone. This will permanently delete your account
                                                  and remove your data from our servers.
                                                  </DialogDescription>
                                             </DialogHeader>
                                   </DialogContent>
                              </Dialog>
                              
                             
                             
                              
                         </div>
                    
                    </Card>

                    <Card className='p-8 w-full md:w-[600px]'>
                         <div className='flex  justify-center items-center'>
                         
                              <h1 className='font-semibold text-center mb-4 text-2xl'>Supino reto com barra</h1>
                              
                         </div>
                         <div className='flex  justify-center items-center'>
                              <Repeat2 />
                              <h1 className='ml-2'>12 Reps</h1>
                              <Dumbbell size={20 } className='ml-4'/>
                              <h1 className='ml-2'>10 kg</h1>
                              <ListRestart size={20 } className='ml-4'/>
                              <h1 className='ml-2'>10 Sets</h1>
                             
                              
                         </div>
                         
                         <div className='flex items-center justify-center mt-4'>
                         {/* sqOw2Y6uDWQ */}
                         {id? VideoYoutube(id) : <img src="/images/imgpadraoexercisio.jpg" alt="" className='w-[340px] h-[240px]'/>}
                         
                         </div>

                         <div className='flex  justify-center items-center mt-4 hover:animate-bounce'>
                       
   
                              <Dialog>
                                   <DialogTrigger> 
                                        <div className='flex gap-3 hover:animate-bounce text-purple-600 hover:text-red-900'>
                                        <FileDown  className=' text-purple-600 hover:text-red-900' /> Descrição
                                        </div>
                                   </DialogTrigger>
                                        
                                   <DialogContent className="flex me-4">
                                             <DialogHeader>
                                                  <DialogTitle>Supino reto com barra</DialogTitle>
                                                  <DialogDescription>
                                                  This action cannot be undone. This will permanently delete your account
                                                  and remove your data from our servers.
                                                  </DialogDescription>
                                             </DialogHeader>
                                   </DialogContent>
                              </Dialog>
                              
                             
                             
                              
                         </div>
                    
                    </Card>

                    <Card className='p-8 w-full md:w-[600px]'>
                         <div className='flex  justify-center items-center'>
                         
                              <h1 className='font-semibold text-center mb-4 text-2xl'>Supino reto com barra</h1>
                              
                         </div>
                         <div className='flex  justify-center items-center'>
                              <Repeat2 />
                              <h1 className='ml-2'>12 Reps</h1>
                              <Dumbbell size={20 } className='ml-4'/>
                              <h1 className='ml-2'>10 kg</h1>
                              <ListRestart size={20 } className='ml-4'/>
                              <h1 className='ml-2'>10 Sets</h1>
                             
                              
                         </div>
                         
                         <div className='flex items-center justify-center mt-4'>
                         {/* sqOw2Y6uDWQ */}
                         {id? VideoYoutube(id) : <img src="/images/imgpadraoexercisio.jpg" alt="" className='w-[340px] h-[240px]'/>}
                         
                         </div>

                         <div className='flex  justify-center items-center mt-4 hover:animate-bounce'>
                       
   
                              <Dialog>
                                   <DialogTrigger> 
                                        <div className='flex gap-3 hover:animate-bounce text-purple-600 hover:text-red-900'>
                                        <FileDown  className=' text-purple-600 hover:text-red-900' /> Descrição
                                        </div>
                                   </DialogTrigger>
                                        
                                   <DialogContent className="flex me-4">
                                             <DialogHeader>
                                                  <DialogTitle>Supino reto com barra</DialogTitle>
                                                  <DialogDescription>
                                                  This action cannot be undone. This will permanently delete your account
                                                  and remove your data from our servers.
                                                  </DialogDescription>
                                             </DialogHeader>
                                   </DialogContent>
                              </Dialog>
                              
                             
                             
                              
                         </div>
                    
                    </Card>

                    <Card className='p-8 w-full md:w-[600px]'>
                         <div className='flex  justify-center items-center'>
                         
                              <h1 className='font-semibold text-center mb-4 text-2xl'>Supino reto com barra</h1>
                              
                         </div>
                         <div className='flex  justify-center items-center'>
                              <Repeat2 />
                              <h1 className='ml-2'>12 Reps</h1>
                              <Dumbbell size={20 } className='ml-4'/>
                              <h1 className='ml-2'>10 kg</h1>
                              <ListRestart size={20 } className='ml-4'/>
                              <h1 className='ml-2'>10 Sets</h1>
                             
                              
                         </div>
                         
                         <div className='flex items-center justify-center mt-4'>
                         {/* sqOw2Y6uDWQ */}
                         {id? VideoYoutube(id) : <img src="/images/imgpadraoexercisio.jpg" alt="" className='w-[340px] h-[240px]'/>}
                         
                         </div>

                         <div className='flex  justify-center items-center mt-4 hover:animate-bounce'>
                       
   
                              <Dialog>
                                   <DialogTrigger> 
                                        <div className='flex gap-3 hover:animate-bounce text-purple-600 hover:text-red-900'>
                                        <FileDown  className=' text-purple-600 hover:text-red-900' /> Descrição
                                        </div>
                                   </DialogTrigger>
                                        
                                   <DialogContent className="flex me-4">
                                             <DialogHeader>
                                                  <DialogTitle>Supino reto com barra</DialogTitle>
                                                  <DialogDescription>
                                                  This action cannot be undone. This will permanently delete your account
                                                  and remove your data from our servers.
                                                  </DialogDescription>
                                             </DialogHeader>
                                   </DialogContent>
                              </Dialog>
                              
                             
                             
                              
                         </div>
                    
                    </Card>

                    <Card className='p-8 w-full md:w-[600px]'>
                         <div className='flex  justify-center items-center'>
                         
                              <h1 className='font-semibold text-center mb-4 text-2xl'>Supino reto com barra</h1>
                              
                         </div>
                         <div className='flex  justify-center items-center'>
                              <Repeat2 />
                              <h1 className='ml-2'>12 Reps</h1>
                              <Dumbbell size={20 } className='ml-4'/>
                              <h1 className='ml-2'>10 kg</h1>
                              <ListRestart size={20 } className='ml-4'/>
                              <h1 className='ml-2'>10 Sets</h1>
                             
                              
                         </div>
                         
                         <div className='flex items-center justify-center mt-4'>
                         {/* sqOw2Y6uDWQ */}
                         {id? VideoYoutube(id) : <img src="/images/imgpadraoexercisio.jpg" alt="" className='w-[340px] h-[240px]'/>}
                         
                         </div>

                         <div className='flex  justify-center items-center mt-4 hover:animate-bounce'>
                       
   
                              <Dialog>
                                   <DialogTrigger> 
                                        <div className='flex gap-3 hover:animate-bounce text-purple-600 hover:text-red-900'>
                                        <FileDown  className=' text-purple-600 hover:text-red-900' /> Descrição
                                        </div>
                                   </DialogTrigger>
                                        
                                   <DialogContent className="flex me-4">
                                             <DialogHeader>
                                                  <DialogTitle>Supino reto com barra</DialogTitle>
                                                  <DialogDescription>
                                                  This action cannot be undone. This will permanently delete your account
                                                  and remove your data from our servers.
                                                  </DialogDescription>
                                             </DialogHeader>
                                   </DialogContent>
                              </Dialog>
                              
                             
                             
                              
                         </div>
                    
                    </Card>


                    <AlertDialog>
                    <AlertDialogTrigger className='shadow-md p-3 rounded-md text-xl font-semibold mt-3'>Treino Pago</AlertDialogTrigger>
                    <AlertDialogContent>
                    <AlertDialogHeader>
                         <AlertDialogTitle>Você fez todos os exercicios corretamente?</AlertDialogTitle>
                         <AlertDialogDescription>
                         Se sim pode confirmar, que sera liberado um novo treino para você na proxima vez.
                         </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                         <AlertDialogCancel>Cancelar</AlertDialogCancel>
                         <AlertDialogAction>Confirmar</AlertDialogAction>
                    </AlertDialogFooter>
                    </AlertDialogContent>
                    </AlertDialog>


                    
               </div>
       
    )
 
}