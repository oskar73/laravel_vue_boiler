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
        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
</template>
