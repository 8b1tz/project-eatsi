import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
import { UsuariosService} from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-login-usuarios',
  templateUrl: './login-usuarios.component.html',
  styleUrls: ['./login-usuarios.component.css']
})
export class LoginUsuariosComponent implements OnInit {
  email: string;
  senha : string;
  

  constructor(private usuarioService: UsuariosService, private roteador: Router) {

    
   }

  ngOnInit(): void {

  }

  load(){
    this.usuarioService.listar().subscribe(
      usuarios =>{
         if((usuarios.filter(usu => usu.email == this.email && usu.senha == this.senha).length != 0)){
           this.roteador.navigate(['restaurantes']);
           
          }
         else{
          alert("Tente novamente!")
        }
         
      }
    )
    
  }

}
