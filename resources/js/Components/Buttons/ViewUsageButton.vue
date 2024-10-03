<script setup>
import ViewUsage from '@/Components/Icons/ViewUsage.vue';

defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button :type="type" title="ViewUsages" class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center  m-1">
        <ViewUsage />
    </button>
</template>
