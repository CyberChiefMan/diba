import * as types from './mutation-types'

export const mutations = {
    [types.GET_USER](state, count_payload) {
        state.user = count_payload
    },
    [types.SIGN_OUT](state) {
        state.user = {}
    },
    [types.CREATE_CONFERENCE](state, event_detail){
        state.events = event_detail
    }
}
