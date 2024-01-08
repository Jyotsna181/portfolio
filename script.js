function toggleMenu() {
    var navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show-menu');
}

function playSound() {
    var audio = new Audio("images/click.mp3").play();
    setTimeout(function () {
    var element = document.querySelector('.left');
        element.style.display = 'block';
        element.style.opacity = 1;
    var element1 = document.querySelector('.textright');
        element1.style.display = 'block';
        element1.style.opacity = 1;
    var element3 = document.querySelector('.about');
        element3.style.display = 'block';
        element3.style.opacity = 1;
    var element4 = document.querySelector('.skills');
        element4.style.display = 'block';
        element4.style.opacity = 1;
    var element5 = document.querySelector('.services');
        element5.style.display = 'block';
        element5.style.opacity = 1;
    var element6 = document.querySelector('.qualification');
        element6.style.display = 'block';
        element6.style.opacity = 1;
        var element7 = document.querySelector('.contact');
        element7.style.display = 'block';
        element7.style.opacity = 1;
        var element8 = document.querySelector('.footer');
        element8.style.display = 'block';
        element8.style.opacity = 1;
        var element9 = document.querySelector('.portfolio');
            element9.style.display = 'block';
            element9.style.opacity = 1;
        
        

    }, 200); 
    var element2 = document.querySelector('.runbtn');
        element2.style.display = 'none';
}

function openModal(serviceModelId) {
    var serviceModel = document.getElementById(serviceModelId);
    serviceModel.classList.add('active-model');
}

function closeModal(serviceModelId) {
    var serviceModel = document.getElementById(serviceModelId);
    serviceModel.classList.remove('active-model');
}

function showTab(tabId) {
    var tabs = document.querySelectorAll('.qualification-content');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    var buttons = document.querySelectorAll('.qualification-button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
        button.style.color = ''; 
    });

    document.getElementById(tabId).style.display = 'block';

    var activeButton = document.getElementById(tabId + '-button');
    activeButton.classList.add('active');
    activeButton.style.color = '#0000'; 
}

function sendEmail() {
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var project = document.getElementsByName('project')[0].value;

    var subject = 'New Contact Form Submission';
    var body = 'Name: ' + name + '%0D%0AEmail: ' + email + '%0D%0AProject: ' + project;

    window.location.href = 'mailto:jyotsnarasam08@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}

function openProjectModal(projectModelId) {
    var projectModel = document.getElementById(projectModelId);
    projectModel.classList.add('active-project-model');
}

function closeProjectModal(projectModelId) {
    var projectModel = document.getElementById(projectModelId);
    projectModel.classList.remove('active-project-model');
}