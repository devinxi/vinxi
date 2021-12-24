/**
 *
 * @author Josh Field <github.com/HexaField>
 */

import mitt from 'mitt'
import { Entity } from './entity';
import { World } from './world';

export const EVENT = {
  // TODO: add doc formatting to these

  // INITALIZATION
  RESET_ENGINE: 'CORE_RESET_ENGINE',
  INITIALIZED_ENGINE: 'CORE_INITIALIZED_ENGINE', // { }
  CONNECT_TO_WORLD: 'CORE_CONNECT_TO_WORLD', // { }
  CONNECT_TO_WORLD_TIMEOUT: 'CORE_CONNECT_TO_WORLD_TIMEOUT', // { }
  JOINED_WORLD: 'CORE_JOINED_WORLD', // { }
  LEAVE_WORLD: 'CORE_LEAVE_WORLD', // { }
  SCENE_LOADED: 'CORE_SCENE_LOADED', // { }
  CLIENT_USER_LOADED: 'CORE_CLIENT_USER_LOADED', // { }

  // Start or stop client side physics & rendering
  ENABLE_SCENE: 'CORE_ENABLE_SCENE', // { renderer: boolean, physics: boolean }

  // MISC
  USER_ENGAGE: 'CORE_USER_ENGAGE', // { }
  WINDOW_FOCUS: 'CORE_WINDOW_FOCUS', //  { focused: boolean }
  ENTITY_DEBUG_DATA: 'CORE_ENTITY_DEBUG_DATA', // TODO: to pipe offscreen entity data to UI

  OBJECT_HOVER: 'INTERACTIVE_SYSTEM_OBJECT_HOVER',
  OBJECT_ACTIVATION: 'INTERACTIVE_SYSTEM_OBJECT_ACTIVATION',

  PORTAL_REDIRECT_EVENT: 'PHYSICS_SYSTEM_PORTAL_REDIRECT',

  XR_START: 'WEBXR_RENDERER_SYSTEM_XR_START',
  XR_SESSION: 'WEBXR_RENDERER_SYSTEM_XR_SESSION',
  XR_END: 'WEBXR_RENDERER_SYSTEM_XR_END',

  CONNECT: 'CLIENT_NETWORK_SYSTEM_CONNECT',
  CONNECTION_LOST: 'CORE_CONNECTION_LOST',

  START_SUSPENDED_CONTEXTS: 'POSITIONAL_AUDIO_START_SUSPENDED_CONTEXTS',
  SUSPEND_POSITIONAL_AUDIO: 'POSITIONAL_AUDIO_SUSPEND_POSITIONAL_AUDIO',

  BROWSER_NOT_SUPPORTED: 'BROWSER_NOT_SUPPORTED',

  ENTITY_CREATED: 'ENTITY_CREATED',
  ENTITY_DESTROYED: 'ENTITY_DESTROYED',

  COMPONENT_ADDED: 'COMPONENT_ADDED',
  COMPONENT_REMOVED: 'COMPONENT_REMOVED',
}

export const events = mitt<{
  ENTITY_CREATED: { entity: Entity, world: World }
  ENTITY_DESTROYED: { entity: Entity, world: World },

  COMPONENT_ADDED: { entity: Entity, componentRef: any, component: any, world: World }
  COMPONENT_REMOVED: { entity: Entity, componentRef: any, component: any, world: World }
  COMPONENT_CHANGED: { entity: Entity, componentRef: any, component: any, world: World }
}>();
