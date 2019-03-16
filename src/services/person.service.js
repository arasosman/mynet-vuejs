import ApiService from './api.service'

export default {
    GetPeople(){
        return ApiService.get('/person')
    },
    PostPerson(data){
      return ApiService.post('/person',data)
    },
    PutPerson(data){
        return ApiService.put('/person/'+data.id,data)
    },
    ShowPerson(id){
        return ApiService.get('/person/'+id)
    },
    ClearCache(){
        return ApiService.get('/clear/cache')
    }
}
