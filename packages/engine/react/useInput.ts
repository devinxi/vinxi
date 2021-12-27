import { createStore } from '@/lib/zustand';

// BUTTON -- discrete states of ON and OFF, like a button
// ONEDIM -- one dimensional value between 0 and 1, or -1 and 1, like a trigger
// TWODIM -- Two dimensional value with x: -1, 1 and y: -1, 1 like a mouse input
// THREEDIM -- Three dimensional value, just in case
// SIXDOF -- Six dimensional input, three for pose and three for rotation (in euler?), i.e. for VR controllers
export enum InputType {
  BUTTON = 0,
  ONEDIM = 1,
  TWODIM = 2,
  THREEDIM = 3,
  SIXDOF = 4
}

export enum MouseInput {
  LeftButton = 0,
  MiddleButton = 1,
  RightButton = 2,
  MousePosition = 3,
  MouseClickDownPosition = 4,
  MouseClickDownTransformRotation = 5,
  MouseMovement = 6,
  MouseScroll = 7,
  MouseClickDownMovement = 8
}

export enum TouchInputs {
  Touch = 10,
  DoubleTouch = 11,
  LongTouch = 12,
  Touch1Position = 13,
  Touch2Position = 14,
  Touch1Movement = 15,
  Touch2Movement = 16,
  SwipeLeft = 17,
  SwipeRight = 18,
  SwipeUp = 19,
  SwipeDown = 20,
  Scale = 21
}

export enum XRAxes {
  Left = 22,
  Right = 23
}

export enum XR6DOF {
  HMD = 24,
  LeftHand = 25,
  RightHand = 26
}

export enum GamepadAxis {
  Left = 28,
  Right = 29
}

export enum GamepadButtons {
  A = 30,
  B = 31,
  X = 32,
  Y = 33,
  LBumper = 34,
  RBumper = 35,
  LTrigger = 36,
  RTrigger = 37,
  Back = 38,
  Start = 39,
  LPad = 40,
  RPad = 41,
  LStick = 42,
  RStick = 43,
  DPad1 = 44,
  DPad2 = 45,
  DPad3 = 46,
  DPad4 = 47
}

export enum CameraInput {
  Neutral = 100,
  Angry = 101,
  Disgusted = 102,
  Fearful = 103,
  Happy = 104,
  Surprised = 105,
  Sad = 106,
  Pucker = 107,
  Widen = 108,
  Open = 109
}

export enum BinaryValue {
  OFF = 0,
  ON = 1,
  FALSE = 0,
  TRUE = 1
}

export enum LifecycleValue {
  STARTED = 0,
  CONTINUED = 1,
  ENDED = 2,
  CHANGED = 3,
  UNCHANGED = 4
}

export interface InputValue {
  type: InputType // How many dimensions? Button, 2D?
  value: number[] // What's the value? Binary, scalar, vector
  lifecycleState?: LifecycleValue
}

export const useInput = createStore({
  input: new Map<string, InputValue>(),
  prevInput: new Map<string, InputValue>(),
}, (set, get) => {
  let input = new Map();
  let prevInput = new Map();

  const handleKey = (event: KeyboardEvent): any => {
    const keydown = event.type === 'keydown'

    // For if mouse is over UI, disable button clicks for engine
    // if (keydown && !Engine.keyboardInputEnabled) {
    //   return
    // }

    const element = event.target as HTMLElement
    // Сheck which excludes the possibility of controlling the avatar (car, etc.) when typing a text
    if (element?.tagName === 'INPUT' || element?.tagName === 'SELECT' || element?.tagName === 'TEXTAREA') {
      return
    }
    // const mappedKey = Engine.inputState.schema.keyboardInputMap[];
    // const key = event.code 
    const key = `Keyboard/${event.key}`

    if (keydown) {
      // If the key is in the map but it's in the same state as now, let's skip it (debounce)
      if (prevInput.has(key) && prevInput.get(key).value[0] === BinaryValue.ON) {
        if (prevInput.get(key).lifecycleState !== LifecycleValue.CONTINUED) {
          input.set(key, {
            type: InputType.BUTTON,
            value: [BinaryValue.ON],
            lifecycleState: LifecycleValue.CONTINUED
          })
        }
        return
      }
      // Set type to BUTTON (up/down discrete state) and value to up or down, depending on what the value is set to
      input.set(`Keyboard/${event.key}`, {
        type: InputType.BUTTON,
        value: [BinaryValue.ON],
        lifecycleState: LifecycleValue.STARTED
      })
    } else {
      input.set(`Keyboard/${event.key}`, {
        type: InputType.BUTTON,
        value: [BinaryValue.OFF],
        lifecycleState: LifecycleValue.ENDED
      })
    }
  }

  return {
    addEventListeners: () => {
      window.addEventListener('keydown', handleKey);
      window.addEventListener('keyup', handleKey);
    },
    removeEventListeners: () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('keyup', handleKey);
    },
    prevInput,
    input,
  };
});
