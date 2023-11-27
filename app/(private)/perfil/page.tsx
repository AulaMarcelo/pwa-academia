"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Input } from "@/components/ui/input"

const formSchema = z.object({

  sexo: z.string({
    required_error: "Por favor selecione um sexo.",
  }),

  natividade: z.string({
    required_error: "Atividade é obrigatorio",
    invalid_type_error: "Atividade tem que ser um numero",
  }),

  peso: z.coerce.number({
    required_error: "Peso é obrigatorio",
    invalid_type_error: "Peso tem que ser um numero",
  }),

  altura: z.coerce.number({
    required_error: "Altura é obrigatorio",
    invalid_type_error: "Altura tem que ser um numero",
  }),

  datanasc: z.string({
    required_error: "Data Nascimento é obrigatorio",
    invalid_type_error: "Data Nascimetno tem que ser um numero",
  }),


})

export default function Perfil() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
         
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
       
        console.log(values)
      }
    

  return (
    <div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col  mt-9  gap-2">
        
      <FormField
          control={form.control}
          name="sexo"
          render={({ field }) => (
            <FormItem className="ps-12 pe-12 mb-3">
              <FormLabel>Sexo</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o sexo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m">Masculino</SelectItem>
                  <SelectItem value="f">Feminino</SelectItem>
                  
                </SelectContent>
              </Select>
              <FormDescription>
                 Esse campo é um definição biologica
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="natividade"
          render={({ field }) => (
            <FormItem className="ps-12 pe-12 mb-3">
              <FormLabel>Nivel de Atividade</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o nivel de atividade" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="s">Sedentario</SelectItem>
                  <SelectItem value="l">Levemente Ativo</SelectItem>
                  <SelectItem value="m">Moderadamente Ativo</SelectItem>
                  <SelectItem value="a">Altamente Ativo</SelectItem>
                  <SelectItem value="e">Extremamente Ativo</SelectItem>
                  
                </SelectContent>
              </Select>
              <FormDescription>
                 Esse campo é um definição biologica
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="peso"

          render={({ field }) => (
            <>
            <FormItem className=" ps-12 pe-12 mb-4" >
              <FormLabel>Peso</FormLabel>
              <FormControl>
                <Input placeholder="peso" type="number" {...field}   />
              </FormControl>
              <FormDescription>
                Digite seu Peso
              </FormDescription>
              <FormMessage />
            </FormItem>


            
            </>


          )}
        />

        <FormField
          control={form.control}
          name="altura"

          render={({ field }) => (
            <>
            <FormItem className=" ps-12 pe-12 mb-4" >
              <FormLabel>Altura</FormLabel>
              <FormControl>
                <Input placeholder="altura" type="number" {...field}   />
              </FormControl>
              <FormDescription>
                Digite seu Peso
              </FormDescription>
              <FormMessage />
            </FormItem>


            
            </>


          )}
        />

        <FormField
          control={form.control}
          name="datanasc"

          render={({ field }) => (
            <>
            <FormItem className=" ps-12 pe-12 mb-4" >
              <FormLabel>Data Nascimento</FormLabel>
              <FormControl>
                <Input placeholder="altura" type="date" {...field}   />
              </FormControl>
              <FormDescription>
                Digite sua data nascimento
              </FormDescription>
              <FormMessage />
            </FormItem>


            
            </>


          )}
        />


        <div className="flex items-center justify-center mt-6 mb-28">
         <Button  type="submit">Submit</Button>
        </div>
      </form>
    </Form>
    </div>
  )
}
