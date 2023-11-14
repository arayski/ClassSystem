<template>
    <div class="main-content">
      <h1>Enrolled Classes</h1>
      <div class="container">
        <div class="class-box"  v-for="item in responseData.Items" :key="item.courseid.S">
          <div class="class-content">
            <h2>{{ item.courseid.S }}</h2>
            <p><strong>Location:</strong> {{ item.location.S}}</p>
            <p><strong>Time:</strong> {{ item.time.S }}</p>
            <p><strong>Professor:</strong> {{ item.intstructor.S }}</p>
          </div>
          <button class="removebutton" @click="unenrollClass(item.courseid.S)">Unenroll</button>
        </div>
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

  methods: {
    unenrollClass(courseId) {
      this.responseData.Items = this.responseData.Items.filter(item => item.courseid.S !== courseId);
    }
  },
};

</script>
  
  <style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
  }
  
  .class-box {
    display: flex;
    align-items: center; /* Aligns items vertically in the center */
    justify-content: space-between;
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px 0;
    text-align: center;
    width: 500px; /* Adjust width as needed */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #000E2F;

  }

  .class-content {
  text-align: left; 
}

  .class-box, .class-box p {
    color: white;
  }

  .class-box h2 {
    color: white;
    font-size: 30px;
  }

  h1 {
    color:#000E2F;
    font-size: 50px;
    text-align: center;
    margin-top: 10px;
  }

  .removebutton {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  
}

.removebutton:hover {
  background-color: #cc0000;
}

  </style>
  