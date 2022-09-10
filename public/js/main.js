const { createApp } = Vue

createApp({
    data() {
        return {
            screen: '',
            page: 'games',
            about: '',
            game: '',
            log: true,
            name: '',
            userName: '',
            email: 'tomascarrizo.dev@gmail.com',
            password: 'contraseña',
            myTeam: 'U1',
            teamFilter: 'all',
            gender: '',
            grade: '',
            position_nor: {
                forward: false,
                midfield: false,
                defender: false,
                goalkeeper: false
            },
            position_want: {
                forward: false,
                midfield: false,
                defender: false,
                goalkeeper: false
            },
            checkbox: false,
            jersey: '',
            shorts: {
                youth_sm: false,
                youth_md: false,
                youth_lg: false,
                small: false,
                medium: false,
                large: false,
                xxl: false
            },
            newProfile: {
                userName: '',
                password: '',
                newPassword: '',
                confirmNewPassword: '',
                myTeam: ''
            },
            showPassword: false,
            wrongPassword: false,
            noMatchPassword: false,
            loggedIn: {
                email: '',
                password: ''
            },
            canLog: '',
            wrong: false,
            invalid: false,
            signProfile: {
                email: '',
                userName: '',
                password: '',
                confirmPassword: '',
                myTeam: ''
            }
        }
    },
    created() {
        this.newProfile.userName = this.userName
        this.newProfile.myTeam = this.myTeam
    },
    mounted: function() {
        if (this.screen === '') {
            this.header()
            if (this.page === 'games') {
                this.gameTable()
            }
            // if (this.newProfile.password === this.password) {
            //     this.changeProfile()
            // } else if (this.newProfile.password === '') {
            //     this.changeProfile()
            // } else if (this.newProfile.password !== this.password) {
            //     this.wrongPassword = true
            // }
            }
        this.loader()
    },
    methods: {
        loader: function () {
            document.querySelector('#loading').classList.add('d-none')
        },
        loaderToggle: function() {
            document.querySelector('#loading').classList.toggle('d-none')
            // hideLoad()
            // let base = createApp.data.return
            setTimeout(function() {
                // console.log(page);
                document.querySelector('#loading').classList.toggle('d-none')
            }, 3000)
            this.screen = ''
            this.page = 'home'
            this.log = true
            this.wrong = false
            this.myTeam = 'U1'
        },
        header: function() {
            this.log ? document.querySelector('#header').classList.replace('justify-content-between', 'justify-content-evenly') : document.querySelector('#header').classList.replace('justify-content-evenly', 'justify-content-between')
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
            if (element === 'games') {
                this.gameTable()
            }
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
        },
        gradeSelect: function(g) {
            this.grade = g
        },
        showButton: function(position, arr) {

        },
        borrar: function(position, arr) {
            arr.forEach(e => {
                if (e === position) {
                    position = ''
                }})
        },
        showLog: function(p) {
            document.querySelector('#user_on').classList.toggle('d-none')
            document.querySelector('#user').classList.toggle('d-none')
            document.querySelector('#aside_log').classList.toggle('show')
            document.querySelector('#nav').classList.toggle('hide_nav')
            document.querySelector('#principal').classList.toggle('d-none')
            // document.querySelector('#back_top').classList.toggle('d-none')
            
            if (p === 'user') {
                this.page = p
                document.querySelector('#userName').value = this.userName
                // document.querySelector('#userPass').value = '**********'
                // document.querySelector('#userConfirmPass').value = '**********'
                document.querySelector(`#${this.myTeam}`).setAttribute('selected', 'true')
                // this.profileUser()
            } else if (p === 'about_log') {
                this.page = p
            } else if (p === 'rules_log') {
                this.page = p
                // document.querySelector('#rules_log').classList.toggle('d-none')

            } else if (p === 'contact_log') {
                this.page = p
            } else if (p === 'log_out') {
                this.log = false
                this.page = 'home'
            }
            document.querySelector('#rules_log').classList.toggle('d-none')

        },
        // profileUser: function() {
        //     document.querySelector('#userName').placeholder = this.userName
        //     document.querySelector('#userPass').placeholder = '**********'
        //     document.querySelector('#userConfirmPass').placeholder = '**********'
        //     document.querySelector(`#${this.myTeam}`).setAttribute('selected', 'true')
            
        // },
        showPass: function() {
            
            if (this.showPassword) {
                // document.querySelector(`#${this.myTeam}`).setAttribute('selected', 'true')
                this.showPassword = false
                document.querySelector('#userPass').type = 'text'
                document.querySelector('#userConfirmPass').type = 'text'
                document.querySelector('#userName').placeholder = this.userName
                document.querySelector('#userPass').placeholder = this.password
                document.querySelector('#userConfirmPass').placeholder = this.password
            } else {
                this.showPassword = true
                document.querySelector('#userPass').type = 'password'
                document.querySelector('#userConfirmPass').type = 'password'
                document.querySelector('#userName').placeholder = this.userName
                document.querySelector('#userPass').placeholder = '**********'
                document.querySelector('#userConfirmPass').placeholder = '**********'
            }
            document.querySelector(`#${this.myTeam}`).setAttribute('selected', 'true')
        },
        resetUser: function() {
            this.newProfile.userName = this.userName
            this.newProfile.password = this.password
            this.newProfile.newPassword = this.password
            this.newProfile.myTeam = this.myTeam
        },
        changeProfile: function() {
            if (this.newProfile.password === this.password) {
                document.querySelector('#userName').classList.remove('disabled')
                document.querySelector('#userName').removeAttribute('disabled')
                document.querySelector('#userNewPass').classList.remove('disabled')
                document.querySelector('#userNewPass').removeAttribute('disabled')
                document.querySelector('#userConfirmPass').classList.remove('disabled')
                document.querySelector('#userConfirmPass').removeAttribute('disabled')
                if (this.newProfile.newPassword === this.newProfile.confirmNewPassword) {
                    this.userName = this.newProfile.userName
                    this.password = this.newProfile.newPassword
                    this.myTeam = this.newProfile.myTeam
                    this.wrongPassword = false
                } else {
                    this.noMatchPassword = true
                }
            } else {
                document.querySelector('#userName').classList.add('disabled')
                document.querySelector('#userName').setAttribute('disabled', 'true')
                document.querySelector('#userNewPass').classList.add('disabled')
                document.querySelector('#userNewPass').setAttribute('disabled', 'true')
                document.querySelector('#userConfirmPass').classList.add('disabled')
                document.querySelector('#userConfirmPass').setAttribute('disabled', 'true')
            }
        },
        saveUser: function() {
            if (this.newProfile.password === this.password) {
                if (this.newProfile.newPassword === this.newProfile.confirmNewPassword) {
                    this.userName = this.newProfile.userName
                    this.password = this.newProfile.newPassword
                    this.myTeam = this.newProfile.myTeam
                    this.wrongPassword = false
                } else {
                    this.noMatchPassword = true
                }
            } else {
                this.wrongPassword = true
            }
        },
        backToHome: function() {
            this.screen = ''
            this.page = 'home'
        },
        logIn: function() {
            this.loader()
            this.screen = ''
            this.page = 'home'
            this.log = true
            this.wrong = false
            this.myTeam = 'U1'
            // if (this.loggedIn.email === this.email) {
            //     this.wrong = false
            //     if (this.loggedIn.password === this.password) {
            //         this.screen = ''
            //         this.page = 'home'
            //         this.log = true
            //         this.wrong = false
            //     } else if (this.loggedIn.password === '') {
            //         this.invalid = true
            //         console.log('Please enter password');
            //         // document.querySelector('#wrong').classList.replace('bg-danger', 'bg-warning')
            //         // document.querySelector('#invalid_msg').innerHTML = 'Please, enter a password'
            //     } else if (this.loggedIn.password !== this.password) {
            //         this.wrong = true
            //         console.log('Wrong password, please try again');
            //         // document.querySelector('#wrong').classList.replace('bg-warning', 'bg-danger')
            //         // document.querySelector('#wrong_msg').innerHTML = 'Wrong password'
            //     }
            // } else if (this.loggedIn === '') {
            //     this.invalid = true
            //     console.log('Please enter email');
            //     // document.querySelector('#wrong').classList.replace('bg-danger', 'bg-warning')
            //     // document.querySelector('#invalid_msg').innerHTML = 'Please, enter a valid email'
            // } else {
            //     console.log('Wrong email direction');
            //     this.wrong = true
            //     // document.querySelector('#wrong').classList.replace('bg-warning', 'bg-danger')
            //     // document.querySelector('#wrong_msg').innerHTML = 'Wrong email'
            // }
        },
        signUp: function() {
            this.email = this.signProfile.email
            this.userName = this.signProfile.userName
            this.password = this.signProfile.password
            this.log = true 
            this.screen = ''
            this.page = 'home'
        },
        recover: function() {
            this.log = true
            this.screen = ''
            this.page = 'home'
        }
    },
    computed: {
        
    }
}).mount('#app')