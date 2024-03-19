const menuToggle = document.querySelector('.menu-toggle')
const sidebar = document.querySelector('.sidebar')
const logo = document.querySelector('.logo-text')
const searchBox = document.querySelector('.search-box')
const searchInput = document.querySelector('.search-box input')

const dashboardText = document.querySelector('.dashboard-link span')
const petText = document.querySelector('.pets-link span')
const clientsText = document.querySelector('.clients-link span')
const vetsText = document.querySelector('.vets-link span')
const settingsText = document.querySelector('.settings-link span')

const userPhoto = document.querySelector('.user-image')
const userData = document.querySelector('.user-data')

const conteudo = document.querySelector('.container')


menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
    menuToggle.classList.toggle('rotate')
    logo.classList.toggle('hideElement')
    searchBox.classList.toggle('change-bg')
    searchInput.classList.toggle('hideElement')
    dashboardText.classList.toggle('hideElement')
    petText.classList.toggle('hideElement')
    clientsText.classList.toggle('hideElement')
    vetsText.classList.toggle('hideElement')
    settingsText.classList.toggle('hideElement')
    userPhoto.classList.toggle('hideElement')
    userData.classList.toggle('hideElement')
    conteudo.classList.add('containerTelaMenor');
    conteudo.classList.remove('.container');

})

searchBox.addEventListener('click', () => {
    sidebar.classList.remove('close');
    menuToggle.classList.remove('rotate')
    logo.classList.remove('hideElement')
    searchBox.classList.remove('change-bg')
    searchInput.classList.remove('hideElement')
    dashboardText.classList.remove('hideElement')
    petText.classList.remove('hideElement')
    clientsText.classList.remove('hideElement')
    vetsText.classList.remove('hideElement')
    settingsText.classList.remove('hideElement')
    userPhoto.classList.remove('hideElement')
    userData.classList.remove('hideElement')
})

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.add('close');
        dashboardText.classList.add('hideElement');
        petText.classList.add('hideElement');
        clientsText.classList.add('hideElement');
        vetsText.classList.add('hideElement');
        settingsText.classList.add('hideElement');
        conteudo.classList.add('containerTelaMenor');
        conteudo.classList.remove('container');
    } else {
        sidebar.classList.remove('close');
        dashboardText.classList.remove('hideElement');
        petText.classList.remove('hideElement');
        clientsText.classList.remove('hideElement');
        vetsText.classList.remove('hideElement');
        settingsText.classList.remove('hideElement');
        conteudo.classList.remove('containerTelaMenor');
        conteudo.classList.add('container');
    }
});



// Chama o evento de redimensionamento para verificar a largura da tela quando a página é carregada
window.dispatchEvent(new Event('resize'));