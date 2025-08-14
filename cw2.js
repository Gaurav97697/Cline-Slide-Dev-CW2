// $(function() {
//     // --- Data Arrays ---
//     const menuData = [
//         { category: 'Deals', name: 'Peri Peri Strip Meal (5 Strips)', description: 'Comes with fries and drink. Choice of sauces.', price: '10.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Strip+Meal' },
//         { category: 'Deals', name: 'Peri Peri Chicken Chunks on Rice Meal', description: 'With regular drink. Choice of sauces.', price: '10.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Chicken+Chunks' },
//         { category: 'Deals', name: 'Peri Peri Loaded Fries', description: 'Fries topped with chicken chunks, cheese & garlic sauce.', price: '11.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Loaded+Fries' },
//         { category: 'Platters', name: 'Mega Mix Platter', description: '2 whole chicken, 2 large fries, 10 wings, 10 strips, 2 side salad, 4 pitta bread, 1.5L drink, 8 dips.', price: '49.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Mega+Platter' },
//         { category: 'Platters', name: 'Mix Platter', description: 'Whole chicken, large fries, 5 wings, 5 strips, side salad, 4 pitta bread, 1.5ltr drink, 6 dips.', price: '34.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Mix+Platter' },
//         { category: 'Platters', name: 'Single Platter', description: 'Whole chicken, 2 pitta bread, large fries, side salad, 1.5L drink, 4 dips.', price: '23.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Single+Platter' },
//         { category: 'Burgers', name: 'Chicken Tikka Combo Burger', description: 'Tikka marinated grilled chicken breast combined with beef patty, topped with cheese, lettuce, onion, tomatoes with mayo, and chilli sauce.', price: '8.00', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Combo+Burger' },
//         { category: 'Burgers', name: 'Chicken Tikka Burger', description: 'Tikka marinated grilled chicken breast topped with lettuce, onion, tomatoes with mayo, and chill sauce.', price: '6.50', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Tikka+Burger' },
//         { category: 'Burgers', name: 'Chicken Fillet Burger', description: 'Our most popular super fillet burger.', price: '6.49', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Fillet+Burger' },
//         { category: 'Fried Chicken', name: '4 Spicy Wings', description: 'A fan favourite, perfectly spiced and fried to perfection.', price: '4.00', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Spicy+Wings' },
//         { category: 'Fried Chicken', name: 'Spicy Wings Meal (6 Wings)', description: 'Regular fries and regular drink.', price: '10.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Wings+Meal' },
//         { category: 'Bay\'s Special', name: 'Chicken Tikka on Chips (Small)', description: 'With sauce and salad.', price: '11.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Tikka+on+Chips' },
//         { category: 'Bay\'s Special', name: 'Lamb shish on rice', description: 'Comes with lettuce, onion, and tomato chilli sauce and garlic sauce.', price: '9.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Lamb+Shish' },
//     ];

//     const testimonialsData = [
//         { quote: "First time to eat at Peri Peri Republic, really enjoyed it... It was fantastic. The chicken was cooked perfectly... The staff were very friendly and helpful.", author: "A. Customer" },
//         { quote: "Sauces are delicious, especially the garlic and muzambique. Fries are perfectly seasoned and fresh. Highly recommend to give them a try! Service was TOP NOTCH!", author: "S. Regular" },
//         { quote: "The chicken is juicy and the spice levels are perfect. A must-visit place for peri peri lovers!", author: "J. Doe" },
//         { quote: "Great food, friendly service, and a cozy atmosphere. I will definitely be coming back for more!", author: "M. Patel" },
//     ];
    
