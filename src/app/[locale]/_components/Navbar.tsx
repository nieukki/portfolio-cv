import { useTranslations } from "next-intl";
import SettingsDialog from "../(settings-dialog)/settings-dialog";

export const Navbar = () => {
  const t = useTranslations("Navbar");
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-transparent p-8 border-b-2 flex items-center justify-between">
      <div className="flex-1 flex justify-center">
        <ul className="flex flex-row items-center justify-center gap-x-8">
          <li className="text-base cursor-pointer transition-all duration-200 hover:text-muted-foreground">
            {t("home")}
          </li>
          <li className="text-base cursor-pointer transition-all duration-200 hover:text-muted-foreground">
            {t("projects")}
          </li>
          <li className="text-base cursor-pointer transition-all duration-200 hover:text-muted-foreground">
            {t("about")}
          </li>
          <li className="text-base cursor-pointer transition-all duration-200 hover:text-muted-foreground">
            {t("contact")}
          </li>
        </ul>
      </div>
      <SettingsDialog />
    </nav>
  );
};
