const { createApp } = Vue

createApp({
    data() {
        return {
            page: 'games',
            about: '',
            game: '',
            log: true,
            name: '',
            userName: '',
            email: '',
            password: '',
            myTeam: 'U3'
        }
    },
    created() {
        
    },
    mounted: function() {
        this.loader()
        this.header()
        if (this.page === 'games') {
            this.gameTable()
        }
    },
    methods: {
        loader: function () {
            document.querySelector('#loading').classList.add('d-none')
        },
        header: function() {
            if (this.log) {document.querySelector('#header').classList.replace('justify-content-between', 'justify-content-evenly')}
        },
        gameTable: function() {
            const allMatches = document.querySelectorAll('.game_match')
            allMatches.forEach(e => {
                // Filtrar aquellos que tengan myTeam y pintarlos
                const teams = e.innerHTML
                if (teams.includes(this.myTeam)) {
                    console.log(this.myTeam);
                }})
        },
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