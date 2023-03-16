function observe(data) {
  if (!data) {
    return;
  }
  Object.keys(data).forEach((key) => {
    reactive(data, key, data[key])
  })
}

function reactive(data, key, value) {
  observe(data[key]);
  Object.defineProperty(data, key, {
    configurable: true,
    enumerable: true,
    get() {
      // 依赖收集
      console.log('依赖收集')
      return value;
    },
    set(newValue) {
      // 通知试图更新
      console.log('通知试图更新')
      value = newValue;
    }
  })
}
let obj = {
  a: 1,
  b: {
    c: 2
  }
}
observe(obj);
// obj.a = 3;
// obj.b.c = 4;
// obj.d = 3
// console.log(obj.d)

