import React from "react"
import { defaultConfig } from "./configs"

const Block = (props) => {
  const { utils, text } = props
  const { isRendering } = utils

  return <h1>{`utils.isRendering is ${isRendering}`}</h1>
}

Block.defaultProps = defaultConfig

export default Block
