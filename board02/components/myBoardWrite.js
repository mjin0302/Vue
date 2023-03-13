export default {
  template: `<div>
              <table id="list">
                <tr>
                  <td>글제목</td>
                  <td><input type="text" style="width:90%; " v-model="title"></td>
                </tr>
                <tr>
                  <td colspan="2">
                    <textarea style="width:100%;" v-model="content"></textarea>
                  </td>
                </tr>     
              </table>
              <router-link tag="button" style="float:right;" v-bind:to="{name: 'boardList'}">목록</router-link>
              <button style="float:right;" v-on:click="boardSave">저장</button>
            </div>`,
  data: function () {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    boardSave: function () {
      let dataList = this.$parent.getParentData();

      let no = 1;

      if(dataList.length != 0) {
        // 데이터가 총 3건 -> length 3 -> 배열[3] -> 4번째
        let index = dataList.length -1;
        // index를 활용하여 마지막 게시판 no를 가지고 온뒤
        // + 1 -> 마지막 게시판 번호
        no = parseInt(dataList[index].no) + 1;
      }

      let boardInfo = {
        'no': no,
        'title': this.title,
        'content': this.content,
        'view': '1'
      }

      // this.dataArray['board'].push(boardInfo);
      dataList.push(boardInfo);
      this.$parent.setParentData(dataList); // 부모한테 갱신

      this.$router.push({ name : 'boardList' }); // 저장을 누르면 값이 들어가고 리스트로 이동
    }
  },
}
