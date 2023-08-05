import Vuex from 'vuex';

export const store = new Vuex.Store({
    state: () => ({
        items: [],
        logged_in: false
    }),

    mutations: {

        set_log_in(state:any, login:boolean) {
            state.logged_in = login;
        },

        add_item(state: any, item: any) {
            if (state.items.length === 0) {
                state.items.push(item);
            }
            else {
                for (let i = 0; i < state.items.length; i++) {
                    if (state.items[i].id === item.id) {
                        console.log(item.id);
                        item.qty = state.items[i].qty + 1;
                        state.items.splice(i, 1);
                        break;
                    }
                }
                state.items.push(item)
            }
        },

        remove_item(state:any, old_item:any) {
            for(let i= 0; i < state.items.length; i++) {
                if(state.items[i].id === old_item) {
                    state.items.splice(state.items[i], 1);
                }
            }
        }
    }
})