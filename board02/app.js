// 단일 파일 컴포넌트 = 부모 컴포넌트 역할을 할것임
import myHeader from './components/header.js'
// router로 옮겨서 사용
import router from './router/router.js'

// this.$data : 부모가 가진 모든 data를 자식쪽에서 가져옴
//부모의 데이터에다가 불러온 데이터를 저장해야하므로 sync를 씀
// 계속 사용 할 부분
//<router-view></router-view> router를 붙여줌
let template = `
    <div>
      <my-header v-bind:parentData.sync="this.$data"></my-header>
      <router-view></router-view>
    </div>
  `

// Vue 객체를 정의
new Vue({ // 얘가 부모임
  el: '#app',
  template: template,
  data: {
    dataArray: {},     // 파일에서 읽은 데이터 -> 전역변수
  },
  components: {
    // 공통으로 사용할 기능을 headerComponent로 이동
    'my-header': myHeader,
  },
  methods: {
    // data를 주고 받을 수 있도록 데이터 관련 함수
    getParentData : function() {
      return this.dataArray['board'] //json에서 읽어온 파일들이 저장
    },
    setParentData: function (dataList) {
      this.dataArray['board'] = dataList
    },
  },
  router // => import router from './router/router.js'를 실행? (4번째줄)
})
