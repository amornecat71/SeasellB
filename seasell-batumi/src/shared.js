// Supabase Configuration
window.SB_URL = 'https://lsjmiilrvrecplntikzf.supabase.co';
window.SB_KEY = 'sb_publishable_rA-SVQ52VhMeLnoN3GRObw_ZGljnvBG';

// Initialize Supabase Client safely
try {
    // ПРЯМА ІНІЦІАЛІЗАЦІЯ БЕЗ ЗАЙВИХ УМОВ
    window.supabaseClient = supabase.createClient(window.SB_URL, window.SB_KEY);
    console.log("Supabase initialized successfully");
} catch (e) {
    console.error("Failed to initialize Supabase:", e);
}

// i18n Dictionary
window.translations = {
    en: {
        nav_home: "Home",
        nav_search: "Search",
        nav_post_ad: "+ Post Ad",
        nav_login: "Login / Register",
        nav_logout: "Logout",
        hero_title: "Find everything you need in Batumi",
        hero_search_placeholder: "What are you looking for?",
        hero_search_btn: "Search",
        cat_electronics: "Electronics",
        cat_real_estate: "Real Estate",
        cat_auto: "Auto",
        cat_services: "Services",
        cat_home: "Home",
        latest_ads: "Latest Ads",
        back: "← Back",
        filter_title: "Filters",
        filter_category: "Category",
        filter_min_price: "Min Price",
        filter_max_price: "Max Price",
        filter_condition: "Condition",
        filter_all: "All",
        filter_new: "New",
        filter_used: "Used",
        filter_sort: "Sort By",
        filter_sort_newest: "Newest",
        filter_sort_low: "Price: Low to High",
        filter_sort_high: "Price: High to Low",
        filter_apply: "Apply Filters",
        no_results: "No ads found matching your criteria",
        contact_seller: "Contact Seller",
        buy_securely: "Buy Securely",
        form_title: "Create Listing",
        form_label_title: "Title",
        form_label_price: "Price",
        form_label_currency: "Currency",
        form_label_cat: "Category",
        form_label_cond: "Condition",
        form_label_district: "District",
        form_label_desc: "Description",
        form_label_image: "Image",
        form_submit: "Publish Ad",
        success_msg: "Ad published successfully!",
        loading: "Loading...",
        all_categories: "All Categories",
        auth_login_title: "Welcome Back",
        auth_register_title: "Create Account",
        auth_email: "Email Address",
        auth_password: "Password",
        auth_submit_login: "Sign In",
        auth_submit_register: "Sign Up",
        auth_toggle_register: "Need an account? Register",
        auth_toggle_login: "Already have an account? Login",
        footer_desc: "Your trusted marketplace for real estate, electronics, and services in Batumi.",
        footer_links: "Quick Links",
        footer_about: "About SeaSell Batumi",
        footer_contact: "Contact Us",
        footer_legal: "Legal",
        footer_terms: "Terms of Service",
        footer_privacy: "Privacy Policy",
        auth_confirm_password: "Confirm Password",
        auth_passwords_mismatch: "Passwords do not match",
        nav_profile: "My Profile",
        form_label_phone: "Phone Number",
        form_label_currency: "Currency",
        form_label_district: "District",
        dist_old_batumi: "Old Batumi",
        dist_new_boulevard: "New Boulevard",
        dist_gonio: "Gonio",
        dist_makhinjauri: "Makhinjauri",
        dist_vox: "Vox Area",
        btn_whatsapp: "WhatsApp",
        btn_telegram: "Telegram",
        profile_my_ads: "My Ads",
        profile_favorites: "Favorites",
        btn_edit: "Edit",
        btn_delete: "Delete",
        auth_google: "Continue with Google",
        auth_or: "OR"
    },
    ua: {
        nav_home: "Головна",
        nav_search: "Пошук",
        nav_post_ad: "+ Подати оголошення",
        nav_login: "Увійти / Реєстрація",
        nav_logout: "Вийти",
        hero_title: "Знайдіть все необхідне в Батумі",
        hero_search_placeholder: "Що ви шукаєте?",
        hero_search_btn: "Пошук",
        cat_electronics: "Електроніка",
        cat_real_estate: "Нерухомість",
        cat_auto: "Авто",
        cat_services: "Послуги",
        cat_home: "Дім",
        latest_ads: "Останні оголошення",
        back: "← Назад",
        filter_title: "Фільтри",
        filter_category: "Категорія",
        filter_min_price: "Мін. ціна",
        filter_max_price: "Макс. ціна",
        filter_condition: "Стан",
        filter_all: "Всі",
        filter_new: "Нове",
        filter_used: "Вживане",
        filter_sort: "Сортувати",
        filter_sort_newest: "Новіші",
        filter_sort_low: "Ціна: від дешевих",
        filter_sort_high: "Ціна: від дорогих",
        filter_apply: "Застосувати",
        no_results: "Оголошень не знайдено",
        contact_seller: "Зв'язатися з продавцем",
        buy_securely: "Купити безпечно",
        form_title: "Створити оголошення",
        form_label_title: "Заголовок",
        form_label_price: "Ціна",
        form_label_currency: "Валюта",
        form_label_cat: "Категорія",
        form_label_cond: "Стан",
        form_label_district: "Район",
        form_label_desc: "Опис",
        form_label_image: "Зображення",
        form_submit: "Опублікувати",
        success_msg: "Оголошення успішно опубліковано!",
        loading: "Завантаження...",
        all_categories: "Всі категорії",
        auth_login_title: "З поверненням",
        auth_register_title: "Створити акаунт",
        auth_email: "Електронна пошта",
        auth_password: "Пароль",
        auth_submit_login: "Увійти",
        auth_submit_register: "Зареєструватися",
        auth_toggle_register: "Немає акаунту? Реєстрація",
        auth_toggle_login: "Вже є акаунт? Увійти",
        footer_desc: "Ваш надійний маркетплейс нерухомості, електроніки та послуг у Батумі.",
        footer_links: "Швидкі посилання",
        footer_about: "Про SeaSell Batumi",
        footer_contact: "Контакти",
        footer_legal: "Правова інформація",
        footer_terms: "Умови використання",
        footer_privacy: "Політика конфіденційності",
        auth_confirm_password: "Підтвердіть пароль",
        auth_passwords_mismatch: "Паролі не співпадають",
        nav_profile: "Мій профіль",
        form_label_phone: "Номер телефону",
        dist_old_batumi: "Старий Батумі",
        dist_new_boulevard: "Новий Бульвар",
        dist_gonio: "Гоніо",
        dist_makhinjauri: "Махінжаурі",
        dist_vox: "Район Вокс",
        btn_whatsapp: "WhatsApp",
        btn_telegram: "Telegram",
        profile_my_ads: "Мої оголошення",
        profile_favorites: "Улюблені",
        btn_edit: "Редагувати",
        btn_delete: "Видалити",
        auth_google: "Продовжити з Google",
        auth_or: "АБО"
    },
    ka: {
        nav_home: "მთავარი",
        nav_search: "ძიება",
        nav_post_ad: "+ განცხადების დამატება",
        nav_login: "შესვლა / რეგისტრაცია",
        nav_logout: "გასვლა",
        hero_title: "იპოვეთ ყველაფერი ბათუმში",
        hero_search_placeholder: "რას ეძებთ?",
        hero_search_btn: "ძებნა",
        cat_electronics: "ელექტრონიკა",
        cat_real_estate: "უძრავი ქონება",
        cat_auto: "ავტო",
        cat_services: "სერვისები",
        cat_home: "სახლი",
        latest_ads: "უახლესი განცხადებები",
        back: "← უკან",
        filter_title: "ფილტრები",
        filter_category: "კატეგორია",
        filter_min_price: "მინ. ფასი",
        filter_max_price: "მაქს. ფასი",
        filter_condition: "მდგომარეობა",
        filter_all: "ყველა",
        filter_new: "ახალი",
        filter_used: "მეორადი",
        filter_sort: "სორტირება",
        filter_sort_newest: "უახლესი",
        filter_sort_low: "ფასი: ზრდადი",
        filter_sort_high: "ფასი: კლებადი",
        filter_apply: "გამოყენება",
        no_results: "განცხადებები არ მოიძებნა",
        contact_seller: "დაუკავშირდით გამყიდველს",
        buy_securely: "უსაფრთხო ყიდვა",
        form_title: "განცხადების დამატება",
        form_label_title: "სათაური",
        form_label_price: "ფასი",
        form_label_currency: "ვალუტა",
        form_label_cat: "კატეგორია",
        form_label_cond: "მდგომარეობა",
        form_label_district: "უბანი",
        form_label_desc: "აღწერა",
        form_label_image: "სურათი",
        form_submit: "გამოქვეყნება",
        success_msg: "წარმატებით გამოქვეყნდა!",
        loading: "იტვირთება...",
        all_categories: "ყველა კატეგორია",
        auth_login_title: "მოგესალმებით",
        auth_register_title: "რეგისტრაცია",
        auth_email: "ელ. ფოსტა",
        auth_password: "პაროლი",
        auth_submit_login: "შესვლა",
        auth_submit_register: "რეგისტრაცია",
        auth_toggle_register: "არ გაქვთ ანგარიში? რეგისტრაცია",
        auth_toggle_login: "უკვე გაქვთ ანგარიში? შესვლა",
        footer_desc: "თქვენი სანდო მარკეტპლეისი ბათუმში.",
        footer_links: "ბმულები",
        footer_about: "SeaSell Batumi-ს შესახებ",
        footer_contact: "კონტაქტი",
        footer_legal: "იურიდიული",
        footer_terms: "მოხმარების წესები",
        footer_privacy: "კონფიდენციალურობა",
        auth_confirm_password: "გაიმეორეთ პაროლი",
        auth_passwords_mismatch: "პაროლები არ ემთხვევა",
        nav_profile: "ჩემი პროფილი",
        form_label_phone: "ტელეფონის ნომერი",
        dist_old_batumi: "ძველი ბათუმი",
        dist_new_boulevard: "ახალი ბულვარი",
        dist_gonio: "გონიო",
        dist_makhinjauri: "მახინჯაური",
        dist_vox: "ვოქსის ტერიტორია",
        btn_whatsapp: "WhatsApp",
        btn_telegram: "Telegram",
        profile_my_ads: "ჩემი განცხადებები",
        profile_favorites: "რჩეულები",
        btn_edit: "რედაქტირება",
        btn_delete: "წაშლა",
        auth_google: "გააგრძელეთ Google-ით",
        auth_or: "ან"
    }
};

