# 建站编辑器
 demo: https://xj.gdt.qq.com/xjviewer/nemo/12607760?qz_gdt=uf7a2zboaaai5c76ankq&click_ext=eyJhdWlkIjoiMTc1ODM3MTciLCJkaWQiOiI1N2NjNDYwODEyZjZmMWQzM2Q3NDdiOTczY2E1NTEzOCIsImV4cF9wYXJhbSI6IndpdGhMZXZlbEV2ZW50OjIiLCJsb25nX3Bvc19pZCI6IjQwMzE3MTcxMzQ0NjI5OTEiLCJtZWRpdW1faWQiOiI3MDcwMjAyMjExNTA1MiIsIm9zX3R5cGUiOjF9&gdt_ad_id=9027413629&aidx=1420884792&ad_id=9027414921

 # eslint lint-staged
 yarn add eslint
 npx eslint --init
 # husky
 添加commit钩子 husky add .husky/pre-commit "yarn run lint-staged"

 # github 
 https://github.com/ganjianghua/g-editor.git

 # 拖拽
 拖拽属性：draggable

 - drag (拖拽目标时触发的事件)
  - dragStart 开始拖动
  - drag 正在拖动
  - dragend 拖动结束
 - drop (在目标区释放元素) 
  - dragenter - 当被拖动的元素进入目标区域内时触发此事件
  - dragover - 当被拖动的元素在目标区域内拖动时触发此事件
  - dragleave - 当被拖动的元素离开目标区域时触发此事件
  - drop - 当被拖动的元素在目标区域被放下时触发此事件

  通过dataTransfer实现数据的存储和获取
  event.dataTransfer.setData()

