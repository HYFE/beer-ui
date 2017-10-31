<template>
    <div>
        <button @click="show = !show">点击</button><br>
        <expand-transition>
            <ul class="expand-demo" v-show="show">
                <li v-for="n in 5">{{String(n).repeat(8)}}</li>
            </ul>
        </expand-transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false
        }
    }
}
</script>
<style>
.expand-demo {
    display: inline-block;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .2)
}
.expand-demo li {
    padding: 10px 15px;
}
</style>
