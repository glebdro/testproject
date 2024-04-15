<template>
  <div>
    <button @click="loadData">Получить данные с backend</button>
    <div v-if="dataLoaded" style="background-color: lightgray">{{content}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [],
      dataLoaded: false
    }
  },
  mounted() {
    // Добавляем обработчик события beforeunload при загрузке компонента
    window.onbeforeunload = this.handleBeforeUnload;
    // Загружаем данные при первой загрузке компонента
    this.loadData();
  },
  beforeDestroy() {
    // Удаляем обработчик события beforeunload при удалении компонента
    window.onbeforeunload = null;
  },
  methods: {
    // Метод для обработки события beforeunload
    handleBeforeUnload(event) {
      // Предотвращаем перезагрузку страницы только если данные еще не загружены
      if (!this.dataLoaded) {
        // Устанавливаем текст предупреждения
        event.returnValue = '';
      }
    },
    async loadData() {
      try {
        const response = await this.$axios.get('/api/v1/chat/');
        this.content = response.data;
        this.dataLoaded = true;
        console.log('Content: ', this.content);
      } catch (error) {
        console.log('Error occured while fetching endpoint: ', error);
      }
    }
  }
}
</script>