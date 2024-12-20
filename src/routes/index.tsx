import { component$, useStyles$ } from "@builder.io/qwik";
import { Checkbox } from "~/components/checkbox";

export default component$(() => {
  useStyles$(styles);

  return (
    <Checkbox.Root>
      <Checkbox.Trigger class="checkbox-trigger">Checked</Checkbox.Trigger>
    </Checkbox.Root>
  );
});

// example styles
import styles from "~/components/checkbox/checkbox.css?inline";
