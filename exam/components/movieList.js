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
                  <router-link tag="td" :to="{name: 'movieDetail', params:{'item':item.movieCd}}">{{ item.movieNm }}</router-link>
                  <td>{{ item.audiAcc }}</td>
                  <td>{{ item.movieCd }}</td>
                  <td>
                    <button v-on:click="delMovieList(item.movieCd)">삭제</button>
                  </td>
                </tr>
              </table>
            </div>`,

  data: function () {
    return {
      object: [], // 한건의 영화 자체는 객체
    }
  },
  created: function () {
    this.object = this.$parent.getParentData();
  },
  methods: {
    delMovieList: function (movieCd) {
      for (let i = 0; i < this.object.length; i++) {
        if (this.object[i].movieCd == movieCd) {
          this.object.splice(i, 1); //splice(i, 1) => i = 시작 인덱스, 1 = 1개를 지움
        }
      }
      this.$parent.setParentData(this.object); // 지워진 값을 부모에게 업데이트..?
    },
  }
}