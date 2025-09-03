import { AuroraText } from "@/components/magicui/aurora-text";
import TypingLoop from "./typing-animation";
import { useTranslations } from "next-intl";

const Description = () => {
  const t = useTranslations("Description");
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 w-1/2">
      <h1 className="text-4xl font-bold tracking-tight">
        <AuroraText>Tomasz Pacek</AuroraText>
      </h1>
      <TypingLoop />
      <p className="text-muted-foreground italic">{t("quote")}</p>
    </div>
  );
};

export default Description;
