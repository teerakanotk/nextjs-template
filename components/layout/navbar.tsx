"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { Input } from "@/components/ui/input";
import { Menu, Search } from "lucide-react";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

export function Navbar() {
  return (
    // <header className="sticky top-0 z-50 border-b bg-background px-4">
    //   <div className="container mx-auto">
    //     <div className="flex h-14 items-center gap-2 md:gap-4">
    //       <div className="hidden md:flex">
    //         <Link href={"/"} className="text-xl font-bold">
    //           Toram Guide
    //         </Link>
    //       </div>

    //       <div className="flex md:hidden">
    //         <Button variant={"ghost"} className="md:hidden">
    //           <Menu />
    //         </Button>
    //       </div>

    //       <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
    //         <div className="relative ml-auto flex-1 md:grow-0 md:basis-80">
    //           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    //           <Input
    //             type="search"
    //             placeholder="Search..."
    //             className="w-full rounded-lg bg-background pl-8 md:w-80"
    //           />
    //         </div>
    //         <div>
    //           <Button
    //             className="cursor-pointer"
    //             variant={"ghost"}
    //             size={"icon"}
    //             asChild
    //           >
    //             <Link
    //               href={"https://github.com/teerakanotk/toram/tree/main"}
    //               target="_blank"
    //             >
    //               <FaGithub />
    //             </Link>
    //           </Button>
    //           <ModeToggle />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <>
      <header className="sticky top-0 z-50 border-b">
        <div className="container">
          <div className="flex items-center justify-center">
            <Button asChild>
              <Link href={"/"}>Logo</Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
