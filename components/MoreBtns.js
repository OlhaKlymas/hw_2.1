const MoreBtns = {
    props: {
        guests:{
            type: Array
        },
        liveList: {
            type: Array
        }
    },
    template: `
       <div v-show="liveList.length != guests.length" class="btn-more">
            <button @click="$emit('moreLiveList', true)">Еще</button>
            <button @click="$emit('moreLiveList', false)">Все</button>
        </div>
    `
}
