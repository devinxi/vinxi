import { useTh } from "@/leva/plugin";
import * as React, { useState, useRef, useLayoutEffect } from "solid-js";
import { FolderTitle } from "./FolderTitle";
import { StyledFolder, StyledWrapper, StyledContent } from "./StyledFolder";

type FolderProps = {
  name: string;
  collapsed: boolean;
  children: (toggled: boolean) => React.ReactNode;
};

export const Folder = ({ name, children, collapsed }: FolderProps) => {
  const [toggled, setToggle] = useState(!collapsed);

  const folderRef = useRef<HTMLDivElement>(null);

  const widgetColor = useTh("colors", "folderWidgetColor");
  const textColor = useTh("colors", "folderTextColor");

  useLayoutEffect(() => {
    folderRef.current!.style.setProperty(
      "--leva-colors-folderWidgetColor",
      widgetColor
    );
    folderRef.current!.style.setProperty(
      "--leva-colors-folderTextColor",
      textColor
    );
  }, [widgetColor, textColor]);

  return (
    <StyledFolder ref={folderRef}>
      <FolderTitle
        name={name!}
        toggled={toggled}
        toggle={() => setToggle((t) => !t)}
      />
      {children(toggled)}
      {/* <TreeWrapper parent={newPath} tree={tree} toggled={toggled} /> */}
    </StyledFolder>
  );
};

// type TreeWrapperProps = {
//   isRoot?: boolean;
//   fill?: boolean;
//   flat?: boolean;
//   parent?: string;
//   tree: Tree;
//   toggled: boolean;
// };

// export const TreeWrapper = React.memo(
//   ({
//     isRoot = false,
//     fill = false,
//     flat = false,
//     parent,
//     tree,
//     toggled,
//   }: TreeWrapperProps) => {
//     const { wrapperRef, contentRef } = useToggle(toggled);
//     return (
//       <StyledWrapper ref={wrapperRef} isRoot={isRoot} fill={fill} flat={flat}>
//         <StyledContent ref={contentRef} isRoot={isRoot} toggled={toggled}>
//           {Object.entries(tree).map(([key, value]) =>
//             isInput(value) ? (
//               // @ts-expect-error
//               <Control
//                 key={value.path}
//                 valueKey={value.valueKey}
//                 path={value.path}
//               />
//             ) : (
//               <Folder key={key} name={key} path={parent} tree={value as Tree} />
//             )
//           )}
//         </StyledContent>
//       </StyledWrapper>
//     );
//   }
// );
