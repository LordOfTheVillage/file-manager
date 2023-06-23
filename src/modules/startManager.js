import { COMMANDS, ERROR_MESSAGES, SYMBOLS } from "../utils/constants.js"
import { currentDirectory } from "../index.js"
import { changeDirectory } from "./navigation/changeDirectory.js"
import { exitFileManager } from "./exitManager.js"
import { goUp } from "./navigation/goUp.js"
import { listFiles } from "./navigation/listFiles.js"
import { catFile } from "./files/catFile.js"
import { createEmptyFile } from "./files/createEmptyFile.js"

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
        const cdDirectoryArgument = fullCommand
          .substring(COMMANDS.CD.length)
          .trim()
        await changeDirectory(cdDirectoryArgument)
        break
      case COMMANDS.EXIT:
        exitFileManager(username)
        break
      case COMMANDS.LS:
        await listFiles()
        break
      case COMMANDS.CAT:
        const catFileArgument = fullCommand
          .substring(COMMANDS.CAT.length)
          .trim()
        catFile(catFileArgument)
        break
      case COMMANDS.ADD:
        const addFileArgument = fullCommand
          .substring(COMMANDS.ADD.length)
          .trim()
        await createEmptyFile(addFileArgument)
        break
      default:
        console.log(ERROR_MESSAGES.INVALID_COMMAND)
        break
    }

    printWorkingDirectory()
  })
}
