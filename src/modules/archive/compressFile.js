import fs from "fs"
import zlib from "zlib"
import { ERROR_MESSAGES } from "../../utils/constants.js"

export const compressFile = (filePath, destinationPath) => {
  const sourceStream = fs.createReadStream(filePath)
  const destinationStream = fs.createWriteStream(destinationPath)
  const compressStream = zlib.createBrotliCompress()

  sourceStream.pipe(compressStream).pipe(destinationStream)

  destinationStream.on("finish", () => {
    console.log("File compressed successfully:", destinationPath)
  })

  sourceStream.on("error", (error) => {
    console.log(ERROR_MESSAGES.FAILED_COMPRESS_FILE)
  })

  destinationStream.on("error", (error) => {
    console.log(ERROR_MESSAGES.FAILED_COMPRESS_FILE)
  })

  compressStream.on("error", (error) => {
    console.log(ERROR_MESSAGES.FAILED_COMPRESS_FILE)
  })
}
