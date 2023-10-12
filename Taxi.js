let prenom = 'John'                                 // on initie tout ce dont on aura besoin pour la partie 
let sante_mentale = 10
let listes_music = ['Anissa : Wejdene',
                     'Vois sur ton Chemin - Techno Mix : BENNETT',
                     'Le Bateau Blanc : Darktek',
                      'La Vibe : KIK',
                       'Shavkat : Freeze Corleon '
                ]
let nb_feu_rouge = 30
let nb_changement = 0

function musique_en_cours() {                //Cette fontion permet de choisir aleatoirement la musique qui passe a la radio
    nb_feu_rouge--;

    const radio = Math.floor(Math.random() * 5 );

    if (listes_music[radio] == listes_music[0]){
        sante_mentale -= 1,
        nb_changement += 1
    }

    return radio
}

while (nb_feu_rouge > 0 && sante_mentale > 0){   // cette boucle definie toute la partie et elle se termine quand soit le nb de feu rouge est a  ou alors sa sente mentale
    const musique = musique_en_cours();
    console.log(`La musique jouee actuellement a la radio est ${musique}. Il vous reste ${nb_feu_rouge} feu(x) a parcourir.` ) //Affiche la musique en cours et le nb de feu rouge restant
}

if (nb_feu_rouge > 0) {            //Affiche dans la console si on a atteint la destination en vie 
    console.log(`Vous etes bien arrive, il vous aura fallu ${nb_changement} changements pour arriver chez vous. Votre sante mentale est de ${sante_mentale}.`)
}

if (sante_mentale == 0) {          //Affiche si on a pas survecu au trajet 
    console.log(`EXPLOSION !`)
}
