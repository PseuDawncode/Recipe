const menu = document.querySelector('#mobile-menu');
        const menuLinks = document.querySelector('.navbar__menu');

        menu.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuLinks.classList.toggle('active');
            
            // Animate
            const bars = document.querySelectorAll('.bar');
            if (menuLinks.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'rotate(0)';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'rotate(0)';
            }
        });

        // Handle dropdowns in mobile view
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('.navbar__links');
            
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 960) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        });