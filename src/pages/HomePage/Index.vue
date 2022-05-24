<template>
  <Header>
    <template #title>
      <h3>{{ getTitle("Vue CLI") }}</h3>
    </template>
  </Header>
  <router-link to="/todo">前往todoApp</router-link>
</template>

<script>
import { defineAsyncComponent } from "vue"
export default {
    name: "Home",
    components: {
      Header: defineAsyncComponent(() => import("@components/Header.vue"))
    },
    computed: {
      getTitle () { 
        return (value) => {
            return value + "教學範例"
        }}
    }
}
</script>

<style>

</style>