// i18n Engine
window.currentLang = localStorage.getItem('lang') || 'en';

window.applyTranslations = function() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (window.translations[window.currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = window.translations[window.currentLang][key];
            } else {
                el.innerText = window.translations[window.currentLang][key];
            }
        }
    });
};

window.setLanguage = function(lang) {
    window.currentLang = lang;
    localStorage.setItem('lang', lang);
    location.reload();
};

// Auth State Management
window.checkAuth = async function() {
    if (!window.supabaseClient) return;
    const { data: { session } } = await window.supabaseClient.auth.getSession();
    
    const authBtn = document.getElementById('authBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const postAdBtn = document.getElementById('postAdBtn');
    const profileBtn = document.getElementById('profileBtn');
    
    if (session) {
        if (authBtn) authBtn.classList.add('hidden');
        if (logoutBtn) logoutBtn.classList.remove('hidden');
        if (profileBtn) profileBtn.classList.remove('hidden');
        if (postAdBtn) postAdBtn.href = 'add.html';
        window.currentUser = session.user;
    } else {
        if (authBtn) authBtn.classList.remove('hidden');
        if (logoutBtn) logoutBtn.classList.add('hidden');
        if (profileBtn) profileBtn.classList.add('hidden');
        if (postAdBtn) postAdBtn.href = 'auth.html';
        window.currentUser = null;
    }
};

window.handleLogout = async function() {
    if (!window.supabaseClient) return;
    await window.supabaseClient.auth.signOut();
    window.location.reload();
};

// Formatting utilities
window.formatPrice = function(price, currency) {
    if (currency === 'GEL') return price.toLocaleString() + ' ₾';
    return '$' + price.toLocaleString();
};

// Weather Widget
window.loadWeather = async function() {
    const weatherContainer = document.getElementById('weatherWidget');
    if (!weatherContainer) return;
    try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.6416&longitude=41.6359&current_weather=true');
        const data = await res.json();
        const temp = Math.round(data.current_weather.temperature);
        weatherContainer.innerHTML = `<span class="text-sm font-bold text-slate-600 flex items-center gap-1"><svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg> ${temp}°C Batumi</span>`;
    } catch (e) {
        weatherContainer.innerHTML = '';
    }
};

