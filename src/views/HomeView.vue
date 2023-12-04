<template>
  <main class="home">
    <h2>Welcome!</h2>
    <div class="box-container">
      <p id="intro">
        This is the new class scheduling app for our students and faculty.<br><br>
      
        <p class="role">
          If you are a <strong>Student: </strong><br>
          - <strong>Enrolled Classes</strong> will show any courses the student is enrolled in.<br>
          - <strong>Select Classes</strong> will include the entire course catalog for students to pick and choose.<br><br>
        </p>
        <p class="role">
          If you are a <strong>Professor: </strong><br>
          - <strong>Professor</strong> will show any courses the professor is teaching.<br><br>
        </p>
        <p class="role">
          If you are a <strong>Admin: </strong><br>
          - <strong>Add Classes</strong> will allow you to create courses that will appear in the catalog.<br>
          - <strong>Delete Classes</strong> will allow you to delete any course which will then be removed from the catalog. <br>
        </p>
      </p>
    </div>
  </main>
</template>


<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function handleSubmit() {
    router.push('/classes')
}
</script>

<style>
.home {
  padding: 1rem;
  text-align: center;
}
.home h2 {
  font-size: 40px;
  margin-bottom: 1rem;
  color: #000E2F;
}
.box-container {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: background-color 0.2s;
  text-decoration: none;
  color: #000;
}
.role { 
  text-align: left;
}
</style>