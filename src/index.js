import { ERROR_MESSAGES, USERNAME_ARG } from "./constants/constants.js"
import { Directory } from "./models/directory.js"
import { startFileManager } from "./modules/startManager.js"
import os from "os"

export let currentDirectory = new Directory(os.homedir())

const args = process.argv.slice(2)
if (args.length === 0 || !args[0].startsWith(USERNAME_ARG)) {
  console.log(ERROR_MESSAGES.INVALID_USERNAME)
} else {
  const username = args[0].substring(USERNAME_ARG.length)
  startFileManager(username)
}
