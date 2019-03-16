import ApiService from './api.service'

export default {
    GetPersonAddresses(person_id) {
        return ApiService.get('/addresses/' + person_id)
    },
    GetPersonAddress(person_id, id) {
        return ApiService.get('/addresses/' + person_id + '/' + id)
    },
    PostPersonAddress(data) {
        return ApiService.post('/address', data)
    },
}
