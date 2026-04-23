"use client";

import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SettingsModal({ open, onOpenChange }: { open: boolean, onOpenChange: (val: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white border-[#E7DBC7] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-[#2B2420] text-xl">Configurações</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Modo Compacto</Label>
              <p className="text-xs text-[#6B6359]">Reduz espaçamento para mais conteúdo.</p>
            </div>
            <Switch />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}