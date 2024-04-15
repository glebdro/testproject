<template>
    <div style="position: relative;">
        <h1 style="text-align: center;">Files monitor</h1>
        <div v-if="loading" class="loader"></div>
        <div v-if="dataLoaded" class="mb-5 rounded" style="margin-left: 50px; display: flex; flex-wrap: wrap;">
            <div
                v-for="(item, index) in content"
                :key="index"
                @click="highlightItem(index)"
                :class="{ 'highlighted': selectedItem === index }"
                class="mb-5 file-item"
                :style="{ height: selectedItem === index ? 'auto' : '180px' }">
                <span>#{{ item.id }}</span>
                <span style="margin-bottom: 10px; display: block;">File name: {{ item.file_name }}</span>
                <span style="margin-bottom: 10px; display: block;">File type: {{ item.file_type }}</span>
                <span style="margin-bottom: 10px; display: block;">Status: {{ item.status }}</span>
                <div class="d-flex justify-content-start" style="margin-top: auto;">
                    <button v-if="selectedItem === index" class="btn-custom-d">Details</button>
                    <button v-if="selectedItem === index" class="btn-custom" @click="deleteFile(index)">Delete</button>
                </div>
            </div>
            <div v-if="showDeleteConfirmation" class="modal">
                <div class="modal-content">
                    <p> Are you sure you want to delete the file #{{content[selectedItem].id}} ({{content[selectedItem].file_name}})?</p>
                    <div class="btn-container">
                        <button @click="confirmDelete" class="btn-confirm">Confirm</button>
                        <button @click="cancelDelete" class="btn-cancel">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataLoaded: false,
            loading: true,
            content: [],
            selectedItem: null,
            showDeleteConfirmation: false
        };
    },
    async mounted() {
        try {
            await new Promise(resolve => setTimeout(resolve, 300));
            const response = await this.$axios.get('api/v1/upload');
            this.loading = false;
            this.content = response.data;
            this.dataLoaded = true;
            console.log('response: ', response);
        } catch (error) {
            console.log('Error: ', error);
        }
    },
    methods: {
        highlightItem(index) {
            this.selectedItem = index;
            console.log('Selected Item ID:',this.content[this.selectedItem].id)
        },
        async deleteFile(index) {
            this.selectedItem = index;
            this.showDeleteConfirmation = true;
            console.log('Deleting file for item with index:', index);
        },
        async confirmDelete() {
            if (this.selectedItem !== null && this.content[this.selectedItem]) {
                console.log('Confirmed deletion for item with index:', this.selectedItem);
                try {
                    await this.$axios.delete(`/api/v1/upload/${this.content[this.selectedItem].id}`);
                    this.showDeleteConfirmation = false;
                    this.selectedItem = null; 
                    console.log('Successfully deleted file id=', this.content[this.selectedItem].id)
                } catch (error) {
                    console.log('Error:',error)
                }
            }
        },
        cancelDelete() {
            this.showDeleteConfirmation = false;
        }
    }
};
</script>

<style>
    .file-item {
        flex-basis: calc(33.33% - 20px);
        margin-bottom: 20px;
        margin-right: 20px;
        transition: height 0.3s ease;
        background-color: lightgray; /* Возвращаем светло-серую заливку */
        padding: 20px;
        border-radius: 10px;
    }

    .highlighted {
        border-width: 5px;
        border-style: solid;
        border-color: transparent;
        border-image: linear-gradient(to center, lightblue, lightgray) 1;
        background-color: #91a7b4;
        border-radius: 10px;
        padding: 20px;
    }
    .btn-custom-d {
    background-color: #4b4b4b; 
    color: #fff; 
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    transition: background-color 0.3s ease; /* плавный переход */
    }

    .btn-custom-d:hover {
        background-color: #a0a0a0; 
    }

    .btn-custom-d:active {
        background-color: #5f87c1; 
    }
    .btn-custom {
    background-color: #aa5d5d; 
    color: #fff; 
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    transition: background-color 0.3s ease; /* плавный переход */
    }

    .btn-custom:hover {
        background-color: #dd9d9d; 
    }

    .btn-custom:active {
        background-color: #ffcbcb; 
    }
    .modal{
        display: block;
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
    
    .modal-content{
        background-color: white;
        width: 300px;
        padding: 20px;
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .btn-container{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    .btn-confirm,
    .btn-cancel{
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .btn-confirm{
        background-color: #dd9d9d;
    }
    .btn-cancel{
        background-color: #a0a0a0;
    }


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