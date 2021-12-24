import * as props from './string-plugin'
import { StringComponent } from './String'
import { createInternalPlugin } from '../../plugin-system'

export * from './String'

export default createInternalPlugin({
  component: StringComponent,
  ...props,
})
