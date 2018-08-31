function parseTokenString(tokenString) {
  const [amountString, symbol] = tokenString.split(' ')
  const amount = parseFloat(amountString)
  return { amount, symbol }
}

//3. Third call
function updateTransferData(state, payload, blockInfo, context) {
  const { amount, symbol } = parseTokenString(payload.data.quantity)
  const { from, to, quantity, memo } = payload.data

  if ('' === from) {
    console.log('Account intercept')
    console.log(from, to, quantity, memo)
  }

  if (!state.volumeBySymbol[symbol]) {
    state.volumeBySymbol[symbol] = amount
  } else {
    state.volumeBySymbol[symbol] += amount
  }
  state.totalTransfers += 1
}

const updaters = [
  {
    actionType: 'eosio.token::transfer',
    updater: updateTransferData
  }
]

module.exports = updaters
