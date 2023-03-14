<template>
  <div>
    <button v-on:click="getData">데이터 호출</button>
    <table>
      <thead>
        <tr>
          <th>축제이름</th>
          <th>주소</th>
          <th>홈페이지</th>
          <th>사진</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.idx" v-for="item in gimhaeArry">
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td><a :href="item.homepage">{{ item.homepage }}</a></td>
          <td>{{ item.homepage }}</td>
          <td>
            <img :src= item.images[0] alt="" style="width: 70px;">
          </td>
          
          <td>{{ item.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default{ 
  data(){
    return{
      gimhaeArry:{}
    };
  },
  methods: {
    getData() {
      fetch('https://cors-anywhere.herokuapp.com/https://www.gimhae.go.kr/openapi/tour/tourinfo.do')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.gimhaeArry = data.results;
        console.log(this.gimhaeArry);
      })
      .catch(err => console.log(err))
    }
  }
}
</script>