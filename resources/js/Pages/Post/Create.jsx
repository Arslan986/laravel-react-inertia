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


export default function Create({ auth }) {


    return (
        <>
            <Layout user={auth}>
                <main class="ncmaz-myNcmazEditorSubmissionPostPage relative">
                    <div class="relative">
                        <div class="nc-HeadBackgroundCommon hidden lg:block absolute h-[400px] max-h-full top-0 left-0 right-0 w-full bg-primary-100 dark:bg-neutral-800 bg-opacity-25 dark:bg-opacity-40"
                            data-nc-id="HeadBackgroundCommon"></div>
                        <div class="container relative pt-10 pb-16 lg:pt-14 lg:pb-24">
                            <div class="mx-auto">
                                <div class="ncmaz-mySubmissionPostPage__content my-5"></div>
                                <div data-is-react-component="TiptapEditorPostSubmission">
                                    <div class="nc-CreateNewPostEditor ">
                                        <div
                                            class=" bg-white dark:bg-neutral-900 lg:shadow-xl rounded-2xl dark:ring dark:ring-neutral-50/10">
                                            <div class="pb-10 lg:py-10 w-full max-w-screen-md mx-auto ">
                                                <div class="flex flex-col w-full"><span
                                                    class="nc-Label block !text-base text-neutral-800 font-medium dark:text-neutral-300"
                                                    data-nc-id="Label">Add a cover image</span>
                                                    <div class="flex-1"><label for=":r1:_fileUpload"
                                                        class="block group cursor-pointer">
                                                        <div
                                                            class="relative mt-1 flex justify-center border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-xl px-6 pt-5 pb-6 ">
                                                            <div class="flex-1 space-y-1 text-center"><svg
                                                                class="mx-auto h-12 w-12 text-neutral-400"
                                                                stroke="currentColor" fill="none" viewBox="0 0 48 48"
                                                                aria-hidden="true">
                                                                <path
                                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                    stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round"></path>
                                                            </svg>
                                                                <div
                                                                    class="flex justify-center text-sm text-neutral-6000 dark:text-neutral-300">
                                                                    <label
                                                                        class="relative flex-shrink-0 cursor-pointer  rounded-md font-medium text-primary-6000 dark:text-primary-400 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"><span>Upload
                                                                            a file</span><input id=":r1:_fileUpload"
                                                                                name="fileUpload" type="file"
                                                                                class="sr-only" /></label></div>
                                                                <p class="text-xs text-neutral-500 dark:text-neutral-400">PNG,
                                                                    JPG, GIF, WEBP, SVG ...</p>
                                                            </div>
                                                        </div>
                                                    </label></div>
                                                </div>
                                                <div class="nc-CategoriesInput mt-8 inline-flex">
                                                    <div class="nc-NcModal"><button
                                                        class="nc-Button relative h-auto inline-flex items-center rounded-full transition-colors text-sm px-4 py-2 sm:py-2.5 hover:border-neutral-300 w-full justify-between text-neutral-700 border border-neutral-200 dark:text-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                        title=""> Choose categories <svg xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                                            data-slot="icon" class="w-4 h-4 ml-2 -mr-1 opacity-70">
                                                            <path fill-rule="evenodd"
                                                                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                                                clip-rule="evenodd"></path>
                                                        </svg></button></div>
                                                </div>
                                                <div class="focus:outline-none mt-6">
                                                    <div contenteditable="true" translate="no"
                                                        class="tiptap ProseMirror focus:outline-none max-w-screen-md mx-auto text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100"
                                                        tabindex="0">
                                                        <p data-placeholder="New post title here…" class="is-empty is-editor-empty">
                                                            <br class="ProseMirror-trailingBreak" /></p>
                                                    </div>
                                                </div>
                                                <div class="relative w-full mt-5 text-sm">
                                                    <ul class="flex flex-wrap ">
                                                        <li><input
                                                            class="px-2 py-1.5 my-0.5 h-full border-none focus:outline-none focus:ring-0 !bg-transparent shadow-none"
                                                            type="text" placeholder="Add tags (0/5)..." /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="nc-TiptapEditor ">
                                                <div class="editor ">
                                                    <div class="editor__header sticky bg-neutral-100 dark:bg-neutral-800 px-2 lg:px-0 py-5 overflow-hidden lg:overflow-visible flex justify-center z-10"
                                                        style={{top: "0px"}}>
                                                        <div class="  w-full max-w-screen-md">
                                                            <div
                                                                class="flex items-center overflow-x-auto lg:overflow-x-visible -mx-2.5">
                                                                <button class="menu-item flex-shrink-0 mr-2 " title="Bold">
                                                                    <div class="menu-item-svg"><svg
                                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                        class="w-5 h-5 sm:w-6 sm:h-6">
                                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                                        <path
                                                                            d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z">
                                                                        </path>
                                                                    </svg></div>
                                                                </button><button class="menu-item flex-shrink-0 mr-2 "
                                                                    title="Italic">
                                                                    <div class="menu-item-svg"><svg
                                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                        class="w-5 h-5 sm:w-6 sm:h-6">
                                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                                        <path
                                                                            d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z">
                                                                        </path>
                                                                    </svg></div>
                                                                </button><button class="menu-item flex-shrink-0 mr-2 " title="Link">
                                                                    <div class="menu-item-svg"><svg
                                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                        class="w-5 h-5 sm:w-6 sm:h-6">
                                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                                        <path
                                                                            d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z">
                                                                        </path>
                                                                    </svg></div>
                                                                </button>
                                                                <div class="relative inline-block text-left"
                                                                    data-headlessui-state="">
                                                                    <div id="headlessui-menu-button-:r9:" aria-haspopup="menu"
                                                                        aria-expanded="false" data-headlessui-state=""><button
                                                                            class="menu-item flex-shrink-0 mr-2 " title="Heading">
                                                                            <div class="menu-item-svg"><svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"
                                                                                class="w-5 h-5 sm:w-6 sm:h-6">
                                                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                                                <path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z">
                                                                                </path>
                                                                            </svg></div>
                                                                        </button></div>
                                                                </div><button class="menu-item flex-shrink-0 mr-2 "
                                                                    title="Blockquote">
                                                                    <div class="menu-item-svg"><svg
                                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                        class="w-5 h-5 sm:w-6 sm:h-6">
                                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                                        <path
                                                                            d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z">
                                                                        </path>
                                                                    </svg></div>
                                                                </button><button class="menu-item flex-shrink-0 mr-2 "
                                                                    title="Bullet List">
                                                                    <div class="menu-item-svg"><svg
                                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                        class="w-5 h-5 sm:w-6 sm:h-6">
                                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                                        <path
                                                                            d="M8 4h13v2H8V4zm-5-.5h3v3H3v-3zm0 7h3v3H3v-3zm0 7h3v3H3v-3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z">
                                                                        </path>
                                                                    </svg></div>
                                                                </button><button class="menu-item flex-shrink-0 mr-2 "
                                                                    title="Ordered List">
                                                                    <div class="menu-item-svg"><svg
                                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                        class="w-5 h-5 sm:w-6 sm:h-6">
                                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                                        <path
                                                                            d="M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5zM8 11h13v2H8v-2zm0 7h13v2H8v-2z">
                                                                        </path>
                                                                    </svg></div>
                                                                </button><button class="menu-item flex-shrink-0 mr-2 " title="Code">
                                                                    <div class="menu-item-svg"><svg
                                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                        class="w-5 h-5 sm:w-6 sm:h-6">
                                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                                        <path
                                                                            d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z">
                                                                        </path>
                                                                    </svg></div>
                                                                </button><button class="menu-item flex-shrink-0 mr-2 "
                                                                    title="Code Block">
                                                                    <div class="menu-item-svg"><svg
                                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                        class="w-5 h-5 sm:w-6 sm:h-6">
                                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                                        <path
                                                                            d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm16 7l-3.536 3.536-1.414-1.415L17.172 12 15.05 9.879l1.414-1.415L20 12zM6.828 12l2.122 2.121-1.414 1.415L4 12l3.536-3.536L8.95 9.88 6.828 12zm4.416 5H9.116l3.64-10h2.128l-3.64 10z">
                                                                        </path>
                                                                    </svg></div>
                                                                </button><button class="menu-item flex-shrink-0 mr-2 "
                                                                    title="Image">
                                                                    <div class="menu-item-svg"><svg
                                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                        class="w-5 h-5 sm:w-6 sm:h-6">
                                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                                        <path
                                                                            d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z">
                                                                        </path>
                                                                    </svg></div>
                                                                </button>
                                                                <div class="nc-NcModal"></div>
                                                                <div class="nc-NcModal"></div>
                                                                <div class="relative hidden lg:inline-block text-left ml-auto"
                                                                    data-headlessui-state=""><button class="ml-auto menu-item"
                                                                        title="more" id="headlessui-menu-button-:ra:" type="button"
                                                                        aria-haspopup="menu" aria-expanded="false"
                                                                        data-headlessui-state="">
                                                                        <div class="menu-item-svg"><svg
                                                                            class="crayons-icon c-btn__icon" aria-hidden="true"
                                                                            focusable="false" width="24" height="24"
                                                                            viewBox="0 0 24 24"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                                d="M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm2-5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z">
                                                                            </path>
                                                                        </svg></div>
                                                                    </button></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="editor__content focus:outline-none ">
                                                        <div contenteditable="true" translate="no"
                                                            class="tiptap ProseMirror focus:outline-none prose prose-neutral lg:prose-lg dark:prose-invert max-w-screen-md mx-auto min-h-[500px]"
                                                            tabindex="0">
                                                            <p data-placeholder="Write your post content here…"
                                                                class="is-empty is-editor-empty"><br
                                                                    class="ProseMirror-trailingBreak" /></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="w-full border-b my-2 border-neutral-300 dark:border-neutral-700"></div>
                                            <div class="w-full max-w-screen-md mx-auto flex space-x-2 py-8"><button
                                                class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                title="">Publish</button><button
                                                    class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 ml-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                    title="">Save draft</button>
                                                <div class="relative ml-auto lg:ml-2.5" data-headlessui-state="">
                                                    <div aria-expanded="false" data-headlessui-state=""
                                                        aria-controls="headlessui-popover-panel-:r4:"
                                                        id="headlessui-popover-button-:r2:"><button
                                                            class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-base font-medium p-2 w-12   ttnc-ButtonSecondary border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                            title="Post options"><svg class="w-6 h-6" viewBox="0 0 24 24"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M12.0002 22.6298C11.3302 22.6298 10.6502 22.4798 10.1202 22.1698L4.62023 18.9998C2.38023 17.4898 2.24023 17.2598 2.24023 14.8898V9.1098C2.24023 6.7398 2.37023 6.5098 4.57023 5.0198L10.1102 1.8198C11.1602 1.2098 12.8102 1.2098 13.8602 1.8198L19.3802 4.9998C21.6202 6.5098 21.7602 6.7398 21.7602 9.1098V14.8798C21.7602 17.2498 21.6302 17.4798 19.4302 18.9698L13.8902 22.1698C13.3502 22.4798 12.6702 22.6298 12.0002 22.6298ZM12.0002 2.8698C11.5802 2.8698 11.1702 2.9498 10.8802 3.1198L5.38023 6.2998C3.75023 7.3998 3.75023 7.3998 3.75023 9.1098V14.8798C3.75023 16.5898 3.75023 16.5898 5.42023 17.7198L10.8802 20.8698C11.4702 21.2098 12.5402 21.2098 13.1302 20.8698L18.6302 17.6898C20.2502 16.5898 20.2502 16.5898 20.2502 14.8798V9.1098C20.2502 7.3998 20.2502 7.3998 18.5802 6.2698L13.1202 3.1198C12.8302 2.9498 12.4202 2.8698 12.0002 2.8698Z"
                                                                    fill="currentColor"></path>
                                                                <path
                                                                    d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z"
                                                                    fill="currentColor"></path>
                                                            </svg></button></div>
                                                    <div class="absolute z-10 w-screen max-w-xs sm:max-w-sm md:max-w-md px-4 mb-4 left-full lg:left-1/2 -translate-x-full lg:-translate-x-1/2 bottom-full sm:px-0 lg:max-w-2xl"
                                                        hidden="" id="headlessui-popover-panel-:r4:" tabindex="-1"
                                                        data-headlessui-state="" style={{display: "none"}}>
                                                        <div
                                                            class="rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                                                            <div class="relative flex flex-col px-5 py-6 space-y-5">
                                                                <h3 class="text-xl font-semibold my-0">Post options</h3>
                                                                <div
                                                                    class="w-full border-b my-3 border-neutral-300 dark:border-neutral-700">
                                                                </div>
                                                                <div><span
                                                                    class="nc-Label block text-neutral-800 font-medium text-sm dark:text-neutral-300"
                                                                    data-nc-id="Label">Write an excerpt
                                                                    (optional)</span><textarea
                                                                        class="block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 mt-1"
                                                                        rows="4"></textarea></div>
                                                                <div><span
                                                                    class="nc-Label block text-neutral-800 font-medium text-sm dark:text-neutral-300"
                                                                    data-nc-id="Label">Post format</span>
                                                                    <div class="relative z-10 mt-1"><button
                                                                        class="focus:outline-none relative w-full cursor-default rounded-full py-2 pl-3 pr-10 text-left border border-neutral-100 dark:border-neutral-700"
                                                                        id="headlessui-listbox-button-:r7:" type="button"
                                                                        aria-haspopup="listbox" aria-expanded="false"
                                                                        data-headlessui-state=""><span
                                                                            class="block truncate capitalize">Standard</span><span
                                                                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    viewBox="0 0 24 24" fill="currentColor"
                                                                                    aria-hidden="true" data-slot="icon"
                                                                                    class="h-5 w-5 text-gray-400">
                                                                                <path fill-rule="evenodd"
                                                                                    d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg></span></button></div>
                                                                </div>
                                                                <div class="flex justify-between items-center"><span
                                                                    class="nc-Label block text-neutral-800 font-medium text-sm dark:text-neutral-300"
                                                                    data-nc-id="Label">Allow comments</span><button
                                                                        class="bg-primary-700
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
                                                                        id="headlessui-switch-:r8:" role="switch" type="button"
                                                                        tabindex="0" aria-checked="true"
                                                                        data-headlessui-state="checked"><span class="sr-only">Allow
                                                                            comments</span><span aria-hidden="true"
                                                                                class="translate-x-9
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"></span></button>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="p-5 bg-neutral-50 rounded-b-2xl dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                                                                <button
                                                                    class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base px-4 py-2 sm:px-5  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                                    title="">Cancel</button><button
                                                                        class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-5  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                                        title="">Apply</button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{position: "fixed", top: "1px", left: "1px", width: "1px", height: "0px", padding: "0px", margin: "-1px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", borderWidth: "0px", display: "none"}}>
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
