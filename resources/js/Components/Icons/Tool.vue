<script setup>
defineProps({
    height: {
        type: Number,
        default: 7,
    },
    width: {
        type: Number,
        default: 7,
    },
});
</script>

<template>
    <svg :class="`w-${width} h-${height} flex-shrink-0 group-hover:text-gray-900 transition duration-75`"
        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="#000" stroke-miterlimit="10"
            d="m8.7 6.4-3.1 3c-.3.3-.8.3-1.2 0l-.2-.2C4.1 9 4 8.8 4 8.6V7.2c0-.2.1-.4.2-.6l2.4-2.4c.3-.3.8-.3 1.2 0l1 1c.2.3.2.8-.1 1.2zM9.6 11.8l3.9 3.9c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L11 10.4M9.6 8.9 7.9 7.2 6.5 8.6l1.7 1.8M4.6 12.6c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0 .8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0z">
        </path>
        <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
            d="M16 5.9c0-.3-.1-.6-.2-.9l-1.1 1.1h-1v-.9l1.1-1.1c-.2-.1-.5-.2-.8-.2-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2z">
        </path>
        <path fill="none" stroke="#000" stroke-miterlimit="10"
            d="m12.1 6.5-5.6 5.6c.3.1.6.3.9.5s.4.6.5.9L13.4 8l.1-.1c-.6-.2-1.2-.7-1.4-1.4z"></path>
        <circle cx="6" cy="14" r=".6"></circle>
    </svg>
</template>
