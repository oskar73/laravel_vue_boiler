<script setup>
import {Link, usePage} from '@inertiajs/vue3';
import Dashboard from '@/Components/Icons/Dashboard.vue';
import Users from '@/Components/Icons/Users.vue';
import { InboxIcon, CircleStackIcon, PrinterIcon, WindowIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline'

defineProps({
    openSidebar: Boolean,
});

</script>

<template>
    <aside
        class="fixed z-[10] h-full top-0 left-0 pt-[65px] md:pt-[73px] flex lg:flex flex-shrink-0 flex-col w-48 transition-width duration-75" :class="{'hidden':!openSidebar}">
        <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100 pt-0">
            <div class="flex-1 flex flex-col overflow-y-auto">
                <div class="flex-1 divide-y space-y-1">
                    <ul class="space-y-0 px-2 py-2">
                        <li>
                            <Link :href="route('dashboard')" :class="`text-base text-gray-900 font-normal rounded flex items-center p-2 hover:text-gray-600 group ${route().current('dashboard')? 'bg-gray-200':''}`">
                                <Dashboard />
                                <span class="ml-3">Dashboard</span>
                            </Link>
                        </li>

                        <template v-if="$page.props.auth.user.role === 'owner'">
                            <li>
                                <Link :href="route('messages.index')" :class="`text-base text-gray-900 font-normal rounded flex items-center p-2 hover:text-gray-600 group ${route().current('messages.index')? 'bg-gray-200':''}`">
                                    <InboxIcon class="h-6 w-6 text-gray-500 group-hover:text-gray-900"/>
                                    <span class="ml-3">Messages</span>
                                </Link>
                            </li>

                            <li>
                                <Link :href="route('queues.index')" :class="`text-base text-gray-900 font-normal rounded flex items-center p-2 hover:text-gray-600 group ${route().current('queues.index')? 'bg-gray-200':''}`">
                                    <CircleStackIcon class="h-6 w-6 text-gray-500 group-hover:text-gray-900"/>
                                    <span class="ml-3">Queues</span>
                                </Link>
                            </li>
                            <li>
                                <Link :href="route('users.index')" :class="`text-base text-gray-900 font-normal rounded flex items-center p-2 hover:text-gray-600 group ${route().current('users.index')? 'bg-gray-200':''}`">
                                    <Users />
                                    <span class="ml-3">Users</span>
                                </Link>
                            </li>
                            <li>
                                <Link :href="route('machines.index')" :class="`text-base text-gray-900 font-normal rounded flex items-center p-2 hover:text-gray-600 group ${route().current('machines.index')? 'bg-gray-200':''}`">
                                    <PrinterIcon class="h-6 w-6 text-gray-500 group-hover:text-gray-900"/>
                                    <span class="ml-3">Machines</span>
                                </Link>
                            </li>
                            <li>
                                <Link :href="route('activities.index')" :class="`text-base text-gray-900 font-normal rounded flex items-center p-2 hover:text-gray-600 group ${route().current('activities.index')? 'bg-gray-200':''}`">
                                    <WindowIcon class="h-6 w-6 text-gray-500 group-hover:text-gray-900"/>
                                    <span class="ml-3">Activity Log</span>
                                </Link>
                            </li>
                            <li>
                                <Link :href="route('inventories.index')" :class="`text-base text-gray-900 font-normal rounded flex items-center p-2 hover:text-gray-600 group ${route().current('inventories.index')? 'bg-gray-200':''}`">
                                    <ArchiveBoxIcon class="h-6 w-6 text-gray-500 group-hover:text-gray-900"/>
                                    <span class="ml-3">Inventory</span>
                                </Link>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
    </aside>
</template>


