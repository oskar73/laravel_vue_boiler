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
         fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd" />
    </svg>
</template>
