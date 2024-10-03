<script setup>
import {Link, usePage} from '@inertiajs/vue3';

const page = usePage();

</script>

<template>
    <div >
        <Link
            :href="route('choose.machine')"
            class="rounded-md bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-indigo-100"
        >
           {{page.props.user_machine?? 'Choose Machine'}}
        </Link>
    </div>
</template>
