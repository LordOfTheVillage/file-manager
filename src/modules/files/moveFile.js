import fs from "fs"
import path from "path"
import { ERROR_MESSAGES } from "../../utils/constants.js"

export const moveFile = (sourceFilePath, targetDirectoryPath) => {
  const sourceStream = fs.createReadStream(sourceFilePath)
  const targetFilePath = path.join(
    targetDirectoryPath,
    path.basename(sourceFilePath)
  )
  const targetStream = fs.createWriteStream(targetFilePath)

  sourceStream.on("error", (error) => {
    console.log(ERROR_MESSAGES.FAILED_FIND_SOURCE_FILE)
  })

  targetStream.on("error", (error) => {
    console.log(ERROR_MESSAGES.FAILED_FIND_TARGET_DIR)
  })

  targetStream.on("finish", async () => {
    await fs.promises.unlink(sourceFilePath)
  })

  sourceStream.pipe(targetStream)
}
