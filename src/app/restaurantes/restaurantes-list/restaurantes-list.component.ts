import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Restaurante } from "src/app/shared/model/restaurante";
import { RestaurantesService } from "src/app/shared/services/restaurantes.service";


@Component({
  selector: 'app-listagem-Restaurante-tabela',
  templateUrl: './restaurantes-list.component.html',
  styleUrls: ['./restaurantes-list.component.css']
})
export class RestaurantesListComponent  implements OnInit {

  dataSource: MatTableDataSource<Restaurante>;
  mostrarColunas = ['nome','descricao','cep','telefone'];

  constructor(private RestauranteService: RestaurantesService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.RestauranteService.listar().subscribe(
      Restaurantes => this.dataSource = new MatTableDataSource(Restaurantes)
    );
  }

  filtrar(texto: string): void {
    this.dataSource.filter = texto.trim().toLowerCase();
  }

}