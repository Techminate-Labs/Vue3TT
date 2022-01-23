import http from "@/http-common";
import store from '@/store'

let _token = store.state.session.bearerToken;
class ExampleService {

    exampleFunction(data: any, token: any): Promise<any> {
        return http.post('/example-api-url', data, { headers: { "Authorization": `Bearer ${_token}` } });
    }

}

export default new ExampleService();