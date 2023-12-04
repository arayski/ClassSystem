<template>
  <div class="main">
    <h1>Enrolled Classes</h1>
    <div class="container" v-if="!loading">
      <div v-for="(classItem, index) in data.Item.classes" :key="index">
        <div class="class-box">
          <div class="class-content">
            <h2>{{ classItem }}</h2>
          </div>
          <button class="removebutton" @click="unenrollClass(data.Item.netid, classItem)">Unenroll</button>
        </div>
      </div>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
  
export default {
  data() {
    return {
      loading: true,
      data: {},
      error: null
    };
  },
  async mounted() {
    const api = import.meta.env.VITE_API;
    const netid = sessionStorage.getItem('username');
    if (!netid) {
      this.error = 'No user logged in';
      return;
    }
    try {
      const response = await fetch(`${api}/prod/${netid}`);
      if (!response.ok) {
        throw new Error(`Error!!! status: ${response.status}`);
      }
      this.data = await response.json();
    } catch (error) {
      this.error = 'Error fetching data: ' + error.message;
      console.error('error fetching data:', error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async unenrollClass(netid, CourseID) {
      const api = import.meta.env.VITE_DELETE_STUDENT_COURSE;
      try {
        const response = await fetch(`${api}/${netid}/${CourseID}`, {
          method: 'PUT',
        });
        if (!response.ok) {
          throw new Error(`Error!!! status: ${response.status}`);
        }
        console.log('Successfully unenrolled');
        this.data.Item.classes = this.data.Item.classes.filter(course => course !== CourseID);
      } catch (error) {
        this.error = 'Error unenrolling: ' + error.message;
        console.error('Error unenrolling:', error);
      }
    },
  },
};

/* fetch(import.meta.env.VITE_API_ENDPOINT)
.then(response => response.json())
.then((data) => {
    console.log(data)
})*/
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


