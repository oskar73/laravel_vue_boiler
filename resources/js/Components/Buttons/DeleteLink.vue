<script setup>
import {  Link } from '@inertiajs/vue3';
import Delete from '@/Components/Icons/Delete.vue';

defineProps({
    href: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <Link :href="href" title="Delete" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center  m-1">
        <Delete />
    </Link>
</template>
