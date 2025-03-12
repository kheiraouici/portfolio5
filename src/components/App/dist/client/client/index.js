const isModern = require('App/dist/client/client/isModern');

const WorkerManager = require('App/dist/client/WorkerManager');

const generateTaskFactoryMethod = require('App/dist/client/generateTaskFactoryMethod');

let WorkerProxies;

if (isModern()) {
  WorkerProxies = {
    DefaultWorkerProxy: require('App/dist/client/client/WebWorker')
  };
}

module.exports = class ClientWorkerManager extends WorkerManager {
  constructor($config = {}) {
    if (!WorkerProxies) {
      throw new Error('The browser does not support Workers');
    }

    let config = {
      workerType: 'web_worker'
    };
    Object.keys($config).forEach(key => config[key] = $config[key]);
    super(config, WorkerProxies);
  }

};