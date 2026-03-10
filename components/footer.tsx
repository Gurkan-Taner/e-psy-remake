export default function Footer() {
  return (
    <footer className="border-t border-[rgba(145,165,155,0.1)] px-12 py-10 flex justify-between items-center flex-wrap gap-5">
      <div className="flex items-center gap-[10px]">
        <div className="w-[6px] h-[6px] rounded-full bg-[rgb(145,165,155)]" />
        <span className="font-serif text-[18px] font-semibold">E-Psy</span>
      </div>
      <div className="flex gap-8">
        {["Confidentialité", "Conditions", "Contact"].map((item) => (
          <span
            key={item}
            className="text-[12px] text-[rgba(230,234,232,0.4)] cursor-pointer tracking-[0.03em]"
          >
            {item}
          </span>
        ))}
      </div>
      <span className="text-[12px] text-[rgba(230,234,232,0.25)]">
        © 2026 E-Psy. Avec bienveillance.
      </span>
    </footer>
  );
}
