import {
    convertBoundingBoxToBox,
    transformBoxPoints,
} from "../geometry/conversion"
import { translateAxis } from "../geometry/delta-apply"
import { TransformPoint } from "../geometry/types"
import { IProjectionNode } from "../node/types"

export function measureViewportBox(
    instance: HTMLElement,
    transformPoint?: TransformPoint
) {
    return convertBoundingBoxToBox(
        transformBoxPoints(instance.getBoundingClientRect(), transformPoint)
    )
}

export function measurePageBox(
    element: HTMLElement,
    rootProjectionNode: IProjectionNode,
    transformPagePoint?: TransformPoint
) {
    const viewportBox = measureViewportBox(element, transformPagePoint)
    const { scroll } = rootProjectionNode

    if (scroll) {
        translateAxis(viewportBox.x, scroll.x)
        translateAxis(viewportBox.y, scroll.y)
    }

    return viewportBox
}
