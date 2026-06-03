import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Retreat - Sign Up - Abide Now",
  description: "Join us for transformative retreats that deepen your relationship with God.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      {children}
    </section>
  );
}
