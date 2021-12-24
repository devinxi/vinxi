/**
 * This file constains declaration of Engine Class.
 *
 * @author Fernando Serrano, Robert Long
 * @packageDocumentation
 */

import { OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer, XRFrame, XRSession } from 'three'
import { Entity } from '../ecs/entity'
import { createWorld, World } from '../ecs/world'
import { createStore } from '@/lib/zustand'


export type InputValue = number | string | boolean
/**
 * This is the base class which holds all the data related to the scene, camera,system etc.
 * Data is holded statically hence will be available everywhere.
 *
 * @author Shaw, Josh, Vyacheslav, Gheric and the XREngine Team
 */
// export class Engine {
//   public static initOptions: InitializeOptions
//   // public static engineTimer: { start: Function; stop: Function; clear: Function } = null

//   // public static xrSupported = false
//   // public static isBot = false

//   // public static offlineMode = false
//   // public static isHMD = false

//   //public static stats: Stats
//   // Move for sure
//   // public static sky: Sky;

//   /** Indicates whether engine is currently executing or not. */
//   public static isExecuting = false

//   /**
//    * Frame rate for physics system.
//    *
//    * @default 60
//    */
//   public static physicsFrameRate = 60
//   //  public static physxWorker: Worker = null

//   /**
//    * Frame rate for network system.
//    *
//    * @default 20
//    */

//   public static accumulator: number
//   public static justExecuted: boolean
//   public static params: any
//   /**
//    * @default 1
//    */
//   public static timeScaleTarget = 1

//   /**
//    * The default world
//    */
//   public static defaultWorld: World | null = null

//   /**
//    * The currently executing world
//    */
//   public static currentWorld: World | null = null

//   /**
//    * All worlds that are currently instantiated
//    */
//   public static worlds: World[] = []

//   /**
//    * Reference to the three.js renderer object.
//    * This is set in {@link initialize.initializeEngine | initializeEngine()}.
//    */
//   static renderer: WebGLRenderer | null = null
//   // static effectComposer: EffectComposerWithSchema = null
//   // static xrRenderer = null
//   // static xrSession: XRSession = null
//   static context = null
//   // static csm: CSM = null
//   /**
//    * Reference to the three.js scene object.
//    * This is set in {@link initialize.initializeEngine | initializeEngine()}.
//    */
//   static scene: Scene | null = null
//   static sceneLoaded = false

//   /**
//    * Reference to the three.js perspective camera object.
//    * This is set in {@link initialize.initializeEngine | initializeEngine()}.
//    */
//   static camera: PerspectiveCamera | OrthographicCamera | null = null
//   static activeCameraEntity: Entity
//   static activeCameraFollowTarget: Entity

//   /**
//    * Reference to the Transform component of the three.js camera object.
//    * This holds data related to camera position, angle etc.
//    * This is set in {@link initialize.initializeEngine | initializeEngine()}.
//    */
//   static cameraTransform: typeof TransformComponent

//   /**
//    * Reference to the audioListener.
//    * This is a virtual listner for all positional and non-positional audio.
//    */
//   static audioListener: any = null

//   /**
//    * Controls whether engine should execute this frame.
//    * Engine can be paused by setting enabled to false.
//    * @default true
//    */
//   static enabled = true

//   static tick = 0

//   static useAudioSystem = false

//   static inputState = new Map<any, InputValue>()
//   static prevInputState = new Map<any, InputValue>()

//   static isInitialized = false

//   static hasJoinedWorld = false

//   static publicPath: string

//   static workers: Worker[] = []
//   static simpleMaterials = false

//   static hasEngaged = false
//   static mouseInputEnabled = true
//   static keyboardInputEnabled = true

//   static xrFrame: XRFrame
//   static spatialAudio = false
// }

export const useEngine = createStore({
  isInitialized: false,
  hasEngaged: false,
  debug: true,
  worlds: {},
});

// @ts-ignore
window.ENGINE = useEngine

// export const awaitEngineLoaded = (): Promise<void> => {
//   return new Promise<void>((resolve) => {
//     if (useEngine.getState().isInitialized) resolve()
//     events.on(EVENTS.INITIALIZED_ENGINE, resolve)
//   })
// }

// export const awaitEngaged = (): Promise<void> => {
//   return new Promise<void>((resolve) => {
//     if (useEngine.getState().hasEngaged) resolve()
//     events.on(EngineEvents.EVENTS.USER_ENGAGE, resolve)
//   })
// }


// export const initializeEngine = async (initOptions: InitializeOptions = {}): Promise<void> => {
//   const options: Required<InitializeOptions> = defaultsDeep({}, initOptions, DefaultInitializationOptions)
//   const sceneWorld = createWorld()
//   Engine.currentWorld = sceneWorld

//   Engine.initOptions = options
//   // Engine.offlineMode = typeof options.networking.schema.transport === 'undefined'
//   Engine.publicPath = options.publicPath

