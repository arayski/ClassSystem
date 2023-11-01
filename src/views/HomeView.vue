<template>
  <main class="home">
    <h2>My Home</h2>
    <div class="box-container">
      <div class="box">
        <img src="@/assets/enrollment-icon.png" alt="Class Enrollment" />
        <p>Class Enrollment</p>
      </div>
      <div class="box">
        <img src="@/assets/searchicon.png" alt="Class Search" />
        <p>Class Search</p>
      </div>
      <div class="box">
        <img src="@/assets/schedule-icon.png" alt="View Schedule" />
        <p>View Schedule</p>
      </div>
      <div class="box">
        <img src="@/assets/profile-icon.png" alt="User Profile" />
        <p>User Profile</p>
      </div>
    </div>
  </main>
</template>

<style>
.home {
  padding: 1rem;
}

.home h2 {
  font-size: 40px;
  margin-bottom: 1rem;
  color: #000E2F;
}

.box-container {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.box {
  text-align: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 23%;
}

.box img {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

.box p {
  font-size: 18px;
  color: #333;
}
</style>
