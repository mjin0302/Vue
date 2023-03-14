// 모듈
// export default => 정의한 내용을 다른곳에서 불러 쓸 수 있도록 한다.
// 해당 모듈 불러와서 쓸때에는 import
export default { // header.js에 있는 컴포넌트를 내보내겠다는 의미
  template: `<header>
              <h2>영화 검색 사이트</h2>
              <p>영화 검색(오늘 날짜 : )</p>

              <!-- board.json 파일 읽어오는 부분 -->
              <!-- ajax, fetch 파일 읽고 화면 출력 -->
              <input type="date" v-model="day">

              <!-- 화면에 보여지는 게시글 json파일로 다운로드 -->
              <button v-on:click="searchMovieList">검색</button>
            </header>`,
  data: function () {
    return {
      day: '',
    }
  },
  props: ['parentData'], // app.js에 dataArray
  methods: {
    searchMovieList: function (event) { // 파일을 읽어들이는 메소드
      //console.log(day)
      let selDay = this.day.split('-');
      console.log(selDay[0])
      let selDay2 = selDay.join('');
      fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=selDay2')
      .then(res => res.json())
      .then(data => {
        this.parentData.dataArray = data.boxOfficeResult; // 부모가 가진 모든 데이터리스트중에서 dataArray를 가져와서 쓴다는말
        this.$emit('update:parentData', this.parentData); // 자식이 들고와서 부모한테 줌 => 동기화 => 부모 == 자식
        this.$router.push({ name: 'movieList' });
      })
      .catch(err => console.log(err));
    }
  },
}