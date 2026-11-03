<script setup>
import miImagen from '@/assets/images/ibbc-wallpaper-v2.jpg'
</script>

<template>
    <section>
        <!-- <h1>IBBC</h1>
        <p>Pagina principal</p> -->

        <div class="container">
            <img :src="miImagen" class="img-fluida" alt="Logo de Vue" />
            <!-- <p>
                Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
                documentation
            </p> -->

        </div>
    </section>
</template>

<style scoped>
/* CSS exclusivo de Contact */
</style>

<style scoped>
.contenedor-responsivo {
    width: 100%;
    /* Ocupa todo el ancho disponible del padre */
    max-width: 600px;
    /* Un límite máximo opcional */
    margin: 0 auto;
    /* Centrado opcional */
}

.img-fluida {
    width: 100%;
    /* Se expande o contrae según el contenedor */
    height: auto;
    /* Mantiene la proporción original automáticamente */
    display: block;
    /* Evita espacios blancos extra abajo */
}
</style>