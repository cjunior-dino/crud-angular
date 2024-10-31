import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../item.model';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-listar',
  standalone: true,
  imports: [],
  templateUrl: './item-listar.component.html',
  styleUrl: './item-listar.component.css'
})
export class ItemListarComponent implements OnInit{
  itens$: Observable<Item[]> |undefined;

  constructor(private itemService: ItemService){}

  ngOnInit(): {
   this.listarItens();
  }

  listarItens(){
    this.itens$ = this.itemService.listar();
  }
}
