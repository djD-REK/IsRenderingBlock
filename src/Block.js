import React from "react"
import { defaultConfig } from "./configs"

const Block = (props) => {
  const { utils, text, data } = props

  const { isRendering } = data

  return <h1>{`utils.isRendering is ${isRendering}`}</h1>
}

Block.defaultProps = defaultConfig

export default Block
