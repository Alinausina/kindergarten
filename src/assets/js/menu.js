
        document.addEventListener('DOMContentLoaded', function() {

            const burgerBtn = document.getElementById('burgerBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            const menuImage = burgerBtn.querySelector('img');
            
            if (!burgerBtn || !mobileMenu) {
                console.error('Не найдены необходимые элементы для меню');
                return;
            }
            
            let isMenuOpen = false;
            function closeMenu() {
                mobileMenu.style.display = 'none';
                burgerBtn.setAttribute('aria-expanded', 'false');
                isMenuOpen = false;
            }
            function openMenu() {
                mobileMenu.style.display = 'block';
                burgerBtn.setAttribute('aria-expanded', 'true');
                isMenuOpen = true;
            }
            
            burgerBtn.addEventListener('click', function(event) {
                event.stopPropagation();
            
                if (isMenuOpen) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });
            
            const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    closeMenu();
                });
            });
            
            document.addEventListener('click', function(event) {
                if (isMenuOpen && 
                    !mobileMenu.contains(event.target) && 
                    !burgerBtn.contains(event.target)) {
                    closeMenu();
                }
            });
            
            window.addEventListener('resize', function() {
                const desktopMenu = document.querySelector('.menu');
                if (window.innerWidth <= 900) {
                    if (desktopMenu) desktopMenu.style.display = 'none';
                    burgerBtn.style.display = 'flex';
                } else {
                    if (desktopMenu) desktopMenu.style.display = 'flex';
                    burgerBtn.style.display = 'none';
                    closeMenu();
                }
            });
            
            const desktopMenu = document.querySelector('.menu');
            if (window.innerWidth <= 900) {
                if (desktopMenu) desktopMenu.style.display = 'none';
                burgerBtn.style.display = 'flex';
            } else {
                if (desktopMenu) desktopMenu.style.display = 'flex';
                burgerBtn.style.display = 'none';
            }
            
            burgerBtn.setAttribute('aria-label', 'Открыть меню');
            burgerBtn.setAttribute('aria-expanded', 'false');
            burgerBtn.setAttribute('aria-controls', 'mobileMenu');
            
            console.log('Меню инициализировано успешно');
        });