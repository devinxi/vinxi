import { Vector3dComponent } from './Vector3d'
import { getVectorPlugin } from '../Vector'
import { createInternalPlugin } from '../../plugin-system'

export * from './Vector3d'

export default createInternalPlugin({
  component: Vector3dComponent,
  ...getVectorPlugin(['x', 'y', 'z']),
})
