<template>
  <Pivot
    toolbar
  />
</template>
<script>
// Import the Pivot component and CSS styles
import Pivot from "vue-flexmonster/vue3";
import "flexmonster/flexmonster.css";

export default {
  name: 'App',
  // Register the Pivot component with the components option
  components: {
    Pivot,
  },
};
</script>