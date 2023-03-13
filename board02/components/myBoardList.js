export default { 
  template: `<div>
              <table id="list">
                <!-- HEADER -->
                <tr>
                  <th style="width:50px;">글번호</th>
                  <th>글제목</th>
                  <th style="width:50px;">조회수</th>
                  <th style="width:70px;"></th>
                </tr>
                <!-- DATA LIST -->
                <!-- object => dataArray(app.js에 있음) -->
                <tr v-for="item in object" v-bind:key="item.no">
                  <td>{{ item.no }}</td>
                  <!-- params => 매개 변수를 보낼때 사용 -->
                  <router-link tag="td" :to="{name: 'boardRead', params:{'item':item}}">{{ item.title }}</router-link>
                  <td>{{ item.view }}</td>
                  <td>
                    <button v-on:click="boardDelete(item.no)">삭제</button>
                  </td>
                </tr>
              </table>
              <router-link tag="button" style="float:right;" v-bind:to="{name: 'boardWrite'}">글쓰기</router-link>
            </div>`,
  data : function() {
    return {
      object: []
    }
  },
  // 컴포넌트가 생성 될 때, 부모 컴포넌트의 데이터를 얻어 온다.
  // boardList Reading (부모의 데이터를 가져오는것이기 때문에) => 목록조회
  created: function() {
    this.object = this.$parent.getParentData(); 
  },
  methods: {
    boardDelete: function (no) {
      for(let i=0; i < this.object.length; i++) {
        if(this.object[i].no == no) {
          this.object.splice(i, 1); 
        }
      }
      this.$parent.setParentData(this.object);
    },
  }
}