const { createApp } = Vue

createApp({
    data() {
        return {
            page: 'home'
        }
    },
    created() {
        
    },
    methods: {
        show() {
            document.querySelector('#open').classList.toggle('d-none')
            document.querySelector('#close').classList.toggle('d-none')
            document.querySelector('#aside').classList.toggle('hide')
            document.querySelector('#aside').classList.toggle('show')
            document.querySelector('#nav').classList.toggle('hide_nav')
        },
        toggleClass: function(element) {
            const allLinks = document.querySelectorAll('.icon')
            allLinks.forEach(e => e.classList.remove('page'))

            this.page = element
            document.querySelector(`#${element}`).classList.add('page')
        }
    },
    computed: {

    }
}).mount('#app')