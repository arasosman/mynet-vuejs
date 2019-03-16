<template>
    <div class="home">
        <div class="container-fluid">
            <div class="row">
                <left-menu/>
                <people-list/>
            </div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import LeftMenu from '@/components/LeftMenu.vue'
    import PeopleList from '@/components/PeopleList.vue'

    export default {
        name: 'home',
        components: {
            LeftMenu,
            PeopleList
        }
    }
</script>
