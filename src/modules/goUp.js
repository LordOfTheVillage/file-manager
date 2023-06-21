import path from "path"
import { currentDirectory } from "../index.js"
import { SYMBOLS } from "../constants/constants.js"

export const goUp = () => {
  const parentDirectory = path.resolve(currentDirectory.path, SYMBOLS.UPPER_DIR)
  if (parentDirectory !== currentDirectory.path) {
    currentDirectory.path = parentDirectory
  }
}
