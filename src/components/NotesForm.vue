<template>
    <div class="absolute inset-0 w-screen h-screen bg-green-900  opacity-95 flex justify-center items-center">
        <button @click="reset" class="text-white absolute top-3 left-3"><mdi:close-outline class="text-4xl"/>        
        </button>
        <form @submit.prevent class="space-y-4">
            <div class="flex flex-col">
                <label for="title" class="text-white mb-1">Title</label>
                <input type="text" name="title" class="rounded-md py-2 px-3" placeholder="Title" v-model="newNote.title">
            </div>
            <div class="flex flex-col">
                <label for="content" class="text-white mb-1">Content</label>
                <input type="text" name="content" class="rounded-md py-2 px-3" placeholder="Content" v-model="newNote.content">
                <button v-if="noteEdited" class="w-full bg-yellow-800 text-white p-3 rounded-md mt-5 hover:bg-violet-600 shadow-lg" @click="updateNote">
                    Update
                </button>
                <button v-else class="w-full bg-purple-800 text-white p-3 rounded-md mt-5 hover:bg-violet-600 shadow-lg" @click="createNote">
                    Add
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import {showToggle, add, save,noteEdited} from '../helpers/useNote'
import {reactive, defineEmit, onMounted} from 'vue'

const emit = defineEmit(['added', 'saved'])


const newNote = reactive({
    title: '',
    content: '',
})

onMounted(() => {
    if (noteEdited.value){
        newNote.title = noteEdited.value.title
        newNote.content = noteEdited.value.content
    }
})

const reset = event => {
    showToggle()
    newNote.title= ''
    newNote.content= ''
    noteEdited.value = null
    emit(event)
}

const createNote = async () => {
    await add(newNote)
    reset('added')
}

const updateNote = async () => {
    await save({ id:noteEdited.value.id, ...newNote})
    reset('saved')
}
</script>