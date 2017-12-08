<template>
    <div>
        <textarea v-model="value"
                v-auto-height></textarea>
        <textarea v-model="value2"
                v-auto-height></textarea>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: 'this is a textarea',
            value2: 'this is a textarea2 this is a textarea2 this is a textarea2'
        }
    }
}
</script>
