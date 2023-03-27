export default {
  template: `<div>
              <h3>Completed To Do List</h3>
              <div id="list" v-for="todo in delTodo" style="list-style: none;">
                <label>
                  <div style="display: inline-block; width: 21vw;">
                    <input type="checkbox" v-model="todo.done">
                    <span v-bind:class="{donestyle:todo.done}">{{todo.text}}</span>
                  </div>
                </label>
              </div>
              <p>
                <button v-on:click="deleteToDo">영구삭제</button>
                <router-link tag="button" v-bind:to="{name : 'todoList'}">To Do List 이동</router-link>
              </p>
            </div>`,
  data : function() {
    return {
      delTodo : []
    }
  },
  created : function(){
    this.delTodo = this.$parent.getDelParentData();
  },
  methods : {
    deleteToDo: function () {
      this.delTodo = this.delTodo.filter(function (val) {
        return val.done == false;
      })
      this.$parent.setDelParentData(this.delTodo);
    },
  }
}