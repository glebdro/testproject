

<template>
    <div>
        <!-- <div v-if="!hasToken" class="alert alert-danger mb-3">
            Need login first
        </div> -->
        <div v-if="dataLoaded" class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
            <div v-if="!showData" class="row">
                <div v-for="(item, index) in content" :key="index" class="row">
                    <!-- 1st section high-left -->
                    <div class="col-lg-6" style="width: 65%">
                        <h5 class="display-4 fst-italic">#{{item.id}}</h5>
                        <h6 class="display-4 fst-italic">News Title:</h6>
                        <p class="lead my-3">Company: {{item.company}}</p>
                    </div>
                    <!-- 2nd section high-right -->
                    <div class="col-lg-6" style="width: 35%; background-color: darkgray; border-radius: 15px; display: flex; flex-direction: column; justify-content: center">
                        <ul class="centered-list">
                            <li>GPT Short: {{item.gpt_short}}</li>
                            <li>GPT Type: {{item.gpt_type}}</li>
                            <li>Model: {{item.model}}</li>
                        </ul>
                    </div>
                    <!-- 3rd section under 1 and 2 -->
                    <div class="row">
                        <div class="col-lg-12">
                            <p>{{item.gpt_opinion}}</p>
                            <div class="d-flex justify-content-start">
                                <button @click="showDataHTML(item)" class="btn btn-primary me-2">Details for the news analysis</button>
                                <button class="btn btn-secondary">Delete news analysis</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- html which displayed only if primary button clicked -->
            <div v-if="showData" class="mt-4">
                <ul>
                    <h1>Detailed news analysis for #{{detContent.id}}</h1>
                    <li>News ID: {{detContent.id}}</li>
                    <li>Company: {{detContent.company}}</li>
                    <li>GPT type: {{detContent.gpt_type}}</li>
                    <li>Model: {{detContent.model}}</li>
                    <li>GPT short: {{detContent.gpt_short}}</li>
                    <p>{{detContent.gpt_opinion}}</p>
                    <button @click="backButton" class="btn btn-info rounded-pill" style="background-color: darkgray">Back to news analysis list</button>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // middleware: ['auth'],
    data() {
        return{
            content: [],
            dataLoaded: false,
            showData: false,
            detContent: []
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
    },
    methods:{
        async showDataHTML(item){
            try {
                const response = await this.$axios.get(`/api/v1/news_analysis/${item.id}`);
                this.detContent = response.data;
                this.showData = true;
                console.log('News details:', response.data)
            } catch (error) {
                console.log('Error occured while fetching news details:', error)
            }
        },
        async backButton(){
            this.showData = false
        }   
    }
}
</script>

<style>
    .centered-list {
        text-align: center;
    }

    .centered-list li {
        font-size: 18px;
        font-weight: bold;
    }
    .btn-primary {
        /* color of text */
        --bs-btn-color: #000;
        /* border color */
        --bs-btn-border-color: #3b8070;
        /* static color */
        --bs-btn-bg: #3b8070; 
        /* color while hover */
        --bs-btn-hover-bg: #4bb47f;
        /* color while clicked */
        --bs-btn-active-bg: #8aa59b;
        /* border color while hover */
        --bs-btn-hover-border-color: #919191;
    }

    .btn-secondary {
        /* color of text */
        --bs-btn-color: #000;
        /* border color */
        --bs-btn-border-color: #966969;
        /* static color */
        --bs-btn-bg: #966969; 
        /* color while hover */
        --bs-btn-hover-bg: #f35656;
        /* color while clicked */
        --bs-btn-active-bg: rgb(240, 162, 162);
    }
    .btn-info{
        /* border color while hover */
        --bs-btn-hover-border-color: #919191;
        /* border color */
        --bs-btn-border-color: #919191;
        /* color while hover */
        --bs-btn-hover-bg: #dadada;
    }
</style>