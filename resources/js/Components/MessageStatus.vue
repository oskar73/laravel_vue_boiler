<script setup>

defineProps({
    status: String,
});

</script>

<template>
     <span v-if="status === 'read'" class="inline-flex items-center gap-x-1.5 rounded-md bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
      <svg class="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" />
      </svg>
      Read
    </span>
    <span v-else-if="status === 'unread'" class="inline-flex items-center gap-x-1.5 rounded-md bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
      <svg class="h-1.5 w-1.5 fill-blue-500" viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" />
      </svg>
      Unread
    </span>
    <span v-else class="inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
      <svg class="h-1.5 w-1.5 fill-gray-400" viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" />
      </svg>
      {{status}}
    </span>
</template>
