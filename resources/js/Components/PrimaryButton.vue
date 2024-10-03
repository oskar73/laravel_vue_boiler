<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="inline-flex rounded-md bg-gafoods-100 px-4 py-2 text-sm font-semibold text-white shadow-sm">
        <slot />
    </button>
</template>
