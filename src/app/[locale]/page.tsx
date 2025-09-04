import Projects from "./(projects)/Projects";
import Description from "./_components/Description";
import { Hero } from "./_components/Hero";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen pb-48 flex flex-row items-center justify-between">
        <Description />
        <Hero />
      </div>
      <Projects />
    </>
  );
}
