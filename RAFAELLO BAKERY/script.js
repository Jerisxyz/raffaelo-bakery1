
    
        // Año dinámico
        document.getElementById('year').textContent = new Date().getFullYear();

        // Menú móvil
        const mobileMenu = document.getElementById('mobileMenu');
        const openMobile = () => { mobileMenu.classList.remove('hidden'); mobileMenu.classList.add('flex'); document.body.style.overflow = 'hidden'; };
        const closeMobile = () => { mobileMenu.classList.add('hidden'); mobileMenu.classList.remove('flex'); document.body.style.overflow = ''; };
        document.getElementById('mobileBtn').addEventListener('click', openMobile);
        document.getElementById('menuBtn').addEventListener('click', openMobile);
        document.getElementById('mobileClose').addEventListener('click', closeMobile);
        document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMobile));

        // Tabs del menú
        const tabs = document.querySelectorAll('.tab-btn');
        const items = document.querySelectorAll('.menu-item');
        const activeClasses = ['bg-espresso', 'text-white', 'shadow-md'];
        const inactiveClasses = ['bg-white', 'border', 'border-stone2', 'text-taupe'];

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => { t.classList.remove(...activeClasses); t.classList.add(...inactiveClasses); t.setAttribute('aria-selected', 'false'); });
                tab.classList.remove(...inactiveClasses); tab.classList.add(...activeClasses); tab.setAttribute('aria-selected', 'true');
                const filter = tab.dataset.filter;
                items.forEach(item => {
                    const show = item.dataset.cat === filter;
                    item.classList.toggle('hidden', !show);
                    if (show) { item.style.animation = 'none'; item.offsetHeight; item.style.animation = 'fadeUp .6s cubic-bezier(0.16,1,0.3,1) both'; }
                });
            });
        });
    