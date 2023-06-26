import fs from "fs"
import { getAbsolutePath } from "../../utils/utils.js"
import { ERROR_MESSAGES } from "../../utils/constants.js"

export const catFile = (file) => {
  const filePath = getAbsolutePath(file)
  const stream = fs.createReadStream(filePath)

  stream.on("data", (chunk) => {
    process.stdout.write(chunk)
  })

  stream.on("error", (error) => {
    console.log(ERROR_MESSAGES.FAILED_READING_FILE)
  })
}