//   // Browser state set
//   // if (options.type !== EngineSystemPresets.SERVER && navigator && window) {
//   //   const browser = detect()
//   //   const os = detectOS(navigator.userAgent)

//   //     // Add iOS and safari flag to window object -- To use it for creating an iOS compatible WebGLRenderer for example
//   //     ; (window as any).iOS =
//   //       os === 'iOS' ||
//   //       /iPad|iPhone|iPod/.test(navigator.platform) ||
//   //       (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
//   //     ; (window as any).safariWebBrowser = browser?.name === 'safari'

//   //   Engine.isHMD = /Oculus/i.test(navigator.userAgent) // TODO: more HMDs;
//   //   Engine.xrSupported = await (navigator as any).xr?.isSessionSupported('immersive-vr')
//   // }

//   // Config Engine based on passed type
//   // if (options.type === EngineSystemPresets.CLIENT) {
//   //   await configureClient(options)
//   // } else if (options.type === EngineSystemPresets.EDITOR) {
//   //   await configureEditor(options)
//   // } else if (options.type === EngineSystemPresets.SERVER) {
//   //   await configureServer(options)
//   // }

//   // options.systems?.forEach((init) => {
//   //   injectSystem(sceneWorld, init)
//   // })

//   await sceneWorld.initSystems()

//   const executeWorlds = (delta, elapsedTime) => {
//     for (const world of Engine.worlds) {
//       Engine.currentWorld = world
//       world.execute(delta, elapsedTime)
//     }
//     Engine.currentWorld = null
//   }

//   Engine.engineTimer = Timer(executeWorlds)

//   // Engine type specific post configuration work
//   // if (options.type === EngineSystemPresets.CLIENT) {
//   //   EngineEvents.instance.once(EngineEvents.EVENTS.SCENE_LOADED, () => {
//   //     Engine.engineTimer.start()
//   //   })
//   //   const onUserEngage = () => {
//   //     Engine.hasEngaged = true
//   //     EngineEvents.instance.dispatchEvent({ type: EngineEvents.EVENTS.USER_ENGAGE })
//   //       ;['click', 'touchstart', 'touchend', 'pointerdown'].forEach((type) => {
//   //         window.addEventListener(type, onUserEngage)
//   //       })
//   //   }
//   //     ;['click', 'touchstart', 'touchend', 'pointerdown'].forEach((type) => {
//   //       window.addEventListener(type, onUserEngage)
//   //     })

//   //   EngineEvents.instance.once(EngineEvents.EVENTS.CONNECT, ({ id }) => {
//   //     // Network.instance.isInitialized = true
//   //     // Network.instance.userId = id
//   //   })
//     // } else if (options.type === EngineSystemPresets.SERVER) {
//     //   // Engine.engineTimer.start()
//     // }

//     // Mark engine initialized
//     Engine.isInitialized = true
//     EngineEvents.instance.dispatchEvent({ type: EngineEvents.EVENTS.INITIALIZED_ENGINE })
//   }
// }

export type InitializeOptions = {
  // type?: EngineSystemPresets
  // input?: {
  // schemas: InputSchema[]
  // }
  // networking?: {
  // schema: NetworkSchema
  // app?: any
  // }
  scene?: {
    disabled?: boolean
  }
  renderer?: {
    disabled?: boolean
    canvasId?: string
    postProcessing?: boolean
  }
  publicPath?: string
  // physics?: {
  //   simulationEnabled?: boolean
  //   settings?: PhysXConfig
  // }
  // systems?: SystemInjectionType<any>[]
}

/**
 *
 * @author Shaw
 * If you just want to start up multiplayer worlds, use this.
 * Otherwise you should copy this into your own into your initializeEngine call.
 */
export const DefaultInitializationOptions: Partial<InitializeOptions> = {
  // type: EngineSystemPresets.CLIENT,
  publicPath: '',
  // input: {
  //   schemas: [AvatarInputSchema]
  // },
  // networking: {
  //   schema: DefaultNetworkSchema
  // },
  scene: {
    disabled: false
  },
  renderer: {
    disabled: false,
    postProcessing: false
  },
  // physics: {
  //   settings: {
  //     bounceThresholdVelocity: 0.5,
  //     start: false,
  //     lengthScale: 1,
  //     verbose: false,
  //     substeps: 1,
  //     gravity: { x: 0, y: -9.81, z: 0 }
  //   } as any,
  //   simulationEnabled: true // start the engine with the physics simulation running
  // },
  // systems: []
}

// export const shutdownEngine = async () => {
//   if (Engine.initOptions?.type === EngineSystemPresets.CLIENT) {
//     removeClientInputListeners()
//   }

//   Engine.engineTimer?.clear()
//   Engine.engineTimer = null

//   await reset()
// }

