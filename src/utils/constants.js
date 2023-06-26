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

export const OS_FLAGS = {
  EOL: "--eol",
  CPUS: "--cpus",
  HOMEDIR: "--homedir",
  USERNAME: "--username",
  ARCH: "--architecture",
}

export const ERROR_MESSAGES = {
  INVALID_COMMAND: "Invalid command.",
  INVALID_USERNAME: "Invalid input. Please provide --username argument.",
  INVALID_PATH: "Invalid path to directory, please try again",
  FAILED_RETRIEVE_CONTENT: "Failed to retrieve directory content:",
  FAILED_READING_FILE: "File does not exist or cannot be read.",
  FAILED_CREATE_FILE: "File could not be created.",
  FAILED_RENAME_FILE: "File could not be renamed.",
  FAILED_REMOVE_FILE: "File could not be removed.",
  FAILED_FIND_SOURCE_FILE: "Source file does not exist or cannot be read.",
  FAILED_FIND_TARGET_DIR:
    "Target directory does not exist or cannot be written to.",
  FAILED_CALCULATE_HASH: "Unable to calculate file hash.",
}
