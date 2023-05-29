<script setup>
import { vMaska } from "maska"
const props = defineProps([
    'formlabel', 'tipo', 'valor', "mask", 'modelValue', 'update:modelValue', 'requiredError', 'formatEror'
])

</script>

<template>
    <div>
        <label>{{ formlabel }}</label>
        <input :type="tipo" v-maska :data-maska="mask" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" />

    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;

}

input {
    padding: 12px 5px;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: #878787;
    outline: none;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    margin-bottom: 0.5rem;
}

input:focus {
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: #BECFDB;

}
</style>