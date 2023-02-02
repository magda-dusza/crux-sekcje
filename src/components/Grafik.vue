<template>
    <div class="container">
        <table class="table table-striped-columns">
            <thead>
                <tr>
                    <td>#</td>
                    <td>PON</td>
                    <td>WT</td>
                    <td>ŚR</td>
                    <td>CZW</td>
                    <td>PT</td>
                    <td>SOB</td>
                    <td>ND</td>
                </tr>
            </thead>
            <tbody>
                <tr :key="group.name" v-for="group in groups">
                    <td>{{group.start}}-{{group.end}}</td>
                    <td :key="`${group.name}-${index}`" v-for="(sectionsGroup, index) in splittedSections[group.name]">
                        <div :key="section.id" v-for="section in sectionsGroup">
                            <SectionCard :section="section" @sign-up="signUp" @contact="contact"></SectionCard>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <SignUpModal />
        <ContactModal />
    </div>
</template>

<script>
    import sekcjeData from '../../data/sekcje.json';
    import SectionCard from './SectionCard.vue';
    import SignUpModal from './SignUpModal.vue';
    import ContactModal from './ContactModal.vue';
    import { Modal } from 'bootstrap'

    const groups = [
        {name: 'groupa1', start: 10, end: 12},
        {name: 'groupa2', start: 12, end: 14},
        {name: 'groupa3', start: 14, end: 16},
        {name: 'groupa4', start: 16, end: 18},
        {name: 'groupa5', start: 18, end: 20},
        {name: 'groupa6', start: 20, end: 22}
    ]

    export default {
        name: 'Grafik',
        components: {SectionCard, SignUpModal, ContactModal},
        data() {
            return {
                sekcje: sekcjeData.sekcje,
                groups,
                signUpModal: null,
                contactModal: null
            }
        },
        mounted(){
            this.signUpModal= new Modal('#signUpModal', {})
            this.contactModal= new Modal('#contactModal', {})
        },
        computed: {
            splittedSections(){
                return groups.reduce((acc,group) => {
                    acc[group.name] = this.sekcje
                            .filter(sekcja => sekcja.godzinaOd >= group.start && sekcja.godzinaOd < group.end)
                            .reduce((acc, item)=>{
                                if(!acc[item.dzienTyg-1]){
                                    acc[item.dzienTyg-1] = []
                                }
                                acc[item.dzienTyg-1].push(item);
                                return acc
                            }, [])
                    while(acc[group.name].length < 7){
                        acc[group.name].push({})
                    }
                    return acc;
                    }, {})
            }

        },
        methods:{
            signUp(){
                this.signUpModal.show()
            },
            contact(){
                this.contactModal.show()
            }
        }
    }
</script>

<style scoped>
td {
    min-width:150px;
    min-height: 50px;
}
</style>