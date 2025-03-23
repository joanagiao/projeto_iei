/* Menu */
document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu-container');

    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            menuContainer.innerHTML = data;
        });
});
/* Fim do menu */

/* Gráficos */
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('barChart')?.getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            datasets: [{
                label: '2022',
                data: data,
                backgroundColor: '#ff0000',
                borderColor: '#ff0000',
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            aspectRatio: 1.5,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Meses'
                    }
                    
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Quebras de Informação'
                    }
                }
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const data1 = [158, 205, 182, 221, 235, 407, 605, 973, 305, 255, 272, 194];
    const data2 = [192, 105, 251, 382, 510, 552, 457, 512, 1151, 752, 842, 255];
    const data3 = [525, 392, 390, 458, 275, 289, 190, 342, 298, 352, 290, 0];

    function createChart(ctx, data, title) {
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                datasets: [{    
                    label: title,
                    data: data,
                    backgroundColor: '#0cb2cf', 
                    borderColor: '#055991',     
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                aspectRatio: 1.5,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Meses'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Quebras de Informação'
                        }
                    }
                }
            }
        });
    }

    const ctx1 = document.getElementById('barChart1').getContext('2d');
    const ctx2 = document.getElementById('barChart2').getContext('2d');
    const ctx3 = document.getElementById('barChart3').getContext('2d');

    createChart(ctx1, data1, '2022');
    createChart(ctx2, data2, '2023');
    createChart(ctx3, data3, '2024');
});

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('barChart4')?.getContext('2d');

    const data1 = [158, 205, 182, 221, 235, 407, 605, 973, 305, 255, 272, 194];
    const data2 = [192, 105, 251, 382, 510, 552, 457, 512, 1151, 752, 842, 255];
    const data3 = [525, 392, 390, 458, 275, 289, 190, 342, 298, 352, 290, 0];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            datasets: [
                {
                    label: '2022',
                    data: data1,
                    backgroundColor: '#ff0000',
                    borderColor: '#ff0000',
                    borderWidth: 1
                },
                {
                    label: '2023',
                    data: data2,
                    backgroundColor: '#0cb2cf',
                    borderColor: '#055991',
                    borderWidth: 1
                },
                {
                    label: '2024',
                    data: data3,
                    backgroundColor: '#00ff00',
                    borderColor: '#008000',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            aspectRatio: 1.5,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Meses'
                    },
                    grid: {
                        offset: true
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Quebras de Informação'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
});

const ctx = document.getElementById('myPieChart').getContext('2d');
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Phising', 'Compras sem entrega', 'Roubo de Identidade','Outros'],
            datasets: [{
                label: 'Distribuição',
                data: [53.2, 9.20, 10.4, 27.2],
                backgroundColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#ffce56',
                    '#8ee41d',
                ],
                borderColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#ffce56',
                    '#379b2a',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            const label = tooltipItem.label || '';
                            const value = tooltipItem.raw;
                            const total = tooltipItem.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(2) + '%';
                            return label + ': ' + percentage;
                        }
                    }
                }
            }
        }
    });

const ctx2 = document.getElementById('myPieChart2').getContext('2d');
const myPieChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Phising', 'Compras sem entrega', 'Fraude financeira', 'Outros'],
        datasets: [{
            label: 'Distribuição 2',
            data: [12.5, 41.6, 8.7, 37.2],
            backgroundColor: [
                '#ff6384',
                '#36a2eb',
                '#ff9f40',
                '#8ee41d',
            ],
            borderColor: [
                '#ff6384',
                '#36a2eb',
                '#ff9f40',
                '#379b2a',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const label = tooltipItem.label || '';
                        const value = tooltipItem.raw;
                        const total = tooltipItem.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(2 ) + '%';
                        return label + ': ' + percentage;
                    }
                }
            }
        }
    }
});
/* Fim dos gráficos */

/* Secção das dúvidas */
document.getElementById('doubtForm').addEventListener('submit', function (e) {
    e.preventDefault();
    submitDoubt();
});

