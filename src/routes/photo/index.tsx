import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-3xl">
      <div class="mt-20 flex justify-center relative">请期待...</div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "photo",
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
