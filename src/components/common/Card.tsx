import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

interface Props {
  color?: string;
}

export default component$((props: Props) => {
  useStylesScoped$(styles);

  return (
    <div class={`brutal-card ${props.color} dark:bg-gray-900`}>
      <Slot />
    </div>
  );
});
