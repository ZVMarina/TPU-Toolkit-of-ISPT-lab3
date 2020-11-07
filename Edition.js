class Edition {
  constructor(nameEdition, author, year, group) {
    this.nameEdition = nameEdition
    this.author = author
    this.year = year
    this.group = group
  }

  get nameInfo() {
    return this.nameEdition
  }

  get authorInfo() {
    return this.author
  }

  get yearInfo() {
    return this.year
  }

  set nameInfo(newName) {
    this.name = newName
  }

  set authorInfo(newAuthor) {
    this.author = newAuthor
  }

  set yearInfo(newYear) {
    this.year = newYear
  }

}