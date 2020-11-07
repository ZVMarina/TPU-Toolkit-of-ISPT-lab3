class Group {
  constructor(nameGroup, library) {
    this.nameGroup = nameGroup
    this.library = library
    this.edition = []
    this.editionNumbers = 0
  }

  get nameInfo() {
    return this.nameGroup
  }

  get editionNumbersInfo() {
    return this.editionNumbers
  }

  get libraryInfo() {
    return this.library
  }

  get editionInfo() {
    return this.edition
  }

  set nameInfo(newName) {
    this.name = newName
  }

  updateNumbers() {
    this.editionNumbers = this.edition.length
  }


  addEdition(nameEdition, author, year) {
    const edition = new Edition(nameEdition, author, year, this.nameGroup)
    this.edition.push(edition)
    this.updateNumbers()
    return edition
  }

  removeEdition(nameEdition) {
    this.edition = this.edition.filter(function (edition) {
      if (nameEdition !== edition.nameEdition) {
        return edition
      }
    })
    this.updateNumbers()
  }
}