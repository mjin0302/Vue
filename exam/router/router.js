
import main from '../components/main.js';
import movieList from '../components/movieList.js';
import movieDetail from '../components/movieDetail.js';

export default new VueRouter({
  // hash -? # + 경로 (server로 요청을 보내지 않고 페이지 이동)
  // 경로를 읽을때(url) # 뒤에 있는 경로를 읽을 수가 없음 (뷰에서 만든 컴포넌트를 쓰는것?)

  // history -> #을 제외하고 SPA(싱글페이지어플리케이션) 구현하기 위한 모드
  // mode default 값 : hash
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    // movieList
    {
      path: '/movieList',
      name: 'movieList',
      component: movieList
    },
    // movieDetail
    {
      path: '/movieDetail/:item',
      name: 'movieDetail',
      component: movieDetail,
      props: true,
    },
  ]
})