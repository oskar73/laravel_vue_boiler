<script setup>
import {ref} from 'vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import Notification from '@/Components/Notification.vue';
import ChooseMachine from '@/Components/ChooseMachine.vue';
import Profile from '@/Components/Profile.vue';

defineProps({
    toggleSidebar: Function,
});

</script>

<template>
    <nav class="bg-white border-b border-gray-200 fixed z-[12] w-full">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <AuthenticationCardLogo />
                </div>
                <div class="flex items-center">


                    <ChooseMachine />

                    <Notification />


                    <!-- Profile -->
                    <Profile />

                    <div class="ml-2 flex items-center sm:hidden">
                        <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition" @click="toggleSidebar">
                            <svg
                                class="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    class="inline-flex"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>
