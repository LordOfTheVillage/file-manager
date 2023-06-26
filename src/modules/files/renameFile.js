import { getAbsolutePath } from "../../utils/utils.js"
import { ERROR_MESSAGES } from "../../utils/constants.js"
import fsPromises from "fs/promises"

export const renameFile = async (oldFile, newFile) => {
  const oldFilePath = getAbsolutePath(oldFile)
  const newFilePath = getAbsolutePath(newFile)

  try {
    await fsPromises.rename(oldFilePath, newFilePath)
  } catch {
    console.log(ERROR_MESSAGES.FAILED_RENAME_FILE)
  }
}
