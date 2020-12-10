const Guests = {
    components: {
        GuestItem,
        SearchGuest,
        FilterGuests,
        MoreBtns
    },
    data() {
        return {
            guests: [],
            liveList: [],
            searchAfterItems: [],
            searchedGuests: false,
            filteredGuests: false,
            cameGuests: [],
            absentGuests: [],
            position: 10
        }
    },
    created() {
        this.guests = guestsList
        for (var i = 0; i < this.position; i++) {
            this.liveList.push(this.guests[i])
        }
        this.guests.forEach((item) => {
           if(item.isPresent) {
                this.cameGuests.push(item)
            }
            else{
                this.absentGuests.push(item)
            }
        })  
    },
    methods: {
        presenceToggler(id) {
            this.guests = this.guests.map(item => {
                if(item._id === id) {
                    item.isPresent = !item.isPresent
                }
                return item
            })
            this.cameGuests.length = 0
            this.absentGuests.length = 0 
            this.guests.forEach((item) => {
               if(item.isPresent) {
                    this.cameGuests.push(item)
                }
                else{
                    this.absentGuests.push(item)
                }
            })  
        },
        showAllGuests(){
            this.searchedGuests = false
            this.liveList = this.guests
        },
        filterGuests(a){    
            this.searchAfterItems.length = 0
            this.searchedGuests = true
            this.filteredGuests = true
            this.cameGuests.length = 0
            this.absentGuests.length = 0 
            this.guests.forEach((item) => {
                item.isPresent ? this.cameGuests.push(item) : this.absentGuests.push(item)
            })
            a ? this.liveList = this.cameGuests : this.liveList = this.absentGuests
        },
        changeLiveList(a){
            this.searchedGuests = true
            this.liveList = a
        },
        moreLiveList(a){
            this.liveList = []
            a ? this.position +=10 : this.position = this.guests.length
            for (var i = 0; i < this.position; i++) {
                if(i < this.guests.length){
                    this.liveList.push(this.guests[i])                    
                }
            }
        }
    },
    template: `
        <div class="guests">

            <filter-guests 
                :guests="guests"
                :cameGuests="cameGuests"
                :absentGuests="absentGuests"
                @showAllGuests="showAllGuests"
                @filterGuests="filterGuests"
            ></filter-guests>

            <search-guest 
                :guests="guests"
                :searchedGuests="searchedGuests"
                :filteredGuests="filteredGuests"
                :searchAfterItems="searchAfterItems"
                @changeLiveList="changeLiveList"
            ></search-guest>

            <ol>
                <guest-item v-for="guest in liveList"
                            :key="guest._id"
                            :guest="guest"
                            @present-tog="presenceToggler"
                ></guest-item>
            </ol>

            <more-btns 
                :liveList="liveList"
                :guests="guests"
                @moreLiveList="moreLiveList"
            ></more-btns>
        </div>
    `
}
