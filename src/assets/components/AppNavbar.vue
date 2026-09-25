<script setup lang="ts">
import facebookIcon from '@/assets/images/facebook.png';
import instagramIcon from '@/assets/images/instagram.png';

const facebookLink = "https://www.facebook.com/IBBC.Oficial";
const instagramLink = "https://www.instagram.com/ibbc.elsalvador";

</script>
<template>
    <nav class="navbar">
        <a href="#" class="logo">
            <img src="@/assets/images/ibbc-logo-small-64.png" alt="IBBC Logo" height="50" />
        </a>
        <ul class="nav-links-2">
            <a :href="facebookLink" target="_blank" rel="noopener" class="logo-social">
                <img :src="facebookIcon" alt="Facebook" height="24" />
            </a>
            <a :href="instagramLink" target="_blank" rel="noopener" class="logo-social">
                <img :src="instagramIcon" alt="Instagram" height="24" />
            </a>
        </ul>
        <button class="menu-toggle" aria-label="Abrir menú">
            <span aria-hidden="true">☰</span>
        </button>
        <ul class="nav-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
</template>
<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-primary);
    padding: 10px 24px;
    border-radius: 6px;
}

.logo-social img {
    width: 24px;
    height: 24px;

}

.logo img {
    display: block;
    object-fit: contain;
}

.menu-toggle {
    display: none;
    /* Se activa en media queries para móvil */
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--color-background);
    cursor: pointer;
}

.nav-links-2 {
    display: flex;
    list-style: none;
    gap: 20px;
    margin: 0;
    padding: 0;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 20px;
    margin: 0;
    padding: 0;
}

.nav-links a {
    color: var(--color-background);
    text-decoration: none;
    font-weight: 500;
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    nav-links-2 {
        display: block;
        /* O menú desplegable */
    }

    .nav-links {
        display: none;
        /* O menú desplegable */
    }
}
</style>