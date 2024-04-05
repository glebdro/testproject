<template>
    <main class="form-signin w-100 m-auto">
      <div v-if="$route.query.message" class="alert alert-danger mb-3">
        Need login first
      </div>
      <form @submit.prevent="submit">
        <img class="mb-4" src="/favicon.ico" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">Please Log in</h1>

        <div class="form-floating">
          <input v-model="username" type="username" class="form-control" id="floatingInput" placeholder="admin">
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating">
          <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>

        <button class="btn btn-primary w-100 py-2" type="submit">Log in</button>
        <p class="mt-5 mb-3 text-body-secondary">©ITLab 2024</p>
      </form>
    </main>
</template>

<script>
export default {
  layout: 'empty',

  data() {
    return {
      username: 'admin', 
      password: 'Candy22!'
    }
  },
  methods: {
    async submit() {
      this.$store.dispatch('login')
      try {
        //подаю post-запрос к эндпоинту создания токена, используя поля с формы логина
        const response = await this.$axios.post('/api/v1/jwt/create', { 
          username: this.username, 
          password: this.password,
        });
        const accessToken = response.data.access;
        // заголовок авторизации с токеном доступа (глобальный) - 1 способ
        this.$axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        this.$router.push('/');
        console.log('Response:', response.data); // выводится в консоль JWT токен
        console.log('Access Token:', accessToken); // выводится в консоль значение "access"  JWT токена
        //const response2 = await this.$axios.get('/api/v1/news_analysis/'); // сразу же пытаюсь достать эндпоинт "news"
        //console.log('Response:', response2); // выводится полученный ответ
      } catch (error) {
        console.error('Error:', error);
      }
    },
    
  }
}
</script>


<style>
form{
  display: block;
  margin-top: 0em;
  unicode-bidi: isolate;
}
.form-signin {
    max-width: 330px;
    padding: 1rem;
}
</style>