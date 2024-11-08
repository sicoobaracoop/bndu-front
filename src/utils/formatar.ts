export const formatBrl = (number: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};

export const formatDate = (input: string) => {
  const date = new Date(input); // Converte a entrada para um objeto Date

  if (isNaN(date.getTime())) {
    throw new Error("Data inválida");
  }

  const day = String(date.getDate()).padStart(2, "0"); // Formata o dia com 2 dígitos
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Formata o mês com 2 dígitos
  const year = date.getFullYear(); // Pega o ano com 4 dígitos

  return `${day}-${month}-${year}`; // Retorna o formato "dd-MM-yyyy"
};
