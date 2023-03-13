import main from '../components/main.js';
import myBoardList from '../components/myBoardList.js';
import myBoardRead from '../components/myBoardRead.js';
import myBoardWrite from '../components/myBoardWrite.js';

export default new VueRouter ({
  // hash -? # + 경로 (server로 요청을 보내지 않고 페이지 이동)
  // 경로를 읽을때(url) # 뒤에 있는 경로를 읽을 수가 없음 (뷰에서 만든 컴포넌트를 쓰는것?)

  // history -> #을 제외하고 SPA(싱글페이지어플리케이션) 구현하기 위한 모드
  // mode default 값 : hash
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    // boardList
    {
      path: '/boardList',
      name: 'boardList',
      component: myBoardList
    },
    // boardRead
    {
      //boardRead로 이동할 때 item이라는 매개변수를 붙여서 넘어감, 따라서 myBoardRead.js.가 item을 읽어가야함
      // myBoardList.js -> router.js -> myBoardRead.js
      path: '/boardRead/:item', 
      name: 'boardRead',
      component: myBoardRead,
      props: true
    },
    // boardWrite
    {
      path: '/boardWrite',
      name: 'boardWrite',
      component: myBoardWrite,
      props: true
    },
  ]
})