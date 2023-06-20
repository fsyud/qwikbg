import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-3xl">
      <div class="mt-20 flex justify-center relative">
        <div class="md:w-[25.55rem] text-4xl md:text-justify space-x-2 leading-[3rem]">
          <span>HEY!</span>
          <h1 class="inline font-bold">
            我叫 dy, <span class="font-normal">一个</span> 前端开发人员
          </h1>
        </div>
      </div>
    </section>
  );
});
