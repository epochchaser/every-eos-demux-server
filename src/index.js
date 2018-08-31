const { BaseActionWatcher } = require('demux')
const { NodeosActionReader } = require('demux-eos')
const ObjectActionHandler = require('./ObjectActionHandler')
const updaters = require('./updaters')
const effects = require('./effects')

const actionHandler = new ObjectActionHandler(updaters, effects)

const actionReader = new NodeosActionReader(
  'https://eos.greymass.com:443',
  0 // Start at most recent blocks
)

const actionWatcher = new BaseActionWatcher(actionReader, actionHandler, 500)

actionWatcher.watch()
