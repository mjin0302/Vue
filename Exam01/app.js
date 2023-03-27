import router from './router/router.js'
import myHeader from './components/header.js'

let template = `
<div>
    <h1>영화 검색 사이트</h1>
    <my-header v-bind:parentData.sync="this.$data"></my-header>
    <router-view></router-view> <!--  -->
</div>`

// 젤 부모 역할을 함
new Vue({
    el : '#app', // index.html #app인 div에 붙음
    template : template, // div에 붙을때 template를 사용해서 붙음
    data : {
        movieArray : {}
    },
    components : {
        myHeader
    },
    methods : {
        getParentData : function(){
            return this.movieArray;
        },
        setParentData : function(movieList){
            this.movieArray = movieList;
            console.log(this.movieArray)
        }
    },
    router  // router : router
})