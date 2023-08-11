import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

interface Props {
  color?: string;
}

export default component$((props: Props) => {
  useStylesScoped$(styles);

  console.log(props);

  return (
    <div class="brutal-card">
      <Slot />
    </div>
  );
});
