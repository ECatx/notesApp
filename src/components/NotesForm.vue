<template>
    <div class="absolute inset-0 w-screen h-screen bg-green-900  opacity-95 flex justify-center items-center">
        <button @click="showToggle" class="text-white absolute top-3 left-3"><mdi:close-outline class="text-4xl"/>        
        </button>
        <form @submit.prevent class="space-y-4">
            <div class="flex flex-col">
                <label for="title" class="text-white mb-1">Title</label>
                <input type="text" name="title" class="rounded-md py-2 px-3" placeholder="Title">
            </div>
            <div class="flex flex-col">
                <label for="content" class="text-white mb-1">Content</label>
                <input type="text" name="content" class="rounded-md py-2 px-3" placeholder="Content">
            </div>
            <div>
                <button class="w-full bg-purple-800 text-white p-3 rounded-md mt-5 hover:bg-violet-600 shadow-lg">
                        Add
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import {showToggle} from '../helpers/useNote'
</script>