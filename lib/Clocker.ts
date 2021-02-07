// /**
// # Clocker
// # 使用示例
// ```
// let clocker = new Clocker({countSec: 600000, callback: () => {}});
// clocker.clear()
// ```
//  */

export interface returnType {
  curCountSec: number
  curTime: number
}

export interface paramsType {
  callback?(params?: returnType): void
  secCorrect?: number
  interval?: number
  countSec: number
}

class Clocker {
  public originTime: number = 0
  public countSec: number = 0
  public callback: any
  public interval: any = 0
  public secCorrect = 0
  public timer: any = null

  constructor(params: paramsType) {
    this.reset(params)
  }

  start() {
    this.clear()
    const me = this
    this.timer = setTimeout(() => {
      const diffSec = Date.now() - me.originTime
      const curCountSec = me.countSec - diffSec
      const returnObj = {
        curCountSec,
        curTime: Date.now() - me.secCorrect,
      }
      me.callback && me.callback(returnObj)
      if (curCountSec > 0) {
        me.start()
      }
    }, this.interval)
  }

  clear() {
    clearTimeout(this.timer)
    this.timer = null
  }

  reset({ callback = () => {}, countSec = 60000, secCorrect = 0, interval = 1000 }: paramsType) {
    this.originTime = Date.now() // 记录开始时间
    this.countSec = countSec
    if (callback) {
      this.callback = callback
    }
    this.interval = interval
    this.secCorrect = secCorrect
    this.start()
  }
}

export { Clocker }
