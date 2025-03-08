"use client";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [flag, setFlag] = useState(
    <span className="flag-icon flag-icon-gb"></span>
  );

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            setFlag(<span className="flag-icon flag-icon-gb"></span>);
            changeLanguage("en");
          }}
        >
          ENG
        </div>
      ),
      icon: <span className="flag-icon flag-icon-gb"></span>,
    },
    {
      key: "2",
      label: (
        <div
          onClick={() => {
            setFlag(<span className="flag-icon flag-icon-az"></span>);
            changeLanguage("az");
          }}
        >
          AZN
        </div>
      ),
      icon: <span className="flag-icon flag-icon-az"></span>,
    },
    {
      key: "3",
      label: (
        <div
          onClick={() => {
            setFlag(<span className="flag-icon flag-icon-ru"></span>);
            changeLanguage("ru");
          }}
        >
          RUS
        </div>
      ),
      icon: <span className="flag-icon flag-icon-ru"></span>,
    },
  ];

  const changeLanguage = (lang: string) => {
    router.push(`/${lang}${pathname.substring(3)}`);
  };
  return (
    <>
      <button onClick={() => changeLanguage("en")}>ENG</button>
      <button onClick={() => changeLanguage("ru")}>RUS</button>
      <button onClick={() => changeLanguage("az")}>AZE</button>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        overlayStyle={{ border: "1px solid red" }}
      >
        <a onClick={(e) => e.preventDefault()}>
          {flag}
          <Space>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
}
