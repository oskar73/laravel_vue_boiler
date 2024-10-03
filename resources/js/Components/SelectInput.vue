<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
    options: {
        type: Array,
        required: true,
    },
});

defineEmits(['update:modelValue']);

const select = ref(null);

onMounted(() => {
    if (select.value.hasAttribute('autofocus')) {
        select.value.focus();
    }
});

defineExpose({ focus: () => select.value.focus() });
</script>

<template>
    <select
        ref="select"
        class="border-gray-300 focus:border-gafoods-100 focus:ring-gafoods-100 rounded-md shadow-sm"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
    >
        <option value="" disabled>Select an option</option>
        <option
            v-for="(option, index) in options"
            :key="index"
            :value="option.value"
        >
            {{ option.label }}
        </option>
    </select>
</template>
