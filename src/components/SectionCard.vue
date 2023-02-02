<template>
    <div class="card card-body" @click="signUp" :style="{backgroundColor: section.color, margin: '8px'}">
        <h5 class="card-title">{{section.intruktor}}</h5>
        <div>{{section.godzinaOd}}:00 - {{section.godzinaDo}}:00</div>
        <div>{{section.wycenaOd}} - {{section.wycenaDo}}</div>
        <div>Wolne miejsca: {{section.miejsca}}</div>
    </div>
</template>

<script>
    export default {
        props: ['section'],
        methods:{
            signUp(){
                if(this.section.miejsca > 0 || this.section.miejsca === -1){
                    this.$emit("signUp")
                } else {
                    this.$emit("contact")
                }
            }
        }
    }
</script>

<style scoped>
.card:hover {
    cursor: pointer;
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.2)
}
</style>

