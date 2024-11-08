import * as zod from "zod";

export const validationSchemaCreateTipo = zod.object({
    nome: zod.string().min(3)
});

export const validationSchemaCreateCidade = zod.object({
    nomeDaCidade: zod.string().min(2)
});

export const validationSchemaCreateImovel = zod.object({
    cidadeID: zod.string(),
    tipoID: zod.string(),
    endereco: zod.string(),
    quantidadeQuarto: zod.string(),
    quantidadeGaragem: zod.string(),
    quantidadeBanheiros: zod.string(),
    valor: zod.string(),
    numeroDaMatricula: zod.string(),
    area: zod.string(),
    descricao: zod.string(),
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

export type newFormDataCreateTipo = zod.infer<typeof validationSchemaCreateTipo>;
export type newFormDataCreateCidade = zod.infer<typeof validationSchemaCreateCidade>;
export type newFormDataCreateImovel = zod.infer<typeof validationSchemaCreateImovel>;
export type newFormDataCreateUser = zod.infer<typeof validationSchemaCreateUser>;
export type newFormDataLoginUser = zod.infer<typeof validationSchemaLoginUser>;