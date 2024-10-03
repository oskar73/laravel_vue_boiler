<script setup>

import {  router, Link } from '@inertiajs/vue3';
import Dropdown from '@/Components/Dropdown.vue';
const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <div class="ml-3">
        <Dropdown align="right" width="48">
            <template #trigger>
                <button type="button"
                        class="flex text-sm  focus:ring-1 rounded-full overflow-hidden focus:ring-gray-300" aria-expanded="false"
                        data-dropdown-placement="bottom">
                    <span class="sr-only">Open user menu</span>
                    <img src="https://ui-avatars.com/api/?size=150&&name=Test" class="w-8 h-8 "
                         alt="user photo" />
                </button>
            </template>
            <template #content>
                <div class="py-3 px-4" role="none">
                    <p class="text-sm" role="none">{{ $page.props.auth.user.name}}</p>
                    <p class="text-sm font-medium text-gray-900 truncate" role="none">
                        {{ $page.props.auth.user.email }}
                    </p>
                </div>
                <ul class="py-1" role="none">
                    <li>
                        <Link :href="route('profile.show')" :class="`block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ${route().current('profile.show')? 'bg-gray-100':''}`">
                            Profile
                        </Link>
                    </li>
                    <li>

                        <form method="POST" @submit.prevent="logout">
                            <button type="submit" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                Sign Out
                            </button>
                        </form>

                    </li>
                </ul>
            </template>
        </Dropdown>
    </div>


</template>
