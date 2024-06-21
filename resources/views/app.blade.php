<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="light">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" as="style" onload="this.rel=&quot;stylesheet&quot;" id="Line_Awesome-css"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css?ver=6.5.4"
        media="all">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/6e76ce4fba.js" crossorigin="anonymous"></script>
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body
    class="home page-template page-template-page_custom page-template-page_custom-php page page-id-1326 wp-embed-responsive bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 theme-ncmaz woocommerce-js no-sidebar">
    @inertia
    <script>
        $(document).ready(function() {
            $(document).on('click', '.signup-modal-btn', function(e) {
                e.preventDefault();
                $('div[data-ncmaz-modal-name="ncmaz-modal-form-sign-up"]').hide();
                $('div[data-ncmaz-modal-name="ncmaz-modal-form-sign-up"]').removeClass('hidden');
                $('div[data-ncmaz-modal-name="ncmaz-modal-form-sign-up"]').fadeIn('slow').slideDown();
            });
            $(document).on('click', '.signup-close-btn', function(e) {
                e.preventDefault();
                $('div[data-ncmaz-modal-name="ncmaz-modal-form-sign-up"]').fadeOut('slow').slideUp();
            });
            $(document).on('click', '.signin-modal-btn', function(e) {
                e.preventDefault();
                $('div[data-ncmaz-modal-name="ncmaz-modal-form-sign-up"]').fadeOut('slow').slideUp();
                $('div[data-ncmaz-modal-name="ncmaz-modal-form-sign-in"]').hide();
                $('div[data-ncmaz-modal-name="ncmaz-modal-form-sign-in"]').removeClass('hidden');
                $('div[data-ncmaz-modal-name="ncmaz-modal-form-sign-in"]').fadeIn('slow').slideDown();
            });
            $(document).on('click', '.signin-close-btn', function(e) {
                e.preventDefault();
                $('div[data-ncmaz-modal-name="ncmaz-modal-form-sign-in"]').fadeOut('slow').slideUp();
            });
            $(document).on('click', '.profile-div', function() {
                $('.profile-dropdown-custom').toggleClass('hidden')
            });
            $(document).on('click', '.switch_mode', function(e) {
                if ($('html').hasClass('light')) {
                    $('html').removeClass('light')
                    $('html').addClass('dark')
                } else {
                    $('html').removeClass('dark')
                    $('html').addClass('light')
                }
            });
            // var toastTimeout;

            // $(document).on('click', '.custom-toast-message-close', function() {
            //     var $toast = $(".custom-toast-message");
            //     $toast.fadeOut(400);

            //     // Clear the timeout if the toast is closed manually
            //     clearTimeout(toastTimeout);
            // });

            // $(document).on('click', '#showToast', function() {
            //     var $toast = $(".custom-toast-message");
            //     $toast.stop().fadeIn(400);

            //     // Restart progress bar animation
            //     var $progressBar = $toast.find(".progress");
            //     $progressBar.removeClass("animate");
            //     setTimeout(function() {
            //         $progressBar.addClass("animate");
            //     }, 10);

            //     // Hide toast after the duration of the animation
            //     clearTimeout(toastTimeout); // Clear any existing timeout to avoid multiple timeouts
            //     toastTimeout = setTimeout(function() {
            //         $toast.fadeOut(400);
            //     }, 5000); // match this duration with the animation duration
            // });
        });
    </script>
</body>

</html>
