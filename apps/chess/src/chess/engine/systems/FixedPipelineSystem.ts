import { nowMilliseconds } from "@/lib/now"
import { System, World } from "../ecs"

/**
 * System for running simulation logic with fixed time intervals
 * @author Josh Field <github.com/hexafield>
 * @author Gheric Speiginer <github.com/speigg>
 */
export default async function FixedPipelineSystem(world: World, args: { updatesPerSecond: number }): Promise<System> {
  console.log(args)
  let accumulator = 0

  const timestep = 1 / args.updatesPerSecond
  const limit = timestep * 1000
  const updatesLimit = args.updatesPerSecond

  return () => {
    world.fixedDelta = timestep

    const start = nowMilliseconds()
    let timeUsed = 0
    let updatesCount = 0

    accumulator += world.delta

    let accumulatorDepleted = accumulator < timestep
    let timeout = timeUsed > limit
    let updatesLimitReached = updatesCount > updatesLimit
    while (!accumulatorDepleted && !timeout && !updatesLimitReached) {
      world.fixedElapsedTime += world.fixedDelta

      for (const s of world.fixedSystems) s(world)

      accumulator -= timestep
      ++updatesCount

      timeUsed = nowMilliseconds() - start
      accumulatorDepleted = accumulator < timestep
      timeout = timeUsed > limit
      updatesLimitReached = updatesCount >= updatesLimit
    }

    if (!accumulatorDepleted) {
      accumulator = accumulator % timestep
    }
  }
}
