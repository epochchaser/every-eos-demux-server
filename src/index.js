const { BaseActionWatcher } = require('demux')
const { NodeosActionReader } = require('demux-eos')
const ObjectActionHandler = require('./ObjectActionHandler')
const updaters = require('./updaters')
const effects = require('./effects')

const actionHandler = new ObjectActionHandler(updaters, effects)

const actionReader = new NodeosActionReader('https://eos.greymass.com:443', 13962005, false)

const actionWatcher = new BaseActionWatcher(actionReader, actionHandler, 250)

actionWatcher.watch()
