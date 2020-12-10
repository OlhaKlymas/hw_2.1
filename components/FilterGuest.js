const FilterGuests = {
    props: {
        guests: {
            type: Array,
            required: true
        },
        cameGuests: {
            type: Array
        },
        absentGuests: {
            type: Array
        }
    },
    template: `
        <div class="filter-guest">
            <button @click="$emit('showAllGuests')">Показать весь список ({{guests.length}} чел.)</button>
            <button @click="$emit('filterGuests', true)">Прибывшие ({{cameGuests.length}} чел.)</button>
            <button @click="$emit('filterGuests', false)">Отсутствующиие ({{absentGuests.length}} чел.)</button>
        </div>
    `
}
