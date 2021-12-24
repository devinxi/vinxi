import * as props from './image-plugin'
import { ImageComponent } from './Image'
import { createInternalPlugin } from '../../plugin-system'

export * from './Image'

export default createInternalPlugin({
  component: ImageComponent,
  ...props,
})
