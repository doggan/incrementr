<template>
  <div>
    {{ currentTime }}
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'time-display',

  data() {
    return {
      currentTime: "-"
    }
  },

  mounted() {
    this.updateDateTime();
  },
  
  beforeDestroy() {
    window.clearTimeout(this.$options.timer);
  },

  methods: {
    updateDateTime() {
      let now = moment()
      this.currentTime = now.format("LL") + " " + now.format("LTS");
      this.$options.timer = window.setTimeout(this.updateDateTime, 1000);
    },
  },
};
</script>