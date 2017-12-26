# EventDispatcher
JavaScript事件派发器

特点：`单例模式`

* `使用方法`：

```javascript
Signal.on(type,caller,listener); //监听事件
Signal.off(type,caller,listener);//移除事件
Signal.event(type,data);         //派发事件
Signal.offAll(type);             //移除某一事件类型的所有监听
```

* [`关于作者`](http://www.douchaoyang.com)
