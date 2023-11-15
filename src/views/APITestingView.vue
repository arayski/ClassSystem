<template>
    <div>
      <h1>API Response</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        
        <h2 v-for="item in responseData.Items" :key="item.courseid.S">
            {{ item.courseid.S }}
        </h2>
        
      </div>
    </div>
  </template>
  
<script>
  export default {
    data() {
      return {
        loading: true,
        responseData: {},

      };
    },
    async mounted() {
    const apiUrl = 'https://kyckkjoxeb.execute-api.us-east-1.amazonaws.com/newnew/all';
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.responseData = await response.json();
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    } 
    finally {
      this.loading = false;
    }
  },
};

</script>
  


