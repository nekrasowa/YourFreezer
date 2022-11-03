module.exports = function bringToCorrectFreezForm(el) {
  const element = el.dataValues

  const id = element.id
  const goodName = element.name_of_good
  const goodNumber = element.number_of_good
  const goodUnit = element.unit_of_good
  const typeOfGood = element.type_of_good
  const dataOfAddition = element.data_of_addition

  const newGood = {
    id,
    goodName,
    goodNumber,
    goodUnit,
    typeOfGood,
    dataOfAddition
    }

  return newGood
}
