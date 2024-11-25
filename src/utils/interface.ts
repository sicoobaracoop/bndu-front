export interface Imoveis {
    id: number,
    cidadeID: number,
    tipoID: number,
    endereco: string,
    qtdBanheiro: number;
    qtdGaragem: string,
    qtdQuarto: string,
    valor: number,
    numeroDeMatricula: string,
    area: string,
    descricao: string,
    tipo: Tipo;
    cidade: Cidade;
    imagens: Imagem[];
}

export interface Imagem {
    id: number,
    imovelID: number,
    caminhoImagem: string,
}

export interface MetaPagination {
    current_page: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
}

export interface FilterImoveis {
    cidadeID?: number,
    tipoID?: number,
    valorMinimo?: string,
    valorMaximo?: string
}

export interface Tipo {
    id: number,
    nomeDoTipo: string,
    created_at: string
}

export interface Cidade {
    id: number,
    nomeDaCidade: string,
    created_at: string
}

export interface FilterImoveis {
    categoriaID?: number,
    cidadeID?: number,
    valorMaximo?: string,
    valorMinimo?: string,
}

export interface User {
    email: string,
    name: string,
    id: number
}