function submitDoubt() {
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const doubtInput = document.getElementById("doubtInput");

    const nameText = nameInput.value.trim();
    const emailText = emailInput.value.trim();
    const doubtText = doubtInput.value.trim();

    if (nameText === "" || emailText === "" || doubtText === "") {
        alert("Por favor, preenche todos os campos.");
        return;
    }
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regex.test(emailText)) {
        alert("Coloca um email válido.");
        return;
    }
    

    const novaDuvida = {
        nome: nameText,
        email: emailText,
        duvida: doubtText,
        data: new Date().toLocaleString('pt-PT', {
            dateStyle: 'medium',
            timeStyle: 'short'
        })
    };

    let duvidas = getDuvidas();
    duvidas.push(novaDuvida);
    localStorage.setItem('duvidasOficial', JSON.stringify(duvidas));

    exibirDuvidas();

    alert("Dúvida enviada com sucesso!");
    nameInput.value = "";
    emailInput.value = "";
    doubtInput.value = "";
}

function exibirDuvidas() {
    const listaDuvidas = document.getElementById('doubtsContainer');
    listaDuvidas.innerHTML = '';

    const duvidas = getDuvidas();

    if (duvidas.length === 0) {
        listaDuvidas.innerHTML = '<div class="sem-duvidas">Ainda não há dúvidas enviadas.</div>';
        return;
    }

    duvidas.forEach(d => {
        const div = document.createElement('div');
        div.className = 'doubt';
        div.innerHTML = `
            <div class="doubt-header">
                <div class="doubt-info">
                    <span class="doubt-nome">${d.nome}</span>
                    <span class="doubt-email">${d.email}</span>
                </div>
                <span class="doubt-data">${d.data}</span>
            </div>
            <div class="doubt-texto">${d.duvida}</div>
        `;
        listaDuvidas.appendChild(div);
    });
}

function getDuvidas() {
    return JSON.parse(localStorage.getItem('duvidasOficial')) || [];
}

/* Fim da secção das dúvidas */

/* Secção dos comentários */
document.getElementById('comentario').addEventListener('submit', function (e) {
    e.preventDefault();
    submitComentario();
});

function submitComentario(storageKey) {
    const nameInput = document.getElementById("nameInput");
    const comentarioInput = document.getElementById("comentarioInput");

    const nameText = nameInput.value.trim();
    const comentarioText = comentarioInput.value.trim();

    if (nameText === "" || comentarioText === "") {
        alert("Preenche todos os campos para enviar o comentário.");
        return;
    }

    const novoComentario = { 
        nome: nameText, 
        comentario: comentarioText,
        data: new Date().toLocaleString('pt-PT', { 
            dateStyle: 'medium', 
            timeStyle: 'short' 
        })
    };

    let comentarios = getComentarios(storageKey);
    comentarios.push(novoComentario);
    
    localStorage.setItem(storageKey, JSON.stringify(comentarios));

    exibirComentarios(storageKey);

    alert("Obrigada pelo comentário! Ele foi enviado com sucesso.");
    nameInput.value = "";
    comentarioInput.value = "";
}

function exibirComentarios(storageKey) {
    const listaComentarios = document.getElementById('comentarioContainer');
    listaComentarios.innerHTML = '';

    const comentarios = getComentarios(storageKey);
    
    if (comentarios.length === 0) {
        listaComentarios.innerHTML = '<div class="sem-comentarios">Ainda não há comentários. Sê o primeiro a comentar!</div>';
        return;
    }

    comentarios.forEach(c => {
        const div = document.createElement('div');
        div.className = 'comentario';
        div.innerHTML = `
            <div class="comentario-header">
                <span class="comentario-nome">${c.nome}</span>
                <span class="comentario-data">${c.data}</span>
            </div>
            <div class="comentario-texto">${c.comentario}</div>
        `;
        listaComentarios.appendChild(div);
    });
}

function getComentarios(storageKey) {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
}

/* Fim da secção dos comentários */

/* Animação para as legendas aparecerem ao passar o rato na imagem */
function showLegenda(imagemContainer) {
    const legenda = imagemContainer.querySelector('.legenda');
    legenda.style.display = 'block';
}

function hideLegenda(imagemContainer) {
    const legenda = imagemContainer.querySelector('.legenda');
    legenda.style.display = 'none';
}
/* Fim */