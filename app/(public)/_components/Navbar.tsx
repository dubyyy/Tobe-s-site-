"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Home, BookOpen, LayoutDashboard, LogOut } from "lucide-react";

import Logo from "@/public/logo.png";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import { Button, buttonVariants } from "@/components/ui/button";
import { UserDropdown } from "./UserDropdown";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSignOut } from "@/hooks/use-singout";

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
];

export function Navbar() {
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();
  const handleSignOut = useSignOut();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={Logo} alt="Logo" className="size-9 rounded-md" />
          <span className="text-lg font-semibold tracking-tight">
            Tobeszn Academy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          {isPending ? (
            <div className="h-9 w-20 animate-pulse rounded-md bg-muted" />
          ) : session ? (
            <UserDropdown
              email={session.user.email}
              image={
                session?.user.image ??
                `https://avatar.vercel.sh/${session?.user.email}`
              }
              name={
                session?.user.name && session.user.name.length > 0
                  ? session.user.name
                  : session?.user.email.split("@")[0]
              }
            />
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className={buttonVariants({
                  variant: "ghost",
                  className: "px-4",
                })}
              >
                Login
              </Link>
              <Link
                href="/login"
                className={buttonVariants({
                  className: "px-4 shadow-sm",
                })}
              >
                Get Started
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] px-0">
              <SheetHeader className="px-7 pb-2 text-left border-b">
                <SheetTitle className="flex items-center gap-2">
                  <Image src={Logo} alt="Logo" className="size-8 rounded-md" />
                  <span className="font-bold">Tobeszn Academy</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col h-[calc(100vh-5rem)] justify-between py-6">
                <nav className="flex flex-col gap-2 px-4">
                  {navigationItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <item.icon className={`size-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>

                <div className="px-4 border-t pt-6">
                  {isPending ? (
                    <div className="h-12 w-full animate-pulse rounded-lg bg-muted" />
                  ) : session ? (
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/50">
                        <Avatar className="size-10 border">
                          <AvatarImage
                            src={
                              session?.user.image ??
                              `https://avatar.vercel.sh/${session?.user.email}`
                            }
                            alt={session?.user.name ?? "User"}
                          />
                          <AvatarFallback>
                            {(session?.user.name?.[0] ?? session?.user.email[0]).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col min-w-0">
                          <p className="text-sm font-semibold truncate">
                            {session?.user.name || session?.user.email.split("@")[0]}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {session?.user.email}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="destructive"
                        className="w-full justify-start gap-3 h-11"
                        onClick={() => handleSignOut()}
                      >
                        <LogOut className="size-4" />
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/login"
                        className={buttonVariants({
                          variant: "outline",
                          className: "w-full h-11 justify-center",
                        })}
                      >
                        Login
                      </Link>
                      <Link
                        href="/login"
                        className={buttonVariants({
                          className: "w-full h-11 justify-center shadow-md",
                        })}
                      >
                        Get Started
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}