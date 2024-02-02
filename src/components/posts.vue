<script>
export default {
    data() {
        return {
            buttonClass: '',
        };
    },
    methods: {
        postLiked(){
            this.buttonClass = 'bg-red';
            // alert('Liked') 
        }
    } 
}

</script>

<script setup>

    const props = defineProps({
        id: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        profile: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        stats: {
            type: Array,
            required: true,
        }, 
        likes: {
            type: Array,
        },
        media: {
            type: String,
        },
        achivements: {
            type: Array,
        },
        timeStamp: {
            type: String
        }
    });
    
</script>
<template>

    <main class="postContainer">

        <!-- UserInfo -->
        <div class="d-flex flex-row align-items-center">
            <div>
                <img class="postPP" :src="props.media" :alt="props.username">
            </div>
            <div class="ml-1" style="margin-left: 5px;">
                <p class="fw-bold fs-14">{{ props.username }}</p>
                <p class="fs-12">{{ props.timeStamp }}</p>
            </div>
        </div>
        
        <!-- Stats -->
        <div class="d-flex flex-column mt-3">
            <p class="text-break fw-bold h4">{{ props.title }}</p>
            <p class="text-break fs-14">{{ props.text }}</p>
            <div  class="d-flex flex-row justify-content-evenly mt-2 mb-2">
                <div >
                
                    <p><i class="material-symbols-outlined">trophy</i></p>
                    <p>{{props.achivements.length}}</p>
                    
                </div>
                
                <div v-for="stat in props.stats">
                    
                    <p class="fs-12">{{ stat.title }}</p>
                    <p class="fs-5 ">{{ stat.value }}</p>
                    
                </div> 
            </div>
        </div>

        <!-- Media -->
        <div>
            <img class="postMedia" :src="props.media" alt="">
        </div>
        
        <!-- Footer -->
        <div class="d-flex mt-3 mb-3 align-items-center space-content-evenly gap-2">
            <div class="p-2 flex-grow-1"> {{ props.likes.length }} Likes </div>
            <button class="boutonPerso d-flex align-items-center transi-100" :class="buttonClass"  @click="postLiked" ><i class="material-icons">favorite</i></button>
            <button class="boutonPerso d-flex align-items-center"><i class="material-icons">comment</i></button>
            <button class="boutonPerso d-flex align-items-center"><i class="material-icons">share</i></button>
        </div>
    </main>

</template>