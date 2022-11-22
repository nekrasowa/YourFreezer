module.exports = function bringToCorrectFreezForm(el) {
  const element = el.dataValues

  const id = element.id
  const goodName = element.name_of_good
  const goodNumber = correctForm()
  const goodUnit = element.unit_of_good
  const typeOfGood = element.type_of_good
  const dataOfAddition = element.data_of_addition

  function correctForm() {
    if(element.number_of_good === null) {
      return ''
    }
    return element.number_of_good
  }
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
