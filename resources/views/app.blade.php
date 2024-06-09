<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <script src="https://kit.fontawesome.com/6e76ce4fba.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
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
                // $('div[data-ncmaz-modal-name="ncmaz-modal-form-sign-up"]').addClass('hidden');

            });
            $(document).on('click', '.profile-div', function() {
                $('.profile-dropdown-custom').toggleClass('hidden')
            });
        });
    </script>
</body>

</html>
