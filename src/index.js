import './style.css';

document.addEventListener('DOMContentLoaded',() =>{

    let list;
    let list2 =[];

    async function adatBetoltes() {
        let response = await fetch('/quotes.json');
        list = await response.json();

    };

    adatBetoltes();

    function elsoFeladat(usersLista){
        let szulo = document.getElementById('feladat1ki');

        szulo.textContent="";

        usersLista = usersLista.sort((a, b) => { return a.author>b.author ? 1:-1});


        for(let e of usersLista){
                let li = document.createElement('li');
                let q= document.createElement('q');
                let p = document.createElement('p');
                q = e.quote;
                p = e.author;
                li.textContent =q +"; "+p;
                szulo.appendChild(li);
    }
    };

    





    document.getElementById('feladat1')?.addEventListener('click',()=>{
        elsoFeladat(list.quotes);
    })

})

