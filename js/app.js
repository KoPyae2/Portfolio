// == Home Section ==
const navbuttons = document.querySelector('.navbuttons');

const menuitems =document.querySelectorAll('.menuitems');

const homenav = document.getElementById("homenav"),
    aboutnav = document.getElementById("aboutnav"),
    projectnav = document.getElementById("projectnav"),
    contactnav = document.getElementById("contactnav");

    
const abouttitle = document.getElementById("about-title"),
    projecttitle = document.getElementById("project-title"),
    contacttitle = document.getElementById("contact-title");

const aboutimg = document.getElementById('about-img');

const rightabout = document.getElementById('rightabout');

const navbar = document.querySelector('nav');

const formel = document.getElementById('form-gp');
const mapel = document.getElementById('map');

navbuttons.addEventListener('click',()=>{
    navbuttons.classList.toggle('changes');
});

menuitems.forEach(menuitem =>{
    menuitem.addEventListener('click',(e)=>{
        removeactive();
        menuitem.classList.add('active');
    });
});

function removeactive(){
    menuitems.forEach(menuitem =>{
        menuitem.classList.remove('active');
    });
}

window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;
    // console.log(getscrolly);

    if(getscrolly >= 600){
        removeactive();
        aboutnav.classList.add('active');
    }else {
        removeactive();
        homenav.classList.add('active');
    }

    if(getscrolly >= 1200){
        removeactive();
        projectnav.classList.add('active');
    }

    if(getscrolly >= 1800){
        removeactive();
        contactnav.classList.add('active');
    }
});

window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;
    // console.log(getscrolly);

    if(getscrolly >= 200){
        navbar.classList.add('navscroll');
    }else{
        navbar.classList.remove('navscroll');
    }
});

// == About Section==
const skillitems = document.querySelectorAll('.aboutlists');
const aboutme = document.getElementById('aboutme'),
      skill = document.getElementById('skill'),
      experience = document.getElementById('experience'),
      hobbies = document.getElementById('hobbies');


skillitems.forEach(skillitem =>{
    skillitem.addEventListener('click',(e)=>{
        if(skillitem.innerText === 'ABOUT ME'){
            removeeffect();
            skillitem.classList.add('effect');
            aboutme.style.display = 'block';
            skill.style.display = 'none';
            hobbies.style.display = 'none';
            experience.style.display = 'none';
        }else if(skillitem.innerText === 'SKILL'){
            removeeffect();
            skillitem.classList.add('effect');
            aboutme.style.display = 'none';
            skill.style.display = 'block';
            hobbies.style.display = 'none';
            experience.style.display = 'none';
        }else if(skillitem.innerText === 'EXPERIENCE'){
            removeeffect();
            skillitem.classList.add('effect');
            aboutme.style.display = 'none';
            skill.style.display = 'none';
            hobbies.style.display = 'none';
            experience.style.display = 'block';
        }else if(skillitem.innerText === 'HOBBIES'){
            removeeffect();
            skillitem.classList.add('effect');
            aboutme.style.display = 'none';
            skill.style.display = 'none';
            hobbies.style.display = 'block';
            experience.style.display = 'none';
        }
    });
});

function removeeffect(){
    skillitems.forEach(skillitem =>{
        skillitem.className = "mx-3 aboutlists";
    });
}

// START CONTACT SECTION
const yearel = document.getElementById("year");
let year = new Date().getFullYear();
yearel.innerText = year;


// Title Animation

window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;
    console.log(getscrolly);

    if(getscrolly >= 170){
        abouttitle.classList.add('anititle');
    }else{
        abouttitle.classList.remove('anititle');
    }

    if(getscrolly >= 800){
        projecttitle.classList.add('anititle');
    }else{
        projecttitle.classList.remove('anititle');
    }

    if(getscrolly >= 1500){
        contacttitle.classList.add('anititle');
        formel.classList.add('about-imganni');
        mapel.classList.add('righteffect');
    }else{
        contacttitle.classList.remove('anititle');
        formel.classList.remove('about-imganni');
        mapel.classList.remove('righteffect');
    }

    if(getscrolly >= 430){
        aboutimg.classList.add('about-imganni');
        rightabout.classList.add('righteffect');
    }else{
        aboutimg.classList.remove('about-imganni');
        rightabout.classList.remove('righteffect');
    }
});

