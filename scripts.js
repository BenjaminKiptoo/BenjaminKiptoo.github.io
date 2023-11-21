document.addEventListener('DOMContentLoaded', function () {
    var wavingIcon = document.getElementById('wavingIcon');

    function startAnimation() {
        if (wavingIcon) {
            wavingIcon.style.animation = 'wave 1s 4'; // Start the animation
            setTimeout(function () {
                wavingIcon.style.animation = 'none'; // Remove the animation after 4 seconds
            }, 4000);
        }
    }

    // Start animation, then repeat every 7 seconds (4 seconds waving + 3 seconds pause)
    startAnimation();
    setInterval(startAnimation, 7000);
});
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

let sidemenu = document.querySelector("#sidemenu");
let removeMenu = document.querySelector(".fa-times");
let addMenu = document.querySelector(".fa-bars");

function openMenu() {
    sidemenu.style.right = "0"
}
function closeMenu() {
    sidemenu.style.right = "-200px"
} 

addMenu.addEventListener('click', ()=>{
    openMenu();
})
removeMenu.addEventListener('click', ()=>{
    closeMenu();
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbwc6wmOkVt18tt3XUq3GcO4-b-1tocY1Rnk-klRuci8ibr1YCMyeSSYmwWNHQYF9XZ2Aw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// sideMenu.addEventListener('click', ()=>{

// })

