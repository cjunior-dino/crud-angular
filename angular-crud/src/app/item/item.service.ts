import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "./item.model";

@Injectable({
    providedIn:'root'
})

export class ItemService{

    private baseURL = 'http://localhost:3000';
    private endpoint = 'itens'; 
    constructor(private httpCliente: HttpClient) {}

    listar():Observable<Item[]>{
        return this.httpCliente.get<Item[]>(`${this.baseURL}/${this.endpoint}`);
    }
}