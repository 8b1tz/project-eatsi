import { Endereco } from "./endereço";
import { Produto } from "./produto";

export class Restaurante{
    
    cnpj?: string;
    nome?: string;
    nota?: number;
    descricao?: string;
    telefone?: string[];
    endereço?: Endereco;
    produtos?: number[];

}