import { ComingSoonSection } from "@/section/comingSoon/comingSoonSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creating and Reshaping a Better Africa",
};

export default function Home() {
  return (
    <main style={{ width: "100%" }}>
      <ComingSoonSection />
    </main>
  );
}
