let nom_survivants = [        //Je fait un tableau avec plusieurs prenom
    'Entheaunie', 
    'Antonin', 
    'Lea',
    'Ewan',
    'Clara',
    'Lucas',
    'Edgar'
 ];

let competence = [            //Je fait un tableau avec plusieurs competence/caractere
    'blonde',
    'sportif',
    'geek',
    'peureux',
    'rageux',
    'chanceux',
    'idiot'
 ]

 

let tableaumorts = ""       //Je fait un tableau vide pour les morts, il me servira plus tard 

class Personnage {         //Je cree ici la classe de nos personnage
    constructor(nom, pointsdevie, hit, attaque_prob, death_hit_prob) {
        this.nom = nom
        this.hp = pointsdevie
        this.degats = hit
        this.attaque = attaque_prob
        this.contrecoup = death_hit_prob
    }

    attaquer(target){        //On retrouve ici la fonction qui permet d'attaquer et de rater son attaque, et ce que ca va afficher dans la console
        if (Math.random() < this.attaque) {
            console.log(`${this.nom} attaque ${target.nom} et lui inflige ${this.degats} points de degats.`)
            target.hp -= this.degats;
        }
        else {
            console.log(`${this.nom} a rate son attaque contre ${target.nom}.`);
        }
    }

    encaisserDegats(hit) {      //On retrouve ici la fonction qui permet d'encaisser les degats, de vaincre et de contre attaquer, et ce que ca va afficher dans la console
        if (Math.random() < this.contrecoup) {
            console.log(`${this.nom} contre-attaque et encaisse ${hit} points de degâts.`);
            this.hp -= hit;
        }
        else {
            console.log(`${this.nom} encaisse ${hit} points de degâts.`);
        }

        if (this.hp <= 0) {
            console.log(`${this.nom} a ete vaincu.`);
        }
    }
}

class Mechant {      //On retrouve ici la class qui va creer le tueur 
    constructor(nom_mechant, pointsdevie, hit, attaque_prob, death_hit_prob) {
        this.nom = nom_mechant
        this.hp = pointsdevie
        this.degats = hit
        this.attaque = attaque_prob
        this.contrecoup = death_hit_prob
    }

    attaquer(target){
        if (Math.random() < this.attaque) {
            console.log(`${this.nom} attaque ${target.nom} et lui inflige ${this.degats} points de degats.`)
            target.hp -= this.degats;
        }
        else {
            console.log(`${this.nom} a rate son attaque contre ${target.nom}.`);
        }
    }

    encaisserDegats(hit) {
        if (Math.random() < this.contrecoup) {
            console.log(`${this.nom} contre-attaque et encaisse ${hit} points de degâts.`);
            this.hp -= hit;
        }
        else {
            console.log(`${this.nom} encaisse ${hit} points de degâts.`);
        }

        if (this.hp <= 0) {
            console.log(`${this.nom} a ete vaincu.`);
        }
    }
}

let survivants = new Personnage(nom_survivants[Math.floor(Math.random()*4)] + competence[Math.floor(Math.random() * 4)], 100, 20, 0.8, 0.2);      //On cree ici les 5 personnage principaux de notre histoire
let survivants2 = new Personnage(nom_survivants[Math.floor(Math.random()*4)] + competence[Math.floor(Math.random() * 4)], 100, 20, 0.6, 0.4);
let survivants3 = new Personnage(nom_survivants[Math.floor(Math.random()*4)] + competence[Math.floor(Math.random() * 4)], 100, 20, 0.7, 0.3);
let survivants4 = new Personnage(nom_survivants[Math.floor(Math.random()*4)] + competence[Math.floor(Math.random() * 4)], 100, 20, 0.8, 0.2);
let survivants5 = new Personnage(nom_survivants[Math.floor(Math.random()*4)] + competence[Math.floor(Math.random() * 4)], 100, 20, 0.7, 0.3);

let tableausurvivants = [survivants, survivants2, survivants3, survivants4, survivants5];

let i = 0;

let tueur = new Mechant("Jason l'assassin", 100, 80, 0.7, 0.3);     //On cree ici notre assasin grace a la class Mechant vu au dessus 

let tour = 1;                     //Ici on lance le jeu 
while (tableausurvivants[i%tableausurvivants.length].hp > 0 && tueur.hp > 0) {       //On fait cette boucle pour creer le nombre de tour qu'il faudra pour que le jeu se termine
    console.log(`Tour ${tour}:`);

    tableausurvivants[i%tableausurvivants.length].attaquer(tueur);

    if (tueur.hp <= 0) {   
        console.log(`${tableausurvivants[i%tableausurvivants.length].nom} a vaincu Jason.`)
        break;
    }

    tueur.attaquer(tableausurvivants[i%tableausurvivants.length]);

    if (tableausurvivants[i%tableausurvivants.length].hp <= 0) {
        console.log(`${tueur.nom} a vaincu ${tableausurvivants[i%tableausurvivants.length].nom}`)
        tableaumorts += tableausurvivants[i%tableausurvivants.length].nom + ", ";
        break;
    }

    console.log(`${tableausurvivants[i%tableausurvivants.length].nom} : ${tableausurvivants[i%tableausurvivants.length].hp} hp`);
    console.log(`${tueur.nom} : ${tueur.hp} hp`);
    tour++;
    i++;
}

if (tableausurvivants[i%tableausurvivants.length].hp <= 0) {         //Ces IF et ELSE permettent d'afficher dans la console la fin de la partie et qui a gagne ou un potentiel match nul
    console.log("Le heros a ete vaincu par le tueur. Le tueur gagne !");
    console.log("Les heros suivants sont decedes au cours de la bataille : " + tableaumorts)
  } else if (tueur.hp <= 0) {
    console.log("Le tueur a ete vaincu par le heros ! Le heros gagne !");
    console.log("Les heros suivants sont decedes au cours de la bataille : " + tableaumorts)
  } else {
    console.log("Le combat se termine en match nul. Le heros et le tueur sont tous les deux epuises !");
    console.log("Les heros suivants sont decedes au cours de la bataille : " + tableaumorts)
  }