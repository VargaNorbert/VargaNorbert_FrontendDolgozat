import './style.css';

document.addEventListener('DOMContentLoaded',() =>{

    let list;
    let idezetek =[];
    let hossz= [];

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

    function masodikFeladatListaFeltoltes(usersLista){
        for(let e of usersLista){
            idezetek.push(e.quote);
        } 
    };

    function masodikFeladat(Lista){
        let szulo = document.getElementById('feladat2ki');

        while(szulo.firstChild){
            szulo.removeChild();
        }
        
            for(let e of Lista){
                let li = document.createElement('li');
                
                let quotes = e.split(' ');
                for(let i = 0; i < quotes.length; i++){
                    if(quotes[i] == 'the' || quotes[i] == 'The'){
                        quotes[i] = quotes[i].bold();
                    }
                    li.innerHTML += quotes[i] + ' ';
                }
    
                szulo.appendChild(li);
            }
    
        
        //idezetek.filter(function(){ return $(this).text().includes('The '); }).replaceWith( "<b>The <b>");
        //idezetek.filter(function(){ return $(this).text().includes(' the '); }).replaceWith( "<b>the<b>");
        
    };

    function harmadikFeladat(Lista){

        let szulo = document.getElementById('feladat3ki');

        hossz=[];
        szulo.textContent=" ";

        for(let e of Lista){
            hossz.push(e.length);
        }

        let lista = hossz.join(', ');

        szulo.textContent= lista;

    }

    function negyedikFeladat(List){
        let szulo = document.getElementById('feladat4ki');
        let szerzo= document.getElementById('feladat4be').value;
        let darab= 0;

        for(let e of List){
            if(e.author==szerzo){
                darab++;
            }
        }

        szulo.value=darab;

        
    }


    document.getElementById('feladat1').addEventListener('click',()=>{
        elsoFeladat(list.quotes);
    })

    document.getElementById('feladat2').addEventListener('click',()=>{
        masodikFeladatListaFeltoltes(list.quotes);
        masodikFeladat(idezetek);
    })

    document.getElementById('feladat3').addEventListener('click',()=>{
        masodikFeladatListaFeltoltes(list.quotes);
        harmadikFeladat(idezetek);
    })

    document.getElementById('feladat4').addEventListener('click',()=>{
        negyedikFeladat(list.quotes);
    })





})

