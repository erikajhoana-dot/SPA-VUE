<template>

  <div class="app">

    <header>
      
      <h1>Sitio informativo</h1>

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
