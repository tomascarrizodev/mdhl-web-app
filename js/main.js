const { createApp } = Vue

  createApp({
    data() {
      return {
        $header: '',
        $menu: 'a',
      }
    },
    created() {
      this.$header = document.querySelector('#header')
    },
    methods: {

    },
    computed: {

    }
  }).mount('#app')