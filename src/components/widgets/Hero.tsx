import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="dark:bg-none mt-[-65px]">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:flex h-screen pt-[72px]">
        <div class="py-12 flex flex-col md:flex-row md:py-20 2xl:min-h-0 lg:flex lg:gap-8 lg:items-center lg:py-16">
          <div class="mx-auto text-center lg:text-left md:pb-16 pb-12 lg:pb-0">
            <>
              <div class="max-w-3xl mx-auto">
                <p class="text-2xl mb-8 dark:text-slate-400">
                  路漫漫其修远兮，吾将上下而求索
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
