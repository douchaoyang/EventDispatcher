/*
**@Author  douchaoyang
*/
window.Signal = window.Signal || (function() {
	function EventDispatcher() {
		// 已监听的事件组
		this._events = {};
	};
	EventDispatcher.prototype.event = function(type, data = null) {
		if (!this._events || !this._events[type]) 
			return;
		var listeners = this._events[type];
		for (var i = 0, n = listeners.length; i < n; i++) {
			var item = listeners[i];
			var handler = item.handler;
			var context = item.context;
			handler.apply(context, [data]);
		}
	};
	EventDispatcher.prototype.on = function(type, context, handler) {
		var listeners = this._events[type];
		if (listeners === undefined) {
			listeners = [];
			this._events[type] = listeners;
		}
		var item = {
			handler: handler,
			context: context
		};
		listeners.push(item);
		return item;
	};
	EventDispatcher.prototype.off = function(type, context, handler) {
		var listeners = this._events[type];
		if (listeners !== undefined) {
			for (var i = 0, n = listeners.length; i < n; i++) {
				var item = listeners[i];
				if (item.handler === handler && item.context === context) {
					listeners.splice(i, 1);
					return;
				}
			}
		}
	};
	EventDispatcher.prototype.offAll = function(type) {
		if (!this._events || !this._events[type]) 
			return;
		delete this._events[type];

	};
	return new EventDispatcher()
})();