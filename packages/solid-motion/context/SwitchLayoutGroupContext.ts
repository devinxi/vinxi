import { IProjectionNode } from "../projection/node/types";
import { createContext } from "solid-js";
import { Transition } from "../types";

export interface SwitchLayoutGroup {
  register?: (member: IProjectionNode) => void;
  deregister?: (member: IProjectionNode) => void;
}

export type SwitchLayoutGroupContext = SwitchLayoutGroup &
  InitialPromotionConfig;

export type InitialPromotionConfig = {
  /**
   * The initial transition to use when the elements in this group mount (and automatically promoted).
   * Subsequent updates should provide a transition in the promote method.
   */
  transition?: Transition;
  /**
   * If the follow tree should preserve its opacity when the lead is promoted on mount
   */
  shouldPreserveFollowOpacity?: (member: IProjectionNode) => boolean;
};

/**
 * @internal
 */
export const SwitchLayoutGroupContext = createContext<SwitchLayoutGroupContext>(
  {}
);
