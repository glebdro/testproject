<template>
    <form @submit.prevent="submit">
      <img class="mb-4" src="/favicon.ico" alt="" width="72" height="57">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <input v-model="username" type="text" class="form-control" placeholder="Username" required>
      <input v-model="password" type="password" class="form-control" placeholder="Password" required>
      <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    </form>
  </template>

<script>
export default {

  data() {
    return {
      username: 'admin', //заполнил заранее для экономии времени, а так заполняются в форме
      password: 'Candy22!'
    }
  },
  methods: {
    async submit() {
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
        const response2 = await this.$axios.get('/api/v1/news/'); // сразу же пытаюсь достать эндпоинт "news"
        console.log('Response:', response2); // выводится полученный ответ
      } catch (error) {
        console.error('Error:', error);
      }
    },
    
  }
}
</script>