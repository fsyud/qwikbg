import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Main from "~/components/widgets/Main";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Main />
    </>
  );
});

export const head: DocumentHead = {
  title: `${SITE.title} | Home` ,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
