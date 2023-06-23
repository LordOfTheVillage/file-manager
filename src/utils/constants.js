export const ARGUMENTS = { USERNAME: "--username=" }
export const SYMBOLS = {
  UPPER_DIR: "..",
  COMMAND_SEPARATOR: " ",
}
export const COMMANDS = {
  UP: "up",
  CD: "cd",
  LS: "ls",
  CAT: "cat",
  ADD: "add",
  RN: "rn",
  CP: "cp",
  RM: "rm",
  MV: "mv",
  OS: "os",
  HASH: "hash",
  COMPRESS: "compress",
  DECOMPRESS: "decompress",
  EXIT: ".exit",
}
export const ERROR_MESSAGES = {
  INVALID_COMMAND: "Invalid command.",
  INVALID_USERNAME: "Invalid input. Please provide --username argument.",
  INVALID_PATH: "Invalid path to directory, please try again",
  FAILED_RETRIEVE_CONTENT: "Failed to retrieve directory content:",
  FAILED_READING_FILE:
    "Operation failed. File does not exist or cannot be read.",
}
