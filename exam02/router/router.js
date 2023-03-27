import TodoList from '../components/todoList.js'
import CompleteList from '../components/completeList.js'

export default new VueRouter({
    routes : [
        {
            path : '/',
            name : 'todoList',
            component : TodoList
        },
        {
            path : '/completeList',
            name : 'completeList',
            component : CompleteList
        }
    ]
})