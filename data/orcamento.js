// Planejamento mensal (vale para todos os meses). Edite aqui quando algo mudar.
// entradas: "chave" é o texto que a descrição do lançamento precisa conter para contar como recebido.
//   dias: dias do mês em que cai.  semanal: true = valor dividido em 4 parcelas semanais.
// saidas: limite mensal por categoria (mesmas categorias de transacoes.js) e os itens que o compõem.
window.ORCAMENTO = {
  entradas: [
    { chave: 'salário', nome: 'Salário', categoria: 'Salário', parcelas: [{ dia: 7, valor: 6000 }, { dia: 25, valor: 3000 }] },
    { chave: 'social jbg', nome: 'Social JBG', categoria: 'Freelance', parcelas: [{ dia: 7, valor: 650 }] },
    { chave: 'edrios', nome: 'Edrios', categoria: 'Freelance', parcelas: [{ dia: 15, valor: 400 }] },
    { chave: 'clínicas', nome: 'Clínicas', categoria: 'Freelance', parcelas: [{ dia: 15, valor: 150 }] },
    { chave: 'pratikit', nome: 'Pratikit', categoria: 'Freelance', parcelas: [{ dia: 15, valor: 250 }] },
    { chave: 'tráfego', nome: 'Tráfego', categoria: 'Freelance', semanal: true, parcelas: [{ valor: 100 }, { valor: 100 }, { valor: 100 }, { valor: 100 }] },
    { chave: '195travel', nome: '195 Travel', categoria: 'Freelance', semanal: true, parcelas: [{ valor: 87.5 }, { valor: 87.5 }, { valor: 87.5 }, { valor: 87.5 }] }
  ],
  saidas: [
    { categoria: 'Moradia', limite: 2250, itens: 'Aluguel 2250' },
    { categoria: 'Mercado', limite: 1800, itens: 'Mercado 1800' },
    { categoria: 'Transporte', limite: 950, itens: 'Gasolina 800 · Seguro do carro 150' },
    { categoria: 'Filhos', limite: 1199, itens: 'Leite 734 · Fralda 465' },
    { categoria: 'Contas', limite: 1450, itens: 'Energia 600 · Água 250 · DAS 180 · Internet 100 · Celular 90 · Streaming 130 · Claude 100' },
    { categoria: 'Saúde', limite: 340, itens: 'Academia 280 · Dentista 60' },
    { categoria: 'Contribuição', limite: 1200, itens: 'Contribuição 1200' },
    { categoria: 'Lazer', limite: 600, itens: 'Lazer 600' },
    { categoria: 'Reserva', limite: 800, itens: 'Reserva de emergência 800', guardar: true },
    { categoria: 'Investimento', limite: 600, itens: 'Investimento 600', guardar: true }
  ]
};
