// Date cible (31 mai 2024 à 23h59)
const targetDate = new Date("May 31, 2024 23:59:59").getTime();

// Mettre à jour le timer toutes les secondes
const timer = setInterval(() => {
    // Obtenir la date et l'heure actuelles
    const now = new Date().getTime();

    // Calculer la différence entre la date cible et la date actuelle
    const difference = targetDate - now;

    // Calculer les jours, heures, minutes et secondes restantes
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Afficher le temps restant dans l'élément HTML approprié
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si le compte à rebours est terminé, afficher un message
    if (difference < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Temps écoulé !";
    }
}, 1000);
