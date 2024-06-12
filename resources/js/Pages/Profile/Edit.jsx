import Header from '@/Components/Frontend/Partials/Header';
import { Link, Head, useForm } from '@inertiajs/react';
import HeroSection from '@/Components/Frontend/Home/HeroSection';
import ExploreLatestArticles from '@/Components/Frontend/Home/ExploreLatestArticles';
import TheVideos from '@/Components/Frontend/Home/TheVideos';
import BecomeAuthor from '@/Components/Frontend/Partials/BecomeAuthor';
import TrendingArticles from '@/Components/Frontend/Home/TrendingArticles';
import Footer from '@/Components/Frontend/Partials/Footer';

import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import Layout from '../Layout/Layout';


export default function Index({ auth }) {


    return (
        <>
            <Layout user={auth}>
                <main className="ncmaz-myCustomPage pb-16 relative overflow-hidden">

                    <div class="relative">
                        <div class="container relative pt-10 pb-16 lg:pt-14 lg:pb-24">
                            <div class="mx-auto">
                                <div class="ncmaz-myNcmazEditorEditProfilePage__content my-5"></div>
                                <div class="nc-NcmazAccountPage">
                                    <div class="max-w-2xl">
                                        <h2 class="text-3xl sm:text-4xl font-semibold"> Account settings</h2> <span
                                            class="block mt-3 text-neutral-500 dark:text-neutral-400"> You can set preferred display
                                            name, create your profile URL and
                                            manage other personal settings. </span>
                                    </div>
                                    <div class="mt-10" data-is-react-component="NcmazAccountPage">
                                        <div class="nc-NcmazAccountPage__content ">
                                            <div class="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div>
                                            <div class="mt-10 flex flex-col md:flex-row">
                                                <div class="nc-NcmazAccountPage__content-left flex-shrink-0 md:w-1/4">
                                                    <div class="md:sticky md:top-32">
                                                        <ul class="space-y-4 md:space-y-5 md:pr-10">
                                                            <li><a class="capitalize  text-neutral-900 dark:text-neutral-100 font-semibold"
                                                                href="#general">general</a></li>
                                                            <li><a class="capitalize  text-neutral-500 dark:text-neutral-400"
                                                                href="#profile">profile</a></li>
                                                            <li><a class="capitalize  text-neutral-500 dark:text-neutral-400"
                                                                href="#password">password</a></li>
                                                            <li><a class="capitalize  text-neutral-500 dark:text-neutral-400"
                                                                href="#socials">socials</a></li>
                                                            <div
                                                                class="w-full border-b-2 border-neutral-100 dark:border-neutral-700">
                                                            </div>
                                                            <li class="warning"><a class="text-red-500"
                                                                href="https://ncmaz.chisnghiax.com/wp-login.php?action=logout&amp;amp;redirect_to=https%3A%2F%2Fncmaz.chisnghiax.com&amp;amp;_wpnonce=a36b49c320">Logout
                                                                Account</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div
                                                    class="nc-NcmazAccountPage__content-right flex-grow mt-10 md:mt-0 xl:pl-16 max-w-3xl ">
                                                    <form action="#"
                                                        class="NcmazAccountPage-GeneralForm space-y-5 sm:space-y-6 md:sm:space-y-7">
                                                        <div>
                                                            <h2 class="text-2xl font-semibold">General settings</h2><span
                                                                class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">Update
                                                                your username and manage your account</span>
                                                        </div>
                                                        <div class="w-24 border-b border-neutral-200 dark:border-neutral-700"></div>
                                                        <div><span
                                                            class="nc-Label block text-neutral-800 font-medium text-sm dark:text-neutral-300"
                                                            data-nc-id="Label">Display Name</span><input type="text"
                                                                class="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-full text-sm font-normal h-11 px-4 py-3 mt-1.5"
                                                                required="" value="Earthen Home" /></div>
                                                        <div><span
                                                            class="nc-Label block text-neutral-800 font-medium text-sm dark:text-neutral-300"
                                                            data-nc-id="Label">Email</span>
                                                            <div class="mt-1.5 flex"><span
                                                                class="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm"><i
                                                                    class="text-2xl las la-envelope"></i></span><input
                                                                    type="text"
                                                                    class="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-full text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                                                                    placeholder="example@email.com" required=""
                                                                    value="example@gmail.com" /></div>
                                                        </div>
                                                        <div class="inline-flex pt-2"><button
                                                            class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                            type="submit" title="">Update profile</button></div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}
