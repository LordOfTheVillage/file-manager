import fs from "fs"
import zlib from "zlib"
import { ERROR_MESSAGES } from "../../utils/constants.js"

export const decompressFile = (sourcePath, destinationPath) => {
  const sourceStream = fs.createReadStream(sourcePath)
  const destinationStream = fs.createWriteStream(destinationPath)
  const decompressStream = zlib.createBrotliDecompress()

  sourceStream.pipe(decompressStream).pipe(destinationStream)

  destinationStream.on("finish", () => {
    console.log("File decompressed successfully:", destinationPath)
  })

  sourceStream.on("error", (error) => {
    console.log(ERROR_MESSAGES.FAILED_DECOMPRESS_FILE)
  })

  destinationStream.on("error", (error) => {
    console.log(ERROR_MESSAGES.FAILED_DECOMPRESS_FILE)
  })

  decompressStream.on("error", (error) => {
    console.log(ERROR_MESSAGES.FAILED_DECOMPRESS_FILE)
  })
}
