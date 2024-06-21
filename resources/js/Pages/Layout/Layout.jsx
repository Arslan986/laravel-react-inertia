import Header from '@/Components/Frontend/Partials/Header';
import { Link, Head, useForm, usePage } from '@inertiajs/react';
import HeroSection from '@/Components/Frontend/Home/HeroSection';
import ExploreLatestArticles from '@/Components/Frontend/Home/ExploreLatestArticles';
import TheVideos from '@/Components/Frontend/Home/TheVideos';
import BecomeAuthor from '@/Components/Frontend/Partials/BecomeAuthor';
import TrendingArticles from '@/Components/Frontend/Home/TrendingArticles';
import Footer from '@/Components/Frontend/Partials/Footer';


import { useEffect } from 'react';
import InputError from '@/Components/InputError';


export default function Layout({ children, user }) {
    const { heading, status, success, error } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        login_email: '',
        login_password: '',
        remember: false,
    });
    $(document).on('click', '.custom-toast-message-close', function () {
        $('.custom-toast-message ').removeClass('active');
    })



    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);



    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };
    const login = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    if (heading != null || status != null || success != null || error) {
        var toastTimeout;

        $(document).on('click', '.custom-toast-message-close', function () {
            var $toast = $(".custom-toast-message");
            $toast.fadeOut(400);

            // Clear the timeout if the toast is closed manually
            clearTimeout(toastTimeout);
        });

        var $toast = $(".custom-toast-message");
        $toast.stop().fadeIn(400);

        // Restart progress bar animation
        var $progressBar = $toast.find(".progress");
        $progressBar.removeClass("animate");
        setTimeout(function () {
            $progressBar.addClass("animate");
        }, 10);

        // Hide toast after the duration of the animation
        clearTimeout(toastTimeout); // Clear any existing timeout to avoid multiple timeouts
        toastTimeout = setTimeout(function () {
            $toast.fadeOut(400);
        }, 5000); // match this duration with the animation duration
    }
    return (
        <>

            {success && (
                <div class="custom-toast-message toast-success">
                    <div class="custom-toast-message-content">
                        <div class="custom-toast-message-icon-bg">
                            <div class="custom-toast-message-icon">
                                <i class="fas fa-solid fa-check check"></i>

                            </div>
                        </div>

                        <div class="message">
                            {heading && (
                                <span class="text text-1">{heading}</span>
                            )}
                            <span class="text text-2">{success}</span>
                        </div>
                    </div>
                    <i class="fa-solid fa-xmark close custom-toast-message-close"></i>

                    <div class="progress"></div>
                </div>
            )}
            {error && (
                <div class="custom-toast-message toast-danger">
                    <div class="custom-toast-message-content">
                        <div class="custom-toast-message-icon-bg">
                            <div class="custom-toast-message-icon">
                                <i class="fas fa-solid fa-xmark check"></i>
                            </div>
                        </div>

                        <div class="message">
                            {heading && (
                                <span class="text text-1">{heading}</span>
                            )}
                            <span class="text text-2">{error}</span>
                        </div>
                    </div>
                    <i class="fa-solid fa-xmark close custom-toast-message-close"></i>

                    <div class="progress"></div>
                </div>
            )}
            {status && (
                <div class="custom-toast-message toast-info">
                    <div class="custom-toast-message-content">
                        <div class="custom-toast-message-icon-bg">
                            <div class="custom-toast-message-icon">
                                <i class="fas fa-solid fa-xmark check"></i>
                            </div>
                        </div>

                        <div class="message">
                            {heading && (
                                <span class="text text-1">{heading}</span>
                            )}
                            <span class="text text-2">{status}</span>
                        </div>
                    </div>
                    <i class="fa-solid fa-xmark close custom-toast-message-close"></i>

                    <div class="progress"></div>
                </div>
            )}


            {/* <button id="showToast">Show Toast</button> */}
            <Header user={user} />
            {children}
            <Footer />
            <div id="site-navigation-mobile" class="hidden fixed inset-0 z-max overflow-y-auto" role="dialog" aria-modal="true">
                <div class="fixed left-0 top-0 bottom-0 w-full md:w-auto z-max outline-none focus:outline-none">
                    <div class="z-10 relative">
                        <div
                            class="overflow-y-auto w-full max-w-sm min-w-[300px] h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
                            <div class="py-6 px-5">
                                <div class="flex items-center">
                                    <div class="site-branding">
                                        <div class="site-logo"> <a class="focus:outline-none focus:ring-0"
                                            href="https://ncmaz.chisnghiax.com/"> <img class="block dark:hidden"
                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/10/Frame.png"
                                                alt="logo" /> <img class="hidden dark:block"
                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/10/Frame.png"
                                                    alt="logo darkmode" /> </a></div>
                                    </div>
                                </div>
                                <div class="ncWidget-mobile-sidebar-menu text-neutral-700 dark:text-neutral-300 text-sm ">
                                    <div>
                                        <div style={{ height: "28px" }} aria-hidden="true" class="wp-block-spacer"></div>
                                    </div>
                                    <div>
                                        <p>Discover the most outstanding articles on all topics of life. Write your stories and
                                            share them</p>
                                    </div>
                                    <div>
                                        <div style={{ height: "28px" }} aria-hidden="true" class="wp-block-spacer"></div>
                                    </div>
                                    <div>
                                        <ul
                                            class="wp-block-social-links has-normal-icon-size is-style-default is-layout-flex wp-block-social-links-is-layout-flex">
                                            <li class="wp-social-link wp-social-link-facebook  wp-block-social-link"><a
                                                href="https://#" class="wp-block-social-link-anchor"><svg width="24"
                                                    height="24" viewBox="0 0 24 24" version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                                    <path
                                                        d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z">
                                                    </path>
                                                </svg><span
                                                    class="wp-block-social-link-label screen-reader-text">Facebook</span></a>
                                            </li>
                                            <li class="wp-social-link wp-social-link-instagram  wp-block-social-link"><a
                                                href="https://#" class="wp-block-social-link-anchor"><svg width="24"
                                                    height="24" viewBox="0 0 24 24" version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                                    <path
                                                        d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z">
                                                    </path>
                                                </svg><span
                                                    class="wp-block-social-link-label screen-reader-text">Instagram</span></a>
                                            </li>
                                            <li class="wp-social-link wp-social-link-twitter  wp-block-social-link"><a
                                                href="https://#" class="wp-block-social-link-anchor"><svg width="24"
                                                    height="24" viewBox="0 0 24 24" version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                                    <path
                                                        d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z">
                                                    </path>
                                                </svg><span
                                                    class="wp-block-social-link-label screen-reader-text">Twitter</span></a>
                                            </li>
                                            <li class="wp-social-link wp-social-link-behance  wp-block-social-link"><a
                                                href="https://#" class="wp-block-social-link-anchor"><svg width="24"
                                                    height="24" viewBox="0 0 24 24" version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                                    <path
                                                        d="M7.799,5.698c0.589,0,1.12,0.051,1.606,0.156c0.482,0.102,0.894,0.273,1.241,0.507c0.344,0.235,0.612,0.546,0.804,0.938 c0.188,0.387,0.281,0.871,0.281,1.443c0,0.619-0.141,1.137-0.421,1.551c-0.284,0.413-0.7,0.751-1.255,1.014 c0.756,0.218,1.317,0.601,1.689,1.146c0.374,0.549,0.557,1.205,0.557,1.975c0,0.623-0.12,1.161-0.359,1.612 c-0.241,0.457-0.569,0.828-0.973,1.114c-0.408,0.288-0.876,0.5-1.399,0.637C9.052,17.931,8.514,18,7.963,18H2V5.698H7.799 M7.449,10.668c0.481,0,0.878-0.114,1.192-0.345c0.311-0.228,0.463-0.603,0.463-1.119c0-0.286-0.051-0.523-0.152-0.707 C8.848,8.315,8.711,8.171,8.536,8.07C8.362,7.966,8.166,7.894,7.94,7.854c-0.224-0.044-0.457-0.06-0.697-0.06H4.709v2.874H7.449z M7.6,15.905c0.267,0,0.521-0.024,0.759-0.077c0.243-0.053,0.457-0.137,0.637-0.261c0.182-0.12,0.332-0.283,0.441-0.491 C9.547,14.87,9.6,14.602,9.6,14.278c0-0.633-0.18-1.084-0.533-1.357c-0.356-0.27-0.83-0.404-1.413-0.404H4.709v3.388L7.6,15.905z M16.162,15.864c0.367,0.358,0.897,0.538,1.583,0.538c0.493,0,0.92-0.125,1.277-0.374c0.354-0.248,0.571-0.514,0.654-0.79h2.155 c-0.347,1.072-0.872,1.838-1.589,2.299C19.534,18,18.67,18.23,17.662,18.23c-0.701,0-1.332-0.113-1.899-0.337 c-0.567-0.227-1.041-0.544-1.439-0.958c-0.389-0.415-0.689-0.907-0.904-1.484c-0.213-0.574-0.32-1.21-0.32-1.899 c0-0.666,0.11-1.288,0.329-1.863c0.222-0.577,0.529-1.075,0.933-1.492c0.406-0.42,0.885-0.751,1.444-0.994 c0.558-0.241,1.175-0.363,1.857-0.363c0.754,0,1.414,0.145,1.98,0.44c0.563,0.291,1.026,0.686,1.389,1.181 c0.363,0.493,0.622,1.057,0.783,1.69c0.16,0.632,0.217,1.292,0.171,1.983h-6.428C15.557,14.84,15.795,15.506,16.162,15.864 M18.973,11.184c-0.291-0.321-0.783-0.496-1.384-0.496c-0.39,0-0.714,0.066-0.973,0.2c-0.254,0.132-0.461,0.297-0.621,0.491 c-0.157,0.197-0.265,0.405-0.328,0.628c-0.063,0.217-0.101,0.413-0.111,0.587h3.98C19.478,11.969,19.265,11.509,18.973,11.184z M15.057,7.738h4.985V6.524h-4.985L15.057,7.738z">
                                                    </path>
                                                </svg><span
                                                    class="wp-block-social-link-label screen-reader-text">Behance</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div> <span id="btn-close-modal-mobile-sidebar-menu" class="absolute right-2 top-2 p-1">
                                    <button
                                        class="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700  focus:outline-none">
                                        <span class="sr-only"> </span> <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                            <path fill-rule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg> </button> </span>
                            </div>
                            <div class="primary-menu-container w-full">
                                <ul id="mobile-menu-list" class="flex flex-col py-6 px-2 space-y-1 menu-wrapper">
                                    <li id="nav-menu-item-1611"
                                        class="main-menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1326 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children">
                                        <a href="https://ncmaz.chisnghiax.com/"
                                            class="menu-link main-menu-link"><span>Home</span>
                                            <div class="icon-after-menu block flex-grow py-2.5">
                                                <div class="flex justify-end flex-grow"><svg xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor"
                                                    class="ml-2 h-4 w-4 text-neutral-500" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"></path>
                                                </svg></div>
                                            </div>
                                        </a>
                                        <ul class="sub-menu ">
                                            <li id="nav-menu-item-1610"
                                                class="sub-menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1326 current_page_item">
                                                <a href="https://ncmaz.chisnghiax.com/"
                                                    class="menu-link sub-menu-link"><span>Home 1</span></a>
                                            </li>
                                            <li id="nav-menu-item-954"
                                                class="sub-menu-item  menu-item menu-item-type-post_type menu-item-object-page">
                                                <a href="https://ncmaz.chisnghiax.com/home-2/"
                                                    class="menu-link sub-menu-link"><span>Home 2</span></a>
                                            </li>
                                            <li id="nav-menu-item-955"
                                                class="sub-menu-item  menu-item menu-item-type-post_type menu-item-object-page">
                                                <a href="https://ncmaz.chisnghiax.com/home-3/"
                                                    class="menu-link sub-menu-link"><span>Home 3 (Podcast/Music)</span></a>
                                            </li>
                                            <li id="nav-menu-item-1381"
                                                class="sub-menu-item  menu-item menu-item-type-post_type menu-item-object-page">
                                                <a href="https://ncmaz.chisnghiax.com/home-4/"
                                                    class="menu-link sub-menu-link"><span>Home 4 (Video)</span></a>
                                            </li>
                                            <li id="nav-menu-item-1334"
                                                class="sub-menu-item  menu-item menu-item-type-post_type menu-item-object-page">
                                                <a href="https://ncmaz.chisnghiax.com/home-5/"
                                                    class="menu-link sub-menu-link"><span>Home 5 (Gallery)</span></a>
                                            </li>
                                            <li id="nav-menu-item-1347"
                                                class="sub-menu-item  menu-item menu-item-type-post_type menu-item-object-page">
                                                <a href="https://ncmaz.chisnghiax.com/home-6/"
                                                    class="menu-link sub-menu-link"><span>Home 6</span></a>
                                            </li>
                                            <li id="nav-menu-item-1638"
                                                class="sub-menu-item  menu-item menu-item-type-custom menu-item-object-custom">
                                                <a href="https://ncmaz-rtl.chisnghiax.com/"
                                                    class="menu-link sub-menu-link"><span>Home demo – RTL</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="nav-menu-item-616"
                                        class="main-menu-item  menu-item menu-item-type-custom menu-item-object-custom"><a
                                            href="#" class="menu-link main-menu-link"><span>Mega Tabs</span></a></li>
                                    <li id="nav-menu-item-625"
                                        class="main-menu-item  menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                        <a href="#" class="menu-link main-menu-link"><span>Single Formats</span>
                                            <div class="icon-after-menu block flex-grow py-2.5">
                                                <div class="flex justify-end flex-grow"><svg xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor"
                                                    class="ml-2 h-4 w-4 text-neutral-500" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"></path>
                                                </svg></div>
                                            </div>
                                        </a>
                                        <ul class="sub-menu ">
                                            <li id="nav-menu-item-1103"
                                                class="sub-menu-item  menu-item menu-item-type-post_type menu-item-object-post">
                                                <a href="https://ncmaz.chisnghiax.com/hello-world/"
                                                    class="menu-link sub-menu-link"><span>Post Gallery</span></a>
                                            </li>
                                            <li id="nav-menu-item-1101"
                                                class="sub-menu-item  menu-item menu-item-type-post_type menu-item-object-post">
                                                <a href="https://ncmaz.chisnghiax.com/aspernatur-deserunt-repudiandae-provident-assumenda-odit-voluptas/"
                                                    class="menu-link sub-menu-link"><span>Post Video</span></a>
                                            </li>
                                            <li id="nav-menu-item-1100"
                                                class="sub-menu-item  menu-item menu-item-type-post_type menu-item-object-post">
                                                <a href="https://ncmaz.chisnghiax.com/velit-at-dolorem-dignissimos/"
                                                    class="menu-link sub-menu-link"><span>Post Audio</span></a>
                                            </li>
                                            <li id="nav-menu-item-1112"
                                                class="sub-menu-item  menu-item menu-item-type-post_type menu-item-object-post">
                                                <a href="https://ncmaz.chisnghiax.com/sint-est-autem-quibusdam-asperiores-occaecati-voluptatem/"
                                                    class="menu-link sub-menu-link"><span>Post style 3</span></a>
                                            </li>
                                            <li id="nav-menu-item-1107"
                                                class="sub-menu-item  menu-item menu-item-type-post_type menu-item-object-post">
                                                <a href="https://ncmaz.chisnghiax.com/eos-adipisci-dolorem-quia-qui/"
                                                    class="menu-link sub-menu-link"><span>Post Style 2</span></a>
                                            </li>
                                            <li id="nav-menu-item-1980"
                                                class="sub-menu-item  menu-item menu-item-type-post_type menu-item-object-post">
                                                <a href="https://ncmaz.chisnghiax.com/quo-illum-et-alias-ea-fugit/"
                                                    class="menu-link sub-menu-link"><span>Single has sidebar</span></a>
                                            </li>
                                            <li id="nav-menu-item-2073"
                                                class="sub-menu-item  menu-item menu-item-type-post_type menu-item-object-post">
                                                <a href="https://ncmaz.chisnghiax.com/post-contain-ncmaz-gutenberg-blocks/"
                                                    class="menu-link sub-menu-link"><span>Has Gutenberg blocks</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="nav-menu-item-617"
                                        class="main-menu-item  menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                        <a href="#" class="menu-link main-menu-link"><span>Pages</span>
                                            <div class="icon-after-menu block flex-grow py-2.5">
                                                <div class="flex justify-end flex-grow"><svg xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor"
                                                    class="ml-2 h-4 w-4 text-neutral-500" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"></path>
                                                </svg></div>
                                            </div>
                                        </a>
                                        <ul class="sub-menu ">
                                            <li id="nav-menu-item-845"
                                                class="sub-menu-item  menu-item menu-item-type-taxonomy menu-item-object-category">
                                                <a href="https://ncmaz.chisnghiax.com/category/videos/"
                                                    class="menu-link sub-menu-link"><span>Archive Page</span></a>
                                            </li>
                                            <li id="nav-menu-item-846"
                                                class="sub-menu-item  menu-item menu-item-type-custom menu-item-object-custom">
                                                <a href="https://ncmaz.chisnghiax.com/author/jaren-nader/"
                                                    class="menu-link sub-menu-link"><span>Author Page</span></a>
                                            </li>
                                            <li id="nav-menu-item-624"
                                                class="sub-menu-item  menu-item menu-item-type-custom menu-item-object-custom">
                                                <a href="https://ncmaz.chisnghiax.com/?s=Me"
                                                    class="menu-link sub-menu-link"><span>Search page</span></a>
                                            </li>
                                            <li id="nav-menu-item-3062"
                                                class="sub-menu-item  font-semibold menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                                <a href="https://ncmaz.chisnghiax.com/shop/"
                                                    class="menu-link sub-menu-link"><span>Shop</span>
                                                    <div class="icon-after-menu block flex-grow py-2.5">
                                                        <div class="flex justify-end flex-grow"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                            fill="currentColor" class="ml-2 h-4 w-4 text-neutral-500"
                                                            aria-hidden="true">
                                                            <path fill-rule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clip-rule="evenodd"></path>
                                                        </svg></div>
                                                    </div>
                                                </a>
                                                <ul class="sub-menu sub-sub-menu">
                                                    <li id="nav-menu-item-3705"
                                                        class="sub-menu-item sub-sub-menu-item menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="https://ncmaz.chisnghiax.com/cart/"
                                                            class="menu-link sub-menu-link"><span>Cart</span></a>
                                                    </li>
                                                    <li id="nav-menu-item-3706"
                                                        class="sub-menu-item sub-sub-menu-item menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="https://ncmaz.chisnghiax.com/checkout/"
                                                            class="menu-link sub-menu-link"><span>Checkout</span></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="nav-menu-item-618"
                                                class="sub-menu-item  menu-item menu-item-type-custom menu-item-object-custom">
                                                <a href="https://ncmaz.chisnghiax.com/p404"
                                                    class="menu-link sub-menu-link"><span>Page 404</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="nav-menu-item-3704"
                                        class="main-menu-item  font-semibold underline menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                        <a href="https://ncmaz.chisnghiax.com/ncmaz-submission-post-editor/"
                                            class="menu-link main-menu-link"><span>Create post</span>
                                            <div class="icon-after-menu block flex-grow py-2.5">
                                                <div class="flex justify-end flex-grow"><svg xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor"
                                                    class="ml-2 h-4 w-4 text-neutral-500" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"></path>
                                                </svg></div>
                                            </div>
                                        </a>
                                        <ul class="sub-menu ">
                                            <li id="nav-menu-item-3708"
                                                class="sub-menu-item  menu-item menu-item-type-post_type menu-item-object-page">
                                                <a href="https://ncmaz.chisnghiax.com/ncmaz-submission-post-editor/"
                                                    class="menu-link sub-menu-link"><span>Create Post</span></a>
                                            </li>
                                            <li id="nav-menu-item-2074"
                                                class="sub-menu-item  font-normal menu-item menu-item-type-post_type menu-item-object-page">
                                                <a href="https://ncmaz.chisnghiax.com/ncmaz-account/"
                                                    class="menu-link sub-menu-link"><span>Edit accout</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex items-center justify-between py-6 px-5 space-x-4"> <a
                                href="https://themeforest.net/item/ncmaz-blog-magazine-wordpress-theme/34122841"
                                target="_blank" rel="noopener noreferrer"> <span
                                    class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                                    Get this theme </span> </a>
                                <div class="block">
                                    <div data-is-react-component="SwitchDarkMode"
                                        data-component-props="{&quot;className&quot;:&quot;w-12 h-12 bg-neutral-100 dark:bg-neutral-800&quot;}">
                                        <button
                                            class="text-2xl md:text-3xl rounded-full text-neutral-700 dark:text-neutral-300 sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center w-12 h-12 bg-neutral-100 dark:bg-neutral-800"><span
                                                class="sr-only">Enable dark mode</span><svg xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                    aria-hidden="true" data-slot="icon" class="w-6 h-6 sm:w-7 sm:h-7">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z">
                                                </path>
                                            </svg></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fixed inset-0 bg-neutral-900 bg-opacity-50" id="dialog-overlay-site-navigation-mobile"
                        aria-hidden="true"></div>
                </div>
            </div>
            <div class="fixed hidden inset-0 z-max overflow-y-auto" data-ncmaz-modal-name="ncmaz-modal-form-sign-in">
                <div class="flex items-center justify-center sm:block min-h-screen px-4 text-center">
                    <div class="fixed inset-0 bg-neutral-900/50 dark:bg-neutral-900/70"
                        data-ncmaz-close-modal="ncmaz-modal-form-sign-in"></div> <span
                            class="inline-block h-screen align-middle" aria-hidden="true"> ​ </span>
                    <div
                        class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <div class="bg-white rounded-2xl text-xs md:text-base text-neutral-700">
                            <div class="flex items-center justify-between space-x-3 overflow-hidden">
                                <div>
                                    <h4 class="truncate text-xl font-semibold"> Sign in</h4> <span
                                        class="text-neutral-500 block mt-2 text-sm"> Login with demo account: guest / guest
                                    </span>
                                </div> <button
                                    class="flex p-2 rounded-full hover:bg-neutral-100  focus:outline-none bg-white bg-opacity-10 signin-close-btn"
                                    type="button" data-ncmaz-close-modal="ncmaz-modal-form-sign-in"> <span class="sr-only">
                                        Dissmis </span> <svg class="h-6 w-6 text-neutral-900" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"></path>
                                    </svg> </button>
                            </div>
                            <div class="border-t border-neutral-200 pb-2 mt-6"></div>
                            <div class="mt-6 p-0 space-y-6">
                                <form class="space-y-6 text-sm" onSubmit={login}>
                                    <div class="ncmaz-input relative">
                                        <div class="absolute left-1 top-1/2 transform -translate-y-1/2">
                                            <div class="text-[1.375rem] text-neutral-700 px-4 leading-none"><i
                                                class="las la-user"></i></div>
                                        </div>

                                        <input required=""
                                            onChange={(e) => setData('login_email', e.target.value)}
                                            class="px-5 h-14 w-full border-2 !border-neutral-200/80 rounded-full placeholder-neutral-500 !bg-transparent text-sm pl-14 focus:border-primary-500 focus:ring-0 font-medium"
                                            type="text" aria-label="login_email" placeholder="Email" />
                                    </div>
                                    <InputError message={errors.login_email} />
                                    <div class="ncmaz-input relative">
                                        <div class="absolute left-1 top-1/2 transform -translate-y-1/2">
                                            <div class="text-[1.375rem] text-neutral-700 px-4 leading-none">
                                                <i class="las la-lock"></i>
                                            </div>
                                        </div>
                                        <input required="" name="pwd" class="px-5 h-14 w-full border-2 !border-neutral-200/80 rounded-full placeholder-neutral-500
 !bg-transparent text-sm pl-14 focus:border-primary-500 focus:ring-0 font-medium" type="password" aria-label="login_password"
                                            placeholder="Password" onChange={(e) => setData('login_password', e.target.value)}
                                        />
                                    </div>
                                    <InputError message={errors.login_password} />
                                    <div class="flex items-center justify-between space-x-2 text-sm"> <label
                                        class="flex items-center space-x-2 md:space-x-3">
                                        <input
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                            class="form-tick appearance-none h-5 md:h-6 w-5 md:w-6 border-2 border-neutral-400 rounded-md checked:bg-quateary checked:border-quateary focus:outline-none focus:ring-quateary text-quateary"
                                            type="checkbox" /> <span class="text-neutral-700">Remember</span>
                                    </label> <button
                                        class="hover:text-neutral-900 hover:underline focus:outline-none text-sm"
                                        type="button" data-ncmaz-close-modal="ncmaz-modal-form-sign-in"
                                        data-ncmaz-open-modal="ncmaz-modal-form-forgot-password"> Forgot password? </button>
                                    </div>
                                    <script src="https://www.google.com/recaptcha/api.js" async="" defer=""></script>
                                    <input type="hidden" name="redirect_to"
                                        value="https://ncmaz.chisnghiax.com" />
                                    <div>
                                        <div class="grecaptcha-badge" data-style="bottomright"
                                            style={{ width: "256px", height: "60px", display: "block", transition: "right 0.3s ease 0s", position: "fixed", bottom: "14px", right: "-186px", boxShadow: "gray 0px 0px 5px", borderRadius: "2px", overflow: "hidden" }}>
                                            <div class="grecaptcha-logo"><iframe title="reCAPTCHA" width="256" height="60"
                                                role="presentation" name="a-dr6fzacu4wv5" frameborder="0" scrolling="no"
                                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lez9eIiAAAAAJcy0994lctulQ3OKYYloVj2gO5D&amp;co=aHR0cHM6Ly9uY21hei5jaGlzbmdoaWF4LmNvbTo0NDM.&amp;hl=en&amp;v=DH3nyJMamEclyfe-nztbfV8S&amp;size=invisible&amp;sa=submit&amp;cb=eet7qg7rlpb3"></iframe>
                                            </div>
                                            <div class="grecaptcha-error"></div><textarea id="g-recaptcha-response"
                                                name="g-recaptcha-response" class="g-recaptcha-response"
                                                style={{ width: "250px", height: "40px", border: "1px solid rgb(193, 193, 193)", margin: "10px 25px", padding: "0px", resize: "none", display: "none" }}></textarea>
                                        </div>
                                    </div><button type="submit" name="wp-submit"
                                        class="ncmaz-button g-recaptcha rounded-full h-14 w-full text-sm xl:text-base inline-flex items-center justify-center text-center py-2 px-4 md:px-6 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 font-medium"
                                        disabled={processing}> Sign in </button>
                                </form>
                                <div class="space-y-5 text-sm">
                                    <div class="text-center"> <span> Or sign in with social </span></div>
                                    <div>
                                        <div class="flex items-center flex-wrap space-x-3 justify-center"> <a
                                            href="https://ncmaz.chisnghiax.com/wp-login.php?loginSocial=facebook"
                                            data-plugin="nsl" data-action="connect" data-redirect="current"
                                            data-provider="google" data-popupwidth="600" data-popupheight="600"
                                            class="flex items-center justify-center text-xl lg:text-h4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full lg:w-20 w-12 lg:h-12 h-8 border-2 text-[#4267b3] border-[#4267b3]">
                                            <i class="lab la-facebook-f"></i> </a> <a
                                                href="https://ncmaz.chisnghiax.com/wp-login.php?loginSocial=twitter"
                                                data-plugin="nsl" data-action="connect" data-redirect="current"
                                                data-provider="twitter" data-popupwidth="600" data-popupheight="600"
                                                class="flex items-center justify-center text-xl lg:text-h4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full lg:w-20 w-12 lg:h-12 h-8 border-2 text-[#1d9bf0] border-[#1d9bf0]">
                                                <i class="lab la-twitter"></i> </a> <a
                                                    href="https://ncmaz.chisnghiax.com/wp-login.php?loginSocial=google"
                                                    data-plugin="nsl" data-action="connect" data-redirect="current"
                                                    data-provider="google" data-popupwidth="600" data-popupheight="600"
                                                    class="flex items-center justify-center text-xl lg:text-h4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full lg:w-20 w-12 lg:h-12 h-8 border-2 text-[#df2e1c] border-[#df2e1c]">
                                                <i class="lab la-google-plus"></i> </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fixed hidden inset-0 z-max overflow-y-auto" data-ncmaz-modal-name="ncmaz-modal-form-sign-up">
                <div class="flex items-center justify-center sm:block min-h-screen px-4 text-center">
                    <div class="fixed inset-0 bg-neutral-900/50 dark:bg-neutral-900/70"
                        data-ncmaz-close-modal="ncmaz-modal-form-sign-up"></div> <span
                            class="inline-block h-screen align-middle" aria-hidden="true"> ​ </span>
                    <div
                        class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <div class="bg-white space-y-6 rounded-2xl  text-xs md:text-base text-neutral-700">
                            <div class="flex items-center justify-between space-x-3 overflow-hidden">
                                <h4 class="truncate text-xl font-semibold"> Sign up</h4> <button
                                    class="flex p-2 rounded-full hover:bg-neutral-100 focus:outline-none signup-close-btn bg-white bg-opacity-10"
                                    type="button" data-ncmaz-close-modal="ncmaz-modal-form-sign-up"> <span class="sr-only">
                                        Dissmis </span> <svg class="h-6 w-6 text-neutral-900" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"></path>
                                    </svg> </button>
                            </div>
                            <div class="border-t border-neutral-200 pb-2"></div>
                            <div class="p-0 space-y-6">
                                <form class="space-y-6 text-sm" onSubmit={submit}>
                                    <div class="ncmaz-input relative">
                                        <div class="absolute left-1 top-1/2 transform -translate-y-1/2">
                                            <div class="text-[1.375rem] text-neutral-700 px-4 leading-none">
                                                <i class="las la-user"></i>
                                            </div>
                                        </div>

                                        <input required=""
                                            onChange={(e) => setData('name', e.target.value)}
                                            value={data.name}
                                            class="px-5 h-14 w-full border-2 !border-neutral-200/80 rounded-full placeholder-neutral-500 !bg-transparent text-sm pl-14 focus:border-primary-500 focus:ring-0 font-medium"
                                            type="text" aria-label="Username or email" placeholder="Name" />
                                    </div>
                                    <InputError message={errors.name} />

                                    <div class="ncmaz-input relative">
                                        <div class="absolute left-1 top-1/2 transform -translate-y-1/2">
                                            <div class="text-[1.375rem] text-neutral-700 px-4 leading-none">
                                                <i class="las la-envelope"></i>
                                            </div>
                                        </div>

                                        <input required=""
                                            onChange={(e) => setData('email', e.target.value)}
                                            value={data.email}
                                            class="px-5 h-14 w-full border-2 !border-neutral-200/80 rounded-full placeholder-neutral-500 !bg-transparent text-sm pl-14 focus:border-primary-500 focus:ring-0 font-medium"
                                            type="email" aria-label="email" placeholder="Email" />
                                    </div>
                                    <InputError message={errors.email} />

                                    <div class="ncmaz-input relative">
                                        <div class="absolute left-1 top-1/2 transform -translate-y-1/2">
                                            <div class="text-[1.375rem] text-neutral-700 px-4 leading-none">
                                                <i class="las la-lock"></i>
                                            </div>
                                        </div>

                                        <input required=""
                                            onChange={(e) => setData('password', e.target.value)}
                                            value={data.password}
                                            class="px-5 h-14 w-full border-2 !border-neutral-200/80 rounded-full placeholder-neutral-500 !bg-transparent text-sm pl-14 focus:border-primary-500 focus:ring-0 font-medium"
                                            type="password" aria-label="email" placeholder="Password" />
                                    </div>
                                    <InputError message={errors.password} />

                                    <div class="ncmaz-input relative">
                                        <div class="absolute left-1 top-1/2 transform -translate-y-1/2">
                                            <div class="text-[1.375rem] text-neutral-700 px-4 leading-none">
                                                <i class="las la-lock"></i>
                                            </div>
                                        </div>

                                        <input required=""
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            value={data.password_confirmation}
                                            class="px-5 h-14 w-full border-2 !border-neutral-200/80 rounded-full placeholder-neutral-500 !bg-transparent text-sm pl-14 focus:border-primary-500 focus:ring-0 font-medium"
                                            type="password" aria-label="email" placeholder="Confirm Password" />
                                    </div>
                                    <InputError message={errors.password_confirmation} />

                                    <span class="block text-center text-sm text-neutral-500">Registration confirmation
                                        will be emailed to you.</span> <input type="hidden" name="redirect_to" value="" />
                                    <div>
                                        <div class="grecaptcha-badge" data-style="none"
                                            style={{ width: "256px", height: "60px", position: "fixed", visibility: "hidden" }}>
                                            <div class="grecaptcha-logo"><iframe title="reCAPTCHA" width="256" height="60"
                                                role="presentation" name="a-kxjszxwdttqt" frameborder="0" scrolling="no"
                                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lez9eIiAAAAAJcy0994lctulQ3OKYYloVj2gO5D&amp;co=aHR0cHM6Ly9uY21hei5jaGlzbmdoaWF4LmNvbTo0NDM.&amp;hl=en&amp;v=DH3nyJMamEclyfe-nztbfV8S&amp;size=invisible&amp;sa=submit&amp;cb=6by7oipjffw6"></iframe>
                                            </div>
                                            <div class="grecaptcha-error"></div><textarea id="g-recaptcha-response-1"
                                                name="g-recaptcha-response" class="g-recaptcha-response"
                                                style={{ width: "250px", height: "40px", border: "1px solid rgb(193, 193, 193)", margin: "10px 25px", padding: "0px", resize: "none", display: "none" }}></textarea>
                                        </div>
                                    </div><button type="submit" name="wp-submit"
                                        class="ncmaz-button g-recaptcha rounded-full h-14 w-full text-sm xl:text-base inline-flex items-center justify-center text-center py-2 px-4 md:px-6 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 font-medium"
                                        data-sitekey="6Lez9eIiAAAAAJcy0994lctulQ3OKYYloVj2gO5D"
                                        data-callback="ncmaz_onSubmitSignUpForm" data-action="submit"> Sign up </button>
                                </form>
                                <div class="space-y-5 text-sm">
                                    <div class="text-center"> <span> Or sign in with social </span></div>
                                    <div>
                                        <div class="flex items-center flex-wrap space-x-3 justify-center"> <a
                                            href="https://ncmaz.chisnghiax.com/wp-login.php?loginSocial=facebook"
                                            data-plugin="nsl" data-action="connect" data-redirect="current"
                                            data-provider="google" data-popupwidth="600" data-popupheight="600"
                                            class="flex items-center justify-center text-xl lg:text-h4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full lg:w-20 w-12 lg:h-12 h-8 border-2 text-[#4267b3] border-[#4267b3]">
                                            <i class="lab la-facebook-f"></i> </a> <a
                                                href="https://ncmaz.chisnghiax.com/wp-login.php?loginSocial=twitter"
                                                data-plugin="nsl" data-action="connect" data-redirect="current"
                                                data-provider="twitter" data-popupwidth="600" data-popupheight="600"
                                                class="flex items-center justify-center text-xl lg:text-h4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full lg:w-20 w-12 lg:h-12 h-8 border-2 text-[#1d9bf0] border-[#1d9bf0]">
                                                <i class="lab la-twitter"></i> </a> <a
                                                    href="https://ncmaz.chisnghiax.com/wp-login.php?loginSocial=google"
                                                    data-plugin="nsl" data-action="connect" data-redirect="current"
                                                    data-provider="google" data-popupwidth="600" data-popupheight="600"
                                                    class="flex items-center justify-center text-xl lg:text-h4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full lg:w-20 w-12 lg:h-12 h-8 border-2 text-[#df2e1c] border-[#df2e1c]">
                                                <i class="lab la-google-plus"></i> </a></div>
                                    </div>
                                </div>
                                <div class="text-center text-neutral-800 text-sm"> <span>I'm already a member. </span> <button
                                    class="underline text-primary-6000 focus:outline-none signin-modal-btn" type="button"
                                    data-ncmaz-close-modal="ncmaz-modal-form-sign-up"
                                    data-ncmaz-open-modal="ncmaz-modal-form-sign-in"> Sign in </button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fixed hidden inset-0 z-10 overflow-y-auto" data-ncmaz-modal-name="ncmaz-modal-form-forgot-password">
                <div class="flex items-center justify-center sm:block min-h-screen px-4 text-center">
                    <div class="fixed inset-0 bg-neutral-900/50 dark:bg-neutral-900/70"
                        data-ncmaz-close-modal="ncmaz-modal-form-forgot-password"></div> <span
                            class="inline-block h-screen align-middle" aria-hidden="true"> ​ </span>
                    <div
                        class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <div class="bg-white space-y-6 rounded-2xl text-xs md:text-base text-neutral-700">
                            <div class="flex items-center justify-between space-x-3 overflow-hidden">
                                <h4 class="truncate text-xl font-semibold"> Find Your Account</h4> <button
                                    class="flex p-2 rounded-full hover:bg-neutral-100 focus:outline-none bg-white bg-opacity-10"
                                    type="button" data-ncmaz-close-modal="ncmaz-modal-form-forgot-password"> <span
                                        class="sr-only"> Dissmis </span> <svg class="h-6 w-6 text-neutral-900" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true">
                                        <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"></path>
                                    </svg> </button>
                            </div>
                            <div class="border-t border-neutral-200 pb-2"></div>
                            <div class="p-0 space-y-6 text-sm">
                                <form id="ncmaz_forgotpasswordform_modal" name="lostpasswordform" class="space-y-6"
                                    method="POST" action="https://ncmaz.chisnghiax.com/my-account/lost-password/">
                                    <div class="ncmaz-input relative">
                                        <div class="absolute left-1 top-1/2 transform -translate-y-1/2">
                                            <div class="text-[1.375rem] text-neutral-700 px-4 leading-none"><i
                                                class="las la-user"></i></div>
                                        </div> <input required="" name="user_login"
                                            class="px-5 h-14 w-full border-2 !border-neutral-200/80 rounded-full placeholder-neutral-500 !bg-transparent text-sm pl-14 focus:border-primary focus:ring-0 font-medium"
                                            type="text" aria-label="Username or email" placeholder="Username or email" />
                                    </div> <input type="hidden" name="redirect_to" value="" />
                                    <div>
                                        <div class="grecaptcha-badge" data-style="none"
                                            style={{ width: "256px", height: "60px", position: "fixed", visibility: "hidden" }}>
                                            <div class="grecaptcha-logo"><iframe title="reCAPTCHA" width="256" height="60"
                                                role="presentation" name="a-k11nua25dy" frameborder="0" scrolling="no"
                                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lez9eIiAAAAAJcy0994lctulQ3OKYYloVj2gO5D&amp;co=aHR0cHM6Ly9uY21hei5jaGlzbmdoaWF4LmNvbTo0NDM.&amp;hl=en&amp;v=DH3nyJMamEclyfe-nztbfV8S&amp;size=invisible&amp;sa=submit&amp;cb=r5ppib5awfrv"></iframe>
                                            </div>
                                            <div class="grecaptcha-error"></div><textarea id="g-recaptcha-response-2"
                                                name="g-recaptcha-response" class="g-recaptcha-response"
                                                style={{ width: "250px", height: "40px", border: "1px solid rgb(193, 193, 193)", margin: "10px 25px", padding: "0px", resize: "none", display: "none" }}></textarea>
                                        </div><iframe style={{ display: "none" }}></iframe>
                                    </div><button type="submit" name="wp-submit"
                                        class="ncmaz-button g-recaptcha rounded-full h-14 w-full text-sm xl:text-base inline-flex items-center justify-center text-center py-2 px-4 md:px-6 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 font-medium"
                                        data-sitekey="6Lez9eIiAAAAAJcy0994lctulQ3OKYYloVj2gO5D"
                                        data-callback="ncmaz_onSubmitForgotPasswordForm" data-action="submit"> Get new password
                                    </button>
                                </form>
                                <div class="text-center text-sm"> <button
                                    class="hover:underline text-primary-6000 focus:outline-none" type="button"
                                    data-ncmaz-close-modal="ncmaz-modal-form-forgot-password"
                                    data-ncmaz-open-modal="ncmaz-modal-form-sign-in"> Sign in </button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

