<template>
    <main class="vista-visibilidad">

        <header class="encabezado">
        <h1>Listas en Vue</h1>
        <h2>v-for</h2>

        <img src="../assets/directiva-v-for.png" alt="Ilustración explicativa de la directiva v-for de Vue">
        </header>

        <div class="tablero">

            <section class="tarjeta">
                <h3>¿Qué es v-for?</h3>
                <p>v-for es una directiva de Vue que permite recorrer una colección de datos, como un arreglo de JavaScript, y generar un elemento HTML por cada dato que contiene.</p>
            </section>

            <section class="tarjeta">
                <h3>Ejemplo</h3>
                <p>Por ejemplo, imagina que tienes una lista con cinco frutas. Sin v-for, tendrías que escribir manualmente cinco elementos HTML. Con v-for, puedes recorrer el arreglo y hacer que Vue genere automáticamente un elemento para cada fruta.</p>
            </section>

            <section class="tarjeta">
                <h3>¿Para qué sirve?</h3>
                <p>La directiva v-for sirve para recorrer una lista de datos y generar automáticamente elementos HTML por cada elemento de esa lista. Es útil para mostrar listas de nombres, productos, ejemplos o cualquier conjunto de información sin tener que escribir cada elemento manualmente. Además, permite acceder a los datos de cada elemento y utilizar una clave única (:key) para que Vue identifique y actualice correctamente los elementos cuando la lista cambia.</p>
            </section>

            <section class="tarjeta">
                <h3>Ejemplo práctico de funcionamiento</h3>
                <h4>Integrantes del equipo:</h4>
                <ul>
                    <li v-for="(integrante, indice) in equipo" :key="indice">{{ integrante }}</li>
                </ul>
                <p>En este ejemplo, la directiva v-for recorre el arreglo equipo y genera automáticamente un elemento &lt;li&gt; por cada integrante.</p>
            </section>

        </div>
    </main>
</template>

<script setup>

const equipo = [
    "Belem De Jesús Hérnandez Molina",
    "Erika Jhoana Hidalgo De la torre",
    "Karen Yamileth Domínguez Gómez"
]
</script>