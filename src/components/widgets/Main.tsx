import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import Button from "~/components/common/Button";
import Card from "~/components/common/Card";

import type { Post } from "~/types";
import { findLatestPosts } from "~/utils/posts";

const builtWith = [
  { name: "Qwik", url: "https://qwik.builder.io/" },
  { name: "Netlify", url: "https://app.netlify.com" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
];

export default component$(() => {
  const store = useStore<{ posts: Post[] }>({
    posts: [],
  });

  useTask$(async () => {
    if (isServer) {
      const posts = await findLatestPosts({ count: 1, page: 1 });
      store.posts = posts.map((post: Post) => ({ ...post }));
    }
  });

  return (
    <main class="dark:bg-none p-6 mt-[-145px]">
      <section class="grid  md:grid-cols-8 gap-8 mt-4 pt-[130px]">
        <div class="col-span-4">
          <Card>
            <div class="flex flex-col justify-between items-start gap-4">
              <p class=" mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
                a engineer
              </p>
              <Button target={"_self"} href="/blog/">
                Check out the blog &rarr;
              </Button>
            </div>
          </Card>
        </div>

        <div class="col-span-2">
          <Card>
            <ul class="flex gap-4 flex-wrap">
              {builtWith.map((item, index) => (
                <li key={index}>
                  <Button target={"_blank"} href={item.url}>
                    {item.name}
                  </Button>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div class="col-span-2">
          <Card>
            <h2 class="text-2xl md:text-3xl lg:text-4xl mb-4 dm-serif">
              About this blog
            </h2>
            <p class="poppins">
              A free soul, in this blog, will share some daily Development
              essay. reading notes, human geography
            </p>
          </Card>
        </div>

        <div class="col-span-3">
          <Card>
            <div class="flex flex-row justify-between">
              <div class="text-2xl md:text-3xl lg:text-4xl mb-4 dm-serif">
                Recent
              </div>
              <div class="block">
                <Button href={`/blog/${store.posts[0]?.slug}`}>
                  Read post &rarr;
                </Button>
              </div>
            </div>
            <p class="poppins">{store.posts[0]?.title}</p>
          </Card>
        </div>
      </section>
    </main>
  );
});
