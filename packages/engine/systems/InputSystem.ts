import { World } from "../ecs";
import { InputType, InputValue, LifecycleValue, useInput } from "../react/useInput"

export default async function InputSystem(world: World) {
  return () => {
    const { input, prevInput } = useInput.getState();
    prevInput.clear()
    input.forEach((value: InputValue, key: string) => {
      prevInput.set(key, value)
    })

    input.forEach((value: InputValue, key: string) => {
      if (
        prevInput.has(key) &&
        value.type !== InputType.BUTTON &&
        value.lifecycleState !== LifecycleValue.ENDED
      ) {
        value.lifecycleState =
          JSON.stringify(value.value) === JSON.stringify(prevInput.get(key)!.value)
            ? LifecycleValue.UNCHANGED
            : LifecycleValue.CHANGED
      }
    })

  }
}