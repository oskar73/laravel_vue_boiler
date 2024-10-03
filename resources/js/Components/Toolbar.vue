<script setup>
import { ref, watch } from 'vue';
import ToolButton from './Buttons/ToolButton.vue';
import { usePage } from '@inertiajs/vue3';
import axios from 'axios';

const page = usePage();

defineProps({
    openToolbar: Boolean,
});

const isOpen = ref(false);
const isModalOpen = ref(false);
const selectedItem = ref(null);
const inventories = ref(page.props.inventories);

const toggleToolbar = () => {
    isOpen.value = !isOpen.value && page.props.user_machine;
};

const handleItemClick = (itemId) => {
    selectedItem.value = itemId;
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const handleItemUse = () => {
    axios.post(`/inventories/deduct/${selectedItem.value}`)
        .then((res) => {
            inventories.value = res.data;
            closeModal();
        })
        .catch((e) => console.log(`Dashboard | HandleItemUse | ${e.message}`));
};

watch(() => page.props.inventories, (newInventories) => {
    inventories.value = [...newInventories];
});
</script>

<template>
    <div class="flex relative">
        <div :class="{ 'left-[-50px]': !isOpen, 'left-[-210px]': isOpen }" class="absolute top-1/2 transform -translate-y-1/2 flex items-center z-10">
            <ToolButton @click="toggleToolbar" />
        </div>
        <div v-if="isOpen" class="absolute right-0 top-0 h-full w-40 bg-gray-100 shadow-lg transition-transform transform translate-x-0 z-0">
            <div class="flex flex-col p-4">
                <button v-for="inventory in inventories" :key="inventory.id" @click="() => handleItemClick(inventory.id)" class="mb-2 p-2 bg-blue-500 text-white rounded">
                    {{ inventory.color ? `${inventory.name} - ${inventory.color} (${inventory.quantity})` : `${inventory.name} (${inventory.quantity})` }}
                </button>
            </div>
        </div>

        <div v-if="isModalOpen" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                        <div class="sm:flex sm:items-start">
                            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Would you like to mark “Item” as used on your machine?</h3>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500"></p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                            <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" @click="handleItemUse">Yes</button>
                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="closeModal">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
