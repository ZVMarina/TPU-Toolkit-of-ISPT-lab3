// Вариант 4

const pushkinLibrary = new Library('Библиотека имени Пушнкина')
const oneGroup = pushkinLibrary.addGroup('Отдел 1')
const twoGroup = pushkinLibrary.addGroup('Отдел 2')
const threeGroup = pushkinLibrary.addGroup('Отдел 3')
const oneEdition1 = oneGroup.addEdition('Издание 1.1', 'Автор 1', 2021)
const oneEdition2 = oneGroup.addEdition('Издание 1.2', 'Автор 1', 2022)
const twoEdition = twoGroup.addEdition('Издание 2', 'Автор 2', 2022)
const threeEdition = threeGroup.addEdition('Издание 3', 'Автор 3', 2023)

// a)

function a() {

  const libraryTPU = new Library('Научно-техническая библиотека ТПУ')
  const oneGoup = new Group('Отдел 1', 100)
  const twoGroup = new Group('Отдел 2', 110)
  const oneEdition = new Edition('Издание №1', 'Джек К.', 2008)
  const twoEdition = new Edition('Издание №2', 'Михаил В.', 1985)
  const threeEdition = new Edition('Издание №3', 'Артемий П.', 2001)

  console.log(libraryTPU)
  console.log(oneGoup)
  console.log(twoGroup)
  console.log(oneEdition)
  console.log(twoEdition)
  console.log(threeEdition)

}

// б)

function b() {

  console.log(oneGroup.nameInfo)
  console.log(twoGroup.nameInfo)
  console.log(threeGroup.nameInfo)

  console.log(oneGroup.editionNumbersInfo)
  console.log(twoGroup.editionNumbersInfo)
  console.log(threeGroup.editionNumbersInfo)

  console.log(oneEdition1.nameInfo)
  console.log(oneEdition2.nameInfo)
  console.log(twoEdition.nameInfo)
  console.log(threeEdition.nameInfo)
}

// в)

function v(year) {
  return pushkinLibrary.searchEditionYear(year) 
}
