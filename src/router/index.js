// this file creates the router instance that is used by our application

// we start by importing the createRouter and createWebHistory functions, as well as the components describing each of our views
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ClassesView from "../views/ClassesView.vue";
import ScheduleView from "../views/ScheduleView.vue";
import ProfessorInformationView from "../views/ProfessorInformationView.vue";
import ClassInformationView from "../views/ClassInformationView.vue";
import ProfileView from "../views/ProfileView.vue";
import StudentClassesView from "../views/StudentClassesView.vue";
import CreateClassView from "../views/CreateClassView.vue";
import AdminDeleteView from "../views/AdminDeleteView.vue";

/*
Failed Attempt to add router guards


function getRole() {
  const netid = sessionStorage.getItem('username');
  if (!netid) {
    return Promise.reject('No user logged in');
  }

  return fetch(`https://791afceg63.execute-api.us-east-1.amazonaws.com/prod/${netid}`)
    .then(response => response.json())
    .then(data => data.Item.role) // Directly return the role
    .catch(error => {
      console.error('Error fetching data:', error);
      return null; // Handle error case
    });
}
*/



const router = createRouter({
  // the history mode determines how vue router interacts with the url.
  // createWebHistory() simulates the default browser behavior of changing
  // the path of the url based on the current document.
  // import.meta.env.BASE_URL is a vite feature that you don't need to worry about
  // and can safely use. it refers to the current path to the directory being
  // served by vite, which in this project is always the same directory
  // (and therefore import.meta.env.BASE_URL is '/')
  history: createWebHistory(import.meta.env.BASE_URL),

  // each entry to this routes array has a path (what goes in the URL to access
  // this page), a name (check out components/AppHeader.vue for how this is used)
  // and, most importantly, the component that should be rendered for the view




  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },

    {
      path: "/home",
      name: "home",
      component: HomeView,
    },

    {
      path: "/search",
      name: "search",
      component: ClassesView,
    },

    {
      path: "/Schedule",
      name: "Schedule",
      component: StudentClassesView,
    }, 

    {
      path: "/ClassInformation",
      name: "ClassInformation",
      component: ClassInformationView,
    },

    {
      path: "/ProfessorInformation",
      name: "ProfessorInformation",
      component: ProfessorInformationView,
    },

    {
      path: "/Profile",
      name: "Profile",
      component: ProfileView,
    },

    {
      path: "/classes",
      name: "classes",
      component: StudentClassesView,
    },

    {
      path: "/create",
      name: "create",
      component: CreateClassView,
    },

    {
      path: "/delete",
      name: "delete",
      component: AdminDeleteView,
    }

  ],
});
/*

Failed attempt to add router guards


router.beforeEach((to, from, next) => {
  // Public routes that don't require authentication or role check
  const publicRoutes = ['/', '/login'];

  if (publicRoutes.includes(to.path)) {
    return next(); // Allow navigation to public routes
  }

  getRole().then(userRole => {
    // Define role-based routes
    const adminRoutes = ['/create', '/delete'];
    const studentRoutes = ['/search', '/Schedule', '/classes', '/Profile', '/ClassInformation'];
    const professorRoutes = ['/ProfessorInformation'];

    // Check role and redirect accordingly
    if (adminRoutes.includes(to.path) && userRole !== 'admin') {
      return next('/'); // Redirect non-admin
    }

    if (studentRoutes.includes(to.path) && userRole !== 'student') {
      return next('/'); // Redirect non-student
    }

    if (professorRoutes.includes(to.path) && userRole !== 'professor') {
      return next('/'); // Redirect non-professor
    }

    next(); // Proceed if role is correct or route is not protected
  }).catch(() => {
    // If getting the role fails or no user is logged in
    next('/'); // Redirect to login
  });
});
*/

export default router;
