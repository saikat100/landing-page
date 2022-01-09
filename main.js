var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 20,
	freeMode: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
});
