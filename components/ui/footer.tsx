import {  Dumbbell, HeartPulse, Home } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t-4 border-pink-400 shadow flex items-center justify-center dark:bg-gray-800 dark:border-gray-600">
         <div className="flex items-center justify-center gap-8">
         
          <Link href="/"><Home className="hover:animate-bounce text-purple-600 hover:text-red-900" size={30} /></Link>
          <Dumbbell   className="hover:animate-bounce text-violet-600 hover:text-red-900 " size={30} />
          <HeartPulse   className="hover:animate-bounce text-violet-600 hover:text-red-900" size={30} />
        
          </div>
        </footer>
     );
}
 
export default Footer;