//     // --- Caching jQuery Selectors ---
//     const $interactiveMenuContainer = $('#interactive-menu-container');
//     const $menuPhotoContainer = $('#menu-photo-container');
//     const $showInteractiveMenuBtn = $('#show-interactive-menu-btn');
//     const $showMenuPhotoBtn = $('#show-menu-photo-btn');
//     const $menuGrid = $('#menu-grid');
//     const $menuFilters = $('#menu-filters');
//     const $testimonialsContainer = $('#testimonials-container');
//     const $contactForm = $('#contact-form');
//     const $hamburgerBtn = $('#hamburger-button');
//     const $mobileMenu = $('#mobile-menu');
//     const $navLinks = $('.nav-link');
//     const $sections = $('main section');
//     const $successMessage = $('#contact-success-message');
//     const $cartModal = $('#cart-modal');
//     const $cartItemsContainer = $('#cart-items');
//     const $cartTotal = $('#cart-total');
//     const $checkoutBtn = $('#checkout-btn');
//     const $nameInput = $('#name');
//     const $emailInput = $('#email');
//     const $messageInput = $('#message');
//     const $nameError = $('#name-error');
//     const $emailError = $('#email-error');
//     const $messageError = $('#message-error');

//     // --- Shopping Cart Logic ---
//     let cart = {};

//     const updateCartDisplay = () => {
//         $cartItemsContainer.empty();
//         let total = 0;
//         let hasItems = false;
        
//         for (const name in cart) {
//             if (cart.hasOwnProperty(name)) {
//                 hasItems = true;
//                 const item = cart[name];
//                 const itemHtml = `
//                     <div class="flex justify-between items-center py-2 border-b last:border-b-0">
//                         <div>
//                             <p class="font-semibold">${item.name} <span class="text-sm text-gray-500">(${item.quantity})</span></p>
//                             <p class="text-sm text-gray-600">£${(item.price * item.quantity).toFixed(2)}</p>
//                         </div>
//                     </div>
//                 `;
//                 $cartItemsContainer.append(itemHtml);
//                 total += item.price * item.quantity;
//             }
//         }

//         $cartTotal.text(`£${total.toFixed(2)}`);
//         if (hasItems) {
//             $('.empty-cart-message').remove();
//             $checkoutBtn.prop('disabled', false);
//         } else {
//             $cartItemsContainer.html('<p class="text-gray-500 empty-cart-message">Your cart is empty.</p>');
//             $checkoutBtn.prop('disabled', true);
//         }
//     };
    
//     // Open cart modal
//     $('.open-cart-btn').on('click', function() {
//         updateCartDisplay();
//         $cartModal.fadeIn(300);
//     });

//     // Close cart modal
//     $('#close-cart-btn').on('click', function() {
//         $cartModal.fadeOut(300);
//     });
    
//     // Add item to cart
//     $(document).on('click', '.add-to-cart-btn', function() {
//         const name = $(this).data('name');
//         const price = parseFloat($(this).data('price'));
        
//         if (cart[name]) {
//             cart[name].quantity += 1;
//         } else {
//             cart[name] = {
//                 name: name,
//                 price: price,
//                 quantity: 1
//             };
//         }
//         updateCartDisplay();
//         $cartModal.fadeIn(300);
//     });


//     // --- Event Handlers ---
//     // Hamburger menu toggle
//     $hamburgerBtn.on('click', function() {
//         $(this).toggleClass('active');
//         $mobileMenu.slideToggle(300);
//     });
    
//     // Mobile menu link click
//     $('#mobile-menu a').on('click', function() {
//         $mobileMenu.slideUp(300);
//         $hamburgerBtn.removeClass('active');
//     });

//     // Menu switcher buttons
//     $showInteractiveMenuBtn.on('click', function() {
//         $interactiveMenuContainer.removeClass('hidden');
//         $menuPhotoContainer.addClass('hidden');
//         $(this).removeClass('bg-white text-gray-700 border hover:bg-gray-100').addClass('bg-red-600 text-white');
//         $showMenuPhotoBtn.removeClass('bg-red-600 text-white').addClass('bg-white text-gray-700 border hover:bg-gray-100');
//     });

//     $showMenuPhotoBtn.on('click', function() {
//         $interactiveMenuContainer.addClass('hidden');
//         $menuPhotoContainer.removeClass('hidden');
//         $(this).removeClass('bg-white text-gray-700 border hover:bg-gray-100').addClass('bg-red-600 text-white');
//         $showInteractiveMenuBtn.removeClass('bg-red-600 text-white').addClass('bg-white text-gray-700 border hover:bg-gray-100');
//     });

