import Counter from "../islands/Counter.tsx";
import Nav from "../islands/Nav.tsx";
import Hero from "../islands/Hero.tsx";
import Top from "../islands/Top.tsx";
import Rsvp from "../islands/Rsvp.tsx";
import Gift from "../islands/Gift.tsx";
import Footer from "../islands/Footer.tsx";

export default function Home() {
  return (
    <div class="max-w-[400px] mx-auto relative font-custom">

    <div class="bg-gray-300 w-[1px] h-full absolute inset-y-0 left-0 ml-4"></div>
    <div class="bg-gray-300 w-[1px] h-full absolute inset-y-0 right-0 mr-4"></div>
      <Nav/>
      <Hero/>
      <Top/>
      <Rsvp/>
      <Gift/>
      <Footer/>
    </div>

    // <div class="p-4 mx-auto max-w-screen-md">
    //   <img
    //     src="/logo.svg"
    //     class="w-32 h-32"
    //     alt="the fresh logo: a sliced lemon dripping with juice"
    //   />
    //   <p class="my-6">
    //     Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
    //     file, and refresh.
    //   </p>
    //   <Counter start={3} />
    // </div>

  );
}
