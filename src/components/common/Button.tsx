import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

interface Props {
  href: string;
  target?: "_blank" | "_self";
  color?: string;
}

export default component$((props: Props) => {
  useStylesScoped$(styles);

  return (
    <a
      href={props.href}
      target={props.target || "_self"}
      class="brutal-btn sanchez inline-block py-2 px-4 border-2 border-black transition-all ease-in-out duration-150"
    >
      <Slot />
    </a>
  );
});
