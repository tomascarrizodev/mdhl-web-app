const { createApp } = Vue

createApp({
    data() {
        return {
            page: 'registration',
            about: '',
            game: '',
            log: true,
            name: '',
            userName: '',
            email: '',
            password: '',
            myTeam: 'U4',
            teamFilter: 'all',
            gender: ''
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
                // const teamsOne = e.filter(d => d.innerHTML.includes(this.myTeam))
                // console.log(teamsOne);
                const teams = e.innerHTML
                if (teams.includes(this.myTeam)) {
                    // console.log(e);
                    e.setAttribute('style', 'background: linear-gradient(90deg, #00A3FF, #0047FF, #00A3FF, #0047FF) !important; color: #fff !important;')
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
        },
        filterGames: function() {
            const allTeams = document.querySelectorAll('.game_match')
            const matchDay = document.querySelectorAll('.game_day')
            const matchDay2 = document.querySelectorAll('.game_day_odd')
            if (this.teamFilter !== 'all') {
                allTeams.forEach(e => {
                    const selectedTeam = [e.innerHTML]
                    selectedTeam.forEach(inner => {
                        if(!inner.includes(this.teamFilter)) {
                            e.classList.add('d-none')
                        } else {
                            e.classList.remove('d-none')
                        }
                    })
                })
                matchDay.forEach(e => {
                    const selectedTeam = [e.className]
                    selectedTeam.forEach(inner => {
                        if(!inner.includes(this.teamFilter)) {
                            e.classList.add('d-none')
                        } else {
                            e.classList.remove('d-none')
                        }
                    })
                })
                matchDay2.forEach(e => {
                    const selectedTeam = [e.className]
                    selectedTeam.forEach(inner => {
                        if(!inner.includes(this.teamFilter)) {
                            e.classList.add('d-none')
                        } else {
                            e.classList.remove('d-none')
                        }
                    })
                })
            } else {
                allTeams.forEach(e => {
                    e.classList.remove('d-none')
                })
                matchDay.forEach(e => {
                    e.classList.remove('d-none')
                })
                matchDay2.forEach(e => {
                    e.classList.remove('d-none')
                })
            }
        },
        selected: function(g) {
            console.log(this.gender)

            // const selection = document.querySelector(`#${label}`)
            // // console.log(selection);
            // if (selection.id === 'label_femenine') {
            //     selection.setAttribute('style', 'background-color: pink !important; color: black !important; font-weight: bold !important;')
            // } else if (selection.id === 'label_non_binary') {
            //     selection.setAttribute('style', 'background-color: limegreen !important; color: black !important; font-weight: bold !important;')
            // } else if (selection.id === 'label_male') {
            //     selection.setAttribute('style', 'background-color: var(--sapphire) !important; color: black !important; font-weight: bold !important;')
            // }
        },
        genderSelect: function(g) {
            this.gender = g
        }
    },
    computed: {
        
    }
}).mount('#app')