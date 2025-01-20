<template>
    <div class="text-center pt-10 font-semibold text-2xl text-gray-500">
        <h2>{{ msg || 'No props passed yet' }}</h2>
    </div>
</template>
<script setup>
const props = defineProps({
  msg: String
})

</script>