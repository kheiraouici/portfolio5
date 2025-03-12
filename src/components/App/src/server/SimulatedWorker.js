// const cp = require('child_process');
const GeneralWorker = require('../GeneralWorker');
const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

class SimulatedWorker extends GeneralWorker {
	constructor ($config) {
		super(...arguments);

		$config = $config || {};

		this._context = {
			global: {
				require,
				Promise
			}
		};
		this._alive = true;

		if (this._debug) {
			this._log({
				action: 'initialized'
			});
		}
	}

	_log (data) {
		let event = {
			source: 'worker_thread',
			managerId: this.managerId,
			workerId: this.id,
			processId: 'SIMULATED'
		};

		Object.keys(data).forEach(key => {
			event[key] = data[key];
		});

		if (!event.message) {
			event.message = event.action;
		}

		this._logger(event);
	}

	postMessage = (message) => {
		if (this._debug) {
			this._log({
				taskId: message.id,
				action: 'send_task_to_actual_worker',
				message: `sending taskId(${message.id}) to worker process`
			});
		}

		let argKeys = [];
		let args = Object.keys(message).filter(function (key) {
			return key.match(/^argument/);
		}).sort(function (a, b) {
			return parseInt(a.slice(8), 10) - parseInt(b.slice(8), 10);
		}).map(function (key) {
			argKeys.push(key);
			return message[key];
		});

		new AsyncFunction(...argKeys, `
			this.global.global = this.global;


			with (this.global) {
				return (${message.func})(...arguments);
			}`)
			.bind(this._context)(...args)
			.then(result => {
				this.handleWorkerMessage({
					id: message.id,
					result
				});
			})
			.catch(error => {
				this.handleWorkerMessage({
					id: message.id,
					error: error.stack
				});
			});
	}

	terminate = () => {
		if (this._debug) {
			this._log({
				action: 'terminated'
			});
		}
	}
}

module.exports = SimulatedWorker;