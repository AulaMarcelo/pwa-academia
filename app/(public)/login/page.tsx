'use client'
;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function Login(){
  const fundo = '/fundo.png';
  return(
    <div  className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full ms-8 me-8 opacity-85 md:w-[600px]">
        <h1 className="font-bold text-3xl text-center mb-12">Login</h1>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
       </div>
       <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
          <Label htmlFor="senha">Senha</Label>
          <Input id="senha" type="password" />
       </div>
       <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
        <Button variant="outline">Entrar</Button>
       </div>
      </div>
   </div>
  )
  
};