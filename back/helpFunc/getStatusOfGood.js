module.exports = function getStatusOfGood(date) {

  const todayDateMls = Date.now()
  const dateOfAdditionMls = Date.parse(date)
  const elapsedTime = (todayDateMls - dateOfAdditionMls)/86400000
  console.log('elapsedTime>>', elapsedTime)
  const days = Math.round(elapsedTime)
  console.log('elapsedTime>>', days)

  return days
}

