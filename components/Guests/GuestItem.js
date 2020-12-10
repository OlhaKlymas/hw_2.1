const GuestItem = {
    props: {
        guest: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isPresent: this.guest.isPresent,
            info: {},
            showBtn: false
        }
    },
    watch: {
        isPresent(nValue, oValue) {
            this.$emit('present-tog', this.guest._id)
        }
    },
    methods:{
        showMore(){
            this.info.company = this.guest.company
            this.info.email = this.guest.email
            this.info.phone = this.guest.phone
            this.info.address = this.guest.address
            this.showBtn = true
        },
        hideMore(){
            this.info.length = 0
            this.showBtn = false
        }
    },
    template: `
        <li>
            <p class="guest-wrap">
                <span class="guest-name" :class="isPresent ? 'blue' : 'red'">{{ guest.name }}</span>
                <input type="checkbox" v-model="isPresent"> 
                <label>Пришел</label>
                <button v-if="!showBtn" @click="showMore">Подробнее</button>
                <button v-else-if="showBtn" @click="hideMore">Скрыть</button>
            </p>
            <div v-if="showBtn" class="about-guest">
                <p v-for="(value, name) in info">
                    <span>{{ name }}:</span> {{ value }}
                </p>
            </div>
        </li>
    `
}