// Favorites Logic
window.toggleFavorite = async function(adId, btnElement) {
    if (!window.currentUser) {
        window.location.href = 'auth.html';
        return;
    }
    
    try {
        const { data: existing } = await window.supabaseClient
            .from('favorites')
            .select('*')
            .eq('user_id', window.currentUser.id)
            .eq('ad_id', adId)
            .single();
            
        if (existing) {
            await window.supabaseClient.from('favorites').delete().eq('id', existing.id);
            btnElement.classList.remove('text-red-500', 'fill-current');
            btnElement.classList.add('text-slate-400');
        } else {
            await window.supabaseClient.from('favorites').insert([{ user_id: window.currentUser.id, ad_id: adId }]);
            btnElement.classList.remove('text-slate-400');
            btnElement.classList.add('text-red-500', 'fill-current');
        }
    } catch (e) {
        console.error("Error toggling favorite", e);
    }
};

window.checkFavorite = async function(adId) {
    if (!window.currentUser) return false;
    const { data } = await window.supabaseClient
        .from('favorites')
        .select('*')
        .eq('user_id', window.currentUser.id)
        .eq('ad_id', adId)
        .single();
    return !!data;
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    window.applyTranslations();
    window.checkAuth();
    window.loadWeather();
    
    const langDisplay = document.getElementById('currentLangDisplay');
    if (langDisplay) {
        langDisplay.innerText = window.currentLang.toUpperCase();
    }
});
