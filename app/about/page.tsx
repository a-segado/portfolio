import { AboutMe } from "@/components/pages/AboutMe";
import { PageShell } from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell contentClassName="ml-24 md:ml-36">
      <AboutMe />
    </PageShell>
  );
}