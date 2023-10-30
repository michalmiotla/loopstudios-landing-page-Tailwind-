const burgerBtn = document.querySelector('.burger-btn')
const burgerImg = document.querySelector('.burger-img')
const mobileNav = document.querySelector('.mobile-nav')

const toggleNavigation = () => {
	mobileNav.classList.toggle('translate-x-0')
}

burgerBtn.addEventListener('click', toggleNavigation)
