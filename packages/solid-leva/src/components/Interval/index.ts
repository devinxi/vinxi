import * as props from './interval-plugin'
import { IntervalComponent } from './Interval'
import { createInternalPlugin } from '../../plugin-system'

export * from './Interval'

export default createInternalPlugin({
  component: IntervalComponent,
  ...props,
})
