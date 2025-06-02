document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Sticky Navigation
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Menu Items
    const menuItems = [
        {
            id: 1,
            title: "Bloom Signature Latte",
            price: "$5.50",
            desc: "Our signature espresso with floral-infused milk and a hint of vanilla",
            category: "coffee",
            img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            title: "Matcha Bloom",
            price: "$5.00",
            desc: "Premium ceremonial matcha with floral notes and oat milk",
            category: "tea",
            img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            title: "Golden Turmeric Latte",
            price: "$4.75",
            desc: "Anti-inflammatory turmeric with black pepper and coconut milk",
            category: "specialty",
            img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            title: "Cold Brew Bloom",
            price: "$4.50",
            desc: "Smooth cold brew with floral undertones and a touch of honey",
            category: "coffee",
            img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            title: "Chai Bloom",
            price: "$4.75",
            desc: "Spiced chai with floral notes and your choice of milk",
            category: "tea",
            img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 6,
            title: "Pink Rose Latte",
            price: "$5.25",
            desc: "Beetroot and rose infused latte with a delicate floral aroma",
            category: "specialty",
            img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
    ];
    
    const menuGrid = document.querySelector('.menu-grid');
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    // Load all menu items
    function loadMenuItems(items) {
        menuGrid.innerHTML = '';
        
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.setAttribute('data-category', item.category);
            
            menuItem.innerHTML = `
                <div class="menu-item-img" style="background-image: url('${item.img}')"></div>
                <div class="menu-item-content">
                    <div class="menu-item-title">
                        <h3>${item.title}</h3>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p class="menu-item-desc">${item.desc}</p>
                </div>
            `;
            
            menuGrid.appendChild(menuItem);
        });
    }
    
    // Filter menu items by category
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            
            if (category === 'all') {
                loadMenuItems(menuItems);
            } else {
                const filteredItems = menuItems.filter(item => item.category === category);
                loadMenuItems(filteredItems);
            }
        });
    });
    
    // Initialize with all menu items
    loadMenuItems(menuItems);
    
    // Testimonial Slider
    const testimonialSlide = document.querySelector('.testimonial-slide');
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    
    prevBtn.className = 'prev-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    
    nextBtn.className = 'next-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    
    testimonialSlide.parentNode.insertBefore(prevBtn, testimonialSlide);
    testimonialSlide.parentNode.insertBefore(nextBtn, testimonialSlide.nextSibling);
    
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');
    const totalTestimonials = testimonials.length;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(currentIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        showTestimonial(currentIndex);
    });
    
    // Show first testimonial initially
    showTestimonial(currentIndex);
    
    // Gallery Lightbox (would be implemented with a library in a real project)
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // In a real project, this would open a lightbox with the full image
            alert('Gallery lightbox would open here in a complete implementation');
        });
    });
});