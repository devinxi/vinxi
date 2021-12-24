import * as props from './color-plugin'
import { ColorComponent } from './Color'
import { createInternalPlugin } from '../../plugin-system'

export * from './Color'

export default createInternalPlugin({
  component: ColorComponent,
  ...props,
})
