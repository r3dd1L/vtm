document.getElementById('projects-link').addEventListener('click', function (event) {
    event.preventDefault();
    const menu = document.getElementById('projects-menu');
    menu.classList.toggle('show');
});

window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    document.body.classList.remove('no-scroll');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.7s ease-out';
    setTimeout(function() {
        preloader.remove();
    }, 700);
});

document.body.classList.add('no-scroll');

if (location.pathname.match(/fullcpgrid/i) ? true : false) {
  document.documentElement.style.fontSize = "32px"
  document.querySelector(".notifications").style.transform = "translate(0.7rem, calc(-70% + 3rem))"
}


class Notifications {
  constructor(el) {
    this.el = el
  }
  
  // function to create new elements with a class (cleans up code)
  createDiv(className = "") {
    const el = document.createElement("div")
    el.classList.add(className)
    return el
  }
  // function to add text nodes to elements
  addText(el, text) {
    el.appendChild(document.createTextNode(text))
  }
  
  create(
    title = "Untitled notification",
    description = "",
    duration = 2,
    destroyOnClick = false,
    clickFunction = undefined
  ) {
    
    // functions
    function destroy(animate) {
      if (animate) {
        notiEl.classList.add("out")
        notiEl.addEventListener("animationend", () => {notiEl.remove()})
      } else {
        notiEl.remove()
      }
    }
    
    // create the elements and add their content
    const notiEl = this.createDiv("noti")
    const notiCardEl = this.createDiv("noticard")
    const glowEl = this.createDiv("notiglow")
    const borderEl = this.createDiv("notiborderglow")
    
    const titleEl = this.createDiv("notititle")
    this.addText(titleEl, title)
    
    const descriptionEl = this.createDiv("notidesc")
    this.addText(descriptionEl, description)
    
    // append the elements to each other
    notiEl.appendChild(notiCardEl)
    notiCardEl.appendChild(glowEl)
    notiCardEl.appendChild(borderEl)
    notiCardEl.appendChild(titleEl)
    notiCardEl.appendChild(descriptionEl)
    
    this.el.appendChild(notiEl)
    
    // transition the height of the container to the height of the visible card
    console.log("height", notiCardEl.scrollHeight)
    requestAnimationFrame(function() {
      notiEl.style.height = "calc(0.27rem + " + notiCardEl.getBoundingClientRect().height + "px)";
    });

    // hover animation
    notiEl.addEventListener("mousemove", (event) => {
      const rect = notiCardEl.getBoundingClientRect()
      const localX = (event.clientX - rect.left) / rect.width
      const localY = (event.clientY - rect.top) / rect.height

      console.log(localX, localY)
      glowEl.style.left = localX * 100 + "%"
      glowEl.style.top = localY * 100 + "%"

      borderEl.style.left = localX * 100 + "%"
      borderEl.style.top = localY * 100 + "%"
    });
    
    // onclick function if one is set
    if (clickFunction != undefined) {
      notiEl.addEventListener("click", clickFunction)
    }
    
    // destroy the notification on click if it is set to do so
    if (destroyOnClick) {
      notiEl.addEventListener("click", () => destroy(true))
    }
    
    
    // remove the notification after the set time if there is one
    if (duration != 0) {
      setTimeout(() => {
        notiEl.classList.add("out")
        notiEl.addEventListener("animationend", () => {notiEl.remove()})
      }, duration * 700)
    }
    return notiEl
  }
}

// demo
notis = new Notifications(document.querySelector(".notifications"))

const demonotis = [
  () => {notis.create("Агов!", "Розбудіть, будь ласка, хтось сіс-адміна(", 7)},
  () => {notis.create("Є хто?", "Тут темно та слизько...!", 7)},
  () => {notis.create("Гей...", "Це вже не смішно, увімкніть світло!", 7)},
  () => {notis.create("kic ua", "Покличте хтось його...Я вже втомився тут бути...", 7)},
  () => {notis.create("І що робити?", "Зараз почну співати гімн України!", 7)},
  () => {notis.create("Встати! Національний гімн України!", "Але у моєму виконанні!", 7)},
  () => {notis.create("💙💛", "Ще не вмерла Україна, і слава, і воля.", 7)},
  () => {notis.create("💙💛", "Ще нам, браття молодії, усміхнеться доля.", 7)},
  () => {notis.create("💙💛", "Згинуть наші вороженьки, як роса на сонці!", 7)},
  () => {notis.create("💙💛", "Запануєм і ми, браття, у своїй сторонці.", 7)},
  () => {notis.create("💙💛", "Душу, тіло ми положим за нашу свободу.", 7)},
  () => {notis.create("💙💛", "І покажем, що ми, браття, козацького роду!", 7)},
  () => {notis.create("💙💛", "Станем, браття, в бій кровавий від Сяну до Дону", 7)},
  () => {notis.create("💙💛", "В ріднім краю панувати не дамо нікому!", 7)},
  () => {notis.create("💙💛", "Чорне море ще всміхнеться, дід Дніпро зрадіє.", 7)},
  () => {notis.create("💙💛", "Ще у нашій Україні доленька наспіє.", 7)},
  () => {notis.create("💙💛", "Душу, тіло ми положим за нашу свободу.", 7)},
  () => {notis.create("💙💛", "І покажем, що ми, браття, козацького роду.", 7)},
  () => {notis.create("💙💛", "А завзяття, праця щира свого ще докаже!", 7)},
  () => {notis.create("💙💛", "Ще ся волі в Україні піснь гучна розляже!", 7)},
  () => {notis.create("💙💛", "За Карпати відоб'ється, згомонить степами!", 7)},
  () => {notis.create("💙💛", "України слава стане поміж народами!", 7)},
  () => {notis.create("💙💛", "Слава Україні!", 7)},
  () => {notis.create("💙💛", "Героям Слава!", 7)},
  () => {notis.create("💙💛", "Слава Нації!", 7)},
  () => {notis.create("💙💛", "Смерть ворогам!", 7)},
]
let i = 1;
demonotis[0]()
setInterval(()=>{
  if (i == 1) {
  }
  i++
}, 4000)

window.onload = function() {
  document.getElementById('cookieModal').style.display = 'flex';
  document.body.classList.add('modal-active');
};

function acceptCookies() {
  document.getElementById('cookieModal').style.display = 'none';
  document.body.classList.remove('modal-active');
}

function declineCookies() {
  window.close();
}