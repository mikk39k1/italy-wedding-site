"use client";

import { Hero } from "@/components/sections/Hero";
import { LokationSection } from "@/components/sections/LokationSection";
import { PraktiskInfoSection } from "@/components/sections/PraktiskInfoSection";
import { ProgramSection } from "@/components/sections/ProgramSection";
import { ToastMasterSection } from "@/components/sections/ToastMasterSection";
import { TransportSection } from "@/components/sections/TransportSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { ØnskerSection } from "@/components/sections/ØnskerSection";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useCallback, useRef, useEffect, useState } from "react";

const menuItems = [
  { id: "vision", label: "Vision" },
  { id: "transport", label: "Transport" },
  { id: "program", label: "Program" },
  { id: "praktisk-info", label: "Praktisk info" },
  { id: "toast-master", label: "Toastmaster" },
  { id: "lokation", label: "Lokation" },
  { id: "ønsker", label: "Ønsker" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleNavigate = useCallback((sectionId: string) => {
    return () => {
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      setOpen(false);

      scrollTimeoutRef.current = window.setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 320);
    };
  }, []);
  return (
    <main className="relative w-full bg-[#fffdfb] text-gray-900">
      <Sheet open={open} onOpenChange={setOpen}>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-50 flex justify-end px-6 py-6">
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Åbn menu"
              className="pointer-events-auto fixed rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-black/5 backdrop-blur transition hover:bg-white"
            >
              <MenuIcon className="h-6 w-6 text-gray-900" />
            </button>
          </SheetTrigger>
        </div>
        <SheetContent side="right" className="bg-white px-6 py-10">
          <nav className="flex h-full flex-col justify-between">
            <div className="space-y-6">
              <SheetTitle className="text-lg font-semibold tracking-wide text-gray-900"></SheetTitle>
              <ul className="space-y-4 text-base font-medium text-gray-700">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={handleNavigate(item.id)}
                      className="w-full rounded-lg px-2 py-3 text-left text-xl text-gray-900  transition hover:bg-gray-50 hover:cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Lise &amp; Mikkel · 2026
            </p>
          </nav>
        </SheetContent>
      </Sheet>

      <Hero />
      <VisionSection />
      <TransportSection />
      <ProgramSection />
      <PraktiskInfoSection />
      <ToastMasterSection />
      <LokationSection />
      <ØnskerSection />
    </main>
  );
}
