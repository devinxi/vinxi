import * as props from './select-plugin'
import { SelectComponent } from './Select'
import { createInternalPlugin } from '../../plugin-system'

export * from './Select'

export default createInternalPlugin({
  component: SelectComponent,
  ...props,
})
