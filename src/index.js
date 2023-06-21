import { USERNAME_ARG } from "./constants/constants"
import { startFileManager } from "./modules/startManager"

const args = process.argv.slice(2)
if (args.length === 0 || !args[0].startsWith(USERNAME_ARG)) {
  console.log("Invalid input. Please provide --username argument.")
} else {
  const username = args[0].substring(USERNAME_ARG.length)
  startFileManager(username)
}
