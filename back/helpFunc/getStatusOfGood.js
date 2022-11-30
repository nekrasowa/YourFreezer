module.exports = function getStatusOfGood(date) {

  const todayDateMls = Date.now()
  const dateOfAdditionMls = Date.parse(date)
  const elapsedTime = (todayDateMls - dateOfAdditionMls)/86400000
  const days = Math.round(elapsedTime)

  return days
}

