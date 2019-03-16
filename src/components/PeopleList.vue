<template>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

        <h2>Person List</h2>
        <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                    <th>Addresses</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="person in People">
                    <td>{{ person.id }}</td>
                    <td>{{person.name}}</td>
                    <td>{{person.birthday}}</td>
                    <td>{{person.gender}}</td>
                    <td>
                        <b-button v-b-modal.editPerson class="btn-success" @click="edit(person)">Edit Person</b-button>
                        <b-button v-b-modal.addresses @click="showAddress(person)">Show Addresses</b-button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>


        <b-modal
                id="editPerson"
                ref="modal"
                title="Person"
        >
            <form @submit.stop.prevent="submit">
                <b-form-input type="text" placeholder="Enter your name" v-model="name"/>
                <b-form-input type="date" placeholder="Enter your birthday" v-model="birthday"/>
                <b-form-select v-model="gender" :options="options"/>
            </form>
        </b-modal>

        <b-modal
                id="addresses"
                ref="modal"
                title="Edit Address"
                @ok="save"
                @shown="clear"
        >
            <b-form-input type="text" placeholder="Address" v-model="address"/>
            <b-form-input type="number" placeholder="Postcode" v-model="post_code"/>
            <b-form-input type="text" placeholder="City Name" v-model="city_name"/>
            <b-form-input type="text" placeholder="Country Nmae" v-model="country_name"/>
            <br>
            <b-button @click="addAddress" id="showBtn">Add Address</b-button>
            <br>
            <table class="table table-striped table-sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Address</th>
                    <th>Postcode</th>
                    <th>City Name</th>
                    <th>Country Name</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="address in Address">
                    <td>{{address.id}}</td>
                    <td>{{address.address}}</td>
                    <td>{{address.post_code}}</td>
                    <td>{{address.city_name}}</td>
                    <td>{{address.country_name}}</td>
                </tr>
                </tbody>
            </table>
        </b-modal>
    </main>
</template>

<script>
    import PersonService from '../services/person.service'
    import AddressService from '../services/address.service'

    export default {
        name: "PeopleList",
        data() {
            return {
                Person: {},
                People: {},
                Address: {},
                id: "",
                name: "",
                birthday: "",
                gender: "",
                address: "",
                post_code: "",
                city_name: "",
                country_name: "",
                options: [
                    {value: 'Female', text: 'Female'},
                    {value: 'Male', text: 'Male'},
                ]
            }
        },
        created() {
            this.getPeople();
        },
        methods: {
            getPeople() {
                PersonService.GetPeople().then((res) => {
                    this.People = res.data;
                });
            },
            edit(person) {
                this.name = person.name;
                this.birthday = person.birthday;
                this.gender = person.gender;
                this.id = person.id;
            },
            save() {
                this.Person = {
                    id: this.id,
                    name: this.name,
                    birthday: this.birthday,
                    gender: this.gender
                };
                PersonService.PutPerson(this.Person).then((res) => {
                    this.getPeople();
                }).catch((err) => {
                    console.log(err)
                })
            },
            clear() {
                this.Person = {}
            },
            submit() {

            },
            showAddress(person){
                this.id= person.id;
                this.getAddresses();
            },
            getAddresses(){
                AddressService.GetPersonAddresses(this.id).then((res) => {
                    this.Address = res.data;
                }).catch((err) => {
                    console.log(err)
                })
            },
            addAddress() {
                this.Address = {
                    person_id: this.id,
                    address: this.address,
                    post_code: this.post_code,
                    city_name: this.city_name,
                    country_name: this.country_name
                };
                AddressService.PostPersonAddress(this.Address)
                    .then((res) => {
                        console.log(res);
                        this.address ="";
                        this.post_code = "";
                        this.city_name = "";
                        this.country_name = "";
                    }).catch((err) => {
                        console.log(err)
                })
            }
        }

    }
</script>

<style scoped>

</style>
