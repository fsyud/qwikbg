import { component$ } from "@builder.io/qwik";
import Button from "~/components/common/Button";
import Card from "~/components/common/Card";

export default component$(() => {
  return (
    <main class="bg-pink-600 dark:bg-none p-6">
      <section class="grid  md:grid-cols-8 gap-8 mt-4">
        <div class="col-span-4">
          <Card>
            <div class="flex flex-col justify-between items-start gap-4">
              <p class="text-white mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
                Brutal theme for{" "}
                <a
                  class="text-white"
                  target="_blank"
                  href="https://astro.build/"
                >
                  Astro
                </a>
              </p>
              <p class="text-white mt-2 outfit text-xl md:text-3xl lg:text-5xl">
                A minimalistic
              </p>
              <Button target={"_self"} href="/blog/">
                Check out the blog &rarr;
              </Button>
            </div>
          </Card>
        </div>

        <div class="col-span-2">
          <Card>
            <h2 class="text-white text-2xl md:text-4xl lg:text-6xl mb-4 dm-serif">
              What is Brutal?
            </h2>
            <p class="poppins text-white">
              Brutal is a theme built with Astro, UnoCSS by{" "}
              <a href="https://www.elian.codes/">Elian</a>. It's a simple, fast,
              and modern theme that is easy to use and customize. Mainly meant
              to power blogs and personal websites.
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
});
