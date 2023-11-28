<template>
  <div id="app-wrapper">
    <!-- Render AppHeader based on showHeader, showHeader only after login-->
    <AppHeader v-if="showHeader" />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import { watch } from 'vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import AppHeader from "./components/AppHeader.vue";

// Controls the visibility of the AppHeader
const showHeader = ref(true);

// Use the useRoute composable to access the current route
const route = useRoute();

// Watcher to update showHeader based on the route
watch(route, (newRoute) => 
{
  showHeader.value = newRoute.name !== 'login';
}, { immediate: true });
</script>
