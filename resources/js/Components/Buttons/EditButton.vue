<script setup>
import Edit from '@/Components/Icons/Edit.vue';

defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button :type="type" title="Edit" class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center m-1">
        <Edit />
    </button>
</template>
