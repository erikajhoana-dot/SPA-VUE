<template>
    <main>

        <h1>Visibilidad en Vue</h1>
        <h2>v-show</h2>
        <img src="../assets/directiva-v-for.png">
        <h3>¿Qué es v-show?</h3>
        <p>v-show es una directiva de Vue que permite mostrar u ocultar un elemento HTML dependiendo de una condición. Para hacerlo, modifica la propiedad CSS display del elemento, sin eliminarlo del DOM.</p>
        <h3>Ejemplo</h3>
        <p>Por ejemplo, imagina que tienes un mensaje de bienvenida y quieres que el usuario pueda ocultarlo o volver a mostrarlo al presionar un botón. Con v-show, puedes controlar su visibilidad mediante una variable que indique si debe mostrarse o no.</p>
        <h3>¿Para qué sirve?</h3>
        <p>La directiva v-show es útil cuando necesitas alternar frecuentemente entre mostrar y ocultar un elemento, sin tener que crearlo y eliminarlo del DOM cada vez.</p>
        <p>Algunos ejemplos de uso son: </p>
        <ul>
            <li v-for="(ejemplo, indice) in ejemplos" :key="indice">{{ ejemplo }}</li>
        </ul>
        <h3>Ejemplo práctico de funcionamiento</h3>
        <button @click="mostrar = !mostrar">Mostrar / Ocultar mensaje</button>
        <p v-show="mostrar">¡Hola! Este mensaje se puede ocultar.</p>
    </main>
</template>

<script setup>
import { ref } from 'vue' //Ayuda a crear una variable reactiva

const mostrar=ref(true)

</script>