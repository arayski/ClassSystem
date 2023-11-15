<template>
  <div class="schedule">
    <h2>Schedule</h2>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';

export default {
  name: 'ScheduleView',
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        events: [
          // Add your events here
          // Example: { title: 'Event 1', date: '2023-11-15' },
        ],
      },
    };
  },
};
</script>

<style scoped>
.schedule {
  padding: 1rem;
  text-align: center;
}

.schedule h2 {
  font-size: 40px;
  margin-bottom: 1rem;
  color: #000E2F;
}
</style>
