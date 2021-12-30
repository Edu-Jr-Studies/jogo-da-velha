const quadrado = document.querySelectorAll('.quadrado')
let jogou = false;
const padroes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function jogada(e)
{
    !jogou && marker({player: 'O', id: e})
    jogou && marker({ player: 'X', id: e})
    jogou = !jogou;
}

function marker(dado)
{
    if (quadrado[dado.id].classList[1]) 
    {
        alert('Vc pedeu a vez!')
    }

    if (!quadrado[dado.id].classList[1])
    {
        quadrado[dado.id].classList.add(dado.player);
        quadrado[dado.id].innerHTML = `<p>${dado.player}<p/>`
    }

    vencedor(dado);
}

function vencedor(dado)
{
    const vencedor = padroes.some((padrao) => {
        return padrao.every((index) => {
            return quadrado[index].classList.contains(dado.player)
        })
    })

    if(vencedor)
    {
        gameFinalizado(dado.player)
    }
    else if(checarEmpate())
    {
        gameFinalizado()
    }
}

function gameFinalizado(dado = null){ /*essa tecnica do parametro dessa forma (dado = null), faz com que se tiver algum dado ent a função recebe esse dado, caso contrario ela recebe nada! */
    dado && alert(`Jogador ${dado} ganhou!`)
    !dado && console.log('Deu Velha!');
    rendenizaDenovo();
}

function checarEmpate()
{
    let x = 0;
    let o = 0;

    for(let i = 0; i < quadrado.length; i++){
        quadrado[i].classList.contains('X') && x++;
        quadrado[i].classList.contains('O') && o++;
    }

    return x + o == 9;
}

function rendenizaDenovo()
{
    window.location.reload();
}