export default [
    {
        file: require("../templates/pdfs/contrato_venda.pdf"),
        name: "Contrato de venda",
        fields: [
            { field: "aluno", page: 1, x: 143, y: 680 },
            { field: "estado civil", page: 1, x: 405, y: 650 },
            { field: "rg do responsável", page: 1, x: 60, y: 623 },
            { field: "cpf do responsável", page: 1, x: 375, y: 623 },
            { field: "endereço", page: 1, x: 85, y: 596 },
            { field: "cep", page: 1, x: 64, y: 568 },
            { field: "bairro", page: 1, x: 300, y: 568 },
            { field: "cidade", page: 1, x: 75, y: 538 },
            { field: "telefone res./ celular", page: 1, x: 88, y: 512 },
            { field: "email", page: 1, x: 300, y: 512 },
            { literal: new Date().getDate(), page: 2, x: 350, y: 143 },
            {
                literal: [
                    "Janeiro",
                    "Fevereiro",
                    "Março",
                    "Abril",
                    "Maio",
                    "Junho",
                    "Julho",
                    "Agosto",
                    "Setembro",
                    "Outubro",
                    "Novembro",
                    "Dezembro"
                ][new Date().getMonth()],
                page: 2,
                x: 420,
                y: 143
            },
            { literal: new Date().getFullYear(), page: 2, x: 520, y: 143 },
            { literal: "Campos dos Goytacazes", page: 2, x: 170, y: 143 },
            { literal: "RJ", page: 2, x: 310, y: 143 }
        ]
    },
    {
        file: require("../templates/pdfs/lista_presenca_sib.pdf"),
        name: "Lista de presença SIB",
        fields: [
            { field: "aluno", page: 1, x: 143, y: 500 },
            { field: "unidade sib", page: 1, x: 90, y: 458 }
        ]
    },
    {
        file: require("../templates/pdfs/lista_presenca_impulse.pdf"),
        name: "Lista de presença Impulse",
        fields: [
            { field: "aluno", page: 1, x: 168, y: 490 },
            { field: "unidade sib", page: 1, x: 115, y: 453 }
        ]
    },
    {
        file: require("../templates/pdfs/ratificacao_ai_recorrencia_sib.pdf"),
        name: "Rat. AI e rec. SIB",
        fields: [
            { field: "região", page: 1, x: 230, y: 719 },
            { literal: new Date().getDate(), page: 1, x: 405, y: 677 },
            {
                literal: [
                    "Janeiro",
                    "Fevereiro",
                    "Março",
                    "Abril",
                    "Maio",
                    "Junho",
                    "Julho",
                    "Agosto",
                    "Setembro",
                    "Outubro",
                    "Novembro",
                    "Dezembro"
                ][new Date().getMonth()],
                page: 1,
                x: 455,
                y: 677
            },
            { literal: new Date().getFullYear(), page: 1, x: 35, y: 656 },
            { literal: new Date().getDate(), page: 1, x: 375, y: 408 },
            {
                literal: [
                    "Janeiro",
                    "Fevereiro",
                    "Março",
                    "Abril",
                    "Maio",
                    "Junho",
                    "Julho",
                    "Agosto",
                    "Setembro",
                    "Outubro",
                    "Novembro",
                    "Dezembro"
                ][new Date().getMonth()],
                page: 1,
                x: 425,
                y: 408
            },
            { literal: new Date().getFullYear(), page: 1, x: 522, y: 408 },
            { literal: "Campos dos Goytacazes", page: 1, x: 220, y: 408 },
            { literal: "RJ", page: 1, x: 353, y: 408 }
        ]
    },
    {
        file: require("../templates/pdfs/ratificacao_ai_recorrencia_impulse.pdf"),
        name: "Rat. AI e rec. Impulse",
        fields: [
            { field: "aluno", page: 1, x: 303, y: 573 },
            { field: "região", page: 1, x: 230, y: 724 },
            { literal: new Date().getDate(), page: 1, x: 405, y: 702 },
            {
                literal: [
                    "Janeiro",
                    "Fevereiro",
                    "Março",
                    "Abril",
                    "Maio",
                    "Junho",
                    "Julho",
                    "Agosto",
                    "Setembro",
                    "Outubro",
                    "Novembro",
                    "Dezembro"
                ][new Date().getMonth()],
                page: 1,
                x: 455,
                y: 702
            },
            { literal: new Date().getFullYear(), page: 1, x: 35, y: 689 },
            { literal: new Date().getDate(), page: 1, x: 390, y: 173 },
            {
                literal: [
                    "Janeiro",
                    "Fevereiro",
                    "Março",
                    "Abril",
                    "Maio",
                    "Junho",
                    "Julho",
                    "Agosto",
                    "Setembro",
                    "Outubro",
                    "Novembro",
                    "Dezembro"
                ][new Date().getMonth()],
                page: 1,
                x: 440,
                y: 173
            },
            { literal: new Date().getFullYear(), page: 1, x: 507, y: 173 },
            { literal: "Campos dos Goytacazes", page: 1, x: 240, y: 173 },
            { literal: "RJ", page: 1, x: 368, y: 173 }
        ]
    },
    {
        file: require("../templates/pdfs/termo_recorrencia_sib.pdf"),
        name: "Termo para Recorrência SIB",
        fields: [{ field: "aluno", page: 1, x: 240, y: 736 }]
    }
];

// {
//     file: require("../templates/pdfs/ratificacao_ai_recorrencia_sib.pdf"),
//     name: "Rat. AI e rec. SIB",
//     fields: [
//         { field: "aluno", page: 1, x: 303, y: 573 },
//         { field: "região", page: 1, x: 230, y: 724 },
//         { literal: new Date().getDate(), page: 1, x: 405, y: 702 },
//         {
//             literal: [
//                 "Janeiro",
//                 "Fevereiro",
//                 "Março",
//                 "Abril",
//                 "Maio",
//                 "Junho",
//                 "Julho",
//                 "Agosto",
//                 "Setembro",
//                 "Outubro",
//                 "Novembro",
//                 "Dezembro"
//             ][new Date().getMonth()],
//             page: 1,
//             x: 455,
//             y: 702
//         },
//         { literal: new Date().getFullYear(), page: 1, x: 35, y: 689 },
//         { literal: new Date().getDate(), page: 1, x: 390, y: 173 },
//         {
//             literal: [
//                 "Janeiro",
//                 "Fevereiro",
//                 "Março",
//                 "Abril",
//                 "Maio",
//                 "Junho",
//                 "Julho",
//                 "Agosto",
//                 "Setembro",
//                 "Outubro",
//                 "Novembro",
//                 "Dezembro"
//             ][new Date().getMonth()],
//             page: 1,
//             x: 440,
//             y: 173
//         },
//         { literal: new Date().getFullYear(), page: 1, x: 507, y: 173 },
//         { literal: "Campos dos Goytacazes", page: 1, x: 240, y: 173 },
//         { literal: "RJ", page: 1, x: 368, y: 173 }
//     ]
// },
