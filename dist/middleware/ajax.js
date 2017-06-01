import { APICONF } from './api_config'
// import 'isomorphic-fetch'

export const CALL_API = Symbol('Call API')

export const API_STATUS = {
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE'
}

const AjaxConf = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    // mode: 'cors', // 'no-cors', 'same-origin'
    cache: 'default'
}

// Fetches an API response
function callApi(endpoint, info, token) {
    var server = window.SERVER && SERVER+APP_ROUTE || '/mock'
    const fullUrl = (endpoint.indexOf(server) === -1) ? server + endpoint : endpoint
    Object.assign(info, token)
    let conf = Object.assign({}, AjaxConf, { body: JSON.stringify(info) })

    return fetch(fullUrl, conf)
        .then(response =>
            response.json().then(json => ({ json, response }))
        ).then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json)
            }
            return Object.assign({}, json)
        })
}

export default store => next => action => {
    var state = store.getState()
    var token = state.authority
    const callAPI = action[CALL_API]
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    const { type, info, ctx } = callAPI
    let endpoint = APICONF[type]

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.')
    }
    var check = {
        intercepted: false
    }
    next({ type, status: API_STATUS.REQUEST, request: info, check, ctx })

    setTimeout(() => {
        !check.intercepted ?
            callApi(endpoint, info, token).then(
                response => next({
                    type,
                    check,
                    request: info,
                    status: API_STATUS.SUCCESS,
                    response,
                    ctx
                }),
                error => next({
                    type,
                    check,
                    request: info,
                    status: API_STATUS.FAILURE,
                    error: error.message || 'Something bad happened',
                    ctx
                })
            ) : null
    })
}
