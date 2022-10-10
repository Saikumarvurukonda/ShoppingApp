import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ApiServiceService = class ApiServiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getRequest(url, headers) {
        console.log(url);
        return this.httpClient.get(url, headers);
    }
    postRequest(url, body, headers) {
        console.log(url);
        return this.httpClient.post(url, body, headers);
    }
    putRequest(url, body, headers) {
        console.log(url);
        return this.httpClient.put(url, body, headers);
    }
    deleteRequest(url, body, headers) {
        console.log(url);
        return this.httpClient.delete(url, headers);
    }
};
ApiServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiServiceService);
export { ApiServiceService };
//# sourceMappingURL=api-service.service.js.map