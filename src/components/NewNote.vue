<template>
    <div class="bg-gray-400 rounded text-center p-1 shadow-lg space-y-1 flex place-items-center justify-center items-center">
        <button @click="showToggle" class="transform transition-all opacity-30 hover:scale-110 hover:opacity-80">
                <mdi:card-plus class="w-48 h-48"/>
        </button>
    </div>
</template>

<script setup>
import {showToggle} from '../helpers/useNote'
</script>