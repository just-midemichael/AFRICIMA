import { ComingSoonSection } from "@/section/comingSoon/comingSoonSection";

export default function Home() {
  return (
    <>
      <head>
        <link rel="canonical" href="https://www.africima.com/" />
      </head>
      <main style={{ width: "100%" }}>
        <ComingSoonSection />
      </main>
    </>
  );
}

export const metadata = {
  title: "Africima : Creating and Reshaping a Better Africa",
  description: "Welcome to Africima Official Website",
};
