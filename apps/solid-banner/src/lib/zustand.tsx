import create, { GetState, SetState, StoreApi } from "zustand/vanilla";
import { combine } from "zustand/middleware";

export const createStore = function <
  TState extends object,
  TApi extends object
>(
  initialState: TState,
  creator?: (
    set: SetState<TState>,
    get: GetState<TState>,
    api: StoreApi<TState>
  ) => TApi
): StoreApi<
  TState &
    TApi & {
      set: SetState<TState>;
      get: GetState<TState>;
    }
> {
  return create(
    combine(initialState, (set, get, api) => ({
      set,
      get,
      ...(creator ? creator(set, get, api) : {}),
    })) as any
  );
};
