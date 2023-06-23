import fsPromises from "fs/promises"
import { getAbsolutePath } from "../../utils/utils.js"
import { ERROR_MESSAGES } from "../../utils/constants.js"

export const deleteFile = async (file) => {
  const filePath = getAbsolutePath(file)

  try {
    await fsPromises.unlink(filePath)
  } catch {
    console.log(ERROR_MESSAGES.FAILED_REMOVE_FILE)
  }
}
