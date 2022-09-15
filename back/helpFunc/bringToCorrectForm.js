module.exports = function bringToCorrectForm(el) {
    const element = el.dataValues

    const id = element.id
    const textGood = element.name_of_good
    const numberGood = element.number_of_good
    const unitGood = element.unit_of_good
    const isChecked = element.is_Checked

    const newGood = {
      info: {
        textGood,
        numberGood,
        unitGood,
        id
      },
      states: {
        isChecked,
        fieldShow: 'ReadBlock'
      }
    }

    return newGood
  }