//     // --- Function to Display Menu Items ---
//     const displayMenuItems = (filter) => {
//         const filteredData = (filter === 'All') ? menuData : menuData.filter(item => item.category === filter);
//         const menuHtml = filteredData.map(item => `
//             <div class="bg-white rounded-lg shadow-lg overflow-hidden menu-card">
//                 <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
//                 <div class="p-6">
//                     <h3 class="text-xl font-bold mb-2">${item.name}</h3>
//                     <p class="text-gray-600 text-sm mb-4 h-16">${item.description}</p>
//                     <div class="flex justify-between items-center">
//                         <span class="text-2xl font-bold text-red-600">£${item.price}</span>
//                         <button class="add-to-cart-btn bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-black transition duration-300 text-sm" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
//                     </div>
//                 </div>
//             </div>
//         `).join('');
//         $menuGrid.html(menuHtml);
//     };

//     // --- Generate Testimonials and Menu Filters on load ---
//     const testimonialsHtml = testimonialsData.map(testimonial => `
//         <div class="bg-yellow-50 p-6 rounded-lg shadow-md">
//             <p class="text-gray-600 italic">"${testimonial.quote}"</p>
//             <p class="text-right font-bold mt-4 text-gray-800">- ${testimonial.author}</p>
//         </div>
//     `).join('');
//     $testimonialsContainer.html(testimonialsHtml);

//     const categories = ['All', ...new Set(menuData.map(item => item.category))];
//     const filterButtonsHtml = categories.map(category => `
//         <button class="menu-filter-btn capitalize px-4 py-2 rounded-full font-semibold transition duration-300 ${category === 'All' ? 'active bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-red-100'}" data-category="${category}">
//             ${category}
//         </button>
//     `).join('');
//     $menuFilters.html(filterButtonsHtml);

//     // --- Menu Filter Button Click Handler (Event Delegation) ---
//     $menuFilters.on('click', '.menu-filter-btn', function() {
//         const category = $(this).data('category');
//         $('.menu-filter-btn').removeClass('active bg-red-600 text-white').addClass('bg-white text-gray-700 hover:bg-red-100');
//         $(this).addClass('active bg-red-600 text-white hover:bg-red-700').removeClass('bg-white text-gray-700 hover:bg-red-100');
//         displayMenuItems(category);
//     });
    
//     // Initial menu display
//     displayMenuItems('All');

//     // --- Form Validation and Submission ---
//     $contactForm.on('submit', function(e) {
//         e.preventDefault();
//         let isValid = true;
        
//         // Clear previous errors
//         $nameError.text('');
//         $emailError.text('');
//         $messageError.text('');
//         $nameInput.removeClass('input-error');
//         $emailInput.removeClass('input-error');
//         $messageInput.removeClass('input-error');
//         $successMessage.hide();

//         // Validate each field
//         function validateField(input, errorElement, message) {
//             if (input.val().trim() === '') {
//                 errorElement.text(message);
//                 input.addClass('input-error');
//                 isValid = false;
//             } else {
//                 input.removeClass('input-error');
//                 errorElement.text('');
//             }
//         }

//         function validateEmail() {
//             const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailPattern.test($emailInput.val())) {
//                 $emailError.text('Please enter a valid email address.');
//                 $emailInput.addClass('input-error');
//                 isValid = false;
//             } else {
//                 $emailInput.removeClass('input-error');
//                 $emailError.text('');
//             }
//         }
        
//         validateField($nameInput, $nameError, 'Name is required.');
//         validateEmail();
//         validateField($messageInput, $messageError, 'Message is required.');

//         if (isValid) {
//             $successMessage.slideDown().delay(3000).slideUp();
//             $contactForm.get(0).reset();
//         }
//     });

//     // --- Navigation Highlighting on Scroll (jQuery alternative to IntersectionObserver) ---
//     const highlightNavLink = () => {
//         const scrollPos = $(window).scrollTop() + $(window).height() * 0.5;

//         $sections.each(function() {
//             const sectionTop = $(this).offset().top;
//             const sectionId = $(this).attr('id');

