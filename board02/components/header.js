// 모듈
// export default => 정의한 내용을 다른곳에서 불러 쓸 수 있도록 한다.
// 해당 모듈 불러와서 쓸때에는 import
export default { // header.js에 있는 컴포넌트를 내보내겠다는 의미
  template: `
    <header>
      <h2>간단한 게시판</h2>
      <p>게시판 데이터 json 파일 읽기</p>

      <!-- board.json 파일 읽어오는 부분 -->
      <!-- ajax, fetch 파일 읽고 화면 출력 -->
      <input type="file" v-on:change="loadData($event)">

      <!-- 화면에 보여지는 게시글 json파일로 다운로드 -->
      <button v-on:click="saveBoardList">게시판 저장하기</button>
    </header>`,

  props: ['parentData'], // app.js에 dataArray
  methods: {
    loadData: function (event) { // 파일을 읽어들이는 메소드
      let file = event.target.files[0].name;
      if (file) { // 파일 이름이 있다면
        fetch('/board02/data/' + file)
        .then(response => response.json())
        .then(data => { // data : json파일을 읽어온것
          //this.dataArray = data; // 읽어온 데이터를 vue 인스턴스에 넣어줌
          this.parentData.dataArray = data; // 부모가 가진 모든 데이터리스트중에서 dataArray를 가져와서 쓴다는말
          this.$emit('update:parentData', this.parentData); // 자식이 들고와서 부모한테 줌 => 동기화 => 부모 == 자식

          // <router-link to="/boardList">이동</router-link>
          // + 
          // click까지 진행
          // $router.push
          this.$router.push({name : 'boardList'});
        })
        .catch(err => console.log(err));
      }
    },
    saveBoardList: function () {
      // 게시글을 담고 있는 변수 - object
      let data = this.dataArray;

      if (data.length == 0) { // 게시글이 없다면
        alert('저장할 게시판 내용이 없습니다.');
        return;
      }

      if (typeof data === 'object') { // object타입이라면
        // object를 json형태의 문자열로 변환
        data = JSON.stringify(data, undefined, 4); // JSON.stringify(data)로 써도됨
      }

      // 파일 다운 받기 위해서 사용
      // 이미지, 텍스트 다운 받을때 Blob을 사용함
      //  new Blob([data], {type:'text/json'}); => [data]의 {type:'text/json'} 타입이 json 형태라는 말
      let blob = new Blob([data], { type: 'text/json' });
      let a = document.createElement('a');
      // 다운 받을 파일명
      a.download = 'board.json'; // a태그를 클릭하였을때 자동 다운로드되도록 해주는것(파일 다운로드를 의미함)
      // 서버에서 다운 받을 파일 URL(경로)
      a.href = window.URL.createObjectURL(blob);
      // a태그 클릭 이벤트 실행
      a.click();
    }
  }
}