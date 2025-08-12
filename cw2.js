document.addEventListener('DOMContentLoaded', () => {
    const menuData = [
       { category: 'Deals', name: 'Peri Peri Strip Meal (5 Strips)', description: 'Comes with fries and drink. Choice of sauces.', price: '10.99', image: 'image/streap meal.webp' },
            { category: 'Deals', name: 'Peri Peri Chicken Chunks on Rice Meal', description: 'With regular drink. Choice of sauces.', price: '10.99', image: 'image/img1.webp' },
            { category: 'Deals', name: 'Peri Peri Loaded Fries', description: 'Fries topped with chicken chunks, cheese & garlic sauce.', price: '11.99', image: 'image/img2.webp' },
            { category: 'Platters', name: 'Mega Mix Platter', description: '2 whole chicken, 2 large fries, 10 wings, 10 strips, 2 side salad, 4 pitta bread, 1.5L drink, 8 dips.', price: '49.99', image: 'image/img3.webp' },
            { category: 'Platters', name: 'Mix Platter', description: 'Whole chicken, large fries, 5 wings, 5 strips, side salad, 4 pitta bread, 1.5ltr drink, 6 dips.', price: '34.99', image: 'image/img4.jpeg' },
            { category: 'Platters', name: 'Single Platter', description: 'Whole chicken, 2 pitta bread, large fries, side salad, 1.5L drink, 4 dips.', price: '23.99', image: 'image/img5.webp' },
            { category: 'Burgers', name: 'Chicken Tikka Combo Burger', description: 'Tikka marinated grilled chicken breast combined with beef patty, topped with cheese, lettuce, onion, tomatoes with mayo, and chilli sauce.', price: '8.00', image: 'image/img6.webp' },
            { category: 'Burgers', name: 'Chicken Tikka Burger', description: 'Tikka marinated grilled chicken breast topped with lettuce, onion, tomatoes with mayo, and chill sauce.', price: '6.50', image: 'image/img7.webp' },
            { category: 'Burgers', name: 'Chicken Fillet Burger', description: 'Our most popular super fillet burger.', price: '6.49', image: 'image/img8.webp' },
            { category: 'Fried Chicken', name: '4 Spicy Wings', description: 'A fan favourite, perfectly spiced and fried to perfection.', price: '4.00', image: 'image/img9.webp' },
            { category: 'Fried Chicken', name: 'Spicy Wings Meal (6 Wings)', description: 'Regular fries and regular drink.', price: '10.99', image: 'image/img10.webp' },
            { category: 'Bay\'s Special', name: 'Chicken Tikka on Chips (Small)', description: 'With sauce and salad.', price: '11.99', image: 'image/img11.webp' },
            { category: 'Bay\'s Special', name: 'Lamb shish on rice', description: 'Comes with lettuce, onion, and tomato chilli sauce and garlic sauce.', price: '9.99', image: 'image/img12.webp' },
        ];

    const testimonialsData = [
        { quote: "First time to eat at Peri Peri Republic, really enjoyed it... It was fantastic. The chicken was cooked perfectly... The staff were very friendly and helpful.", author: "A. Customer" },
        { quote: "Sauces are delicious, especially the garlic and muzambique. Fries are perfectly seasoned and fresh. Highly recommend to give them a try! Service was TOP NOTCH!", author: "S. Regular" },
        { quote: "The chicken is juicy and the spice levels are perfect. A must-visit place for peri peri lovers!", author: "J. Doe" },
        { quote: "Great food, friendly service, and a cozy atmosphere. I will definitely be coming back for more!", author: "M. Patel" },
    ];

    const interactiveMenuContainer = document.getElementById('interactive-menu-container');
    const menuPhotoContainer = document.getElementById('menu-photo-container');
    const showInteractiveMenuBtn = document.getElementById('show-interactive-menu-btn');
    const showMenuPhotoBtn = document.getElementById('show-menu-photo-btn');
    const menuGrid = document.getElementById('menu-grid');
    const menuFilters = document.getElementById('menu-filters');
    const testimonialsContainer = document.getElementById('testimonials-container');
    const contactForm = document.getElementById('contact-form');
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('hidden');
    });

    showInteractiveMenuBtn.addEventListener('click', () => {
        interactiveMenuContainer.classList.remove('hidden');
        menuPhotoContainer.classList.add('hidden');
        showInteractiveMenuBtn.classList.add('active', 'bg-red-600', 'text-white', 'hover:bg-red-700');
        showInteractiveMenuBtn.classList.remove('bg-white', 'text-gray-700', 'border', 'hover:bg-gray-100');
        showMenuPhotoBtn.classList.add('bg-white', 'text-gray-700', 'border', 'hover:bg-gray-100');
        showMenuPhotoBtn.classList.remove('bg-red-600', 'text-white', 'hover:bg-red-700');
    });

    showMenuPhotoBtn.addEventListener('click', () => {
        interactiveMenuContainer.classList.add('hidden');
        menuPhotoContainer.classList.remove('hidden');
        showMenuPhotoBtn.classList.add('active', 'bg-red-600', 'text-white', 'hover:bg-red-700');
        showMenuPhotoBtn.classList.remove('bg-white', 'text-gray-700', 'border', 'hover:bg-gray-100');
        showInteractiveMenuBtn.classList.add('bg-white', 'text-gray-700', 'border', 'hover:bg-gray-100');
        showInteractiveMenuBtn.classList.remove('bg-red-600', 'text-white', 'hover:bg-red-700');
    });

    testimonialsContainer.innerHTML = testimonialsData.map(testimonial => `
        <div class="bg-yellow-50 p-6 rounded-lg shadow-md">
            <p class="text-gray-600 italic">"${testimonial.quote}"</p>
            <p class="text-right font-bold mt-4 text-gray-800">- ${testimonial.author}</p>
        </div>
    `).join('');

    const categories = ['All', ...new Set(menuData.map(item => item.category))];

    menuFilters.innerHTML = categories.map(category => `
        <button class="menu-filter-btn capitalize px-4 py-2 rounded-full font-semibold transition duration-300 ${category === 'All' ? 'active' : ''}" data-category="${category}">
            ${category}
        </button>
    `).join('');

    const displayMenuItems = (filter) => {
        const filteredData = (filter === 'All') ? menuData : menuData.filter(item => item.category === filter);
        menuGrid.innerHTML = filteredData.map(item => `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden menu-card">
                <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">${item.name}</h3>
                    <p class="text-gray-600 text-sm mb-4 h-16">${item.description}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-red-600">£${item.price}</span>
                        <a href="#order" class="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-black transition duration-300 text-sm">Order</a>
                    </div>
                </div>
            </div>
        `).join('');
    };

    menuFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu-filter-btn')) {
            const category = e.target.dataset.category;
            document.querySelectorAll('.menu-filter-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-red-600', 'text-white');
                btn.classList.add('bg-white', 'text-gray-700', 'hover:bg-red-100');
            });
            e.target.classList.add('active', 'bg-red-600', 'text-white', 'hover:bg-red-700');
            e.target.classList.remove('bg-white', 'text-gray-700', 'hover:bg-red-100');
            displayMenuItems(category);
        }
    });

    displayMenuItems('All');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        function validateField(input, errorElement, message) {
            if (input.value.trim() === '') {
                errorElement.textContent = message;
                isValid = false;
            } else {
                errorElement.textContent = '';
            }
        }

        function validateEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address.';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
        }
        
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        validateField(nameInput, nameError, 'Name is required.');
        validateEmail();
        validateField(messageInput, messageError, 'Message is required.');

        if (isValid) {
            alert('Thank you for your message!');
            contactForm.reset();
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');
    
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === targetId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
    
    document.querySelectorAll('#mobile-menu .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            hamburgerBtn.classList.remove('active');
        });
    });
});
