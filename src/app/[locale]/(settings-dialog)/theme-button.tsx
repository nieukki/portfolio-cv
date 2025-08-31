"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button, buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { MonitorCog, Moon, Sun } from "lucide-react";

function ThemeButton({
  children,
  themeToSet,
}: {
  children: React.ReactNode;
  themeToSet: "system" | "light" | "dark";
}) {
  const { setTheme, theme } = useTheme();
  const t = useTranslations("SettingsDialog");

  return (
    <Button
      type="button"
      className={cn(
        buttonVariants({
          variant: theme === themeToSet ? "secondary" : "outline",
        }),
        "text-foreground flex cursor-pointer items-center justify-center has-[>svg]:px-0 [&>svg]:!size-4.5 px-3"
      )}
      onClick={() => setTheme(themeToSet)}>
      <div className="flex items-center justify-center gap-x-2">
        {children}
        <p>{t(`${themeToSet}`)}</p>
      </div>
    </Button>
  );
}

export default function ThemeChange() {
  const t = useTranslations("SettingsDialog");

  return (
    <div className="flex flex-col gap-y-2">
      <h3 className="">{t("theme")}</h3>
      <div className="flex flex-row items-start justify-center gap-x-3">
        <ThemeButton themeToSet="light">
          <Sun />
        </ThemeButton>
        <ThemeButton themeToSet="dark">
          <Moon />
        </ThemeButton>
        <ThemeButton themeToSet="system">
          <MonitorCog />
        </ThemeButton>
      </div>
    </div>
  );
}
