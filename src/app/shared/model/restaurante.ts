import { Endereco } from "./endereço";
import { Produto } from "./produto";

export class Restaurante{
    id: number;
    cnpj?: string;
    nome?: string;
    nota?: number;
    descricao?: string;
    telefone?: string[];
    endereço?: Endereco;
    produtos?: number[];

}