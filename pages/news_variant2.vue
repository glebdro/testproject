<template>
  <div v-if="dataLoaded" class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">#{{content[0].id}}</strong>
          <h3 class="mb-0">Company: {{content[0].company}}, GPT Short: {{content[0].gpt_short}}</h3>
          <div class="mb-1 text-body-secondary">(Date uploaded)</div>
          <h3 class="mb-0">GPT Type: {{content[0].gpt_type}}, Model: {{content[0].model}}</h3>
          <p class="card-text mb-auto">GPT Opinion: {{content[0].gpt_opinion}}</p>
          <!-- <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
            Text
            <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
          </a> -->
          <button class="btn btn-info rounded-pill px-3" type="button">Details for the news analysis</button>
          <button class="btn btn-danger rounded-pill px-3" type="button">Delete news analysis</button>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Text</text></svg>
          <!-- <h3 class="mb-0">Company: {{content[0].company}}, GPT Short: {{content[0].gpt_short}}></h3> -->
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">#{{content[1].id}}</strong>
          <h3 class="mb-0">Company: {{content[1].company}}, GPT Short: {{content[1].gpt_short}}</h3>
          <div class="mb-1 text-body-secondary">(Date uploaded)</div>
          <h3 class="mb-0">GPT Type: {{content[1].gpt_type}}, Model: {{content[1].model}}</h3>
          <p class="card-text mb-auto">GPT Opinion: {{content[1].gpt_opinion}}</p>
          <!-- <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
            Text
            <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
          </a> -->
          <button class="btn btn-info rounded-pill px-3" type="button">Details for the news analysis</button>
          <button class="btn btn-danger rounded-pill px-3" type="button">Delete news analysis</button>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Text </text></svg>
          <!-- <h3 class="mb-0">Company: {{content[0].company}}, GPT Short: {{content[0].gpt_short}}></h3> -->
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">#{{content[2].id}}</strong>
          <h3 class="mb-0">Company: {{content[2].company}}, GPT Short: {{content[2].gpt_short}}</h3>
          <div class="mb-1 text-body-secondary">(Date uploaded)</div>
          <h3 class="mb-0">GPT Type: {{content[2].gpt_type}}, Model: {{content[2].model}}</h3>
          <p class="card-text mb-auto">GPT Opinion: {{content[2].gpt_opinion}}</p>
          <!-- <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
            Text
            <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
          </a> -->
          <button class="btn btn-info rounded-pill px-3" type="button">Details for the news analysis</button>
          <button class="btn btn-danger rounded-pill px-3" type="button">Delete news analysis</button>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Text</text></svg>
          <!-- <h3 class="mb-0">Company: {{content[0].company}}, GPT Short: {{content[0].gpt_short}}></h3> -->
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">#{{content[3].id}}</strong>
          <h3 class="mb-0">Company: {{content[3].company}}, GPT Short: {{content[3].gpt_short}}</h3>
          <div class="mb-1 text-body-secondary">(Date uploaded)</div>
          <h3 class="mb-0">GPT Type: {{content[3].gpt_type}}, Model: {{content[3].model}}</h3>
          <p class="card-text mb-auto">GPT Opinion: {{content[3].gpt_opinion}}</p>
          <!-- <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
            Text
            <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
          </a> -->
          <button class="btn btn-info rounded-pill px-3" type="button">Details for the news analysis</button>
          <button class="btn btn-danger rounded-pill px-3" type="button">Delete news analysis</button>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Text </text></svg>
          <!-- <h3 class="mb-0">Company: {{content[0].company}}, GPT Short: {{content[0].gpt_short}}></h3> -->
        </div>
      </div>
    </div>

  </div>


  
  <!-- <div v-if="dataLoaded">
    <p v-if="content[0].id">ID: {{content[0].id}}</p>
    <p v-if="content[0].company">Company: {{content[0].company}}</p>
    <p v-if="content[0].gpt_short">GPT Short: {{content[0].gpt_short}}</p>
    <p v-if="content[0].gpt_type">GPT Type: {{content[0].gpt_type}}</p>
    <p v-if="content[0].model">Model: {{content[0].Model}}</p>
    <p v-if="content[0].gpt_opinion">GPT Opinion: {{content[0].gpt_opinion}}</p>
  </div> -->
</template>

<script>
export default {
  // middleware: ['auth'],
  data() {
    return{
      content: [],
      dataLoaded: false
    };
  },
  async mounted(){
    try {
      const response = await this.$axios.get('/api/v1/news_analysis/');
      this.content = response.data;
      this.dataLoaded = true;
      console.log('Main page content: ', this.content)
      // this.$nuxt.$emit('auth',true);
    } catch (error) {
      console.log('Error occured while getting news_analysis: ', error)
      // this.$nuxt.$emit('auth',false)
      // this.$router.push('/login4');
    }
    
  }
}
</script>

<style>
.col.p-4{
  background-color: rgb(184, 201, 193);
}
.btn-info {
    --bs-btn-color: #000;
    --bs-btn-bg: #3b8070;
    --bs-btn-border-color: #3b8070;
    --bs-btn-hover-color: #000;
    --bs-btn-hover-bg: #1a854f;
    --bs-btn-hover-border-color: #25cff2;
    --bs-btn-focus-shadow-rgb: 11, 172, 204;
    --bs-btn-active-color: #000;
    --bs-btn-active-bg: #28aa78;
    --bs-btn-active-border-color: #25cff2;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #000;
    --bs-btn-disabled-bg: #3b8070;
    --bs-btn-disabled-border-color: #0dcaf0;
}
</style>
