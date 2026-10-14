<template>
    <main>

        <h1>Listas en Vue</h1>
        <h2>v-for</h2>
        <img src="../assets/directiva-v-for.png">
        <h3>¿Qué es v-for?</h3>
        <p>v-for es una directiva de Vue que permite recorrer una colección de datos, como un arreglo de JavaScript, y generar un elemento HTML por cada dato que contiene.</p>
        <h3>Ejemplo</h3>
        <p>Por ejemplo, imagina que tienes una lista con cinco frutas. Sin v-for, tendrías que escribir manualmente cinco elementos HTML. Con v-for, puedes recorrer el arreglo y hacer que Vue genere automáticamente un elemento para cada fruta.</p>
        <h3>¿Para qué sirve?</h3>
        <p>La directiva v-for es útil cuando necesitas mostrar varios elementos que siguen una misma estructura.</p>
        <p>Algunos ejemplos de uso son: </p>
        <ul>
            <li v-for="(ejemplo, indice) in ejemplos" :key="indice">{{ ejemplo }}</li>
        </ul>
        <p>En lugar de construir cada elemento por separado, defines los datos una sola vez y utilizas v-for para recorrerlos.</p>
    </main>
</template>

<script setup>
const ejemplos = [
    "Mostrar una lista de estudiantes.",
    "Presentar los productos de una tienda.",
    "Crear un menú de navegación a partir de un arreglo.",
    "Mostrar las tareas pendientes de un usuario.",
    "Presentar los nombres de los integrantes de un equipo."
]
</script>