import { exitFileManager } from "./exitManager"

export const startFileManager = (username) => {
  console.log("Welcome to the File Manager, " + username + "!")

  process.stdin.on("data", (input) => {})
}
