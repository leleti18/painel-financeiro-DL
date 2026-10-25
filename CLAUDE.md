# Painel financeiro (DL)

Painel mensal de entradas e saídas. A usuária envia fotos/prints de notinhas e comprovantes
no chat; Claude lê a imagem e atualiza `data/transacoes.js`.

## Como processar um comprovante
1. Ler a imagem: data, valor total, estabelecimento, forma de pagamento. Se for Pix/transferência,
   ver se foi recebido (entrada) ou enviado (saída).
2. Escolher a categoria (lista abaixo). Se estiver em dúvida em algo que muda o resultado
   (valor ilegível, entrada x saída), perguntar antes de gravar.
3. Acrescentar um objeto em `data/transacoes.js` (ids sequenciais `t0001`, `t0002`...).
   Não duplicar: se já existir lançamento com mesma data+valor+descrição, avisar.
4. Se a imagem puder ser salva, guardar em `comprovantes/AAAA-MM/` e preencher `comprovante`.
5. Commitar e dar push na branch de desenvolvimento. Responder com resumo curto:
   o que foi lançado e o saldo atual do mês.

Várias notas na mesma mensagem: lançar todas. Nota com vários itens: lançar o total
(ou dividir por categoria só se a usuária pedir).

## Categorias
Entradas: Salário, Freelance, Reembolso, Outros
Saídas: Mercado, Alimentação, Transporte, Moradia, Contas, Saúde, Educação, Lazer, Compras, Filhos, Contribuição, Reserva, Investimento, Outros
(Reserva e Investimento = dinheiro guardado, lançado como saída para o saldo do mês fechar.)

Campo `quem` é opcional (quem recebeu/gastou), útil para o casal/família.

## Planejamento
`data/orcamento.js` guarda o plano mensal: entradas previstas (com dia) e limite por categoria.
O painel compara planejado × gasto e avisa quando passa do limite. Ao lançar uma entrada, a descrição
deve conter o nome da fonte (ex.: "Salário 07/10", "Edrios", "Tráfego semana 1") para contar como recebida.
Ao lançar, avisar se a categoria passou do limite do mês.

## Painel
`index.html` lê `data/transacoes.js` e não precisa de build. Abrir direto no navegador
ou publicar via GitHub Pages.
