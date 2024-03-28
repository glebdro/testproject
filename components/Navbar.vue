<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid" style="text-align: center;">
        <img src="/favicon.ico" width="30" height="30">
        <a class="navbar-brand" href="/upload">GPTScript ControlPanel</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/upload">
                Upload files
                </nuxt-link>
            </li>

            <li class="nav-item">
                <nuxt-link class="nav-link" to="/chats">
                Chats
                </nuxt-link>
            </li>
            
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/news_upload">
                Upload news
                </nuxt-link>
            </li>
            
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/">
                Analyze news
                </nuxt-link>
            </li>

            <li class="nav-item">
                <nuxt-link class="nav-link" to="/news_backtest">
                Backtest News Analysis
                </nuxt-link>
            </li>

            <li class="nav-item">
                <nuxt-link class="nav-link" to="/chat_analysis">
                Analyze chats
                </nuxt-link>   
            </li>

            <li class="nav-item">
                <nuxt-link class="nav-link" to="/login3">
                Login
                </nuxt-link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</template>

<style>


.navbar-nav .nav-item {
    margin-right: 30px; /* Добавить отступ между элементами меню */
}
</style>