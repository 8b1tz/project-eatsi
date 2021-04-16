import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  usuario : Usuario;
  
  constructor() {

    
    
  }

  ngOnInit(): void {
    
  }

}
