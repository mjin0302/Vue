export default {
  template: `<div>
              <h3>To do List 입력</h3>
              <hr>
              <p style="display: inline-block;">
                <input type="text" v-model.trim="addtext" v-on:keyup.enter="addToDo" placeholder="할 일">
                <button type="button">입력</button>
              </p>
              <h3>#리스트</h3>
              <div id="list" v-for="todo in todos" style="list-style: none;">
                <label>
                  <div style="display: inline-block; width: 21vw;">
                    <input type="checkbox" v-model="todo.done">
                    <span v-bind:class="{donestyle:todo.done}">{{todo.text}}</span>
                  </div>
                </label>
              </div>
              <p>{{ todos.length }}건 중 {{ remaining }}건 처리</p>
              <p>
                <button v-on:click="cleanToDo">완료 항목 삭제</button>
                <router-link tag="button" v-bind:to="{name : 'completeList'}">완료 항목 조회</router-link>
              </p>
            </div>`,
  data : function() {
    return {
      delTodos: [],
      todos : [],
      addtext: '',
    }
  },
  created : function(){
    this.todos = this.$parent.getParentData();
  },
  computed: {
    remaining: function () {
      return this.todos.filter(function (val) {
        return val.done == true;
      }).length;
    },
  },
  methods : {
    addToDo: function () {
      if (this.addtext) {
        this.todos.push({
          done: false,
          text: this.addtext,
        });
        this.addtext = '';
      }
    },
    cleanToDo: function () {
      this.delTodos = this.todos.filter(function(val) {
        return val.done == true;
      }) 
      this.$parent.setDelParentData(this.delTodos);
      
      this.todos = this.todos.filter(function (val) {
        return val.done == false;
      })
      this.$parent.setParentData(this.todos);
    },
  }
}