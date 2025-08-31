import { useTranslations } from "next-intl";
import ChangeLanguageButton from "./language-button";

export default function LanguageChange() {
  const t = useTranslations("SettingsDialog");

  return (
    <div className="flex flex-col gap-1">
      <h3 className="mt-3 text-left text-sm">{t("language")} </h3>
      <div className="mt-0.5 flex flex-row gap-2">
        <ChangeLanguageButton localeToSet="pl">
          {t("polish")}
        </ChangeLanguageButton>
        <ChangeLanguageButton localeToSet="en">
          {t("english")}
        </ChangeLanguageButton>
      </div>
    </div>
  );
}
