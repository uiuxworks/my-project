// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/api/joke.ts";
import * as $2 from "./routes/index.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/Footer.tsx";
import * as $$2 from "./islands/Gift.tsx";
import * as $$3 from "./islands/Hero.tsx";
import * as $$4 from "./islands/Nav.tsx";
import * as $$5 from "./islands/Rsvp.tsx";
import * as $$6 from "./islands/Top.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/api/joke.ts": $1,
    "./routes/index.tsx": $2,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/Footer.tsx": $$1,
    "./islands/Gift.tsx": $$2,
    "./islands/Hero.tsx": $$3,
    "./islands/Nav.tsx": $$4,
    "./islands/Rsvp.tsx": $$5,
    "./islands/Top.tsx": $$6,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
