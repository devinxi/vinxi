import { render } from "../../../../jest.setup";
import * as React from "solid-react-compat";
import { createEffect } from "solid-js";
import { act } from "react-dom/test-utils";
import { AnimatePresence } from "..";
import { usePresence } from "../use-presence";
import sync from "framesync";

type CB = () => void;

describe("usePresence", () => {
  test("Can defer unmounting", async () => {
    const promise = new Promise<void>((resolve) => {
      let remove: CB;

      const Child = () => {
        const [isPresent, safeToRemove] = usePresence();

        createEffect(() => {
          if (safeToRemove) remove = safeToRemove;
        }, [isPresent]);

        return <div />;
      };

      const Parent = ({ isVisible }: { isVisible: boolean }) => (
        <AnimatePresence>{isVisible && <Child />}</AnimatePresence>
      );

      const { container, rerender } = render(<Parent isVisible />);
      rerender(<Parent isVisible={false} />);

      expect(container.firstChild).toBeTruthy();

      act(() => remove());

      sync.postRender(() => {
        expect(container.firstChild).toBeFalsy();

        resolve();
      });
    });

    await promise;
  });

  test("Multiple children can exit", async () => {
    const promise = new Promise<void>((resolve) => {
      let removeA: CB;
      let removeB: CB;

      const ChildA = () => {
        const [isPresent, safeToRemove] = usePresence();

        createEffect(() => {
          if (safeToRemove) removeA = safeToRemove;
        }, [isPresent, safeToRemove]);

        return <div />;
      };

      const ChildB = () => {
        const [isPresent, safeToRemove] = usePresence();

        createEffect(() => {
          if (safeToRemove) removeB = safeToRemove;
        }, [isPresent, safeToRemove]);

        return <div />;
      };

      const Parent = ({ isVisible }: { isVisible: boolean }) => (
        <AnimatePresence>
          {isVisible && (
            <div>
              <ChildA />
              <ChildB />
            </div>
          )}
        </AnimatePresence>
      );

      const { container, rerender } = render(<Parent isVisible />);
      rerender(<Parent isVisible={false} />);

      expect(container.firstChild).toBeTruthy();

      act(() => removeA());

      sync.postRender(() => {
        expect(container.firstChild).toBeTruthy();

        act(() => removeB());

        sync.postRender(() => {
          expect(container.firstChild).toBeFalsy();

          resolve();
        });
      });
    });

    await promise;
  });

  test("Multiple children can exit over multiple rerenders", async () => {
    const promise = new Promise<void>((resolve) => {
      let removeA: CB;
      let removeB: CB;

      const ChildA = () => {
        const [isPresent, safeToRemove] = usePresence();

        createEffect(() => {
          if (safeToRemove) removeA = safeToRemove;
        }, [isPresent, safeToRemove]);

        return <div />;
      };

      const ChildB = () => {
        const [isPresent, safeToRemove] = usePresence();

        createEffect(() => {
          if (safeToRemove) removeB = safeToRemove;
        }, [isPresent, safeToRemove]);

        return <div />;
      };

      const Parent = ({ isVisible }: { isVisible: boolean }) => (
        <AnimatePresence>
          {isVisible && (
            <div>
              <ChildA />
              <ChildB />
            </div>
          )}
        </AnimatePresence>
      );

      const { container, rerender } = render(<Parent isVisible />);
      rerender(<Parent isVisible={false} />);

      expect(container.firstChild).toBeTruthy();

      act(() => removeA());

      sync.postRender(() => {
        rerender(<Parent isVisible={false} />);

        sync.postRender(() => {
          expect(container.firstChild).toBeTruthy();
          rerender(<Parent isVisible={false} />);
          act(() => removeB());

          sync.postRender(() => {
            expect(container.firstChild).toBeFalsy();

            resolve();
          });
        });
      });
    });

    await promise;
  });
});
