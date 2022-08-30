const GoodsList = require('../../requestToDB/models/goodsListModel')

async function checkedGood(req, res) {
  try {
    console.log('[req.body]:', req.body)
    const id = req.body.id
    const is_Checked = req.body.isChecked

    if (Number.isFinite(id) && typeof is_Checked === "boolean") {

      const retuntWhat = await GoodsList.update(
        { is_Checked: !is_Checked }, 
        {  where: { id } }
      )
        console.log('retuntWhat>>', retuntWhat.includes(0))

      if (retuntWhat.includes(0)) {
        console.log('retuntWhat>>', retuntWhat)
        res.json({
          status: 400,
          massage: 'Goods is NOT find on serv'
        })
        return
      }

      res.json({
        status: 200,
        massage: 'Goods is checked'
      })
      return
    }
    res.json({
      status: 400,
      massage: 'Incorrect data entered'
    })
  }
  catch (err) {
    res.json({
      status: 500,
      massage: `Goods is NOT checked! ${err.massage}`
    })
  }
}

module.exports = checkedGood
