import { Vector2, AnimationMixer, AnimationClip, AnimationAction } from "three";
import { Object3DComponent } from "../core/components";
import {
  defineSystem,
  World,
  defineMapComponent,
  defineQuery,
  enterQuery,
  addMapComponent,
} from "../core/threecs";

interface AnimationClipState {
  index: number; // Index
  playing: boolean;
  loop?: number; // Three.js loop enum
}

interface AnimationMixerComponentProps {
  state: AnimationClipState[];
}

export const AnimationMixerComponent =
  defineMapComponent<AnimationMixerComponentProps>();

export function addAnimationMixerComponent(
  world: World,
  eid: number,
  props: Partial<AnimationMixerComponentProps> = {}
) {
  addMapComponent(
    world,
    AnimationMixerComponent,
    eid,
    Object.assign(
      {
        state: [],
      },
      props
    )
  );
}

interface InternalAnimationMixerComponentProps {
  actions: AnimationAction[];
  playingActions: boolean[];
  mixer: AnimationMixer;
}

export const InternalAnimationMixerComponent =
  defineMapComponent<InternalAnimationMixerComponentProps>();

export const AnimationClipsComponent = defineMapComponent<AnimationClip[]>();

export function addAnimationClipsComponent(
  world: World,
  eid: number,
  animations: AnimationClip[]
) {
  addMapComponent(world, AnimationClipsComponent, eid, animations);
}

const animationMixerQuery = defineQuery([
  AnimationMixerComponent,
  Object3DComponent,
]);

const newAnimationMixerQuery = enterQuery(animationMixerQuery);

export const AnimationSystem = defineSystem(function AnimationSystem(
  world: World
) {
  const animationMixerEntities = animationMixerQuery(world);
  const newAnimationMixerEntities = newAnimationMixerQuery(world);

  newAnimationMixerEntities.forEach((eid) => {
    const obj = Object3DComponent.storage.get(eid)!;
    const clips = AnimationClipsComponent.storage.get(eid);

    const mixer = new AnimationMixer(obj);

    const actions = [];

    if (clips) {
      for (const clip of clips) {
        actions.push(mixer.clipAction(clip));
      }
    }

    addMapComponent(world, InternalAnimationMixerComponent, eid, {
      mixer,
      actions,
      playingActions: actions.map(() => false),
    });
  });

  animationMixerEntities.forEach((eid) => {
    const { state } = AnimationMixerComponent.storage.get(eid)!;
    const { mixer, actions, playingActions } =
      InternalAnimationMixerComponent.storage.get(eid)!;
    const clips = AnimationClipsComponent.storage.get(eid);

    // TODO: add/remove actions using clips/actions arrays

    // TODO: update actions using state/clips arrays

    state.forEach((clipState) => {
      const action = actions[clipState.index];

      if (action) {
        if (clipState.loop !== undefined) {
          action.loop = clipState.loop;
        }
      }

      if (clipState.playing && !playingActions[clipState.index]) {
        action.play();
      } else if (!clipState.playing && playingActions[clipState.index]) {
        action.stop();
      }
    });

    mixer.update(world.dt);
  });
});
