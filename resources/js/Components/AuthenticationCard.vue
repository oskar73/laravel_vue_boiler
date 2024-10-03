<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div class="bg-white shadow rounded-lg lg:flex items-center justify-center md:mt-0 w-full lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0">
            <div class="hidden lg:flex w-2/3 py-4 border-r border-1">
                <slot name="image" />
            </div>

            <div class="w-full p-6 sm:p-8 lg:p-16 lg:py-0 space-y-2">
                <slot />
            </div>
        </div>
        <div class="mt-6 text-sm slate-400">
            <slot name="bottom" />
        </div>
    </div>
</template>
