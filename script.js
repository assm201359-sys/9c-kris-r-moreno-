const horario = document.getElementById('horario');
const btn = document.getElementById('btn-toggle');
horario.style.display = 'none';

btn.addEventListener('click', () => {
    horario.style.display = horario.style.display === 'none' ? 'block' : 'none';
});

const botonColor = document.getElementById('btn-color');
const miTabla = document.getElementById('tabla-clases');

botonColor.addEventListener('click', () => {
    miTabla.classList.toggle('modo-hacker');
});
