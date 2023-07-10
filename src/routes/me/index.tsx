import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-3xl">
      <div class="mt-20 flex flex-col justify-center relative">
        <div class="text-4xl md:text-justify space-x-2 leading-[3rem]">
          <span>HEY!</span>
          <h1 class="inline font-bold">
            我叫 dy, <span class="font-normal">一个</span> 前端开发者
          </h1>
        </div>

        <div class="mt-8">
          <h2 class="font-bold text-xl mb-3">关于我</h2>
          <div class="text-gray-600 dark:text-slate-400 text-xl">
            崇尚{" "}
            <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2 text-[#039de1]">
              自由
            </span>{" "}
            的生活，喜欢{" "}
            <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2 text-[#039de1]">
              骑行
            </span>
            。
          </div>
        </div>

        <div class="mt-8">
          <h2 class="font-bold text-xl mb-3">关于本站</h2>
          <div class="text-gray-600 dark:text-slate-400 text-xl">
            本站基于{" "}
            <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2 text-[#039de1]">
              qwik
            </span>{" "}
            构建完成
          </div>
        </div>

        <div class="mt-2">
          <p class="underline decoration-sky-500">基于 <a href="https://pagespeed.web.dev/" target="_blank">google pagespeed</a> 测试</p>
          <Image
            src="/public/images/photo/s1.png"
            class="mx-auto mt-4 mb-6 max-w-sm bg-gray-100 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
            sizes="(max-width: 400) 200px, 400px"
            loading="eager"
          />
          <Image
            src="/public/images/photo/s2.png"
            class="mx-auto mt-4 mb-6 max-w-sm bg-gray-100 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
            sizes="(max-width: 400) 200px, 400px"
            loading="eager"
          />
          <Image
            src="/public/images/photo/s3.png"
            class="mx-auto mt-4 mb-6 max-w-sm bg-gray-100 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
            sizes="(max-width: 400) 200px, 400px"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "me",
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
