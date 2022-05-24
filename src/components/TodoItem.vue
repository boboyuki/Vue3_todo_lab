<template>
  <div class="flex justify-between items-center p-3 border">
    <input type="checkbox" v-model="isChecked" @change="changeTodoStatus(id)" />
    <p :class="{ isFinished: isChecked }">{{ text }}</p>
    <button
      :disabled="!isChecked"
      class="bg-red-500 hover:bg-reds-700 text-white font-bold py-1 px-4 rounded-full"
      :class="{'bg-red-100': !isChecked}"
      @click="deleteTodoItem(id)"
    >
      刪除
    </button>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useTodoStore } from "@/stores/todoStore";
export default {
  name: "TodoItem",
  props: {
    id: {
      type: [String, Number],
    },
    text: {
      type: String,
    },
    isFinished: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isChecked: this.isFinished,
    };
  },
  methods: {
    changeTodoStatus(id) {
      this.finishTodoItem(id);
    },
    ...mapActions(useTodoStore, [
      "deleteTodoItem",
      "editTodoItem",
      "finishTodoItem",
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.isFinished {
  text-decoration: line-through;
}
</style>
