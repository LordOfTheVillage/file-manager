import path from "path"
import { currentDirectory } from "../index.js"
import fsPromises from "fs/promises"
import { ERROR_MESSAGES } from "../constants/constants.js"

export const changeDirectory = async (directory) => {
  const absolutePath = path.resolve(
    path.isAbsolute(directory)
      ? directory
      : path.join(currentDirectory.path, directory)
  )
  try {
    await fsPromises.access(absolutePath)
    currentDirectory.path = absolutePath
  } catch {
    console.log(ERROR_MESSAGES.INVALID_PATH)
  }
}
