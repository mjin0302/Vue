// 모듈
// export default => 정의한 내용을 다른곳에서 불러 쓸 수 있도록 한다.
// 해당 모듈 불러와서 쓸때에는 import
export default { // header.js에 있는 컴포넌트를 내보내겠다는 의미
  template: `<header>
              <h2>영화 검색 사이트</h2>
              <p>영화 검색(오늘 날짜 : {{ today }})</p>

              <!-- board.json 파일 읽어오는 부분 -->
              <!-- ajax, fetch 파일 읽고 화면 출력 -->
              <input type="date" v-model="day">

              <!-- 화면에 보여지는 게시글 json파일로 다운로드 -->
              <button v-on:click="searchMovieList">검색</button>
            </header>`,
  props: ['parentData'], // app.js에 dataArray
  data: function () {
    return {
      day: '', // 선택한 날짜
      today: '', // 현재 날짜
    }
  },
  created: function () {
    let date = new Date(); // 현재 날짜 가지고 옴
    let year = date.getFullYear(); // 년도만 가지고옴
    // 달만 뽑아옴 
    // +1을 해주는 이유는 매달 끝나는 날짜가 다르기 때문에 [{1~31}, {1~30}, {1~28}] 배열로 저장되서 인덱스 값이기 때문에 +1을 해줌 -> 꽌수 피셜
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate()); // 일만 뽑아옴
    this.today = year + "년 " + month + "월 " + day + "일"
  },
  methods: {
    searchMovieList : function (event) { // 파일을 읽어들이는 메소드
      //console.log(day)
      let selDay = this.day.split('-');
      let selDay2 = selDay.join('');

      let date = new Date();
      let year = date.getFullYear();
      let month = String(date.getMonth() + 1);
      let day = String(date.getDate());
      if (month.length == 1) month = "0" + month; // month의 길이가 1이면 앞에 0을 붙여줌
      if (day.length == 1) day = "0" + day; // day 길이가 1이면 앞에 0을 붙여줌
      const temp = year + '-' + month + '-' + day;

      if(this.day > temp) {
        alert("당 일 이후의 날짜는 선택할 수 없다.")
      } else {
        fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=' + selDay2)
        .then(res => res.json()) // 받아온 데이터가 스트링형태니깐 json 형태로 변환
        .then(data => { // = json으로 변환된 data
          console.log(data)
          // 부모가 가진 모든 데이터리스트중에서 dataArray를 가져와서 쓴다는말
          this.parentData.dataArray = data.boxOfficeResult.dailyBoxOfficeList; 
          this.$emit('update:parentData', this.parentData); // 자식이 들고와서 부모한테 줌 => 동기화 => 부모 == 자식 그런갑다 하세요
          //console.log(this.data)
          this.$router.push({ name: 'movieList' }); // movieList로 강제이동
        })
        .catch(err => console.log(err));
      }
    },
  },
}