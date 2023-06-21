import { COMMANDS, ERROR_MESSAGES, SYMBOLS } from "../constants/constants.js"
import { currentDirectory } from "../index.js"
import { changeDirectory } from "./changeDirectory.js"
import { exitFileManager } from "./exitManager.js"
import { goUp } from "./goUp.js"
import { listFiles } from "./listFiles.js"

const printWorkingDirectory = () => {
  console.log(`You are currently in ${currentDirectory.path}`)
}

export const startFileManager = (username) => {
  console.log(`Welcome to the File Manager, ${username}!`)
  printWorkingDirectory()

  process.stdin.on("data", async (input) => {
    const fullCommand = input.toString().trim().toLowerCase()
    const commandName = fullCommand.split(SYMBOLS.COMMAND_SEPARATOR)[0]

    switch (commandName) {
      case COMMANDS.UP:
        goUp()
        break
      case COMMANDS.CD:
        const directory = fullCommand.substring(COMMANDS.CD.length).trim()
        await changeDirectory(directory)
        break
      case COMMANDS.EXIT:
        exitFileManager(username)
        break
      case COMMANDS.LS:
        await listFiles()
        break
      default:
        console.log(ERROR_MESSAGES.INVALID_COMMAND)
        break
    }

    printWorkingDirectory()
  })
}
