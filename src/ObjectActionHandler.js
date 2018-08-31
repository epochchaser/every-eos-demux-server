const { AbstractActionHandler } = require('demux')

const state = {
  volumeBySymbol: {},
  totalTransfers: 0,
  indexState: { blockNumber: 0, blockHash: '' }
} // Initial state

class ObjectActionHandler extends AbstractActionHandler {
  //2. Second call
  async handleWithState(handle) {
    await handle(state)
  }

  //1. First call
  async loadIndexState() {
    return state.indexState
  }

  //5. Fifth call
  async updateIndexState(stateObj, block) {
    stateObj.indexState.blockNumber = block.blockInfo.blockNumber
    stateObj.indexState.blockHash = block.blockInfo.blockHash
  }
}

module.exports = ObjectActionHandler
