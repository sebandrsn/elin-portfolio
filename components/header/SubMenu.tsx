import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { SubmenuItemType } from "./Menu";

export interface SubMenuProps {
  label?: string;
  sub_menu: SubmenuItemType[];
  handleClick?: () => void;
}

export function SubMenu({
  label,
  sub_menu,
  handleClick,
}: Readonly<SubMenuProps>) {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);
  return (
    <>
      <div className="md:hidden">
        <li className={`relative text-2xl text-black hover:text-gray-200`}>
          <div className="flex flex-col items-center">
            <button
              onClick={() => setSubMenuIsOpen(true)}
              className="cursor-pointer"
            >
              {label}
            </button>
            {subMenuIsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute z-20 mt-6 flex flex-row space-x-6"
              >
                {sub_menu?.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={sub.slug}
                    onClick={() => {
                      setSubMenuIsOpen(false);
                      handleClick?.();
                    }}
                    className="text-black"
                  >
                    {sub.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        </li>
      </div>
      <div className="mb-2.5 hidden flex-row space-x-6 md:flex">
        {sub_menu?.map((sub) => (
          <Link
            key={sub.slug}
            href={sub.slug}
            className="whitespace-nowrap text-black hover:text-gray-400"
          >
            {sub.label}
          </Link>
        ))}
      </div>
    </>
  );
}
