<template>
    <form @submit.prevent="submit">
    <img class="mb-4" src="/favicon.ico" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <input v-model="username" type="username" class="form-control" placeholder="username" required >
      
    <input v-model="password" type="password" class="form-control" placeholder="Password" required>
      
    <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
        username: 'admin',
        password: 'Candy22!'
    }
  },
  methods: {
    async submit() {
      const formData = new FormData();
        formData.append('username', this.username);
        formData.append('password', this.password);
      await fetch('http://185.204.109.250:8000/api/v1/jwt/create', {
        // mode: 'no-cors',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      });
      console.log(fetch)
      await this.$router.push('/');
    }
  }
}
</script>