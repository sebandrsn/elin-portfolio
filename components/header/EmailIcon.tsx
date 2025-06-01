interface EmailIconProps {
  className?: string;
}

export default function EmailIcon({ className }: Readonly<EmailIconProps>) {
  return (
    <a
      href="mailto:elin.asedahl@hotmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 lg:hover:stroke-[#0072C6]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <polyline points="3 7 12 14 21 7" />
      </svg>
    </a>
  );
}
