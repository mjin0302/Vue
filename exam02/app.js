// router로 옮겨서 사용
import router from './router/router.js'

let template = `<div>
                  <h2>2차 시험 문제</h2>
                  <router-view></router-view>
                </div>`

// Vue 객체를 정의
new Vue({
  el: '#app',
  template: template,
  data: {
    delTodo: [],
    todos: [
      {
        done: false,
        text: '빵사기',
      },
      {
        done: false,
        text: '커피사기',
      },
      {
        done: false,
        text: '공부하기',
      },
    ]
  },
  methods: {
    // data를 주고 받을 수 있도록 데이터 관련 함수
    getParentData: function () { // 부모 데이터를 가져 옴
      return this.todos // json에서 읽어온 파일들이 저장
    },
    setParentData: function (dataList) { // == update
      this.todos = dataList
    },
    getDelParentData: function () { // 부모 데이터를 가져 옴
      return this.delTodo // json에서 읽어온 파일들이 저장
    },
    setDelParentData: function (dataList) { // == update
      this.delTodo = dataList
    },
  },
  router
})
