<script setup>
import ViewOrder from '@/Components/Icons/ViewOrder.vue';

defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button :type="type" title="ViewOrder" class="text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center  m-1">
        <ViewOrder />
    </button>
</template>
