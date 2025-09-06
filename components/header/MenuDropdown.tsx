import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface MenuDropdownProps {
  label: string;
  sub_menu: Array<{ slug: string; label: string }>;
  index?: number;
  isOpen?: boolean;
}

export function MenuDropdown({
  label,
  sub_menu,
  index = 0,
  isOpen = false,
}: Readonly<MenuDropdownProps>) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className={`relative text-2xl text-black transition-opacity duration-1000 ease-in-out hover:text-gray-200 lg:relative ${isOpen ? "opacity-100" : "opacity-0"} lg:text-base lg:text-black lg:opacity-100 lg:transition-none lg:hover:text-gray-400`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={(e) => {
        setOpen(true);
      }}
      onMouseLeave={(e) => {
        setOpen(false);
      }}
    >
      <div className="flex flex-col items-center">
        <span className="cursor-pointer">{label}</span>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute z-20 mt-6 flex flex-row space-x-6"
            >
              {sub_menu?.map((sub) => (
                <Link
                  key={sub.slug}
                  href={sub.slug}
                  className="whitespace-nowrap text-black hover:text-gray-400"
                >
                  {sub.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
}
