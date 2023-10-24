<template>
  <main class=search>
    <input type="text" v-model="search" placeholder="Search Classes...">
    <div class="item O_class" v-for="O_class in filterclasses()" :key="O_class">
      <p>{{ O_class }}</p>
    </div>
    <div class="item error" v-if="input&&!filterclasses().length">
      <p>No results found!</p>
    </div>
  </main>
</template> 

<script setup>

import { ref } from "vue";

// Search Bar basic functionality
let input = ref("");
const classes = ["CSE2102", "CSE1010", "CSE2050", "ANTH 1000", "LING 3610W"];
function filterclasses() {
  return classes.filter((O_class) =>
  O_class.toLowerCase().includes(input.value.toLowerCase())
  );
} 

</script>

<style>

/* Search Bar Styling */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

input {
  display: block;
  width: 1040px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("assets/search-bar-icon.png") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item {
  width: 790px ;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.O_class {
  background-color: lightgrey;
  cursor: pointer;
}

.error {
  background-color: tomato;
}

</style>