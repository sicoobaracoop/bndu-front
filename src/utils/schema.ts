import * as zod from "zod";

export const validationSchemaCreateTipo = zod.object({
    nome: zod.string().min(3)
});

export const validationSchemaCreateCidade = zod.object({
    nomeDaCidade: zod.string().min(2)
});

export const validationSchemaCreateImovel = zod.object({
    cidadeID: zod.string().min(1),
    tipoID: zod.string().min(1),
    endereco: zod.string().min(1),
    linkMapa: zod.string(),
    quantidadeQuarto: zod.string(),
    quantidadeGaragem: zod.string(),
    quantidadeBanheiros: zod.string(),
    valor: zod.string().min(1),
    numeroDaMatricula: zod.string().min(2),
    area: zod.string().min(1),
    descricao: zod.string().min(3),
    fotos: zod.array(zod.instanceof(File)).optional(),
});

export const validationSchemaCreateUser = zod.object({
    email: zod.string().min(4),
    password: zod.string().min(2),
    nome: zod.string().min(4)
});

export const validationSchemaLoginUser = zod.object({
    email: zod.string().min(4),
    password: zod.string().min(2),
});

export const validationSchemaCreateGerente = zod.object({
    nome: zod.string().min(3),
    contanto: zod.string().min(5),
})

export type newFormDataCreateTipo = zod.infer<typeof validationSchemaCreateTipo>;
export type newFormDataCreateCidade = zod.infer<typeof validationSchemaCreateCidade>;
export type newFormDataCreateGerente = zod.infer<typeof validationSchemaCreateGerente>;
export type newFormDataCreateImovel = zod.infer<typeof validationSchemaCreateImovel>;
export type newFormDataCreateUser = zod.infer<typeof validationSchemaCreateUser>;
export type newFormDataLoginUser = zod.infer<typeof validationSchemaLoginUser>;