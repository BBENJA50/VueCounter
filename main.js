const app = Vue.createApp({
    data(){
        return{
            getal:0,
        }
    },
    methods:{
        optellenGetal(){
            this.getal+=1
        },
        aftrekkenGetal(){
            if(this.getal >0){
                this.getal-=1
            }
        }
    }
})
