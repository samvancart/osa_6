
const notification = ''

const initialState = notification

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return action.notification
        default:
            return state
    }
}

export const showNotification = (notification) => {
    return {
        type: 'SHOW_NOTIFICATION',
        notification,
    }
}



export default notificationReducer