import { component$ } from "@builder.io/qwik";
// import { Image } from "@unpic/qwik";
import styles from "./Hero.module.css";

export default component$(() => {
  return (
    <section class={[styles.container, "dark:bg-none", "mt-[-65px]"]}>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:flex h-screen pt-[72px]">
        <div class="py-12 flex flex-col md:flex-row md:py-20 2xl:min-h-0 lg:flex lg:gap-8 lg:items-center lg:py-16">
          <div class="mx-auto text-center lg:text-left md:pb-16 pb-12 lg:pb-0">
            <>
              <h1 class="text-3xl md:text-[3.48rem] font-bold leading-tighter tracking-tighter mb-4 font-heading px-4 md:px-0">
                <span class="dark:text-[#039de1] font-mono">Hi~</span>
              </h1>
              <div class="max-w-3xl mx-auto">
                <p class="text-xl text-gray-600 mt-8 dark:text-slate-400">
                  When tomorrow turns in today, yesterday, and someday that no
                  moreimportant in your memory, we suddenly realize that we r
                  pushed forwardby time. This is not a train in still in which
                  you may feel forwardwhen another train goes by. It is the
                  truth that we've all grown up.And we become different.
                </p>
              </div>
            </>
          </div>
          <div>
            <div class="relative m-auto max-w-3xl">
              {/* <Image
                src="/images/bg.jpg"
                class="mx-auto mt-4 mb-6 max-w-full rounded-3xl"
                sizes="(max-width: 900px) 400px, 900px"
                loading="eager"
                width={400}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
