import { COMMANDS, ERROR_MESSAGES, SYMBOLS } from "../utils/constants.js"
import { currentDirectory } from "../index.js"
import { changeDirectory } from "./navigation/changeDirectory.js"
import { exitFileManager } from "./exitManager.js"
import { goUp } from "./navigation/goUp.js"
import { listFiles } from "./navigation/listFiles.js"
import { catFile } from "./files/catFile.js"
import { createEmptyFile } from "./files/createEmptyFile.js"
import { renameFile } from "./files/renameFile.js"
import { copyFile } from "./files/copyFile.js"
import { moveFile } from "./files/moveFile.js"
import { deleteFile } from "./files/deleteFile.js"
import { operatingSystem } from "./os/operatingSystem.js"
import { hashFile } from "./hash/hashFile.js"
import { compressFile } from "./archive/compressFile.js"
import { decompressFile } from './archive/decompressFile.js'

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
      case COMMANDS.RN:
        const rnFileArguments = fullCommand
          .substring(COMMANDS.RN.length)
          .trim()
          .split(SYMBOLS.COMMAND_SEPARATOR)
        await renameFile(...rnFileArguments)
        break
      case COMMANDS.CP:
        const cpFileArguments = fullCommand
          .substring(COMMANDS.CP.length)
          .trim()
          .split(SYMBOLS.COMMAND_SEPARATOR)
        copyFile(...cpFileArguments)
        break
      case COMMANDS.MV:
        const mvFileArguments = fullCommand
          .substring(COMMANDS.MV.length)
          .trim()
          .split(SYMBOLS.COMMAND_SEPARATOR)
        moveFile(...mvFileArguments)
        break
      case COMMANDS.RM:
        const rmFileArgument = fullCommand.substring(COMMANDS.RM.length).trim()
        deleteFile(rmFileArgument)
        break
      case COMMANDS.OS:
        const osFileArgument = fullCommand.substring(COMMANDS.OS.length).trim()
        operatingSystem(osFileArgument)
        break
      case COMMANDS.HASH:
        const hashFileArgument = fullCommand
          .substring(COMMANDS.HASH.length)
          .trim()
        hashFile(hashFileArgument)
        break
      case COMMANDS.COMPRESS:
        const compressFileArguments = fullCommand
          .substring(COMMANDS.COMPRESS.length)
          .trim()
          .split(SYMBOLS.COMMAND_SEPARATOR)
        compressFile(...compressFileArguments)
        break
      case COMMANDS.DECOMPRESS:
        const decompressFileArguments = fullCommand
          .substring(COMMANDS.DECOMPRESS.length)
          .trim()
          .split(SYMBOLS.COMMAND_SEPARATOR)
        decompressFile(...decompressFileArguments)
        break
      default:
        console.log(ERROR_MESSAGES.INVALID_COMMAND)
        break
    }

    printWorkingDirectory()
  })

  process.on("SIGINT", () => {
    exitFileManager(username)
  })
}
