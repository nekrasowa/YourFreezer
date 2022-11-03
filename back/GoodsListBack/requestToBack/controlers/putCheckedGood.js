const GoodsList = require('../../../requestToDB/models/goodsListModel')

async function checkedGood(req, res) {
  try {
    const id = req.body.id
    const is_Checked = req.body.isChecked

    if (Number.isFinite(id) && typeof is_Checked === "boolean") {

      const retuntWhat = await GoodsList.update(
        { is_Checked: !is_Checked }, 
        {  where: { id } }
      )

      if (retuntWhat.includes(0)) {
        res.json({
          status: 400,
          message: 'Goods is NOT find on serv'
        })
        return
      }

      res.json({
        status: 200,
        message: 'Goods is checked'
      })
      return
    }
    res.json({
      status: 400,
      message: 'Incorrect data entered'
    })
  }
  catch (err) {
    res.json({
      status: 500,
      message: `Goods is NOT checked! ${err.message}`
    })
  }
}

module.exports = checkedGood
