import * as props from "./number-plugin";
import { NumberComponent } from "./Number";
import { createInternalPlugin } from "../../plugin-system";

const { sanitizeStep, ...rest } = props;

export * from "./Number";
export { sanitizeStep };

export default createInternalPlugin({
  component: NumberComponent,
  ...rest,
});
