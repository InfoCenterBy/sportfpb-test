// //BildSlider
// let sliders = document.querySelectorAll('._swiper');
// if (sliders) {
// 	for (let index = 0; index < sliders.length; index++) {
// 		let slider = sliders[index];
// 		if (!slider.classList.contains('swiper-bild')) {
// 			let slider_items = slider.children;
// 			if (slider_items) {
// 				for (let index = 0; index < slider_items.length; index++) {
// 					let el = slider_items[index];
// 					el.classList.add('swiper-slide');
// 				}
// 			}
// 			let slider_content = slider.innerHTML;
// 			let slider_wrapper = document.createElement('div');
// 			slider_wrapper.classList.add('swiper-wrapper');
// 			slider_wrapper.innerHTML = slider_content;
// 			slider.innerHTML = '';
// 			slider.appendChild(slider_wrapper);
// 			slider.classList.add('swiper-bild');

// 			// if (slider.classList.contains('_swiper_scroll')) {
// 			// 	let sliderScroll = document.createElement('div');
// 			// 	sliderScroll.classList.add('swiper-scrollbar');
// 			// 	slider.appendChild(sliderScroll);
// 			// }
// 		}
// 		if (slider.classList.contains('_gallery')) {
// 			//slider.data('lightGallery').destroy(true);
// 		}
// 	}
// 	sliders_bild_callback();
// }

// function sliders_bild_callback(params) { }

// let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
// if (sliderScrollItems.length > 0) {
// 	for (let index = 0; index < sliderScrollItems.length; index++) {
// 		const sliderScrollItem = sliderScrollItems[index];
// 		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 		const sliderScroll = new Swiper(sliderScrollItem, {
// 			observer: true,
// 			observeParents: true,
// 			direction: 'vertical',
// 			slidesPerView: 'auto',
// 			freeMode: true,
// 			scrollbar: {
// 				el: sliderScrollBar,
// 				draggable: true,
// 				snapOnRelease: false
// 			},
// 			mousewheel: {
// 				releaseOnEdges: true,
// 			},
// 		});
// 		sliderScroll.scrollbar.updateSize();
// 	}
// }


// function sliders_bild_callback(params) { }

if (document.querySelector('.slider-news__wrapper')) {
	new Swiper('.slider-news__wrapper', {
		observer: true,
		watchOverflow: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 30,
		parallax: true,
		spaceBetween: 24,
		speed: 800,
		mousewheel: {
			sensitive: 1
		},
		navigation: {
			nextEl: '.slider-news-control__arrow_next',
			prevEl: '.slider-news-control__arrow_prev',
		},
		breakpoints: {
			565: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
		},
	});
}
if (document.querySelector('.news-post-slider__wrapper')) {
	new Swiper('.news-post-slider__wrapper', {
		observer: true,
		watchOverflow: true,
		observeParents: true,
		slidesPerView: 1,
		centeredSlides: true,
		freeMode: true,
		spaceBetween: 18,
		loop: true,
		parallax: true,
		autoHeight: true,
		pagination: {
			el: '.slider-dotts',
			clickable: true,
		},
		navigation: {
			nextEl: '.slider-arrow_next',
			prevEl: '.slider-arrow_prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 1.2,
			},
		},
	});
}
if (document.querySelector('.slider-partners__wrapper')) {
	new Swiper('.slider-partners__wrapper', {
		observer: true,
		watchOverflow: true,
		observeParents: true,
		slidesPerView: 1,
		parallax: true,
		spaceBetween: 24,
		speed: 800,
		//},
		mousewheel: {
			sensitive: 1
		},
		navigation: {
			nextEl: '.slider-partners__arrow_next',
			prevEl: '.slider-partners__arrow_prev',
		},
		breakpoints: {

			565: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1100: {
				slidesPerView: 5,
			},
			1300: {
				slidesPerView: 6,
			},
		},
	});
}
