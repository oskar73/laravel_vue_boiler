<script setup>
import Dropdown from '@/Components/Dropdown.vue';
</script>

<template>
    <div >
        <Dropdown align="right" width="120">
            <template #trigger>

                <button v-on:click="open = !open" type="button"
                        class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100">
                    <span class="sr-only">View notifications</span>
                    <!-- Bell icon -->
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
                        </path>

                    </svg>
                </button>
            </template>
            <template #content>
                <div class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50">
                    Notificatiosns (5)
                </div>
                <div class="max-h-[350px] overflow-y-auto pr-3">
                    <a href="/" class="flex py-3 px-4 hover:bg-gray-100 min-w-[300px]">
                        <div class="flex-shrink-0">
                            <img class="w-11 h-11 rounded-full" alt="Jese image" src='https://ui-avatars.com/api/?size=150&&name=TN' />
                        </div>
                        <div class="pl-3 w-full">
                            <div class="text-gray-500 font-normal text-sm mb-1.5">
                                Test Notification
                            </div>
                            <div class="text-xs font-medium text-cyan-600">2 seconds ago</div>
                        </div>
                    </a>
                    <a href="/" class="flex py-3 px-4 hover:bg-gray-100 min-w-[300px] border-b">
                        <div class="flex-shrink-0">
                            <img class="w-11 h-11 rounded-full" alt="Jese image" src='https://ui-avatars.com/api/?size=150&&name=TN' />
                        </div>
                        <div class="pl-3 w-full">
                            <div class="text-gray-500 font-normal text-sm mb-1.5">
                                Test Notification1
                            </div>
                            <div class="text-xs font-medium text-cyan-600">1 min ago</div>
                        </div>
                    </a>
                </div>
                <a href="#" class="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100">
                        <div class="inline-flex items-center">
                            <svg class="mr-2 w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                <path fill-rule="evenodd"
                                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            View all
                        </div>
                    </a>
            </template>
        </Dropdown>
    </div>
</template>
