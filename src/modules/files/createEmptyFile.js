import fsPromises from "fs/promises"
import { getAbsolutePath } from "../../utils/utils.js"
import { ERROR_MESSAGES } from "../../utils/constants.js"

export const createEmptyFile = async (file) => {
  const filePath = getAbsolutePath(file)

  try {
    await fsPromises.writeFile(filePath, "")
  } catch (error) {
    console.log(ERROR_MESSAGES.FAILED_CREATE_FILE)
  }
}
