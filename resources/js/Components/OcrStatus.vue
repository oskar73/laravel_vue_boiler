<script setup>

defineProps({
    status: String,
});

</script>

<template>
     <span v-if="status === 'approved'" class="inline-flex items-center gap-x-1.5 rounded-md bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
      <svg class="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" />
      </svg>
      Approved
    </span>
     <span v-else-if="status === 'active'" class="inline-flex items-center gap-x-1.5 rounded-md bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
      <svg class="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" />
      </svg>
      Active
    </span>
    <span v-else-if="status === 'reviewal'" class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-100 px-1.5 py-0.5 text-xs font-medium text-indigo-700">
      <svg class="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" />
      </svg>
      Reviewal
    </span>
    <span v-else-if="status === 'processing'" class="inline-flex items-center gap-x-1.5 rounded-md bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
      <svg class="h-1.5 w-1.5 fill-blue-500" viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" />
      </svg>
      Processing
    </span>
    <span v-else-if="status === 'inactive'" class="inline-flex items-center gap-x-1.5 rounded-md bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800">
      <svg class="h-1.5 w-1.5 fill-yellow-500" viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" />
      </svg>
      Inactive
    </span>
    <span v-else-if="status === 'rejected'" class="inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700">
      <svg class="h-1.5 w-1.5 fill-red-500" viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" />
      </svg>
      Rejected
    </span>
    <span v-else class="inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
      <svg class="h-1.5 w-1.5 fill-gray-400" viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" />
      </svg>
      {{status}}
    </span>
</template>
