import { CheckboxRoot } from "./checkbox-root";
import { CheckboxIndicator } from "./checkbox-indicator";
import { CheckboxTrigger } from "./checkbox-trigger";
import { CheckboxDescription } from "./checkbox-description";
import { CheckboxErrorMessage } from "./checkbox-error-message";

export const Checkbox = {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
  Trigger: CheckboxTrigger,
  Description: CheckboxDescription,
  ErrorMessage: CheckboxErrorMessage,
} as const;