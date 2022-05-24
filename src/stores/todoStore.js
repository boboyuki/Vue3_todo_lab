import { defineStore } from "pinia"

export const useTodoStore = defineStore({
    id: "todo",
    state: () => ({
        todoList: []
    }),
    actions: {
        addTodoItem(text) {
            this.todoList.push({content: text, id: Date.now(), isFinished: false })
        },
        editTodoItem(id, text) {
            const index = this.todoList.findIndex(item => item.id === id);
            this.todoList[index] = {...this.todoList[index], content: text };
        },
        finishTodoItem(id) {
            const index = this.todoList.findIndex(item => item.id === id);
            this.todoList[index] = {...this.todoList[index], isFinished: !this.todoList[index].isFinished };
        },
        deleteTodoItem(id) {
            this.todoList = this.todoList.filter(item => item.id !== id).sort((a, b) => a.id - b.id);
        }
    }
})