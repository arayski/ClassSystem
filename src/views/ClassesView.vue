<template>
  <div class="main-content">
    <h1>Select Classes</h1>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else class="container">
      <div class="class-box" v-for="item in responseData.Items" :key="item.courseid.S">
        <div class="class-content">
          <h2>{{ item.courseid.S }}</h2>
          <p><strong>Location:</strong> {{ item.location.S }}</p>
          <p><strong>Time:</strong> {{ item.time.S }}</p>
          <p><strong>Professor:</strong> {{ item.instructor.S }}</p>
          <p><strong>Description:</strong> {{ item.description.S }}</p>
          
          <p v-if="isEnrolled(item.courseid.S)">Enrolled</p>
          <button class="enrollbutton" @click="enrollInClass(item.courseid.S)" v-else>Enroll</button>
        </div>
      </div>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      responseData: {},
      studentData: {},
      error: null,
      showModal: false,
      selectedClass: null,
    };
  },

  async mounted() {
    this.loading = true;
    try {
      await Promise.all([this.fetchClasses(), this.getStudentInformation()]);
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  },

  methods: {
    async fetchClasses() {
      const apiUrl = import.meta.env.VITE_GET_ALL_API;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error fetching classes: status ${response.status}`);
        }
        this.responseData = await response.json();
      } catch (error) {
        console.error('Error fetching classes:', error);
        throw error;
      }
    },
    
    async getStudentInformation() {
      const netid = sessionStorage.getItem('username');
      if (!netid) {
        throw new Error('No user logged in');
      }
      const api = import.meta.env.VITE_API;
      try {
        const response = await fetch(`${api}/prod/${netid}`);
        if (!response.ok) {
          throw new Error(`Error fetching student data: status ${response.status}`);
        }
        this.studentData = await response.json();
      } catch (error) {
        console.error('Error fetching student data:', error);
        throw error;
      }
    },

    async enrollInClass(courseId) {
      const netid = sessionStorage.getItem('username');
      if (!netid) {
        this.error = 'No user logged in';
        return;
      }
      const api = import.meta.env.VITE_STUDENT_ENROLL;
      try {
        const response = await fetch(`${api}/${netid}/${courseId}`, {
          method: 'PUT',
        });
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        console.log('Successfully enrolled');
        this.getStudentInformation(); // Update student data locally
      } catch (error) {
        console.error('Error enrolling:', error);
        this.error = 'Error enrolling: ' + error.message;
      }
    },

    
    isEnrolled(courseId) {
  // Check if studentData, Item, classes, and L are defined
  if (this.studentData && 
      this.studentData.Item && 
      this.studentData.Item.classes && 
      Array.isArray(this.studentData.Item.classes.L)) {
    return this.studentData.Item.classes.L.some(classItem => classItem.S === courseId);
  }
  return false; // Return false if any of the properties are not defined
  }


  },
};
</script>


<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
  }
  
  .class-box {
    display: flex;
    align-items: center; 
    justify-content: space-between;
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px 0;
    text-align: center;
    width: 500px; 
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

  .enrollbutton {
    background-color: blue;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
  
}

.enrollbutton:hover {
  background-color: lightblue;
}

.loading, .error {
    color: red;
    text-align: center;
  }

</style>

