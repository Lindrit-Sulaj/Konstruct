import Hero from "@/sections/hero";
import About from "@/sections/about";
import Advantages from "@/sections/advantages";
import Services from "@/sections/services";
import Projects from "@/sections/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-gray-900 py-16 md:py-24 px-2 lg:px-4">
        <div className="max-w-screen-lg mx-auto flex justify-center gap-4 lg:gap-0 lg:justify-between flex-wrap">
          <img src="./images/logo1.svg" alt="Client logo 1" />
          <img src="./images/logo2.svg" alt="Client logo 2" />
          <img src="./images/logo3.svg" alt="Client logo 3" />
          <img src="./images/logo4.svg" alt="Client logo 4" />
        </div>
      </section>
      <About />
      <Advantages />
      <Services />
      <Projects />
    </main>
  );
}
