const os = require('os');

const NodeWorker = require('App/dist/server/server/NodeWorker');

const NodeWorkerThread = require('App/dist/server/server/NodeWorkerThread');

const SimulatedWorker = require('App/dist/server/server/SimulatedWorker');

const WorkerManager = require('App/dist/server/WorkerManager');

const generateTaskFactoryMethod = require('App/dist/server/generateTaskFactoryMethod');

const defaults = {
  maxWorkers: os.cpus().length
};
module.exports = class ServerWorkerManager extends WorkerManager {
  constructor($config = {}) {
    let config = {
      workerType: 'fork_worker'
    };
    Object.keys($config).forEach(key => config[key] = $config[key]);
    super(config, {
      DefaultWorkerProxy: NodeWorker,
      NodeWorkerThread,
      SimulatedWorker
    });
  }

};