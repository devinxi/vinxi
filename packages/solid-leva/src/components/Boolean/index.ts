import * as props from './boolean-plugin'
import { BooleanComponent } from './Boolean'
import { createInternalPlugin } from '../../plugin-system'

export * from './Boolean'

export default createInternalPlugin({
  component: BooleanComponent,
  ...props,
})
