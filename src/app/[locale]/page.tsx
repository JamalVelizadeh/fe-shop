import "flag-icon-css/css/flag-icons.min.css";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href={"en/about"}>About</Link>
    </div>
  );
}
