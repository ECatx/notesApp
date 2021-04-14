<template>
    <div class="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 container mx-auto">
    
        <Note v-for="n in 10" :key="n"/>
        <NewNote/>
     </div>

</template>