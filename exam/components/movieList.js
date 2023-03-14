export default {
  template: `<div>
              <table id="list">
                <!-- HEADER -->
                <tr>
                  <th>순위</th>
                  <th>영화 제목</th>
                  <th>누적 관객수</th>
                  <th>개봉날짜</th>
                  <th></th>
                </tr>
                <tr v-for="item in object" v-bind:key="item.movieCd">
                  <td>{{ item.rnum }}</td>
                  <td>{{ item.movieNm }}</td>
                  <td>{{ item.audiAcc }}</td>
                  <td>{{ item.movieCd }}</td>
                  <td>
                    <button v-on:click="">삭제</button>
                  </td>
                </tr>
              </table>
            </div>`,
  data: function () {
    return {
      object: []
    }
  },
  created: function () {
    this.object = this.$parent.getParentData();
    console.log(this.object)
  },
  // methods: {
  //   boardDelete: function (no) {
  //     for (let i = 0; i < this.object.length; i++) {
  //       if (this.object[i].no == no) {
  //         this.object.splice(i, 1);
  //       }
  //     }
  //     this.$parent.setParentData(this.object);
  //   },
  // }
}