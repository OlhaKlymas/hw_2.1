const SearchGuest = {
    props: {
        guests: {
            type: Array,
            required: true
        },
        searchAfterItems: {
            type: Array
        },
        searchedGuests:{
            type: Boolean
        },
        filteredGuests:{
            type: Boolean
        }
    },
    data() {
        return {
            inputContent: ''
        }
    },
    methods: {
        searchItems(a){
            this.searchAfterItems.length = 0  
            this.guests.map(item => {  
               for (const [key, value] of Object.entries(item)) {
                    let val = `${value}`
                    if(val.includes(a)){
                        this.searchAfterItems.push(item)
                    }
                }
            })
            this.$emit('changeLiveList', this.searchAfterItems)
            console.log(this.searchAfterItems.length)
        }
    },
    template: `
        <div class="search-guest">
            <input type="text" v-model="inputContent" @change="searchItems(inputContent)">
            <button @click="searchItems(inputContent)">Поиск</button>
            <div v-if="searchedGuests" class="result">
                <p>Результаты поиска</p>
                <p v-show="(searchAfterItems.length != 0)">Найдено {{ searchAfterItems.length  }} гостей</p>
                <p v-show="(searchAfterItems.length == 0 && !filteredGuests)">Ничего не найдено</p>
            </div>
        </div>
    `
}
