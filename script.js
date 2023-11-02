const burgerBtn = document.querySelector('.burger-btn')
const burgerImg = document.querySelector('.burger-img')
const mobileNav = document.querySelector('.mobile-nav')
const navLinks = document.querySelectorAll('.link')

const toggleNavigation = () => {
	mobileNav.classList.toggle('translate-x-[100%]')
}

const closeNav = () => {
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			mobileNav.classList.toggle('translate-x-[100%]')
		})
	})
}

burgerBtn.addEventListener('click', toggleNavigation)
closeNav()
