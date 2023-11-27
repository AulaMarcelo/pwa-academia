"use client"
import { Card } from "@/components/ui/card";
import { BarChartHorizontal, Check, ScanText, TrendingUp, XSquare } from "lucide-react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"


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
import { useState } from "react";
  


export default function Exercise(){
   

    const [modulos,setModulos] = useState([
        {
            id:1,
            title:"Hipertrofia",
            descricao:"Foco no aumento do tamanho muscular",
            caracteristicas:"Utiliza geralmente cargas moderadas a altas com um número moderado de repetições (8-12 repetições por série).",
            Objetivo:"Estimular o crescimento muscular.",
            tempo:90,//dias
            check:true,
         },
         {
            id:2,
            title:"Força",
            descricao:"Concentra-se no aumento da força máxima.",
            caracteristicas:"Utiliza cargas mais pesadas e menos repetições (geralmente 4-6 repetições por série).",
            Objetivo:"Desenvolver a capacidade de levantar cargas mais pesadas.",
            tempo:60,//dias
            check:false,
           
         },
         {
            id:3,
            title:"Resistência",
            descricao:"Foco na resistência muscular e cardiovascular.",
            caracteristicas:"Envolvem um número elevado de repetições (mais de 12 repetições por série) com menor carga. ",
            Objetivo:"Melhorar a resistência muscular e cardiovascular.",
            tempo:40,//dias
            check:false,
         },
         {
            id:4,
            title:"Potência",
            descricao:" Foco no desenvolvimento da força explosiva.",
            caracteristicas:" Movimentos rápidos e explosivos, muitas vezes envolvendo saltos e movimentos pliométricos.",
            Objetivo:"Melhorar a capacidade de gerar força rapidamente.",
            tempo:30,//dias
            check:false,
         },
    ])

    const handleSetState = (moduleId:number) => {
        // Aqui você pode colocar a lógica para alterar o estado do módulo
        setModulos((prevModulos) =>
          prevModulos.map((modulo) =>
            modulo.id === moduleId ? { ...modulo, check: true } : { ...modulo, check: false }
          )
        );
      };
    return(
        <div className='flex flex-col items-center justify-center mt-9 ml-2 mr-2 gap-4 mb-28'>
              <h1 className='font-bold text-xl mb-4'>Módulos</h1>
            {modulos.map(modulo =>(
               <Card className="pt-5 pb-5 pe-1 ps-1 w-full md:w-[600px] ">
                <div className="flex items-center justify-center w-full mb-4  ps-5 pe-4">
                    
                        <div className="flex flex-1 items-center justify-center">
                          <h2 className="font-semibold text-center  text-2xl ">{modulo.title}</h2>
                        </div>
                        {/* <Check  className="text-green-400" /> */}
                        {/* <XSquare   className="text-red-400" /> */}
                        {modulo.check == true ?
                     
                        <Check  className="text-green-400"  />
                       
                        :
                        <AlertDialog>
                        <AlertDialogTrigger>  <XSquare className="text-red-400" /></AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Você tem certeza que deseja alterar o modulo {modulo.title}?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Isso vai restetar todos seus treinos e começar outros treinos
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleSetState(modulo.id)}>Confirmar</AlertDialogAction>
                                </AlertDialogFooter>
                        </AlertDialogContent>
                   </AlertDialog>
                       }
                       
                       

                        
                        
                        
                </div>
                <div className='flex  justify-center items-center gap-5 flex-wrap '>
                        <div  className="flex  gap-1  hover:animate-bounce hover:text-red-900 ">
                                <Dialog>
                                    <DialogTrigger> 
                                            <div className='flex gap-3 hover:animate-bounce hover:text-red-900'>
                                            <BarChartHorizontal  className=' hover:text-red-900' /> Desc
                                            </div>
                                    </DialogTrigger>
                                            
                                    <DialogContent className="flex me-4">
                                                <DialogHeader>
                                                    <DialogTitle>Descrição</DialogTitle>
                                                    <DialogDescription>
                                                     {modulo.descricao}
                                                    </DialogDescription>
                                                </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                        </div>

                        <div  className="flex gap-1 hover:animate-bounce hover:text-red-900">
                            
                                <Dialog>
                                    <DialogTrigger> 
                                            <div className='flex gap-3 hover:animate-bounce hover:text-red-900'>
                                            <ScanText  className=' hover:text-red-900' /> Carac
                                            </div>
                                    </DialogTrigger>
                                            
                                    <DialogContent className="flex me-4">
                                                <DialogHeader>
                                                    <DialogTitle>Características</DialogTitle>
                                                    <DialogDescription>
                                                      <p>{modulo.caracteristicas}</p>
                                                      <p>Duração: {modulo.tempo} Dias</p>
                                                    </DialogDescription>
                                                </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                        </div>

                        <div  className="flex gap-2 hover:animate-bounce hover:text-red-900">

                                <Dialog>
                                    <DialogTrigger> 
                                            <div className='flex gap-3 hover:animate-bounce hover:text-red-900'>
                                            <TrendingUp  className=' hover:text-red-900' /> Obj
                                            </div>
                                    </DialogTrigger>
                                            
                                    <DialogContent className="flex me-4">
                                                <DialogHeader>
                                                    <DialogTitle>Objetivo</DialogTitle>
                                                    <DialogDescription>
                                                       {modulo.Objetivo}
                                                    </DialogDescription>
                                                </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                        </div>
                                
                                
                    </div>

               </Card>
            ))
            }
          
        </div>
    )
}