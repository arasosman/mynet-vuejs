<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                             stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        Dashboard <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <button class="btn btn-danger" @click="clearCache">
                        Clear Cache
                    </button>
                </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved Person</span>
                <b-button v-b-modal.savePerson class="d-flex align-items-center text-mute">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="feather feather-plus-circle">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                </b-button>
            </h6>
            <ul class="nav flex-column mb-2">
            </ul>
        </div>


        <b-modal
                id="savePerson"
                ref="modal"
                title="Kişi Ekle"
                @ok="save"
                @shown="clear"
        >
            <form @submit.stop.prevent="submit">
                <b-form-input type="text" placeholder="Enter your name" v-model="name"/>
                <b-form-input type="date" placeholder="Enter your birthday" v-model="birthday"/>
                <b-form-select v-model="gender" :options="options" />
            </form>
        </b-modal>

    </nav>

</template>

<script>
    import PersonService from '../services/person.service'

    export default {
        name: "LeftMenu",
        data() {
            return {
                name: "",
                birthday: "",
                gender: "",
                Person: {
                    name:"",
                    birthday:"",
                    gender:""
                },
                options: [
                    { value: null, text: 'Please select an gender' },
                    { value: 'Kadın', text: 'Kadın' },
                    { value: 'Erkek', text: 'Erkek' },
                ]
            }
        },
        methods: {
            clear() {
                this.name = "";
                this.birthday = "";
                this.gender = ""
            },
            save() {
                this.Person = {
                    name:this.name,
                    birthday: this.birthday,
                    gender: this.gender
                };

                PersonService.PostPerson(this.Person).then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
            },
            submit() {
                this.Person = {
                    name:this.name,
                    birthday: this.birthday,
                    gender: this.gender
                };

                PersonService.PostPerson(this.Person).then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
            },
            clearCache(){
                PersonService.ClearCache().then((res) => {
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>

</style>
