import * as types from './mutation-types'
import axios from 'axios'

export const getUser = ({commit}) => {
    axios.get('/isauth')
        .then(function (response) {
            commit(types.GET_USER, response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const signOut = ({commit}) => {
    commit(types.SIGN_OUT)
}


export const createConference = ({commit}, EV) => {
    fetch(`/api/events`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                eventName: EV.eventName,
                userName: EV.userName
            }
        )
    })
        .then(response => response.json())
        .then(json => commit(types.CREATE_CONFERENCE, json))
}

export const setJoinedConference = ({commit}, event_code) => {
    fetch(`/api/events/${event_code}`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(json => commit(types.CREATE_CONFERENCE, json))
}