<script setup>
import {  Link } from '@inertiajs/vue3';
import Edit from '@/Components/Icons/Edit.vue';

defineProps({
    href: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <Link :href="href" title="Delete" class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center m-1">
        <Edit />
    </Link>
</template>
