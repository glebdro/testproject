

<template>
    <div>
        <!-- <div v-if="!hasToken" class="alert alert-danger mb-3">
            Need login first
        </div> -->
        <div v-if="loading" class="loader"></div>
        <div v-if="dataLoaded" class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
            <div v-if="!showData" class="row">
                <div v-for="(item, index) in content" :key="index" class="row newsblock">
                    <!-- 1st section high-left -->
                    <div class="col-lg-6" style="width: 85%">
                        <h5 class="display-4 fst-italic">#{{item.id}}</h5>
                        <h6 class="display-4 fst-italic">{{item.news_title}}</h6>
                        <p class="lead my-3 company-name-style" >Company: {{item.company_name}} [{{item.company_ticker}}]</p>
                    </div>
                    <!-- 2nd section high-right -->
                    <div class="col-lg-6" style="width: auto; height: 20%; margin-top: 30px; background-color: darkgray; border-radius: 10px; display: flex; flex-direction: column; justify-content: center">
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
                    <br>
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
            loading: true,
            showData: false,
            detContent: []
        };
    },
    async mounted(){
        try {
            await new Promise(resolve => setTimeout(resolve, 200));
            const response = await this.$axios.get('/api/v1/news_analysis/');
            this.loading = false;
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

<style scoped>
.row.newsblock{
    margin-bottom: 90px; 
    background-color: rgb(216, 216, 216); 
    border-radius: 10px;
}
.company-name-style{
    font-weight: bold; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Тень текста */
}
.centered-list {
    text-align: center;
    list-style-type: none;
    padding: 0;
}

.centered-list li {
    font-size: 18px;
    font-weight: bold;
}
/* BUTTONS */
.btn-primary {
    background-color: #4b4b4b; 
    color: #fff; 
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    transition: background-color 0.3s ease; /* плавный переход */
    margin-bottom: 20px;
}

.btn-primary:hover {
    background-color: #a0a0a0; 
}

.btn-primary:active {
    background-color: #5f87c1; 
}
.btn-secondary{
background-color: #aa5d5d; 
color: #fff; 
border: none;
border-radius: 5px;
padding: 10px 20px;
transition: background-color 0.3s ease; /* плавный переход */
margin-bottom: 20px;
}

.btn-secondary:hover {
    background-color: #dd9d9d; 
}

.btn-secondary:active {
    background-color: #ffcbcb; 
}
.btn-info{
    /* border color while hover */
    --bs-btn-hover-border-color: #919191;
    /* border color */
    --bs-btn-border-color: #919191;
    /* color while hover */
    --bs-btn-hover-bg: #dadada;
}
/* LOAD SPINNER */
.loader {
position: absolute;
left: 50%;
width: 50px;
aspect-ratio: 1;
border-radius: 50%;
border: 8px solid #6f87b4;
animation:
l20-1 0.5s infinite linear alternate,
l20-2 1.0s infinite linear;
}
@keyframes l20-1{
    0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
    12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
    25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
    50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
    62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
    75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
    100%  {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
}
@keyframes l20-2{ 
    0%    {transform:scaleY(1)  rotate(0deg)}
    49.99%{transform:scaleY(1)  rotate(135deg)}
    50%   {transform:scaleY(-1) rotate(0deg)}
    100%  {transform:scaleY(-1) rotate(-135deg)}
}
</style>