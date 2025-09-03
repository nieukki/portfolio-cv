import Description from "./_components/Description";
import { Hero } from "./_components/Hero";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="w-screen h-4/5 flex flex-row items-center justify-between">
        <Description />
        <Hero />
      </div>
    </div>
  );
}
