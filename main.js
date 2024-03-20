import './style.scss'
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';

import { Navigation, Autoplay } from 'swiper/modules';

try {
    // Приколы для параллакса :3
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.bottom >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function applyParallaxEffect() {
        const items = document.querySelectorAll('.parallax');
        items.forEach(function (item) {
            if (isElementInViewport(item)) {
                const documentWidth = Math.max(
                    document.body.offsetWidth,
                    document.documentElement.offsetWidth
                );
                if (documentWidth < 650) {
                    const scrolled = window.scrollY;
                    const itemTop = item.getBoundingClientRect().top + scrolled - 100;
                    item.style.transform = 'translateY(' + (scrolled - itemTop) * 0.6 + 'px)';
                }

            }
        });
    }


    const initParallax = () => {
        const items = document.querySelectorAll('.parallax');
        items.forEach(function (item) {
            const documentWidth = Math.max(
                document.body.offsetWidth,
                document.documentElement.offsetWidth
            );
            console.log(documentWidth);
            if (documentWidth < 650) {
                item.style.transform = 'translateY(-500px)';
            }
        });
    }
    function largeParallax() {
        const items = document.querySelectorAll('.largeParallax');
        items.forEach(function (item) {
            const footers = document.getElementsByClassName('footer_wrapper')
            const footer = footers[0]
            const footerH = footer.getBoundingClientRect().height;
            var documentHeight = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );
            let screenHeight = window.screen.height;
            let scrolled = window.scrollY * 0.95;
            if (scrolled > documentHeight - footerH - screenHeight) {
                scrolled = documentHeight - footerH - screenHeight;
            }
            item.style.transform = 'translateY(' + (scrolled) * 1 + 'px)';
        });
    }
    document.addEventListener("DOMContentLoaded", function () {
        initParallax();
        applyParallaxEffect();
        largeParallax();
        window.addEventListener('scroll', function () {
            applyParallaxEffect();
            largeParallax();
        });
    });
} catch (error) {

}



try {
    // Мобильный хедер
    document.getElementById('mmOpener').onclick = () => {
        document.getElementById('body').style.overflow = 'hidden';
        document.getElementById('mm').classList.add('header_links_open')
    }
    document.getElementById('mmCloser').onclick = () => {
        document.getElementById('body').style.overflow = 'visible';
        document.getElementById('mm').classList.remove('header_links_open')
    }
} catch (error) {

}

try {
    // Выпадалочки (все)
    const dds = document.getElementsByClassName('ddOpener');
    for (let i = 0; i < dds.length; i++) {
        dds[i].onclick = () => {
            try {
                dds[i].getElementsByTagName('img')[0].classList.toggle('openerOpen')
            } catch (error) {

            }
            document.getElementById(dds[i].getAttribute("for")).classList.toggle('ddOpen')
        }
    }
} catch (error) {

}

try {
    // Листалочки (обе две)
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Autoplay],
        slidesPerView: 1,
        slidesPerGroup: 1,
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            1150: {
                slidesPerView: 3,
            },
            750: {
                slidesPerView: 2,
            },
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        loop: true,
        // effect: 'fade',
        parallax: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


} catch (error) {

}

try {
    // Выбор количества инвестируемых деняк
    const selectorElelements = document.getElementsByClassName('selectorElelement')
    for (let i = 0; i < selectorElelements.length; i++) {
        selectorElelements[i].onclick = () => {
            for (let j = 0; j < selectorElelements.length; j++) {
                selectorElelements[j].classList.remove('selected')
            }
            selectorElelements[i].classList.add('selected')
        }
    }
} catch (error) {

}