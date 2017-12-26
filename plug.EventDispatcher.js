/*
**@Author  douchaoyang
*/
window.Signal = window.Signal || (function() {
	function EventDispatcher() {
		// 已监听的事件组
		this._EVENTS_ = {};
	};
	EventDispatcher.prototype.event = function(type, data = null) {
		if (!this._EVENTS_ || !this._EVENTS_[type]) 
			return;
		var listeners = this._EVENTS_[type];
		for (var i = 0, n = listeners.length; i < n; i++) {
			var instance = listeners[i];
			var handler = instance.handler;
			var caller = instance.caller;
			handler.apply(caller, [data]);
		}
	};
	EventDispatcher.prototype.on = function(type, caller, handler) {
		var listeners = this._EVENTS_[type];
		if (listeners === undefined) {
			listeners = [];
			this._EVENTS_[type] = listeners;
		}
		var instance = {
			handler: handler,
			caller: caller
		};
		listeners.push(instance);
		return instance;
	};
	EventDispatcher.prototype.off = function(type, caller, handler) {
		var listeners = this._EVENTS_[type];
		if (listeners !== undefined) {
			for (var i = 0, n = listeners.length; i < n; i++) {
				var instance = listeners[i];
				if (instance.handler === handler && instance.caller === caller) {
					listeners.splice(i, 1);
					return;
				}
			}
		}
	};
	EventDispatcher.prototype.offAll = function(type) {
		if (!this._EVENTS_ || !this._EVENTS_[type]) 
			return;
		delete this._EVENTS_[type];

	};
	return new EventDispatcher()
})();