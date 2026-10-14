<template>
    <main>

        <h1>Listas con clave en Vue</h1>
        <h2>v-for y v-bind:key</h2>

        <h3>¿Qué es v-bind:key?</h3>
        <p>v-bind:key es una forma de asignar una clave única a cada elemento generado mediante una lista con v-for. Esta clave permite que Vue identifique cada elemento y pueda actualizar la lista de manera eficiente cuando los datos cambian.</p>

        <h3>Ejemplo</h3>
        <p>Por ejemplo, imagina que tienes una lista de estudiantes. Cada estudiante tiene un identificador único, un nombre y una carrera. Al utilizar v-for para recorrer la lista, puedes asignar el identificador de cada estudiante como clave mediante :key. De esta manera, Vue puede reconocer cada elemento de la lista.</p>

        <h3>¿Para qué sirve?</h3>
        <p>La directiva :key es útil cuando necesitas mostrar listas de elementos que pueden cambiar, agregarse o eliminarse. Ayuda a Vue a identificar cada elemento correctamente durante las actualizaciones.</p>

        <p>Algunos ejemplos de uso son:</p>
        <ul>
            <li v-for="(ejemplo, indice) in ejemplos" :key="indice">{{ ejemplo }}</li>
        </ul>

        <h3>Ejemplo práctico de funcionamiento</h3>
        <ul>
            <li v-for="estudiante in estudiantes" :key="estudiante.id">
                {{ estudiante.nombre }} - {{ estudiante.carrera }}
            </li>
        </ul>

    </main>
</template>

<script setup>

const ejemplos = [
    "Mostrar una lista de estudiantes con su identificador.",
    "Presentar productos con un código único.",
    "Mostrar tareas identificadas mediante un ID.",
    "Actualizar listas cuando se agregan o eliminan elementos.",
    "Identificar registros de una tabla."
]

const estudiantes = [
    { id: 1, nombre: "Ana", carrera: "Sistemas" },
    { id: 2, nombre: "Luis", carrera: "Informática" },
    { id: 3, nombre: "María", carrera: "Software" },
    { id: 4, nombre: "Carlos", carrera: "Redes" },
    { id: 5, nombre: "Sofía", carrera: "Sistemas" }
]

</script>
