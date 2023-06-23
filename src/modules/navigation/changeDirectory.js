import path from "path"
import { currentDirectory } from "../../index.js"
import fsPromises from "fs/promises"
import { ERROR_MESSAGES } from "../../utils/constants.js"
import { getAbsolutePath } from "../../utils/utils.js"

export const changeDirectory = async (directory) => {
  const absolutePath = getAbsolutePath(directory)
  try {
    await fsPromises.access(absolutePath)
    currentDirectory.path = absolutePath
  } catch {
    console.log(ERROR_MESSAGES.INVALID_PATH)
  }
}
