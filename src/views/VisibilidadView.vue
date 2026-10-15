
<template>
    <main class="vista-visibilidad">

        <header class="encabezado-visibilidad">
            <h1>Visibilidad en Vue</h1>
            <h2>v-show</h2>

            <img class="imagen" src="../assets/v-show.png" alt="Ilustración explicativa de la directiva v-show de Vue">
        </header>

        <div class="tablero">

            <section class="tarjeta">
                <h3>¿Qué es v-show?</h3>
                <p>v-show es una directiva de Vue que permite mostrar u ocultar un elemento HTML dependiendo de una condición. Para hacerlo, modifica la propiedad CSS display del elemento, sin eliminarlo del DOM. </p>
            </section>

            <section class="tarjeta">
                <h3>Ejemplo</h3>
                <p>Imagina que tienes un mensaje de bienvenida y quieres que el usuario pueda ocultarlo o volver a mostrarlo al presionar un botón. Con v-show, puedes controlar su visibilidad mediante una variable reactiva.</p>
            </section>

            <section class="tarjeta">
                <h3>¿Para qué sirve?</h3>
                <p>La directiva v-show sirve para mostrar u ocultar elementos HTML en una página web según una condición. Es útil cuando queremos que el usuario pueda ver u ocultar mensajes, información adicional, instrucciones de un formulario o secciones de ayuda sin tener que recargar la página. Cuando la condición es verdadera, el elemento se muestra; cuando es falsa, se oculta mediante la propiedad CSS display, pero sigue existiendo en el DOM. </p>
            </section>

            <section class="tarjeta tarjeta-demo">
                <h3>Ejemplo práctico</h3>

                <p>Presiona el botón para cambiar la visibilidad del mensaje.</p>

                <button type="button" @click="mostrar = !mostrar":aria-expanded="mostrar"aria-controls="mensaje-vshow">
                    {{ mostrar ? 'Ocultar mensaje' : 'Mostrar mensaje' }}
                </button>

                <p id="mensaje-vshow" v-show="mostrar" class="mensaje-demo"> ¡Hola! Este mensaje se puede ocultar.</p>
            </section>

        </div>
    </main>
</template>


<script setup>

import { ref } from 'vue' //Ayuda a crear una variable reactiva

const mostrar=ref(true)

</script>