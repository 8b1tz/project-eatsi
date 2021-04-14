import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/Usuario';
import { UsuariosService} from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-login-usuarios',
  templateUrl: './login-usuarios.component.html',
  styleUrls: ['./login-usuarios.component.css']
})
export class LoginUsuariosComponent implements OnInit {
  usuario : Usuario;
  usuarios : Array<Usuario>;

  constructor(private usuarioService: UsuariosService) {
     this.usuario = new Usuario();
   }

  ngOnInit(): void {
  }
  load(email,senha){
    this.usuarioService.listar().subscribe(
      usuarios =>{
         if((usuarios.filter(usu => usu.email == email && usu.senha == senha).length != 0)){
           console.log("entra")
          }
         else{
          console.log("se retire")
        }
         
      }
    )
    
  }

}
