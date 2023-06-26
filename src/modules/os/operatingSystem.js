import { OS_FLAGS } from "../../utils/constants.js"
import os from "os"

export const operatingSystem = (flag) => {
  const comparableFlag = flag.toLowerCase()
  switch (comparableFlag) {
    case OS_FLAGS.EOL:
      const systemEOL = JSON.stringify(os.EOL)
      console.log(`Default system End-Of-Line (EOL): ${systemEOL}`)
      break
    case OS_FLAGS.USERNAME:
      const username = os.userInfo().username
      console.log(`Current System Username: ${username}`)
      break
    case OS_FLAGS.HOMEDIR:
      const homeDir = os.homedir()
      console.log(`Home Directory: ${homeDir}`)
      break
    case OS_FLAGS.CPUS:
      const cpus = os.cpus()
      console.log("CPU Information:")
      console.log("Number of CPUs:", cpus.length)
      cpus.forEach((cpu, index) => {
        console.log(`CPU ${index + 1}:`)
        console.log("Model:", cpu.model)
        console.log("Clock Speed (GHz):", (cpu.speed / 1000).toFixed(2))
      })
      break
    case OS_FLAGS.ARCH:
      const cpuArchitecture = os.arch()
      console.log("Node.js CPU Architecture:", cpuArchitecture)
      break
    default:
      console.log(`Invalid flag. Please try again`)
      break
  }
}
