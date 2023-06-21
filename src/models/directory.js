export class Directory {
  #path
  constructor(path) {
    this.#path = path
  }

  set path(path) {
    this.#path = path
  }

  get path() {
    return this.#path
  }
}
