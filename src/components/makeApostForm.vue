<script setup>

    import {summitPostForm} from '../scripts/postFormSummit'

    const props = defineProps({
        mainStats:{
            required:true
        }
    })



</script>

<script>
     export default {
        data() {
        return {
            url: "https://d1ki6hjeuoplax.cloudfront.net/images/_article3x_webp/7466895/challenger1.webp",
            inputImageFile:null
        }
        },
        methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
            
        },
        activeImageInput(){
            document.getElementById('imageInput').click()
        }
     }
    }

    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
        tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + "px";
    }
</script>

<template>
    <div class="d-flex flex-column">

        <form class="d-flex flex-column" >
            <input type="text" name="title" id="title" class="make-post-input fw-bold h4 mb-3 p-2"  placeholder="Titre">
            <textarea  type="text" name="description" id="description" class="make-post-input fs-14 mb-3 p-2"  placeholder="Déscription"></textarea>
            <div  class="d-flex flex-row justify-content-evenly mt-3">
                
                <div v-for="stat in props.mainStats" style="width: 30%; justify-content: center;">
                    
                    <p class="fs-12">{{ stat.title }}</p>
                    <p class="fs-5 ">{{ stat.value }}</p>
                    
                </div> 

            </div>
            <img :src="url" class="mt-3 w-100" @click="activeImageInput" style="cursor: pointer;"/>
            <input type="file" name="image" id="imageInput" @change="onFileChange" style="display: none !important;"/>

        </form>
        <button @click="summitPostForm()" class="summitButton btn btn-primary mt-3 ">Publier</button>
    </div>
</template>