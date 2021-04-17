
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/Usuario';
import { UsuariosService} from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {

  usuario : Usuario; 
  usuarios : Array<Usuario>;

  constructor(private usuarioService: UsuariosService) { 
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
    this.usuarioService.listar().subscribe(
      usu => usu.forEach( u => this.usuarios.push(u))
    )
    
  }

  ngOnInit(): void {
  }
  inserirUsuario(): void {
    if (this.usuarios.find(x => x.email== this.usuario.email)) {
      console.log("já existe o com esse email!")
    }
    else{
      this.usuarioService.inserir(this.usuario).subscribe(
        usuarioInserido => {
          this.usuarios.push(usuarioInserido);
          alert(`Usuário ${usuarioInserido.nome} inserido com sucesso!`);
        } 
      );
    }
  }
}
