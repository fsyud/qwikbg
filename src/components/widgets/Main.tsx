import { component$ } from "@builder.io/qwik";
import Button from "~/components/common/Button";
import Card from "~/components/common/Card";

const builtWith = [
  { name: "Qwik", url: "https://qwik.builder.io/" },
  { name: "Netlify", url: "https://app.netlify.com" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
];

export default component$(() => {
  return (
    <main class="bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-none p-6">
      <section class="grid  md:grid-cols-8 gap-8 mt-4">
        <div class="col-span-4">
          <Card>
            <div class="flex flex-col justify-between items-start gap-4">
              <p class="text-white mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
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
          <Card color="brutal-card-none">
            <h2 class="text-white text-2xl md:text-4xl lg:text-6xl mb-4 dm-serif">
              About this blog
            </h2>
            <p class="poppins">
              A free soul, in this blog, will share some daily Development
              essay. reading notes, human geography
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
});
