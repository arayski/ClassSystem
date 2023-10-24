<template>
  <main class="form">
    <h2>This is a form example</h2>
    <p>
      This page will be where users will search for classes
    </p>

    <input type="text" v-model="input" placeholder="Search Classes..."/>
    <div class="item class" v-for="classes in filterclasses()" :key="class">
      <p>{{ class }}</p>
    </div>
    <div class="item error" v-if="input&&!filterclasses().length">
      <p>No results found!</p>
    </div>

    <form @submit.prevent="createTodo" class="create-todo">
      <label for="todo">New Todo</label>
      <input type="text" id="todo" name="todo" v-model="newTodo" />
      <button type="submit">Save</button>
    </form>

    <ul>
      <!--
        v-for requires a unique key for every element so that it can efficiently keep track
        of each list item. it is possible for the user to type the same todo more than once,
        so the todo itself isn't necessarily unique. the index on its own is of course unique,
        it represents each unique place in the array. there are unfortunately edge case issues
        with using the index alone that we don't need to get into, so we combine the todo and
        the index into a unique key that will work in all situations
      -->
      <li v-for="(todo, index) in todos" :key="todo + index">
        {{ todo }}
        <button @click="deleteTodo(index)">Delete</button>
      </li>

      <!--
        it is a good user experience practice to provide feedback when in an "emtpy state",
        in this case, where there are no todos to show yet. this informs the user of
        the current status of the system (working), and doesn't make them wonder if something
        has gone wrong
       -->
      <li v-if="todos.length === 0">
        <p>No Todos Yet, go ahead and create one!</p>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { ref } from "vue";

const newTodo = ref("");

const todos = ref([]);

// Search Bar basic functionality
let input = ref("");
const classes = ["CSE2102", "CSE1010", "CSE2050"];
function filterclasses() {
  return fruits.filter((class{}) , fruit.toLowerCase().includes(input.value.toLowerCase()));}

// function to run when the create todo form is submitted
function createTodo() {
  // sanitize the input by removing the whitespace from the beginning and end of newTodo.value
  const todoToAdd = newTodo.value.trim();

  // if the sanitized input is not an empty string (i.e., an actual todo), add it to the list and reset the form
  if (todoToAdd !== "") {
    todos.value.push(todoToAdd);
    newTodo.value = "";
  }
}

// when a todo's delete button is clicked, the index of that todo is passed to this function
// Array.splice takes an index in the array and a number of items to delete after that
function deleteTodo(index) {
  todos.value.splice(index, 1);
}
</script>

<style>
.form {
  padding: 1rem;
}

.form h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.form p {
  margin-bottom: 1rem;
}

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
  width: 790px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.fruit {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
}

.error {
  background-color: tomato;
}


/* flex layouts allow us to position elements next to each other that would otherwise have been on top of each other */
.form ul {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}
.form li {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

/* create some space beneath the create todo form */
.form form {
  margin-bottom: 1rem;
}

/* set some default styling to buttons and inputs for borders, heights, and padding */
.form :is(input, button) {
  line-height: 2rem;
  padding-inline: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #d9d9d9;
  margin-left: 0.5rem;
  color: #202020;
}
</style>
