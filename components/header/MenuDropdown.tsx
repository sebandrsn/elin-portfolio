import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export type SubmenuItem = { slug: string; label: string };
export type MenuDropdownProps = {
  slug: string;
  label: string;
  sub_menu: SubmenuItem[];
};

export function MenuDropdown({
  slug,
  label,
  sub_menu,
}: Readonly<MenuDropdownProps>) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex flex-col items-center">
        <Link href={slug}>{label}</Link>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute z-20 mt-6 flex flex-row space-x-6"
            >
              {sub_menu.map((sub) => (
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
