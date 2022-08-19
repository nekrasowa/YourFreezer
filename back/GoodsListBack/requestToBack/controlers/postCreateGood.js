const { goods } = require('../../goods')

async function createGood(req, res) {
  try {
    const id = uniqid()
    const {
      textGood,
      numberGood,
      unitGood
    } = req.body

    const newGood = {
      info: {
        textGood,
        numberGood,
        unitGood,
        id,
      },
      states: {
        isChecked: false,
        fieldShow: 'ReadBlock'
      }
    }
    console.log('[newGood]:', newGood)

    goods.push(newGood)

    res.json({
      isOk: true,
      massage: 'Goods is added'
    })
  } catch (err) {

  }
}

module.exports = createGood
