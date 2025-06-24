export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} Elin Åsedahl. Alla rättigheter förbehållna.`;
  return (
    <div className="h-64 bg-black text-white">
      <div className="flex h-full flex-col justify-between">
        <div className="mt-8 flex flex-row px-44">
          <div className="flex w-1/2 justify-center text-4xl">Contact</div>
          <div className="flex w-1/2 justify-center text-4xl">Social</div>
        </div>
        <div className="flex justify-center pb-4">{footerText}</div>
      </div>
    </div>
  );
}
