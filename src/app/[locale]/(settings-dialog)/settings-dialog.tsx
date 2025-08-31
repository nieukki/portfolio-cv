"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Settings } from "lucide-react";
import { useTranslations } from "next-intl";
import ThemeChange from "./theme-button";
import LanguageChange from "./change-language";

const SettingsDialog = () => {
  const t = useTranslations("SettingsDialog");
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Settings className="cursor-pointer" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("title")}</DialogTitle>
            <DialogDescription>{t("description")}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-start justify-center gap-y-4">
            <div className="flex flex-col gap-y-3">
              <ThemeChange />
            </div>
            <div className="flex flex-col gap-y-3">
              <LanguageChange />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SettingsDialog;
