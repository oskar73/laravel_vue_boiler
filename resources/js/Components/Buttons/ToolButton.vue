<script setup>
import Tool from '@/Components/Icons/Tool.vue';

defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button :type="type" title="Tool" class="text-white bg-green-300 hover:bg-green-400 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center m-1">
        <Tool />
    </button>
</template>
