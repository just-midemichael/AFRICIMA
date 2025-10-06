import { ComingSoonSection } from "@/section/comingSoon/comingSoonSection";

export default function Home() {
  return (
    <main style={{ width: "100%" }}>
      <ComingSoonSection />
    </main>
  );
}

export const metadata = {
  title: "Homepage | Africima",
  description: "Welcome to Africima",
};
