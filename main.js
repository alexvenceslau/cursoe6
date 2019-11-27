class Matematica{
    static soma(a, b){
        return a+b;
    }
}

class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}
class TodoList extends List{
    constructor(){
        super();

        this.usuario = "Alex";
    }

    mostaUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');   
}

MinhaLista.mostaUsuario();

console.log(Matematica.soma(1, 5));