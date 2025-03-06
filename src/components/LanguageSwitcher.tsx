"use client";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div onClick={() => changeLanguage("en")}>English</div>,
      icon: <span className="flag-icon flag-icon-us"></span>,
    },
    {
      key: "2",
      label: <div onClick={() => changeLanguage("az")}>Azerbaycanca</div>,
      icon: <span className="flag-icon flag-icon-az"></span>,
    },
  ];

  const changeLanguage = (lang: string) => {
    router.push(`/${lang}${pathname.substring(3)}`);
  };
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
