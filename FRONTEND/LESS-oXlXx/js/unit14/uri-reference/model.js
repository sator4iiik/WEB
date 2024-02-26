function rand(from, to) {
  const range = to - from + 1
  let number = Math.random() * range
  return Math.trunc(number) + from
}

const generatedPower = rand(9000, 11000)
const electricityConsumption = rand(777, 14000)
const threshold = Math.trunc(generatedPower * 0.9)
const isOverPower = electricityConsumption > threshold
const msgBlackout = 'внимание блэкаут!'
const msgNormal = 'электроснабжение в норме!'
const message = isOverPower ? msgBlackout : msgNormal

generatedPower
isOverPower
message
