<template>
    <div>
        <button @click="fetchData">Получить данные с backend</button>
        <div v-if="data">{{ data }}</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      data: null
    }
  },
  methods: {
    async fetchData() {
    //   const tokenData = {
    // "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxMTU1MjY4NSwianRpIjoiMzNmNzE3MTA4OGFlNGZiOGIwNTc3YTZkYmM5MGZiN2EiLCJ1c2VyX2lkIjoxfQ.23zZmSVGYyu3rEssA-2ykhB8BB0RpCMK9uTYEKbOFNw",
    // "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExNTUyNjg1LCJqdGkiOiI2ZmUzZDhmMDVlOWQ0MGNjOWZkZTc3MjkyNzA5NDVmZCIsInVzZXJfaWQiOjF9.TztjiW6v6dgj8TPDQK49ZcRZN_3U4Ke0lel70xdaUxc"
    // };

      try {
        const response = await this.$axios.get('/api/v1/bgjobs/'); 
        console.log('Response News [0]:', response); 

        
        // const newsData = await response.data;
        // this.data = newsData;
        // const response2 = await this.$axios.get('/api/v1/bgjobs/'); 
        // console.log('Response BgJobs:', response2);

        // const response3 = await this.$axios.get('/api/v1/news_analysis/'); 
        // console.log('Response News Analysis.data:', response3.data[0]);
        // console.log('Data:', newsData); 
        // console.error('Failed to fetch data:', response.status);
          // Обработка ошибки, например, отображение сообщения пользователю
        
      } catch (error) {
        console.error('Error:', error);
        // Обработка других ошибок, если они возникают
      }
    }
  }
}
</script>