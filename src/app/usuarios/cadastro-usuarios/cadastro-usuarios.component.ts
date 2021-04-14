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
  

  constructor(private usuarioService: UsuariosService) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }
  inserirUsuario(): void {
      this.usuarioService.inserir(this.usuario).subscribe(
        usuarioInserido => {
          alert(`Usuário ${usuarioInserido.nome} inserido com sucesso!`);
        } 
      );
      
  }
}
