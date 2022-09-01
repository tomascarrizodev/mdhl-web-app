const { createApp } = Vue

createApp({
    data() {
        return {
            page: 'home',
            about: '',
            game: '',
            log: false,
        }
    },
    created() {
        
    },
    methods: {
        show() {
            document.querySelector('#open').classList.toggle('d-none')
            document.querySelector('#close').classList.toggle('d-none')
            document.querySelector('#aside').classList.toggle('show')
            document.querySelector('#nav').classList.toggle('hide_nav')
            document.querySelector('#principal').classList.toggle('d-none')
            if (this.page === 'rules') {document.querySelector('#back_top').classList.toggle('d-none')}
        },
        toggleClass: function(element) {
            const allLinks = document.querySelectorAll('.icon')
            allLinks.forEach(e => e.classList.remove('page'))
            this.page = element
            document.querySelector(`#${element}`).classList.add('page')
        },
        showAbout: function(about, arrow) {
            if (this.about === '') {
                document.querySelector(`#${arrow}`).classList.add('rotate')
                this.about = `${about}`
            }
            else if (this.about === about) {
                this.about = ''
                document.querySelector(`#${arrow}`).classList.remove('rotate')
            }
            else if (this.about !== about) {
                this.about = `${about}`
                document.querySelectorAll(`.arrow_class`)
                    .forEach(e => e.classList.remove('rotate'))
                document.querySelector(`#${arrow}`).classList.add('rotate')
            }
        },
        showGame: function(games) {
            if (this.game === '') {
                this.game = `${games}`
            }
            else if (this.game === games) {
                this.game = ''
            }
            else if (this.game !== games) {
                this.game = `${games}`
            }
        }, 
        backTop: function() {
            // document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    },
    computed: {
        
    }
}).mount('#app')