//             if (scrollPos > sectionTop) {
//                 $navLinks.removeClass('active');
//                 $(`a[href="#${sectionId}"]`).addClass('active');
//             }
//         });
//     };

//     // Call on initial load and on scroll
//     $(window).on('scroll', highlightNavLink);
//     highlightNavLink();
// });
$(function() {
    // --- Data Arrays ---
    const menuData = [
        { category: 'Deals', name: 'Peri Peri Strip Meal (5 Strips)', description: 'Comes with fries and drink. Choice of sauces.', price: '10.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Strip+Meal' },
        { category: 'Deals', name: 'Peri Peri Chicken Chunks on Rice Meal', description: 'With regular drink. Choice of sauces.', price: '10.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Chicken+Chunks' },
        { category: 'Deals', name: 'Peri Peri Loaded Fries', description: 'Fries topped with chicken chunks, cheese & garlic sauce.', price: '11.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Loaded+Fries' },
        { category: 'Platters', name: 'Mega Mix Platter', description: '2 whole chicken, 2 large fries, 10 wings, 10 strips, 2 side salad, 4 pitta bread, 1.5L drink, 8 dips.', price: '49.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Mega+Platter' },
        { category: 'Platters', name: 'Mix Platter', description: 'Whole chicken, large fries, 5 wings, 5 strips, side salad, 4 pitta bread, 1.5ltr drink, 6 dips.', price: '34.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Mix+Platter' },
        { category: 'Platters', name: 'Single Platter', description: 'Whole chicken, 2 pitta bread, large fries, side salad, 1.5L drink, 4 dips.', price: '23.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Single+Platter' },
        { category: 'Burgers', name: 'Chicken Tikka Combo Burger', description: 'Tikka marinated grilled chicken breast combined with beef patty, topped with cheese, lettuce, onion, tomatoes with mayo, and chilli sauce.', price: '8.00', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Combo+Burger' },
        { category: 'Burgers', name: 'Chicken Tikka Burger', description: 'Tikka marinated grilled chicken breast topped with lettuce, onion, tomatoes with mayo, and chill sauce.', price: '6.50', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Tikka+Burger' },
        { category: 'Burgers', name: 'Chicken Fillet Burger', description: 'Our most popular super fillet burger.', price: '6.49', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Fillet+Burger' },
        { category: 'Fried Chicken', name: '4 Spicy Wings', description: 'A fan favourite, perfectly spiced and fried to perfection.', price: '4.00', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Spicy+Wings' },
        { category: 'Fried Chicken', name: 'Spicy Wings Meal (6 Wings)', description: 'Regular fries and regular drink.', price: '10.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Wings+Meal' },
        { category: 'Bay\'s Special', name: 'Chicken Tikka on Chips (Small)', description: 'With sauce and salad.', price: '11.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Tikka+on+Chips' },
        { category: 'Bay\'s Special', name: 'Lamb shish on rice', description: 'Comes with lettuce, onion, and tomato chilli sauce and garlic sauce.', price: '9.99', image: 'https://placehold.co/400x300/ef4444/ffffff?text=Lamb+Shish' },
    ];

    const testimonialsData = [
        { quote: "First time to eat at Peri Peri Republic, really enjoyed it... It was fantastic. The chicken was cooked perfectly... The staff were very friendly and helpful.", author: "A. Customer" },
        { quote: "Sauces are delicious, especially the garlic and muzambique. Fries are perfectly seasoned and fresh. Highly recommend to give them a try! Service was TOP NOTCH!", author: "S. Regular" },
        { quote: "The chicken is juicy and the spice levels are perfect. A must-visit place for peri peri lovers!", author: "J. Doe" },
        { quote: "Great food, friendly service, and a cozy atmosphere. I will definitely be coming back for more!", author: "M. Patel" },
    ];
    
    // --- Caching jQuery Selectors ---
    const $interactiveMenuContainer = $('#interactive-menu-container');
    const $menuPhotoContainer = $('#menu-photo-container');
    const $showInteractiveMenuBtn = $('#show-interactive-menu-btn');
    const $showMenuPhotoBtn = $('#show-menu-photo-btn');
    const $menuGrid = $('#menu-grid');
    const $menuFilters = $('#menu-filters');
    const $testimonialsContainer = $('#testimonials-container');
    const $contactForm = $('#contact-form');
    const $hamburgerBtn = $('#hamburger-button');
    const $mobileMenu = $('#mobile-menu');
    const $navLinks = $('.nav-link');
    const $sections = $('main section');
    const $successMessage = $('#contact-success-message');
    const $cartModal = $('#cart-modal');
    const $cartItemsContainer = $('#cart-items');
    const $cartTotal = $('#cart-total');
    const $checkoutBtn = $('#checkout-btn');
    const $nameInput = $('#name');
    const $emailInput = $('#email');
    const $messageInput = $('#message');
    const $nameError = $('#name-error');
    const $emailError = $('#email-error');
    const $messageError = $('#message-error');
    const $cookieBanner = $('#cookie-banner');
    const $acceptCookiesBtn = $('#accept-cookies-btn');

    // --- Cookie Consent Logic ---
    const setCookie = (name, value, days) => {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    };

    const getCookie = (name) => {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) === 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    };

    const checkCookie = () => {
        const accepted = getCookie("cookie_consent");
        if (accepted !== "") {
            $cookieBanner.hide();
        } else {
            $cookieBanner.show();
        }
    };
    
    $acceptCookiesBtn.on('click', function() {
        setCookie("cookie_consent", "accepted", 365);
        $cookieBanner.fadeOut(300);
    });

    // Run the cookie check on page load
    checkCookie();


    // --- Shopping Cart Logic ---
    let cart = {};

    const updateCartDisplay = () => {
        $cartItemsContainer.empty();
        let total = 0;
        let hasItems = false;
        
        for (const name in cart) {
            if (cart.hasOwnProperty(name)) {
                hasItems = true;
                const item = cart[name];
                const itemHtml = `
                    <div class="flex justify-between items-center py-2 border-b last:border-b-0">
                        <div>
                            <p class="font-semibold">${item.name} <span class="text-sm text-gray-500">(${item.quantity})</span></p>
                            <p class="text-sm text-gray-600">£${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                `;
                $cartItemsContainer.append(itemHtml);
                total += item.price * item.quantity;
            }
        }

        $cartTotal.text(`£${total.toFixed(2)}`);
        if (hasItems) {
            $('.empty-cart-message').remove();
            $checkoutBtn.prop('disabled', false);
        } else {
            $cartItemsContainer.html('<p class="text-gray-500 empty-cart-message">Your cart is empty.</p>');
            $checkoutBtn.prop('disabled', true);
        }
    };
    
    // Open cart modal
    $('.open-cart-btn').on('click', function() {
        updateCartDisplay();
        $cartModal.fadeIn(300);
    });

    // Close cart modal
    $('#close-cart-btn').on('click', function() {
        $cartModal.fadeOut(300);
    });
    
    // Add item to cart
    $(document).on('click', '.add-to-cart-btn', function() {
        const name = $(this).data('name');
        const price = parseFloat($(this).data('price'));
        
        if (cart[name]) {
            cart[name].quantity += 1;
        } else {
            cart[name] = {
                name: name,
                price: price,
                quantity: 1
            };
        }
        updateCartDisplay();
        $cartModal.fadeIn(300);
    });


    // --- Event Handlers ---
    // Hamburger menu toggle
    $hamburgerBtn.on('click', function() {
        $(this).toggleClass('active');
        $mobileMenu.slideToggle(300);
    });
    
    // Mobile menu link click
    $('#mobile-menu a').on('click', function() {
        $mobileMenu.slideUp(300);
        $hamburgerBtn.removeClass('active');
    });

    // Menu switcher buttons
    $showInteractiveMenuBtn.on('click', function() {
        $interactiveMenuContainer.removeClass('hidden');
        $menuPhotoContainer.addClass('hidden');
        $(this).removeClass('bg-white text-gray-700 border hover:bg-gray-100').addClass('bg-red-600 text-white');
        $showMenuPhotoBtn.removeClass('bg-red-600 text-white').addClass('bg-white text-gray-700 border hover:bg-gray-100');
    });

    $showMenuPhotoBtn.on('click', function() {
        $interactiveMenuContainer.addClass('hidden');
        $menuPhotoContainer.removeClass('hidden');
        $(this).removeClass('bg-white text-gray-700 border hover:bg-gray-100').addClass('bg-red-600 text-white');
        $showInteractiveMenuBtn.removeClass('bg-red-600 text-white').addClass('bg-white text-gray-700 border hover:bg-gray-100');
    });

    // --- Function to Display Menu Items ---
    const displayMenuItems = (filter) => {
        const filteredData = (filter === 'All') ? menuData : menuData.filter(item => item.category === filter);
        const menuHtml = filteredData.map(item => `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden menu-card">
                <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">${item.name}</h3>
                    <p class="text-gray-600 text-sm mb-4 h-16">${item.description}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-red-600">£${item.price}</span>
                        <button class="add-to-cart-btn bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-black transition duration-300 text-sm" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `).join('');
        $menuGrid.html(menuHtml);
    };

    // --- Generate Testimonials and Menu Filters on load ---
    const testimonialsHtml = testimonialsData.map(testimonial => `
        <div class="bg-yellow-50 p-6 rounded-lg shadow-md">
            <p class="text-gray-600 italic">"${testimonial.quote}"</p>
            <p class="text-right font-bold mt-4 text-gray-800">- ${testimonial.author}</p>
        </div>
    `).join('');
    $testimonialsContainer.html(testimonialsHtml);

    const categories = ['All', ...new Set(menuData.map(item => item.category))];
    const filterButtonsHtml = categories.map(category => `
        <button class="menu-filter-btn capitalize px-4 py-2 rounded-full font-semibold transition duration-300 ${category === 'All' ? 'active bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-red-100'}" data-category="${category}">
            ${category}
        </button>
    `).join('');
    $menuFilters.html(filterButtonsHtml);

    // --- Menu Filter Button Click Handler (Event Delegation) ---
    $menuFilters.on('click', '.menu-filter-btn', function() {
        const category = $(this).data('category');
        $('.menu-filter-btn').removeClass('active bg-red-600 text-white').addClass('bg-white text-gray-700 hover:bg-red-100');
        $(this).addClass('active bg-red-600 text-white hover:bg-red-700').removeClass('bg-white text-gray-700 hover:bg-red-100');
        displayMenuItems(category);
    });
    
    // Initial menu display
    displayMenuItems('All');

    // --- Form Validation and Submission ---
    $contactForm.on('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Clear previous errors
        $nameError.text('');
        $emailError.text('');
        $messageError.text('');
        $nameInput.removeClass('input-error');
        $emailInput.removeClass('input-error');
        $messageInput.removeClass('input-error');
        $successMessage.hide();

        // Validate each field
        function validateField(input, errorElement, message) {
            if (input.val().trim() === '') {
                errorElement.text(message);
                input.addClass('input-error');
                isValid = false;
            } else {
                input.removeClass('input-error');
                errorElement.text('');
            }
        }

        function validateEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test($emailInput.val())) {
                $emailError.text('Please enter a valid email address.');
                $emailInput.addClass('input-error');
                isValid = false;
            } else {
                $emailInput.removeClass('input-error');
                $emailError.text('');
            }
        }
        
        validateField($nameInput, $nameError, 'Name is required.');
        validateEmail();
        validateField($messageInput, $messageError, 'Message is required.');

        if (isValid) {
            $successMessage.slideDown().delay(3000).slideUp();
            $contactForm.get(0).reset();
        }
    });

    // --- Navigation Highlighting on Scroll (jQuery alternative to IntersectionObserver) ---
    const highlightNavLink = () => {
        const scrollPos = $(window).scrollTop() + $(window).height() * 0.5;

        $sections.each(function() {
            const sectionTop = $(this).offset().top;
            const sectionId = $(this).attr('id');

            if (scrollPos > sectionTop) {
                $navLinks.removeClass('active');
                $(`a[href="#${sectionId}"]`).addClass('active');
            }
        });
    };

    // Call on initial load and on scroll
    $(window).on('scroll', highlightNavLink);
    highlightNavLink();
});
