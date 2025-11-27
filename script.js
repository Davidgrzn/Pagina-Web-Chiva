/**
 * Lógica para el Mapa Sonoro de La Chiva
 * Permite reproducir o pausar un elemento de audio y actualiza el icono del botón.
 * @param {string} audioId - El ID del elemento <audio> a controlar.
 */
function playStop(audioId) {
    // 1. Obtener los elementos de la página
    const audio = document.getElementById(audioId);
    
    // El ID del botón se infiere del ID del audio (ej: 'audioMotor' -> 'btnMotor')
    const buttonId = 'btn' + audioId.substring(5); 
    const button = document.getElementById(buttonId);
    const icon = button.querySelector('i');

    // 2. Controlar la reproducción/pausa
    if (audio.paused) {
        // Reproducir el audio
        audio.play();
        
        // Cambiar el icono a PAUSE
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        
        // Opcional: Cambiar texto del botón si lo necesitas (ej. "MOTOR ON")
        button.innerHTML = button.innerHTML.replace('PLAY', 'PAUSE'); 

    } else {
        // Pausar el audio
        audio.pause();
        
        // Cambiar el icono a PLAY
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        
        // Opcional: Cambiar texto del botón si lo necesitas (ej. "MOTOR OFF")
        button.innerHTML = button.innerHTML.replace('PAUSE', 'PLAY');
    }
}
// NOTA: Esta función asume que los iconos están dentro del botón.