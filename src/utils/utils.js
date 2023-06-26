import path from "path"
import { currentDirectory } from "../index.js"

export const getAbsolutePath = (suspectPath) => {
  return path.resolve(
    path.isAbsolute(suspectPath)
      ? suspectPath
      : path.join(currentDirectory.path, suspectPath)
  )
}
