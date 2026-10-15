<template>

  <div class="app">

    <header>
      
      <h1>Explora las directivas de<span class="texto-vue"> Vue.js</span></h1>
      <p>Una guía introductoria para comprender cómo Vue permite generar listas, controlar la visibilidad de los elementos<br>y mostrar contenido según determinadas condiciones.</p>

      <nav>
        <RouterLink to="/condiciones">Condiciones</RouterLink>
        <RouterLink to="/listas-con-clave">Listas con clave</RouterLink>
        <RouterLink to="/listas">Listas</RouterLink>
        <RouterLink to="/visibilidad">Visibilidad</RouterLink>
      </nav>

    </header>

    <main>
      <RouterView />
    </main>

  </div>

</template>
