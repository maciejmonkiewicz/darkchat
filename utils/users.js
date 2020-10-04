const users = [];

// User wbił
function userJoin(id, username, room) {
    const user= { id, username, room };

    users.push(user);

    return user;
}

// weź aktualnego usera
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

// User wychodzi
function userLeave(id) {
    const index = users.findIndex( user => user.id === id);

    if(index !== -1 ) {
        return users.splice(index, 1)[0];
    }
}

// Bierz usera
function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
}