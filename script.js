//Définir les variables HTML dont j'aurai besoin
        const target = document.querySelector('#target')
        const playground = document.querySelector('#playground')
        const headerHTML = document.querySelector('header') // score


        // déplace la target aléatoirement
        function move(){
            // Génération deux nombres aléatoires (JS)
            const randomX = Math.random() * (playground.offsetWidth - target.offsetWidth);
            const randomY = Math.random() * (playground.offsetHeight - target.offsetHeight);
            // console.log(randomX, randomY)
            // déplacement
            target.style.top = randomY +'px'; /*je veux faire "top: 10px" par exemple*/
            target.style.left = randomX + 'px'
        }
        // TRIGGER : toutes les deux secondes, je lance la function move()
        let intervalId = window.setInterval(move, 2*1000)

        // Tirer sur la cible augmente un score 
        // augmente le score et affiche ce score
        let score = 0 // initialise le score à zéro points
        function shoot(){ 
            score = score+1
            headerHTML.innerHTML = "Hits : " +score 
        }
        // quand utilisateur "click" sur button target, on lance la fonction shoot()
        target.addEventListener('click', shoot)

        /* fin du jeux - au bout de 30s*/
        setTimeout(function(){
            // Stop le trigger qui se lance toutes les 2 secondes pour déplacer notre target
            clearInterval(intervalId)
            // Stop l'écoute du click sur la target (je ne peux plus gagner de point)
            target.removeEventListener('click', shoot)
        }, 10*1000)








