import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Nav from "../components/Nav.tsx";
import Hero from "../components/Hero.tsx";
import Top from "../components/Top.tsx";
import Rsvp from "../components/Rsvp.tsx";
import Gift from "../components/Gift.tsx";
import Footer from "../components/Footer.tsx";

export const handler: Handlers = {
  async POST(req: Request) {
    const formData = await req.formData();

    // Convert FormData to JSON.
    const data = Object.fromEntries(
      [...new Set(formData.keys())].map((key) =>
        key.endsWith("[]")
          ? [key.slice(0, -2), formData.getAll(key)]
          : [key, formData.get(key)]
      ),
    );

    const url =
      "https://hooks.airtable.com/workflows/v1/genericWebhook/appJd8TRw3TQrx3IS/wflfCeagMwRy1pnoe/wtrrALq1lGIwnbQDH";

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    // Redirect to prevent resubmission.
    return new Response("", {
      status: 303,
      headers: { Location: "/" },
    });
  },
};

export default function Home(props: PageProps) {
  return (
    <div class="max-w-[400px] mx-auto relative font-custom">
      <Head>
        <link rel="stylesheet" href="/main.css"></link>
      </Head>
      <div class="bg-gray-300 w-[1px] h-full absolute inset-y-0 left-0 ml-4">
      </div>
      <div class="bg-gray-300 w-[1px] h-full absolute inset-y-0 right-0 mr-4">
      </div>
      <Nav />
      <div id="home">
        <Hero />
      </div>
      <div id="date">
        <Top />
      </div>
      <div id="rsvp">
        <Rsvp />
      </div>
      <div id="gift">
        <Gift />
      </div>
      <Footer />
    </div>
  );
}
