document.addEventListener('DOMContentLoaded', function () {
    let tabTitles = document.querySelectorAll('.tab-links');
    let tabContents = document.querySelectorAll('.tab-contents');

    tabTitles.forEach(function (tabTitle) {
        tabTitle.addEventListener('click', function () {
            tabTitles.forEach(function (title) {
                title.classList.remove('active-link');
            });

            tabContents.forEach(function (content) {
                content.classList.remove('active-tab');
            });

            tabTitle.classList.add('active-link');

            let tabId = tabTitle.id + '-tab';
            document.getElementById(tabId).classList.add('active-tab');
        });
    });
});