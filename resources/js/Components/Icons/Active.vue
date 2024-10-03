<script setup>
defineProps({
    title: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" :title="title"></div>
</template>
