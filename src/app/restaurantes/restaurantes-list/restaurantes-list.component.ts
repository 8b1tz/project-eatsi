import { Component, OnInit } from "@angular/core";
import { Restaurante } from "src/app/shared/model/restaurante";
import { RestauranteFirestoreService } from "src/app/shared/services/restaurante-firestore.service";


@Component({
  selector: 'app-listagem-Restaurante-tabela',
  templateUrl: './restaurantes-list.component.html',
  styleUrls: ['./restaurantes-list.component.css']
})
export class RestaurantesListComponent  implements OnInit {


  dataSource: Array<Restaurante>;


  constructor(private RestauranteService: RestauranteFirestoreService) {
  }

  ngOnInit(): void {
    this.RestauranteService.listar().subscribe(
      Restaurantes => this.dataSource = Restaurantes
);
  }

  filtrar(texto: string): void {
    if(texto.trim() == ""){
      this.RestauranteService.listar().subscribe(
        Restaurantes => this.dataSource = Restaurantes
      );
    }else{
      this.dataSource = this.dataSource.filter(restaurante => restaurante.nome.toLowerCase().startsWith(texto.toLowerCase()) ) ;
    }
  }

}