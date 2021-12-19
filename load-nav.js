const mainNav = [
    {
        text: 'Home',
        url: 'index.html',
    },
    {
        text: 'Board Objectives',
        url: 'boards-objective.html',
    },
    {
        text: 'UAT countdown',
        url: 'uat-countdown.html',
    },
    {
        text: 'UAT data graph',
        url: 'uat-data-graph.html',
    },
    {
        text: 'UAT Login form',
        url: 'login-form.html',
    },
    {
        text: 'Blackjack',
        url: 'blackjack.html',
    },
];

const mainNavElement = document.getElementById('main-nav');

function createLiForNav(item) {
    const { text, url } = item;
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.appendChild(a);
    li.classList.add('nav-item');
    a.classList.add('nav-link');
    a.innerText = text;
    a.href = url;
    if (a.href == location.href) {
        li.classList.add('active');
    }
    return li;
}

mainNav.forEach(function (item) {
    mainNavElement.appendChild(createLiForNav(item));
});
