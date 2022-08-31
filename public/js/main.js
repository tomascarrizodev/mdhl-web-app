const { createApp } = Vue

createApp({
    data() {
        return {
            page: 'games',
            about: '',
            game: '',
        }
    },
    created() {
        
    },
    methods: {
        show() {
            document.querySelector('#open').classList.toggle('d-none')
            document.querySelector('#close').classList.toggle('d-none')
            // document.querySelector('#aside').classList.toggle('hide')
            document.querySelector('#aside').classList.toggle('show')
            // document.querySelector('#aside').classList.toggle('d-none')
            document.querySelector('#nav').classList.toggle('hide_nav')
            document.querySelector('#principal').classList.toggle('d-none')
        },
        toggleClass: function(element) {
            const allLinks = document.querySelectorAll('.icon')
            allLinks.forEach(e => e.classList.remove('page'))
            this.page = element
            document.querySelector(`#${element}`).classList.add('page')
        },
        showAbout: function(element) {
            this.about = `${element}`
        },
        showGame: function(element) {
            this.game = `${element}`
        }
    },
    computed: {

    }
}).mount('#app')