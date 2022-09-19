"use strict";
function idGenerator() {
    const time = new Date().getTime();
    return Math.floor((1 + Math.random()) * time)
        .toString(16)
        .substring(1);
}
!getItem('usersList') ? setItem('usersList', []) : null;
const usersList = getItem('usersList');
