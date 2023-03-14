export default {
  template : `<div>
              <p>제목 : {{ movie.movieNm }}</p>
              <ul>
                <li>배우 : <span v-for="item in movie.actors">{{ item.peopleNm }}</span></li>
                <li>감독 : <span v-for="item in movie.directors"> 한글 - {{ item.peopleNm }} / 영문 - {{ item.peopleNmEn }}</span></li>
                <li>장르 : <span v-for="item in movie.genres">{{ item.genreNm }}</span></li>
                <li>상영 시간 : {{ movie.showTm }}</li>
              </ul>
              <router-link tag="button" style="float:right;" v-bind:to="{ name : 'movieList' }">목록</router-link>
            </div>`,
  props: ['item'], // 파라미터 값 (router.js 확인)
  data: function () {
    return {
      movie: {}, // 한건만 조회 하니깐 객체 = { }
    }
  },
  created: function () {
    fetch('https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=' + this.item)
    .then(res => res.json())
    .then(data => {
      this.movie = data.movieInfoResult.movieInfo;
      console.log(this.movie)
    })
    .catch(err => console.log(err));
  },
}