<script setup>

    import {summitPostForm} from '../scripts/postFormSummit'

    const props = defineProps({
        statPreview:{
            required:true
            
        }
    })



</script>

<script>
     export default {
        data() {
        return {
            url: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
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
</script>

<template>
    <div class="d-flex">

        <form class="d-flex flex-column" >
            <input type="text" name="title" id="title" class="make-post-input mb-3 p-2"  placeholder="Titre de activité" style="color: black !important;" value="Game de foufou ! (Triple monstre)">
            <input type="text" name="description" id="description" class="make-post-input mb-3 p-2"  placeholder="Déscription" style="color: black !important;" value="et apagnan toutiQuantY et apagnan toutiQuantY et apagnan toutiQuantY et apagnan toutiQuantY et apagnan toutiQuantY et apagnan toutiQuantY">
            <div  class="d-flex flex-row justify-content-evenly mt-2 mb-2">
                
                <div v-for="stat in props.statPreview">
                    
                    <p class="fs-12">{{ stat.title }}</p>
                    <p class="fs-5 ">{{ stat.value }}</p>
                    
                </div> 

            </div>
            <img :src="url" class="mt-1 mb-1 w-100" @click="activeImageInput" style="cursor: pointer;"/>
            <input type="file" name="image" id="imageInput" @change="onFileChange" style="display: none !important;"/>

            <button @click="summitPostForm()" class="" style="color: black !important;">Publier</button>
        </form>
    </div>
</template>