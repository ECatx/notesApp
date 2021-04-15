<template>
    <div class="bg-gray-400 rounded text-center p-1 shadow-lg space-y-1">
        <h1 class="text-3xl font-semibold tracking-wider">{{$props.note.title}}</h1>
        <p class="font-mono">{{$props.note.content}}</p>
        <div class="flex justify-between">
            <button class="text-green-700 text-2xl hover:text-green-400"><ic:sharp-edit/></button>
            <button class="text-red-700 text-2xl hover:text-red-400"><mdi:delete/></button>
        </div>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'
    const props = defineProps({
        note: Object,
        default: {
            id: 0,
            title: '',
            content: '',
    },
    })

</script>