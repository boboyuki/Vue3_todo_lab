<template>
  <form class="flex w-full max-w-sm mx-auto">
    <input
      class="flex-1 bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
      type="email"
      placeholder="請填入代辦項目"
      v-model="content"
    />
    <button
      class="ml-4 flex-shrink-0 bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded"
      type="button"
      @click="addTodoItem(content)"
    >
      新增
    </button>
  </form>
  <ul class="w-full max-w-sm mx-auto mt-3">
    <li v-for="item in todoList" :key="item.id">
      <TodoItem
        :id="item.id"
        :text="item.content"
        :isFinished="item.isFinished"
      ></TodoItem>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useTodoStore } from "@/stores/todoStore";
import { defineAsyncComponent } from "vue";

export default {
  name: "Todo",
  components: {
    TodoItem: defineAsyncComponent(() => import("@/components/TodoItem.vue")),
  },
  data() {
    return {
      content: "",
    };
  },
  computed: {
    ...mapState(useTodoStore, ["todoList"]),
  },
  methods: {
    ...mapActions(useTodoStore, ["addTodoItem"]),
  },
};
</script>

<style></style>
