const burgerBtn = document.querySelector('.burger-btn')
const burgerImgOpen = document.querySelector('.burger-img-open')
const burgerImgCLose = document.querySelector('.burger-img-close')
const mobileNav = document.querySelector('.mobile-nav')
const navLinks = document.querySelectorAll('.link')

const toggleNavigation = () => {
	mobileNav.classList.toggle('translate-x-[100%]')
	burgerImgOpen.classList.toggle('hidden')
	burgerImgCLose.classList.toggle('hidden')
}

const closeNav = () => {
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			mobileNav.classList.toggle('translate-x-[100%]')
			if (mobileNav.classList.contains('translate-x-[100%]')) {
				burgerImgCLose.classList.add('hidden')
				burgerImgOpen.classList.remove('hidden')
			}
		})
	})
}

burgerBtn.addEventListener('click', toggleNavigation)
closeNav()
