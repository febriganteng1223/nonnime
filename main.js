document.addEventListener('DOMContentLoaded', function() { 
 const animeitems = document.querySelectorAll('.anime-item');
animeitems.forEach(item => {
    item.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video');
        window.location.href = videoSrc;
    });
});
});

document.addEventListener('DOMContentLoaded', function() {
    const animeitems = document.querySelectorAll('.anime-item');
    animeitems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            window.location.href = videoSrc;
        });
    });
});

//let uang = prompt ('masukan uang anda')
//let jajan = -2000
const uangsisa = jajan + uang

alert(`uang anda adalah ${uang} dan jajan yang anda beli seharga ${jajan}
sisa uang anda adalah ${uangsisa}`)