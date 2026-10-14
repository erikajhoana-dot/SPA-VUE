<template>
    <main>

        <h1>Condiciones en Vue</h1>
        <h2>v-if, v-else-if y v-else</h2>
        <img>
        <h3>¿Qué son las directivas condicionales?</h3>
        <p>v-if, v-else-if y v-else son directivas de Vue que permiten mostrar diferentes elementos HTML dependiendo de si se cumplen determinadas condiciones.</p>
        <ul>
            <li v-for="(directiva, indice) in directivas" :key="indice">{{ directiva }}</li>
        </ul>
        <h3>Ejemplo</h3>
        <p>Por ejemplo, imagina que tienes un sistema que muestra el estado de una calificación. Si el estudiante obtiene una calificación de 90 o más, se muestra un mensaje de excelente desempeño. Si obtiene entre 60 y 89, se muestra un mensaje de aprobado. En caso contrario, se muestra un mensaje de reprobado. Mediante estas directivas, Vue puede evaluar la calificación y mostrar el mensaje correspondiente.</p>
        <h3>¿Para qué sirve?</h3>
        <p>Las directivas condicionales son útiles cuando necesitas que el contenido de una página cambie dependiendo de los datos o las acciones del usuario.</p>
        <p>Algunos ejemplos de uso son: </p>
        <ul>
            <li v-for="(ejemplo, indice) in ejemplos" :key="indice">{{ ejemplo }}</li>
        </ul>
        <h3>Ejemplo práctico de funcionamiento</h3>
        <p v-if="calificacion >= 90">Excelente desempeño.</p>
        <p v-else-if="calificacion >= 60">Aprobado.</p>
        <p v-else>Reprobado.</p>
    </main>
</template>

<script setup>

const directivas = [
    "v-if: muestra un elemento si su condición es verdadera.",
    "v-else-if: permite comprobar otra condición cuando la anterior es falsa.",
    "v-else: muestra un elemento cuando ninguna de las condiciones anteriores se cumple.",
]

const ejemplos = [
    "Mostrar mensajes de aprobación o reprobación.",
    "Indicar si un usuario ha iniciado sesión.",
    "Mostrar mensajes de error cuando los datos son incorrectos.",
    "Presentar diferentes opciones según el tipo de usuario.",
    "Informar si un producto está disponible o agotado."
]

const calificacion = 75

</script>