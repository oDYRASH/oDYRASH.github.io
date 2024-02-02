<script setup>

    const params = defineProps({
        spanName: {
            type: String,
            required: true
        },
        iconName: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: false,
        }
    })

</script>

<template>

    <!-- Span -->
    <a draggable="false" class="navSpan">
        <i class="material-icons" >{{ params.iconName }}</i><a href="" class="spanName" :id="id">{{ params.spanName }}</a>
    </a>

</template>