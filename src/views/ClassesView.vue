<template>
    <div class="main-content">
      <h1>Enrolled Classes</h1>
      <div class="container">
        <div class="class-box" v-for="classInfo in classes" :key="classInfo.id">
          <div class="class-content">
            <h2>{{ classInfo.name }}</h2>
            <p><strong>Location:</strong> {{ classInfo.location }}</p>
            <p><strong>Time:</strong> {{ classInfo.time }}</p>
            <p><strong>Professor:</strong> {{ classInfo.professor }}</p>
          </div>
          <button class="remove-btn">Unenroll</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        classes: [
          { id: 1, name: 'CSE2050', location: 'ITE 138', time: 'Tu 10:00 AM - 11:50 AM', professor: 'Prof. Scoggin' },
          { id: 2, name: 'MATH 2110', location: 'AUST 108', time: 'MoWeFr 10:10 AM -11:00 AM', professor: 'Prof. Hall' },
          { id: 3, name: 'CHEM 2241', location: 'MCHU', time: 'TuTh 8:00am-9:15am', professor: 'Prof. Anwar' },
          { id: 4, name: 'ME 2233', location: 'BOUS A106', time: 'TuTh 12:30 PM -1:45 PM', professor: 'Prof. Francesco' },
          { id: 5, name: 'CSE2500', location: 'MCHU 101', time: 'TuTh 10:00 PM - 11:50 PM', professor: 'Prof. Mahmood' },
          { id: 6, name: 'CSE1007', location: 'MCHU 101', time: 'TuTh 10:00 PM - 11:50 PM', professor: 'Prof. Dawson' },
          
          
        ]
      };
    }
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

  .remove-btn {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  
}

.remove-btn:hover {
  background-color: #cc0000;
}

  </style>
  