import fs from "fs"
import path from "path"
import { currentDirectory } from "../../index.js"
import { ERROR_MESSAGES } from "../../utils/constants.js"

export const listFiles = async () => {
  try {
    const items = await fs.promises.readdir(currentDirectory.path)
    const directories = []
    const files = []

    for (const item of items) {
      const itemPath = path.join(currentDirectory.path, item)
      const stats = await fs.promises.stat(itemPath)

      if (stats.isDirectory()) {
        directories.push(item)
      } else {
        files.push(item)
      }
    }

    directories.sort()
    files.sort()

    console.log("-----------------------------")
    console.log("(index)\tName\t\tType")
    let index = 0

    for (const directory of directories) {
      console.log(`${index}\tDirectory\t${directory}`)
      index++
    }

    for (const file of files) {
      console.log(`${index}\tFile\t\t${file}`)
      index++
    }
  } catch (error) {
    console.log(ERROR_MESSAGES.FAILED_RETRIEVE_CONTENT, error)
  }
}
