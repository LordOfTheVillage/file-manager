import crypto from "crypto"
import fs from "fs"
import { getAbsolutePath } from "../../utils/utils.js"
import { ERROR_MESSAGES } from "../../utils/constants.js"

export const hashFile = (file) => {
  const filePath = getAbsolutePath(file)
  const hash = crypto.createHash("sha256")
  const stream = fs.createReadStream(filePath)

  stream.on("data", (data) => {
    hash.update(data)
  })

  stream.on("end", () => {
    const fileHash = hash.digest("hex")
    console.log("File Hash:", fileHash)
  })

  stream.on("error", () => {
    console.log(ERROR_MESSAGES.FAILED_CALCULATE_HASH)
  })
}
