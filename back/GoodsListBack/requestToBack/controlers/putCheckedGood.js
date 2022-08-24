const GoodsList = require('../../requestToDB/models/goodsListModel')

async function checkedGood(req, res) {
  try {
    console.log('[req.body]:', req.body)

    const retuntWhat = await GoodsList.update({is_Checked: !req.body.isChecked}, {
      where: {
        id: req.body.id
      }
    })

    console.log('[retuntWhat]:', retuntWhat)
    //  {
    //   res.json({
    //     isOk: false,
    //     massage: 'Goods is NOT checked'
    //   })
    // }

    res.json({
      isOk: true,
      massage: 'Goods is checked'
    })
  }
  catch (err) {
    res.json({
      isOk: false,
      massage: `Goods is NOT checked! ${err.massage}`
    })
  }
}

module.exports = checkedGood
