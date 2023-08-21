import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import type { Post } from "~/types";
import Button from "~/components/common/Button";
import Card from "~/components/common/Card";

import { findLatestPosts } from "~/utils/posts";

export default component$(() => {
  const store = useStore<{ posts: Post[] }>({
    posts: [],
  });

  useTask$(async () => {
    if (isServer) {
      const posts = await findLatestPosts({ count: 3, page: 1 });
      store.posts = posts.map((post: Post) => ({ ...post }));
    }
  });

  return (
    <section class="p-6">
      <Card>
        <div class="flex justify-between items-start">
          <h2 class="mt-4 outfit text-2xl md:text-3xl lg:text-5xl">
            Recent
          </h2>
          <div class="hidden md:block">
            <Button href="/blog/">Read post &rarr;</Button>
          </div>
          <div class="block md:hidden">
            <Button href="/blog/">Read post </Button>
          </div>
        </div>
        <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {store.posts.map((post) => {
            return (
              <li key={post.slug}>
                <a href={`/blog/${post.slug}`}>
                  <div class="flex flex-col">
                    <div class="flex flex-col lg:flex-row">
                      <img class="rounded" width={256} height={160} src={post.image} />
                      <div class="ml-4">{post.title}</div>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </Card>
    </section>
  );
});
