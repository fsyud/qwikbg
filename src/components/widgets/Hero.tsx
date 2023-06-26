import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import styles from "./Hero.module.css";

export default component$(() => {
  return (
    <section class={[styles.container, "dark:bg-none", "mt-[-65px]"]}>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:flex h-screen pt-[72px]">
        <div class="py-12 flex flex-row md:py-20 2xl:min-h-0 lg:flex lg:gap-8 lg:items-center lg:py-16">
          <div class="mx-auto text-center basis-1/2 lg:text-left md:pb-16 pb-12 lg:pb-0">
            <>
              <h1 class="text-5xl md:text-[3.48rem] font-bold leading-tighter tracking-tighter mb-4 font-heading px-4 md:px-0">
                <span class="dark:text-[#039de1] font-mono">Free Soul</span>
              </h1>
              {/* <div class="max-w-3xl mx-auto">
                <p class="text-xl text-gray-600 mb-8 dark:text-slate-400">
                  <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                    Qwind
                  </span>{" "}
                  is a production ready template to start your new website using <em>Qwik</em> + <em>Tailwind CSS</em>.
                  It has been designed following Best Practices, SEO, Accessibility,{" "}
                  <span class="inline md:hidden">...</span>
                  <span class="hidden md:inline">
                    Dark Mode, Great Page Speed, image optimization, sitemap generation and more.
                  </span>
                </p>
                <div class="flex flex-col flex-nowrap gap-4 m-auto max-w-xs sm:flex-row sm:justify-center sm:max-w-md lg:justify-start lg:m-0 lg:max-w-7xl">
                  <div class="flex w-full sm:w-auto">
                    <a
                      class="btn btn-primary sm:mb-0 w-full"
                      href="https://github.com/ligdy7/qwikbg"
                      target="_blank"
                      rel="noopener"
                    >
                      GitHub
                    </a>
                  </div>
                  <div class="flex w-full sm:w-auto">
                    <button class="btn w-full bg-gray-50 dark:bg-transparent">
                      更多
                    </button>
                  </div>
                </div>
              </div> */}
            </>
          </div>
          <div class="basis-1/2">
            <div class="relative m-auto max-w-5xl">
              <Image
                src="/images/bg.jpg"
                class="mx-auto mt-4 mb-6 max-w-full rounded-3xl"
                sizes="(max-width: 900px) 400px, 900px"
                loading="eager"
                width={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
