<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form @submit.prevent="submitForm">
                    <!-- file name input -->
                    <div class="input-container">
                        <label for="text" style="font-family: Arial; color: #4f4f4f">File name</label>
                        <input type="text" class="form-control" id="text" v-model="fileName">
                    </div>
                    <!-- choose file input-->
                    <div class="input-file-container">
                        <!-- <label for="fileInput" class="form-label">Choose file</label> -->
                        <input class="form-control" type="file" id="fileInput" ref="fileInput" @change="onFileChange" required>
                    </div>
                    <!-- select file type input-->
                        <div class="select-container">
                            <label for="fileTypeSelect" class="form-label" style="font-family: Arial; color: #4f4f4f">File type</label>
                            <select class="form-select flex-grow-1" id="fileTypeSelect" v-model="fileType" required>
                                <option selected disabled value="">Choose file type</option>
                                <option value="json">JSON</option>
                                <option value="pdf">PDF</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid file type.
                            </div>
                        </div>
                    
                    <!-- external URL input -->
                    <div class="input-container">
                        <label for="text" style="font-family: Arial; color: #4f4f4f">External URL</label>
                        <input type="text" class="form-control" id="text" v-model="externalURL">
                    </div>
                    <!-- tumbler with logos-->
                    <div class="text-center">
                        <span style="color: #5a5a5a; font-size: 17px; font-family: Arial;">Switch GPT model</span>
                    </div>
                        <div class="mb-5 d-flex align-items-center justify-content-center">
                            <div class="figure-wrapper">
                                <figure>
                                    <img src="llama_logo.png" alt="OpenAI" class="logo">
                                    <figcaption style="font-style: italic; font-size: 13px; color: #5a5a5a;">Llama</figcaption>
                                </figure>
                            </div>
                            <div class="ms-2" style="position: relative; top: -11px; left: -7px;">
                                <label class="toggle-switch" :class="{ 'toggle-switch-checked': GPTmodel }">
                                    <input type="checkbox" v-model="GPTmodel">
                                </label>
                            </div>
                            <div class="figure-wrapper">
                                <figure>
                                    <img src="openai_logo.png" alt="OpenAI" class="logo">
                                    <figcaption style="font-style: italic; font-size: 13px; color: #5a5a5a;">OpenAI</figcaption>
                                </figure>
                            </div>
                        </div>
                    <!-- form submit button -->
                    <div style="margin-left: 50px; margin-top: -20px; margin-bottom: 40px">
                        <button type="submit" class="btn-custom">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            file: null,
            fileName: null,
            fileType: null,
            externalURL: null,
            GPTmodel: 'llama'
        };
    },
    methods:{
        onFileChange(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileContent = e.target.result;
                console.log('Uploaded file content: ',fileContent),
                this.file = fileContent
            };
            reader.readAsBinaryString(file);
        },
        async submitForm(){
            try {
                const response = await this.$axios.post('api/v1/upload/', {  
                    file_name: this.fileName,
                    file_type: this.fileType,
                    url: this.externalURL,
                    file: this.file
                })
                console.log('POST responce:', response),
                // console.log('отправка формы: файл'),
                console.log('Выбранная модель:', this.GPTmodel ? 'OpenAI':'Llama');
                // const response2 = await this.$axios.put(`/api/v1/upload/${response.data.id}/file/`, this.file, {
                //     headers: {
                //         'Content-Type': 'application/octet-stream'
                //     }
                // });
                // console.log('PUT responce:', response2)
            } catch (error) {
                console.log('Error upload: ', error)
            }
        }
    }
}
</script>

<style scoped>
/* FORM */
.col-md-6{
    /* border: 0.1px solid #9e9e9e; */
    border-radius: 10px;
    background-color: rgb(218, 218, 218);
    min-width: 150px;
}
    /* tumbler */
.toggle-switch {
    width: 60px;
    height: 30px;
    border-radius: 15px;
    background-color: white;
    position: relative;
    cursor: pointer;
}
.toggle-switch::before{
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: rgb(31, 110, 212);
    top: 2px;
    left: 2px;
    transition: left 0.4s, background-color 0.4s;
}
.toggle-switch-checked::before{
    left: 32px;
    background-color: rgb(0, 0, 0);
}
input[type="checkbox"]{
    display: none;
}
input[type="checkbox"]:checked + .toggle-switch::before{
    left: 32px;
    background-color: blue;
}
/* logos */
.logo{
    width: 35px;
    height: 35px;
    margin-right: 5px;
}
/* FILE NAME, EXTERNAL URL */
.input-container{
    position:relative;
    margin:50px;
    max-width: 480px;
    width: 'auto';
}
.input-container label{
    position: absolute;
    top: -19px;
    left: 12px;
    background-color: transparent;
    padding: 0 5px;
}
.input-container input{
    
    padding: 10px;
    border: 2px solid #8a8a8a;
    border-radius: 8px;
    outline: none;
}
/* FILE TYPE */
.select-container{
    position:relative;
    margin:50px;
    max-width: 480px;
    width: 'auto';
}
.select-container label{
    position: absolute;
    top: -19px;
    left: 12px;
    background-color: transparent;
    padding: 0 5px;
}
.select-container select{
    
    padding: 10px;
    border: 2px solid #8a8a8a;
    border-radius: 8px;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearence: none;
    
}
/* INPUT FILE */
.input-file-container{
    position:relative;
    margin:50px;
}
.input-file-container input{
    max-width: 480px;
    width: 'auto';
    padding: 10px;
    border: 2px solid #8a8a8a;
    border-radius: 8px;
    outline: none;
}
.figure-wrapper {
    display: flex;
    align-items: center;
}
.btn-custom {
background-color: #6f87b4; 
color: #fff; 
border: none;
border-radius: 5px;
padding: 10px 20px;
transition: background-color 0.3s ease; /* плавный переход */
}

.btn-custom:hover {
    background-color: #a0a0a0; 
}

.btn-custom:active {
    background-color: #5f87c1; 
}
    

</style>