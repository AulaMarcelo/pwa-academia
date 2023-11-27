"use client"
import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Card } from "./card";
import { Settings,Bell  } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"




  


const Header = () => {
    const logo  = '/logo.png';
    const components: { title: string; href: string; description: string }[] = [
        {
          title: "Alert Dialog",
          href: "/docs/primitives/alert-dialog",
          description:
            "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
          title: "Hover Card",
          href: "/docs/primitives/hover-card",
          description:
            "For sighted users to preview content available behind a link.",
        },
        {
          title: "Progress",
          href: "/docs/primitives/progress",
          description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
          title: "Scroll-area",
          href: "/docs/primitives/scroll-area",
          description: "Visually or semantically separates content.",
        },
        {
          title: "Tabs",
          href: "/docs/primitives/tabs",
          description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
          title: "Tooltip",
          href: "/docs/primitives/tooltip",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
      ]
    return ( 
        <Card className="flex justify-between items-center p-2">
        
            <Avatar>
                <AvatarImage src={logo} />
                <AvatarFallback>Logo</AvatarFallback>
            </Avatar>
            
            <div className="text-black text-center text-2xl font-bold">
                MyGym
            </div>
           <div className="flex items-center justify-center  gap-4">

           <DropdownMenu>
                <DropdownMenuTrigger>  <Bell  color="#000" /></DropdownMenuTrigger>
                <DropdownMenuContent>
                {components.map((component) => (
                    <>
                     <DropdownMenuLabel>{component.title}</DropdownMenuLabel>
                     <DropdownMenuSeparator />
                    </>
              ))}
                   
                    
                </DropdownMenuContent>
           </DropdownMenu>
        
            <DropdownMenu>
                <DropdownMenuTrigger>  <Settings  color="#000" /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
           </DropdownMenu>
           </div>

           
          
           
        </Card>
     );
}
 
export default Header;

