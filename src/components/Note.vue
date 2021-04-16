<template>
    <div class="bg-gray-400 rounded text-center p-1 shadow-lg space-y-1">
        <h1 class="text-3xl font-semibold tracking-wider">{{$props.note.title}}</h1>
        <p class="font-mono">{{$props.note.content}}</p>
        <div class="flex justify-between">
            <button @click="editNote(note)" class="text-green-700 text-2xl hover:text-green-400"><ic:sharp-edit/></button>
            <button @click="deleteNote($props.note.id)" class="text-red-700 text-2xl hover:text-red-400"><mdi:delete/></button>
        </div>
    </div>
</template>

<script setup>
    import {defineProps, defineEmit} from 'vue'
    import {remove, showToggle,noteEdited} from '../helpers/useNote'

    const props = defineProps({
        note: Object,
        default: {
            id: 0,
            title: '',
            content: '',
    },
    })
    
    const emit = defineEmit(['deleted'])
    const deleteNote = async id => {
        await remove(id)
        emit('deleted')
    }

    const editNote = note => {
        //console.log(note)
        noteEdited.value = note
        showToggle()
    }
</script>