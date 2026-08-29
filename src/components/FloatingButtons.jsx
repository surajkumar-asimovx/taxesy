import { Headphones, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <button type="button" className="floating-help" aria-label="Need help">
        <span className="dot" aria-hidden="true" />
        <Headphones size={20} />
        Need
        Help?
      </button>
      <button type="button" className="scroll-top" aria-label="Scroll to top" onClick={scrollTop}>
        <ArrowUp size={19} />
      </button>
    </>
  );
}
