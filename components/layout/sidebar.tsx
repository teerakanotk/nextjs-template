"use client";

import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="hidden md:flex sticky w-full bg-accent-foreground/5">
      <div className="p-4 bg-background">
        <div className="grid gap-1">
          <Button
            className="flex items-center justify-start"
            variant={"ghost"}
            asChild
          >
            <Link href={"/"}>
              <House />
              <span>Home</span>
            </Link>
          </Button>
          <Button
            className="flex items-center justify-start"
            variant={"ghost"}
            asChild
          >
            <Link href={"/"}>
              <House />
              <span>Dashboard</span>
            </Link>
          </Button>
          <Button
            className="flex items-center justify-start"
            variant={"ghost"}
            asChild
          >
            <Link href={"/"}>
              <House />
              <span>Support</span>
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
}
