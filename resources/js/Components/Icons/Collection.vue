<script setup>
defineProps({
    height: {
        type: Number,
        default: 6,
    },
    width: {
        type: Number,
        default: 6,
    },
    active: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <svg :class="`w-${width} h-${height} ${active?'text-gray-900':'text-gray-500'} flex-shrink-0 group-hover:text-gray-900 transition duration-75`"
         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
    </svg>
</template>
