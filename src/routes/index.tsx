import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// import Hero from "~/components/widgets/Hero";
import Main from "~/components/widgets/Main";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      {/* <Hero /> */}
      <Main />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
