export function loadLists() {
    return [
        {
            title: 'Contato',
            creatable: false,
            cards: [
                {
                    id: 1,
                    content: 'Estudar módulo 01 de NodeJS',
                    labels: ['#7159c1'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
                },
            ],
        },
        {
            title: 'Fazendo',
            creatable: false,
            cards: [
                {
                    id: 6,
                    content: 'Recriando clone do Pipefy',
                    labels: [],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
                },
            ],
        },
        {
            title: 'Pausado',
            creatable: false,
            cards: [
                {
                    id: 7,
                    content:
                        'Gravar sobre Geolocalização e mapas com React Native',
                    labels: ['#7159c1'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
                },
            ],
        },
    ];
}
