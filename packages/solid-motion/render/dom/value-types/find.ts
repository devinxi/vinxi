import { color, complex } from "style-value-types"
import { dimensionValueTypes } from "./dimensions"
import { testValueType } from "./test"

/**
 * A list of all ValueTypes
 */
const valueTypes = [...dimensionValueTypes, color, complex]

/**
 * Tests a value against the list of ValueTypes
 */
export const findValueType = (v: any) => valueTypes.find(testValueType(v))
