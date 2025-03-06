import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import "flag-icon-css/css/flag-icons.min.css";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <LanguageSwitcher />
    </div>
  );
}
