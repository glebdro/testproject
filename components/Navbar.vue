<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
        <nuxt-link class="navbar-brand" to="/">
            <img src="/favicon.ico" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
            GPTScript Control Panel
        </nuxt-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" :class="{ 'active': currentRoute === '/upload'}">
                <nuxt-link class="nav-link" to="/upload">
                Upload files
                </nuxt-link>
            </li>
            <li class="nav-item" :class="{ 'active': currentRoute === '/chats'}">
                <nuxt-link class="nav-link" to="/chats">
                Chats
                </nuxt-link>
            </li>
            <li class="nav-item" :class="{ 'active': currentRoute === '/news_upload'}">
                <nuxt-link class="nav-link" to="/news_upload">
                Upload news
                </nuxt-link>
            </li>
            <li class="nav-item" :class="{ 'active': currentRoute === '/'}">
                <nuxt-link class="nav-link" to="/">
                Analyze news
                </nuxt-link>
            </li>
            <li class="nav-item" :class="{ 'active': currentRoute === '/news_backtest'}">
                <nuxt-link class="nav-link" to="/news_backtest">
                Backtest News Analysis
                </nuxt-link>
            </li>
            <li class="nav-item" :class="{ 'active': currentRoute === '/chat_analysis'}">
                <nuxt-link class="nav-link" to="/chat_analysis">
                Analyze chats
                </nuxt-link>   
            </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item" v-if="!hasToken">
                <nuxt-link class="nav-link" to="/login4">
                Login
                </nuxt-link>
            </li>
            <li class="nav-item" v-else>
                <a @click.prevent="logout" class="nav-link" href="#">
                Logout
                </a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
    computed:{
        hasToken(){
            return this.$store.getters.hasToken
        },
        currentRoute() {
            return this.$route.path; // Получаем текущий путь маршрута
        }
    },
    methods: {
        logout(){
            this.$store.dispatch('logout')
            this.$router.push('/login4')
        }
    },
}
</script>

<style scoped>
/* Стили для подсветки активного элемента */
.nav-item.active .nav-link{
    position: relative;
}
.nav-item.active .nav-link::after{
    content: '';
    position: absolute;
    bottom: -20px; /*расположение дуги подсветки над дном навбара*/
    left: 10%;
    width: 80%;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    filter: blur(4px);
    z-index: 1; /*для отображения поверх других эл-тов*/
    transition: right 0.8s ease; /* Добавляем анимацию для свойства left */
}


</style>