## 一些基础常用的工具函数、类

### Clocker 类 用于倒计时和各种轮询

- 用法

```javascript
import { Clocker } from 'crandowjs';

const clocker = new Clocker({
  countSec: 10000, // 剩余倒计时的毫秒数
  // 每次间隔的回调
  // params.curCountSec 剩余时间
  // params.curTime 当前时间（校准后）
  callback(params) {
    console.log(params);
  },
  interval: 2000, // 非必传 定时器间隔时间 默认1000 即每秒一次
  secCorrect: 0, // 非必传
});
```

### formatTime 时间格式化函数

```javascript
import { formatTime } from 'crandowjs';

// params (time: number, format: 'yyyy-MM-dd HH:mm:ss')
const timeText = formatTime(0, 'yyyy-MM-dd');
// log: 1970-01-01
```

### looseEqual (a, b) 比较两个对象全等

### noop 空函数

### remove (arr, any) 删除数组元素

### formatPhoneNum (str) 隐藏手机号码中间四位

### debounce (func, time 毫秒) 防抖

### throttle 截流

### ....各种基础的数据比较 如 isObject、isString 等
