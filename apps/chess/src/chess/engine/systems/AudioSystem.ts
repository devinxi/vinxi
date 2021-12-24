import { Audio, AudioListener, PositionalAudio } from "three";
import { Object3DComponent } from "../scene";
import {
  defineSystem,
  World,
  defineComponent,
  defineQuery,
  addComponent,
  getComponent,
} from "../ecs";

export const AudioListenerComponent = defineComponent({});

export const InternalAudioListenerComponent =
  defineComponent<{ audioListener: AudioListener }>();

enum AudioSourceType {
  Stereo = "stereo",
  PannerNode = "pannernode",
}

enum AudioDistanceModel {
  Linear = "linear",
  Inverse = "inverse",
  Exponential = "exponential",
}

type AudioSourceComponentProps = (
  | { audioType: AudioSourceType.Stereo }
  | {
    audioType: AudioSourceType.PannerNode;
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;
    distanceModel: AudioDistanceModel;
    maxDistance: number;
    refDistance: number;
    rolloffFactor: number;
  }
) & { src: string; volume: number; loop: boolean; autoPlay: boolean };

export const AudioSourceComponent =
  defineComponent<AudioSourceComponentProps>();

export const InternalAudioSourceComponent =
  defineComponent<{ audioSource: Audio<GainNode | PannerNode> | PositionalAudio }>();


export const audioListenerQuery = defineQuery([
  AudioListenerComponent,
  Object3DComponent,
]);


export const audioSourceQuery = defineQuery([
  AudioSourceComponent,
  Object3DComponent,
]);

export default async function AudioSystem(world: World) {
  for (var entity of audioListenerQuery.enter(world)) {
    const obj = getComponent(entity, Object3DComponent, world)!;
    const audioListener = new AudioListener();
    obj.value.add(audioListener);
    addComponent(entity, InternalAudioListenerComponent, { audioListener: audioListener }, world);
  }


  const mainAudioListenerEid = audioListenerQuery(world)[0] ?? undefined;

  if (mainAudioListenerEid === undefined) {
    return;
  }

  const audioListener = getComponent(mainAudioListenerEid, InternalAudioListenerComponent, world)!.audioListener;

  for (var eid of audioSourceQuery(world)) {
    const obj = getComponent(eid, Object3DComponent, world)!;
    const audioSourceProps = getComponent(eid, AudioSourceComponent, world)!;
    let audioSource = getComponent(eid, InternalAudioSourceComponent, world)!;

    if (!audioSource.audioSource) {
      const el = document.createElement("audio");
      el.setAttribute("playsinline", "");
      el.setAttribute("webkip-playsinline", "");
      el.crossOrigin = "anonymous";

      if (audioSourceProps.audioType === AudioSourceType.Stereo) {
        audioSource.audioSource = new Audio(audioListener);
      } else if (audioSourceProps.audioType === AudioSourceType.PannerNode) {
        audioSource.audioSource = new PositionalAudio(audioListener);
      } else {
        throw new Error("Unknown audio source type");
      }

      audioSource.audioSource.setMediaElementSource(el);
      obj.value.add(audioSource.audioSource);
    }

    const { src, volume, loop, autoPlay } = audioSourceProps;

    if (audioSourceProps.audioType === AudioSourceType.PannerNode) {
      const {
        coneInnerAngle,
        coneOuterAngle,
        coneOuterGain,
        distanceModel,
        maxDistance,
        refDistance,
        rolloffFactor,
      } = audioSourceProps;

      const positionalAudio = audioSource.audioSource as PositionalAudio;
      const pannerNode = positionalAudio.panner;

      if (
        pannerNode.coneInnerAngle !== coneInnerAngle ||
        pannerNode.coneOuterAngle !== coneOuterAngle ||
        pannerNode.coneOuterGain !== coneOuterGain
      ) {
        positionalAudio.setDirectionalCone(
          coneInnerAngle,
          coneOuterAngle,
          coneOuterGain
        );
      }

      if (pannerNode.distanceModel !== distanceModel) {
        positionalAudio.setDistanceModel(distanceModel);
      }

      if (pannerNode.maxDistance !== maxDistance) {
        positionalAudio.setMaxDistance(maxDistance);
      }

      if (pannerNode.refDistance !== refDistance) {
        positionalAudio.setRefDistance(refDistance);
      }

      if (pannerNode.rolloffFactor !== rolloffFactor) {
        positionalAudio.setRolloffFactor(rolloffFactor);
      }
    }

    const el = (audioSource.audioSource.source as unknown as MediaElementAudioSourceNode)
      .mediaElement;

    if (el.src !== src) {
      el.src = src;
    }

    if (el.loop !== loop) {
      el.loop = loop;
    }

    if (el.autoplay !== autoPlay) {
      el.autoplay = autoPlay;
    }

    if (audioSource.audioSource.gain.gain.value !== volume) {
      audioSource.audioSource.setVolume(volume);
    }
  }
}
