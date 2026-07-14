import { Projects } from "@/components/pages/Projects";
import { PageShell } from "@/components/PageShell";

export default function ProjectsPage() {
  return (
    <PageShell contentClassName="ml-24 md:ml-36">
      <Projects />
    </PageShell>
  );
}