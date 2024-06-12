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
                    <div class="nc-PageArchiveAuthor__header w-full" data-is-react-component="HeaderPageArchiveAuthor"
                        data-component-props="{&quot;userData&quot;:{&quot;id&quot;:&quot;dXNlcjo4&quot;,&quot;avatar&quot;:{&quot;url&quot;:&quot;https:\/\/secure.gravatar.com\/avatar\/51ef5b87a60012438b26a546d09b8219?s=96&amp;d=mm&amp;r=g&quot;},&quot;name&quot;:&quot;Frederique&quot;,&quot;username&quot;:&quot;pcormier&quot;,&quot;userId&quot;:8,&quot;url&quot;:&quot;http:\/\/www.rohan.com\/&quot;,&quot;uri&quot;:&quot;\/author\/jaren-nader\/&quot;,&quot;description&quot;:&quot;Amet maxime est nostrum molestiae dolorem ipsum nisi. Placeat eos aut et animi error aut et. Error porro error velit voluptate aut. Eligendi qui eos explicabo soluta officia.&quot;,&quot;ncUserMeta&quot;:{&quot;color&quot;:null,&quot;ncBio&quot;:&quot;UX Designer&quot;,&quot;youtubeUrl&quot;:&quot;https:\/\/ncmaz.chisnghiax.com\/&quot;,&quot;facebookUrl&quot;:&quot;https:\/\/ncmaz.chisnghiax.com\/&quot;,&quot;mediumUrl&quot;:null,&quot;githubUrl&quot;:null,&quot;vimeoUrl&quot;:null,&quot;twitterUrl&quot;:&quot;https:\/\/ncmaz.chisnghiax.com\/&quot;,&quot;instagramUrl&quot;:&quot;https:\/\/ncmaz.chisnghiax.com\/&quot;,&quot;linkedinUrl&quot;:null,&quot;pinterestUrl&quot;:null,&quot;twitchUrl&quot;:null,&quot;websiteUrl&quot;:&quot;http:\/\/www.rohan.com\/&quot;,&quot;buymeacoffeUrl&quot;:&quot;https:\/\/www.buymeacoffee.com\/nghiaxchis&quot;,&quot;tiktokUrl&quot;:null,&quot;telegramUrl&quot;:null,&quot;discordUrl&quot;:null,&quot;whatsappUrl&quot;:null,&quot;backgroundImage&quot;:{&quot;id&quot;:&quot;cG9zdDo1Njc=&quot;,&quot;altText&quot;:&quot;&quot;,&quot;caption&quot;:null,&quot;databaseId&quot;:567,&quot;sizes&quot;:&quot;(max-width: 480px) 100vw, 480px&quot;,&quot;sourceUrl&quot;:&quot;https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/pexels-photo-3330118.jpeg&quot;,&quot;srcSet&quot;:&quot;https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/pexels-photo-3330118-480x500.jpeg 480w, https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/pexels-photo-3330118-982x1024.jpeg 982w, https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/pexels-photo-3330118-768x801.jpeg 768w, https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/pexels-photo-3330118-1473x1536.jpeg 1473w, https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/pexels-photo-3330118-1964x2048.jpeg 1964w, https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/pexels-photo-3330118-1320x1376.jpeg 1320w, https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/pexels-photo-3330118-288x300.jpeg 288w, https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/pexels-photo-3330118.jpeg 1841w&quot;},&quot;featuredImage&quot;:{&quot;id&quot;:&quot;cG9zdDoxMTU=&quot;,&quot;altText&quot;:&quot;woman in white crew neck shirt smiling&quot;,&quot;caption&quot;:null,&quot;databaseId&quot;:115,&quot;sizes&quot;:&quot;(max-width: 239px) 100vw, 239px&quot;,&quot;sourceUrl&quot;:&quot;https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/if9tk5uy-ki-1-e1633222611780.jpg&quot;,&quot;srcSet&quot;:&quot;https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/if9tk5uy-ki-1-239x300.jpg 239w, https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/if9tk5uy-ki-1-814x1024.jpg 814w, https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/if9tk5uy-ki-1-768x966.jpg 768w, https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/if9tk5uy-ki-1-e1633222611780.jpg 354w&quot;}}},&quot;isCurrentMyPage&quot;:false,&quot;clearFavoritesButton&quot;:&quot;<button class=\&quot;simplefavorites-clear\&quot; data-siteid=\&quot;1\&quot;>Clear Favorites<\/button>&quot;}">
                        <div class="relative aspect-w-16 aspect-h-9 sm:aspect-h-6 lg:aspect-h-5 xl:aspect-h-4 2xl:aspect-h-3">
                            <div class="nc-NcImage absolute inset-0 overflow-hidden z-0 mabeUrlOk" data-nc-id="NcImage"><img
                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-3330118.jpeg"
                                alt="nc-imgs" class="object-cover w-full h-full" loading="eager"
                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-3330118-480x500.jpeg 480w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-3330118-982x1024.jpeg 982w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-3330118-768x801.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-3330118-1473x1536.jpeg 1473w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-3330118-1964x2048.jpeg 1964w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-3330118-1320x1376.jpeg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-3330118-288x300.jpeg 288w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-3330118.jpeg 1841w"
                                sizes="(max-width: 1536px) 100vw, 1536px" /></div>
                        </div>
                        <div class="relative px-1 sm:container -mt-20 lg:-mt-32">
                            <div class="relative bg-white dark:bg-neutral-800 dark:border dark:border-neutral-700 p-4 sm:p-5 lg:p-8 rounded-3xl lg:rounded-[32px] shadow-xl
          flex flex-col sm:flex-row sm:items-center">
                                <div class="flex-shrink-0 ">
                                    <div
                                        class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold  rounded-3xl w-28 h-28 sm:w-32 sm:h-32 lg:w-44 lg:h-44 text-3xl xl:text-5xl ring-4 ring-white dark:ring-0">
                                        <img class="absolute inset-0 w-full h-full object-cover"
                                            src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg"
                                            srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-239x300.jpg 239w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-814x1024.jpg 814w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-768x966.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg 354w"
                                            sizes="(max-width: 475px) 100vw, 475px" alt="Frederique" loading="eager" /><span
                                                class="wil-avatar__name">F</span></div><a class="flex sm:justify-center lg:hidden mt-3"
                                                    href="https://www.buymeacoffee.com/nghiaxchis" target="_blank"
                                                    rel="noopener noreferrer"><img
                                            src="https://ncmaz.chisnghiax.com/wp-content/plugins/ncmaz-frontend/dist/images/buymeacoffee.svg"
                                            alt="buy-me-a-coffee" class="w-28 rounded-xl shadow-xl" /></a>
                                </div>
                                <div class="flex-grow mt-5 sm:mt-0 sm:ml-8 max-w-lg xl:max-w-2xl space-y-3">
                                    <h1
                                        class="inline-flex items-center text-2xl sm:text-2xl lg:text-4xl font-bold lg:font-semibold">
                                        Frederique</h1><span class="block text-sm text-neutral-500 dark:text-neutral-400">Amet
                                            maxime est nostrum molestiae dolorem ipsum nisi. Placeat eos aut et animi error aut et.
                                            Error porro error velit voluptate aut. Eligendi qui eos explicabo soluta officia.</span><a
                                                href="http://www.rohan.com/" target="_blank" rel="noopener noreferrer"
                                                class="flex items-center text-xs font-medium space-x-2.5 cursor-pointer text-neutral-500 dark:text-neutral-400 truncate"><svg
                                                    class="flex-shrink-0 w-4 h-4" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
                                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="currentColor" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="currentColor"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="currentColor"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg><span
                                            class="text-neutral-700 dark:text-neutral-300 truncate">http://www.rohan.com/</span></a>
                                    <nav
                                        class="nc-SocialsList flex flex-wrap gap-x-2.5 gap-y-1.5 text-2xl text-neutral-6000 dark:text-neutral-300  mt-0.5">
                                        <a class="block w-6 h-6 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-700"
                                            href="https://ncmaz.chisnghiax.com/" target="_blank" rel="noopener noreferrer"
                                            title="Youtube"><img class="w-full rounded-full"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKZSURBVHgB1VqLkZswEF1uUgAdnFyBXQIl0IFJBecOwBXcpAJTQjpwOrBdAVwFuIONFmnvyI0naIWE4c28wdgI3tOuvjiBAECAVB9yza2m0tyB+S4dXNZaXjVvmn8Sc/4ckGjNUvOsiZ68aBZoTM+DgfBugvBHPEU3Ekn4d5YQGlQzNtw4E5tg0dA32s9Q649Iz8xhCmzK4JNZgg8WIt7PBIVuQeKZe1fxCp+T82MkTcrFQLNA8czLmPhyweKZ1VBzMkwdfWhg+bhrbhJzhJfBDyWsAzRBPPBJH4EV1T7jMwo/7BcZ+EApXR/pvxx99N2QP7ft17k7OApVf4bSec7bG2LXYTA0DWKeSxvzmcUrUcGiwGhQSmoipUacgQT7PURDUYAQORnYiYq45LkvdjIpVIIMbEVFXAxcr6ZxSvH6CkIoMqAkJfqeZwxkYLMBOB5lPYw8ulsQD+UuOJ2+rqeGWdfoDJme7gVig1KJGidFhCITFml8AwxKPfmANQoaiemu8boWyuv3d58u0gkUAVm1uNYiCS9LPcNq3MXLI9RSBCgxlXMReshYb0H9+eXi1mN9v7cMvYEPURGXh8gHJAP52HGjFJJ1DbcbRIPcwJX3Ot373izDaJDPSFVvA6U7zIeDmQKHAk3N6Z4y8f0Cn1dkFfgsKYcLGj53AacKL2585k0AP7X4mg2QggZijgfhQUvKth+J7Qr/F6wHNb/dGW6rrCkKGzbwORdaURSO/323hvO+yJCygTHg2jd3rYligQZykIDGhgWJr8AHCzFRwRSgeVvzrJd8BYQAmobdzCieekIFoTFDSnWTU8bBBEWjjiEc55wFWCMFThv4zlOFJxAANl8zMPus/JcbNbjkbkmrvw97/J1INxQe4C9SbkAw+TwV6AAAAABJRU5ErkJggg=="
                                                alt="Youtube" /></a><a
                                                    class="block w-6 h-6 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-700"
                                                    href="https://ncmaz.chisnghiax.com/" target="_blank" rel="noopener noreferrer"
                                                    title="Facebook"><img class="w-full rounded-full"
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATUSURBVHgBzZpNbBNXEMfnrWOyQSUfNydSJcORIJEKqQeE1CClai5I4VB6hB7o1UGpQi4FQw8NKK3iXjmQHtuqAolKTVUqgtRyqwhSy5G6QqK+JSSkbHDs1/mv7WTtXXt3nh1rf1Js7+57uzPzZubNextFHSCd1YOOszmltDpOpNOa9JgiNaiJBvda6TyRyvP5Va30E6LkSmG+L09tosgQV+j/XmVI6XE+HCcDFGlWRuXaUUasQE1wpfR0vYXbZolU8ppUEZECqdnNq/sgeD1aZQs3D12L2jySAqm512mld+7At6k75Hk0TkcZDSusQWr21Xmli4+7KDxI45kjsxtTYQ1bKgCXIVVe2leXaQKeWVZ0x5WhBU1dqCK8zlIcaBEXgQpg6KA9xQnLulD44q1vGk/7FKgELHy++27TChZ0XavkO42B7Y8BXXwQN+EBZFL6jc8r6hSoBkyaYoomNZaae5n1ntt1IbgOW/9vaoN+W9HFUwfo5JEEvT2k+K9inw1H058vyrT8tEjLf+3Q8zVNpsCVevtKh/PZofXqcVWByxu3+esCGQBBr5/ppcmjPZHaf/tHkb68v22uiNJccgxk3Z/4aMf6504k6XMWHtaXgFH57N42fcfKSPGOQjUGiuNkwMxEL+U+tMXCA/RBX9xDCgLacaxp/HbHnOv4jCbZcH7Elv904kBou4r/l1x3QVxA8GMjid3ruMfztbJ8JLR6D1/KxH3g8/czB0MtD6HgJlDCyw+fHHQDvQauT+S2xDFh95WQJuTuM8NWCxMeVs987/iEDwL3un7GJimOk5iylJZVmbA+3CeMr359QxKQwaSxBNl7eHI4Luk0OZqI1A4j4KXRbYK4eCrJ6VWkeBpZKC3pMXk03PrA68+jw1ao8ODkkWjzSA0YX6zAsZHQNZCPgb5oroEsJYFbD4qlMcn5UamVHlHBfCAbsxCG5zYDzz96Vqq79u/8IeoUFqZlSQdMOu2AeGhGlJTbiKXFCphXkqCVmzRmrgjke3gEVrUgkB8922maUWY8pYU3HSLwP6hWqq0yzfLTHRKhWAEOhX8k+1u3fi9y/RJcgHnPexUYHU407eMFawUJPJE9sXhvclXSaeO1doOy02CNIHVPyG7ZTukuCZmOWONIwAJHTmnFyi+6S7MVSTdkooVfTB4YzJUfHbH1sbNdmB/KV1KC0g9JCGLBzGr14B63fpOvyirb8tVdCdspL0rnA7DAgXrlnkOmwPILsuLNQ2kFn64CcCN+a5IjAzAS797YcoMwKkjF73+9ZWR5F0VLcB/83E3KGIXt3kTGZFMLMYHARuo8d6IncJ5Am584Tf7Mub79LFba3SetmwDcTSOtrlKc8WypuIeN14cvv3yMHTCKJTpfuDFw2HvGV5hoVT5rEtD7DafNdX5XcbrxvE8BBIdWdIliBm/9fFwLXC+BpWFhvn8JvkZxgWV5cbM/sGJoWcXFIqgbgtZ3mULA2xp2qdvdfmcAn+fZ9pLrDS3bRSA1t8a7d9YDbp6mLlB5g18+G+Tz/rYC9tulKlanXCuX8fcR4o4GWVDkPHWImuC2XV6svbiI3teQiiKJcV4VZYwnPoUyXj80EXzvFh3Ao8wYB577Lzc8Qum9h7gWXudcvoolLFZStl26ayq0l/8Bc/0j1jHngcgAAAAASUVORK5CYII="
                                                        alt="Facebook" /></a><a
                                                            class="block w-6 h-6 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-700"
                                                            href="https://ncmaz.chisnghiax.com/" target="_blank" rel="noopener noreferrer"
                                                            title="Twitter"><img class="w-full rounded-full"
                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATaSURBVHgB1ZlNbxtVFIbPvWOXNg3B6QJYxNEU2LRZJF0gkW5IN5WQugiI0BUEix+QRv0BcX4AarMHOaErREW7QIJ2k7AoRWJRZ9GygrpxFmVDUtfph+O5l/NOMo7t8ced8cRMH8myPXNn5px73nPuxwiKADunU471dJpIjBNpm7Se4N8pPpU6aKULJESBj+f597rlJNcKmWMF6hFBIYHRKlGe01pPkaYpCoEmnRdCLPXiTGAHaoYrfYkaerhHBC2zI4tBHQnkwOi1pwuRG96EkCK78fnri8btTRrZued2VVZvCIK2+0LBUslzJtGQ3RqMrpRnHbl7r4/GAxvPTF8rTXdr2NGBkRWWDKllOkTJdCBFim5Atp0atZUQjOdez1IM6JQXLR1wQ8feU4wQJL/cmB1c8R9vAgkL/dH/I5tObHNin2lObF8OsPGrFD/jQaoqKz5VNDgA3fOXTTFFkJgYXXmSbTy2z750HlL8YSk5JwuZ4W38qUXAsXYX6NUgpaS85P1xI9CP3p9826KZd5I0MiipVNF0q1ilH/7arZ0fOrInBpwzoBaFBP5x72NGacxXp5L88KrRw2DYN1PH6AN2oJ7zown69N0kXf97lybftOjUCYs++mmHDPGikHUdEFrMaUMPYNDC+0f54You3n7W1Yn58dd8xnsgKvjgHjA+PSioWDazQwvxIb4l5KMDzHO8UI+dkPTLhQH3oe2AXBCtbsCBny8cp9PDFhnDaxA7t5WSrnwCUN/jMPDOJ4NuL7dyZPItM4PQKZfvvHDzIgiOZU1LoYPNMuHA3cdOw7H58SP0/fkB+vrsUVcSQfn2z0pg4wGvBicSrKXxIAkMrq6/ZEMHGo4hGjPv4bMnmQf/Ku5Zs/sZVh4fHHNbsvF2kItgKKpHfQlsxWnOEbQ1YbMczgFsIqAK2UEuQW95vRwVxR1FIUmZdVEdcKBb7wdhs6xcuYUkuANg8Y+X7oOj4O4/DvWC5ETYDniNG4XPbj+PJBLXe7yH1CEcAGPDktLHZegKAn5/XPWV5IAUJNeiPIUAoUel8UbmMFz+7QX1hGAHeCB7RCFAz1+89Sx0LlzhsaRYDh89wAPZuuSBLFQEwP0t5eYCpgGQgykw/sp6hXpFKJGXluPcpB5AJDDimg5aURkPLHLWXAGnvyutmu4wz/Ao7BrMCTzGc3jTPICjYSZs7eA9q/zG7Btn3G7Tjv7V9EKUzlJlbzqNeX4342E4ev3sjzuRGQ+0Ekv43l9SbvEKx3qoA26nQDaYMiMKKKuewXDw/pZDDzhHeiyTbdlfUhZq3TeSe5LlLbxXY2HP7xKKXwxl8LOWeQlSV0XIQa3fcOGp7ZPWHMAKXym9RDGHk3cR0jn43wTvfN3TvANGMYSNL3DlOVl/zFe8pVIfx1FKbPw223au+bjPAYRHK5qnmMFlM1MvHY+Ww2cxM7TML/OMX7QdNtA923Sz9bkOxKG0wnjWfbb9+S6kc6VpISmn+/zOAJpn2cxDDZ3bGcAjtc17katcnWzqA5jnoJi00ry/bQAOW1LodaVoaTPTXjL+awKCaDhSZvnSWYoIz3DMBrwXF+bXhsR1hKwpIfVc6IFP0BpmwmEMP7hFBHjOaKknhLtVqW2+tX3wEE5IDI68+uNl4CNuk8dCKqzR9fwHIT4sg2XdmZoAAAAASUVORK5CYII="
                                                                alt="Twitter" /></a><a
                                                                    class="block w-6 h-6 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-700"
                                                                    href="https://ncmaz.chisnghiax.com/" target="_blank" rel="noopener noreferrer"
                                                                    title="Instagram"><img class="w-full rounded-full"
                                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVnSURBVHgBzVo9UBtHFP7uED92Elu4TIqIpMxkDDN26YlocBno0gFlKkRwkZkUOroUAUOV0qRzB6SzGytJmxnLE7cZy4VTWjJjgoTEKe/b096c/k57Pyh8M4dOp93b9/O9t293sZACqnCywOmyjfbtNto5eTQvV7ZzaVR4WbDKLtwXwFRpFj9WkBAWYoJC2zjZaMPKy9c8YsEqt+HuJ1EmsgIBwQvotnAiiCAHLia3oyoSSYF3+K6YtuDoE6jt3MTutnl7A1Txfc5C6xBoz2M8qLQxuWjiDXtUgxNsrVpoPh+j8ESOY1axtTyqYagC7/Cg6Ao3cYmUCUFW6HFI2oY1GkohCi8p0cEVQFhcDFSArqP2uEIQqqzdwM4vvc/7FPAClpz/X2gThpoE9kJvYPfFgAj/DFdPeCLrZcJudHkgDu+t7Awyy1+qTyt7zahPu3aGi/I/cMtv5L6OKBD5ZLLbdfzx9U2HOq9gCDs3i2uPvkEm/zmS4PzgTzS2n8CtVE27CJU+mpuFU+OXjC8QmmJ9M0zMf4wPnn3bZXEK4FbeGvVnPxqAn1Nrd8QIn+HflQPlFQMIvU9YDTjqXfwTxfocmMLbuVsy4BvUN39Vn1GpQFD46eKSehdp9X5h19QTvhc6QXyehyGmi/fVgLT26eLPaJX+jiW8JYYgfd4vPFSWpzdISUNoL3hZyIK9YdJLu5yobz+NJThBq9949YPyJC1f3zxWzxlPpolA1hVfqT6kD9A0qnNs4T7BQZtivaEvl4xkz3+iYoWghS/EUxpTa3e7BA5yP7P8Rei7A8iztM949DGrqrVAYTyd2riHGWepz5KkXGP/D5zvybX/OyZX76J1/FIZQ79TB7Y5TpdFAcu4ytQv14P2Yubh15gu3AsIXVVtqTjj5pr8bn96S1GmIYr0KhhdAXc+I1y6zekhKWh5Lfy5WLruPPFjhIJNO/cxtXpHtXFfv1WeSI52zoa3CE8MX3jh71nhuCvA6YmztceKQsRMcSmipQeDxmcWyiEhJiQYSRGCs+owNJyn3sAivI6nhMiOXJGZIJhtwgKc8aB/t6+SAhpMn6MwLAHEBRWoISHcTh4njcK4zWD2U7FZ3TMSqShA6mjLcpYdBpYhBFNmKzCxJUCFCpSREBS+se0FKLMRaxpaW4PUun647pch5/tppFCFSkZmgNex9xcD4MRkCYWmZT6goLx0kRZUhsI39tJRQGR/ITOxLR5wzTp0aBIUKIg687/Qg5Ma4yGYKrWXhgk/apYfIlFZFGgeSSJ8ZNTen1m9YB00GAXkxULNDgTsqDWDNkq04HZL9iz2JIitkknz5tFL/37URMQgVYWbXKPWDKSb9sCFsQJWWWRXQUwu/WbShRbX2YOFWyrlgAS4zlwsQ0wp5G3L+9sqrT0YptOz9cd+hfnh801MdjJLVFBwliB6earK7ZAypB9uSb1Hf63igSNbeEWTrhT++uGaX//oEsHUeuwXTATsx+WpKX14lnATO+ude61AQTaOJriwN9rUCpbISUBK0qsRtlWEPhdz5D/vu6aAKF7QUFSQ5SMzTpSNLWa05tFf6W1sadSwxX3RcZ4FREEli5254IO+alTcs4IU6qNLgOwFXSz2PuxTgNwSN23iikFS/brmfRAD1wPCsQM5zDM+aLtseLzfORr0W2gdFyeo00Zv0PZiZCHaOa1hrTTuM4MaqUw2hDUyPGYtyObvBA8+chgLeILfWhnE+b6WiIAxUEqsbu3P4ifHtEOMfzUo5KSYEEWwivSgBGdN5lXH5kjwzx5UxM57O9txD8GtklcJRxfcfwNSgFaG+6ydrUr53hUvtc5V5hLWWwU2j+IKHcR/isxtyg6077gAAAAASUVORK5CYII="
                                                                        alt="Instagram" /></a></nav>
                                </div>
                                <div class="flex flex-col space-y-2.5 absolute top-0 right-0 p-5 lg:p-8"><a class="hidden lg:block"
                                    href="https://www.buymeacoffee.com/nghiaxchis" target="_blank" rel="noopener noreferrer"
                                    title="buy-me-a-coffee"><img
                                        src="https://ncmaz.chisnghiax.com/wp-content/plugins/ncmaz-frontend/dist/images/buymeacoffee.svg"
                                        alt="buy-me-a-coffee"
                                        class="w-36 rounded-xl shadow-xl hover:opacity-80 transition-opacity" /></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="nc-PageArchiveAuthor__content py-16 lg:pb-24 lg:pt-20 space-y-16 lg:space-y-24">
                        <div class="flex flex-col xl:flex-row container">
                            <div class="nc-PageArchiveAuthor__grid flex-1" data-is-react-component="PageArchiveAuthor"
                                data-component-props="{&quot;userId&quot;:8,&quot;isCurrentMyPage&quot;:false,&quot;listIDFavorites&quot;:[102,296,97,323,104,325,318,273,330,310,326,324,332,319,316,314,83,88],&quot;enableSidebar&quot;:false}">
                                <div>
                                    <div class="flex flex-col sm:items-center sm:justify-between sm:flex-row">
                                        <nav class="nc-Nav flex-1 sm:pr-5 overflow-hidden" data-nc-id="Nav">
                                            <ul class="flex  lg:space-x-2 overflow-x-auto hiddenScrollbar">
                                                <li class="nc-NavItem flex-shrink-0 relative" data-nc-id="NavItem"><button
                                                    class="block !leading-none font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-secondary-900 text-secondary-50  focus:outline-none">Articles</button>
                                                </li>
                                                <li class="nc-NavItem flex-shrink-0 relative" data-nc-id="NavItem"><button
                                                    class="block !leading-none font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none">Liked
                                                    Articles</button></li>
                                            </ul>
                                        </nav>
                                        <div class="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
                                        <div class="flex flex-shrink-0 justify-end">
                                            <div class="nc-ArchiveFilterListBox " data-nc-id="ArchiveFilterListBox">
                                                <div class="relative lg:min-w-[200px]">
                                                    <div id="headlessui-listbox-button-:r0:" aria-haspopup="listbox"
                                                        aria-expanded="false" data-headlessui-state=""><button
                                                            class="nc-Button relative h-auto inline-flex items-center rounded-full transition-colors text-sm px-4 py-2 sm:py-2.5 hover:border-neutral-300 w-full text-neutral-700 border border-neutral-200 dark:text-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                            title="">Most Recent<svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                                                data-slot="icon" class="w-4 h-4 ml-2 -mr-1 opacity-70">
                                                                <path fill-rule="evenodd"
                                                                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg></button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8 mt-8 lg:mt-10">
                                            <div class="nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full"
                                                data-nc-id="Card11"><a
                                                    href="https://ncmaz.chisnghiax.com/eum-delectus-in-minima-rem/"
                                                    class="block absolute inset-0"></a>
                                                <div
                                                    class="block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden z-0 aspect-w-8 aspect-h-5 sm:aspect-w-4 sm:aspect-h-3">
                                                    <div>
                                                        <div class="nc-PostFeaturedMedia relative w-full h-full standardnotFeaturedImage"
                                                            data-nc-id="PostFeaturedMedia">
                                                            <div class="nc-NcImage absolute inset-0 overflow-hidden z-0 mabeUrlNotOk"
                                                                data-nc-id="NcImage">
                                                                <div
                                                                    class="object-cover w-full h-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500">
                                                                    <div class="h-2/4 max-w-[50%]"><svg class="w-full h-full"
                                                                        viewBox="0 0 197 193" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M145.828 48.9822C134.953 48.9822 126.105 57.8301 126.105 68.7051C126.105 79.5801 134.953 88.428 145.828 88.428C156.703 88.428 165.551 79.5805 165.551 68.7051C165.551 57.8293 156.704 48.9822 145.828 48.9822ZM145.828 80.7741C139.173 80.7741 133.759 75.3602 133.759 68.7051C133.759 62.0501 139.173 56.6361 145.828 56.6361C152.483 56.6361 157.897 62.0501 157.897 68.7051C157.897 75.3594 152.483 80.7741 145.828 80.7741Z"
                                                                            fill="currentColor"></path>
                                                                        <path
                                                                            d="M145.963 171.49C145.867 171.256 145.748 171.034 145.611 170.828C145.473 170.617 145.312 170.422 145.136 170.246C144.96 170.07 144.765 169.909 144.554 169.771C144.348 169.634 144.126 169.515 143.892 169.419C143.663 169.324 143.422 169.247 143.177 169.201C142.683 169.102 142.178 169.102 141.684 169.201C141.439 169.247 141.198 169.324 140.969 169.419C140.735 169.515 140.513 169.634 140.306 169.771C140.096 169.909 139.901 170.07 139.725 170.246C139.549 170.422 139.388 170.617 139.25 170.828C139.112 171.034 138.994 171.256 138.898 171.49C138.802 171.719 138.726 171.96 138.68 172.205C138.63 172.45 138.603 172.703 138.603 172.952C138.603 173.2 138.63 173.453 138.68 173.698C138.726 173.943 138.802 174.184 138.898 174.413C138.994 174.647 139.112 174.869 139.25 175.075C139.388 175.286 139.549 175.481 139.725 175.657C139.812 175.745 139.905 175.829 140.001 175.908C140.099 175.987 140.201 176.063 140.306 176.132C140.513 176.269 140.735 176.388 140.969 176.484C141.198 176.579 141.439 176.656 141.684 176.702C141.929 176.752 142.182 176.778 142.43 176.778C142.679 176.778 142.932 176.752 143.177 176.702C143.422 176.656 143.663 176.579 143.892 176.484C144.126 176.388 144.348 176.269 144.554 176.132C144.66 176.062 144.762 175.987 144.859 175.908C144.956 175.829 145.048 175.745 145.136 175.657C145.312 175.481 145.473 175.286 145.611 175.075C145.748 174.869 145.867 174.647 145.963 174.413C146.058 174.184 146.135 173.943 146.185 173.698C146.234 173.453 146.257 173.2 146.257 172.952C146.257 172.703 146.234 172.45 146.185 172.205C146.135 171.96 146.058 171.719 145.963 171.49Z"
                                                                            fill="currentColor"></path>
                                                                        <path
                                                                            d="M85.7341 20.0459C85.6384 19.8163 85.5198 19.5943 85.382 19.3838C85.2442 19.1772 85.0835 18.9782 84.9075 18.8021C84.7314 18.6261 84.5363 18.4653 84.3258 18.3276C84.1191 18.1898 83.8972 18.0712 83.6637 17.9755C83.4341 17.8798 83.193 17.8071 82.9481 17.7574C82.4544 17.6579 81.9492 17.6579 81.4556 17.7574C81.2106 17.8071 80.9695 17.8798 80.7361 17.9755C80.5065 18.0712 80.2845 18.1898 80.0779 18.3276C79.8674 18.4653 79.6722 18.6261 79.4962 18.8021C79.3201 18.9782 79.1594 19.1772 79.0178 19.3838C78.88 19.5943 78.7652 19.8163 78.6696 20.0459C78.5739 20.2755 78.4973 20.5166 78.4514 20.7615C78.4017 21.0103 78.3749 21.259 78.3749 21.5116C78.3749 21.7603 78.4017 22.0091 78.4514 22.2579C78.4973 22.5028 78.5739 22.7439 78.6696 22.9735C78.7652 23.2031 78.88 23.4251 79.0178 23.6356C79.1594 23.8422 79.3201 24.0412 79.4962 24.2172C79.6722 24.3933 79.8674 24.554 80.0779 24.6918C80.2845 24.8296 80.5065 24.9482 80.7361 25.0439C80.9695 25.1395 81.2106 25.2123 81.4556 25.262C81.7005 25.3118 81.9531 25.3385 82.2018 25.3385C82.4506 25.3385 82.7032 25.3118 82.9481 25.262C83.193 25.2123 83.4341 25.1395 83.6637 25.0439C83.8972 24.9482 84.1191 24.8296 84.3258 24.6918C84.5363 24.554 84.7314 24.3933 84.9075 24.2172C85.0835 24.0412 85.2442 23.8422 85.382 23.6356C85.5198 23.4251 85.6384 23.2031 85.7341 22.9735C85.8298 22.7439 85.9063 22.5028 85.9522 22.2579C86.002 22.0091 86.0288 21.7603 86.0288 21.5116C86.0288 21.259 86.002 21.0103 85.9522 20.7615C85.9063 20.5166 85.8298 20.2755 85.7341 20.0459Z"
                                                                            fill="currentColor"></path>
                                                                        <path
                                                                            d="M175.008 17.6988C172.714 7.99787 163.987 0.755371 153.594 0.755371H33.522C15.2866 0.754988 0.450684 15.5909 0.450684 33.8263V153.899C0.450684 165.824 9.98628 175.557 21.8326 175.891C24.1272 185.592 32.8542 192.835 43.2467 192.835H174.382C186.517 192.835 196.39 182.962 196.39 170.826V141.949V39.6911C196.39 27.7663 186.855 18.0329 175.008 17.6988ZM188.736 170.827C188.736 178.742 182.297 185.182 174.382 185.182H43.2467C37.1197 185.182 31.8799 181.322 29.8236 175.908C29.2232 174.327 28.8918 172.615 28.8918 170.827V168.254V150.524L72.7964 76.0808C74.1332 73.8144 76.517 72.4911 79.1323 72.5332C81.7633 72.5783 84.0851 73.9844 85.3434 76.2955L104.247 111.007L131.725 161.462C132.419 162.737 133.733 163.459 135.089 163.459C135.708 163.459 136.335 163.309 136.916 162.993C138.772 161.982 139.458 159.657 138.447 157.801L129.53 141.428C133.445 141.608 137.296 140.341 140.362 137.797L157.572 123.52C160.332 121.23 164.408 121.331 167.051 123.755L167.95 124.578L175.604 131.594L188.736 143.632V170.827ZM188.736 133.249L175.603 121.21L167.95 115.382C162.963 113.297 157.033 114.022 152.685 117.629L135.475 131.906C133.582 133.476 131.111 134.111 128.695 133.646C126.28 133.183 124.22 131.677 123.043 129.517L110.969 107.345L104.226 94.9648V94.9644L92.0655 72.6342C89.4716 67.8716 84.6856 64.9727 79.2632 64.8801C73.8423 64.7951 68.9588 67.521 66.2037 72.1922L28.8914 135.457V39.6911C28.8914 31.7758 35.331 25.3362 43.2463 25.3362H66.8937C69.0074 25.3362 70.7207 23.6229 70.7207 21.5093C70.7207 19.3957 69.0074 17.6823 66.8937 17.6823H43.2463C31.1106 17.6823 21.2375 27.5555 21.2375 39.6911V149.479V168.198C13.8924 167.575 8.10458 161.402 8.10458 153.899V33.8263C8.10458 19.8109 19.507 8.40888 33.522 8.40888H153.594C159.721 8.40888 164.961 12.2684 167.017 17.6827H97.5093C95.3957 17.6827 93.6824 19.396 93.6824 21.5097C93.6824 23.6233 95.3957 25.3366 97.5093 25.3366H167.949L175.603 25.3925C182.949 26.0147 188.736 32.1876 188.736 39.6911V133.249Z"
                                                                            fill="currentColor"></path>
                                                                    </svg></div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="nc-gallerySlider group relative z-10 xl:z-auto w-full h-full">
                                                                <div
                                                                    class=" h-full gallery_scroller hiddenScrollbar scrollBehaviorSmooth">
                                                                    <a href="https://ncmaz.chisnghiax.com/eum-delectus-in-minima-rem/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/p0olraayxly-1.jpg"
                                                                                alt="white volkswagen beetle coupe scale model"
                                                                                class="object-cover w-full h-full" loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/p0olraayxly-1-500x500.jpg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/p0olraayxly-1-1024x1024.jpg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/p0olraayxly-1-150x150.jpg 150w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/p0olraayxly-1-768x768.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/p0olraayxly-1-300x300.jpg 300w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/p0olraayxly-1.jpg 1200w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/eum-delectus-in-minima-rem/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-5821029-1.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-5821029-1-333x500.jpeg 333w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-5821029-1-683x1024.jpeg 683w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-5821029-1-768x1152.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-5821029-1-200x300.jpeg 200w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-5821029-1.jpeg 1000w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/eum-delectus-in-minima-rem/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1.jpg"
                                                                                alt="white corded headphones"
                                                                                class="object-cover w-full h-full" loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1-500x334.jpg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1-1024x684.jpg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1-768x513.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1-1536x1025.jpg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1-1320x881.jpg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1-300x200.jpg 300w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1.jpg 1600w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/eum-delectus-in-minima-rem/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1-500x358.jpeg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1-1024x734.jpeg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1-768x550.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1-1536x1100.jpeg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1-2048x1467.jpeg 2048w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1-1320x946.jpeg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1-300x215.jpeg 300w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/eum-delectus-in-minima-rem/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-1.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-1-375x500.jpeg 375w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-1-768x1024.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-1-1152x1536.jpeg 1152w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-1-1536x2048.jpeg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-1-1320x1759.jpeg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-1-225x300.jpeg 225w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-1.jpeg 1440w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/eum-delectus-in-minima-rem/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/blihvfxbi9s-2.jpg"
                                                                                alt="white desk lamp beside green plant"
                                                                                class="object-cover w-full h-full" loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/blihvfxbi9s-2-500x334.jpg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/blihvfxbi9s-2-1024x684.jpg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/blihvfxbi9s-2-768x513.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/blihvfxbi9s-2-1536x1025.jpg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/blihvfxbi9s-2-1320x881.jpg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/blihvfxbi9s-2-300x200.jpg 300w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/blihvfxbi9s-2.jpg 1600w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a></div>
                                                                <div class="">
                                                                    <div class="nc-gallerySlider__prevBtn absolute opacity-0 group-hover:opacity-100 z-20 left-2 top-1/2 -translate-y-1/2 "
                                                                        title="Prev"></div>
                                                                    <div class="nc-gallerySlider__nextBtn absolute opacity-0 group-hover:opacity-100 z-20 right-2 top-1/2 -translate-y-1/2 "
                                                                        title="Next">
                                                                        <div class="nc-NextPrev flex items-center text-neutral-900 dark:text-neutral-300 space-x-2 relative"
                                                                            data-nc-id="NextPrev" data-glide-el=""><button
                                                                                class="w-8 h-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
                                                                                title="Next" data-glide-dir=""><i
                                                                                    class="las la-angle-right"></i></button></div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="absolute w-full left-0 bottom-0 h-6 bg-gradient-to-t from-neutral-800/50">
                                                                </div>
                                                                <div
                                                                    class="absolute z-10 bottom-3 left-0 w-full flex items-center justify-center glide__bullets">
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 glide__bullet--active">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="top-3 inset-x-3 z-10 absolute">
                                                    <div class="nc-CategoryBadgeList flow-root " data-nc-id="CategoryBadgeList">
                                                        <div class="flex flex-wrap space-x-2 -my-1 "><a
                                                            href="https://ncmaz.chisnghiax.com/category/games/"
                                                            class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-green-800 bg-green-100 hover:bg-green-800">Games</a><a
                                                                href="https://ncmaz.chisnghiax.com/category/photos/"
                                                                class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-indigo-800 bg-indigo-100 hover:bg-indigo-800">Photos</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-4 h-full flex flex-col flex-grow">
                                                    <div class="nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 overflow-hidden text-xs leading-none"
                                                        data-nc-id="PostCardMeta"><a
                                                            href="https://ncmaz.chisnghiax.com/author/jaren-nader/"
                                                            class="flex-shrink-0 relative flex items-center gap-2 ">
                                                            <div
                                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm ring-1 ring-white/80 dark:ring-neutral-900">
                                                                <img class="absolute inset-0 w-full h-full object-cover"
                                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg"
                                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-239x300.jpg 239w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-814x1024.jpg 814w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-768x966.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg 354w"
                                                                    sizes="100px" alt="pcormier" loading="lazy" /><span
                                                                        class="wil-avatar__name">p</span></div><span
                                                                            class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium "><span
                                                                                class="line-clamp-1"> Frederique</span></span>
                                                        </a><span
                                                            class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                                                                class="text-neutral-500 dark:text-neutral-400 font-normal "><span
                                                                    class="line-clamp-1">Sep 30, 2021</span></span></div>
                                                    <h3
                                                        class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3">
                                                        <a href="https://ncmaz.chisnghiax.com/eum-delectus-in-minima-rem/"
                                                            class="line-clamp-2" title="Eum delectus in minima rem">Eum delectus in
                                                            minima rem</a></h3>
                                                    <div class="flex rtl:flex-row-reverse items-end justify-between gap-2 mt-auto">
                                                        <div class="nc-PostCardLikeAndComment flex items-center gap-2 relative"
                                                            data-nc-id="PostCardLikeAndComment">
                                                            <div class="ncmaz-button-like-post relative"><button
                                                                class="simplefavorite-button has-count" data-postid="102"
                                                                data-siteid="1" data-groupid="1" data-favoritecount="100"
                                                            ><svg width="24" height="24" fill="none"
                                                                viewBox="0 0 24 24">
                                                                    <path fill-rule="evenodd" stroke="currentColor"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        stroke-width="1"
                                                                        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg> <span
                                                                    class="simplefavorite-button-count">100</span></button>
                                                            </div><a
                                                                href="https://ncmaz.chisnghiax.com/eum-delectus-in-minima-rem/#comments"
                                                                class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex  px-3 h-8 text-xs focus:outline-none"
                                                                title="Comments" data-nc-id="PostCardCommentBtn"><svg width="24"
                                                                    height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" stroke-width="1"
                                                                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z">
                                                                    </path>
                                                                </svg><span
                                                                    class="ml-1 text-neutral-900 dark:text-neutral-200">0</span></a>
                                                        </div>
                                                        <div
                                                            class="flex flex-1 rtl:flex-row-reverse justify-end items-center gap-2 ">
                                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                                <button
                                                                    class="nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8"
                                                                    title="Share with" id="headlessui-menu-button-:r1:"
                                                                    type="button" aria-haspopup="menu" aria-expanded="false"
                                                                    data-headlessui-state="">
                                                                    <div><svg width="24" height="24" fill="none"
                                                                        viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75">
                                                                        </path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M12 14.25L12 5"></path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M8.75 8.25L12 4.75L15.25 8.25"></path>
                                                                    </svg><input type="text" hidden="" class="hidden"
                                                                        value="https://ncmaz.chisnghiax.com/eum-delectus-in-minima-rem/" />
                                                                    </div>
                                                                </button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full"
                                                data-nc-id="Card11"><a
                                                    href="https://ncmaz.chisnghiax.com/suscipit-repellat-voluptas-consequatur-omnis/"
                                                    class="block absolute inset-0"></a>
                                                <div
                                                    class="block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden z-0 aspect-w-8 aspect-h-5 sm:aspect-w-4 sm:aspect-h-3">
                                                    <div>
                                                        <div class="nc-PostFeaturedMedia relative w-full h-full standardnotFeaturedImage"
                                                            data-nc-id="PostFeaturedMedia">
                                                            <div class="nc-MediaVideo absolute inset-0">
                                                                <div>
                                                                    <div class="absolute bg-black inset-0"
                                                                        style={{ height: "100%", width: "100%" }}>
                                                                        <div class="react-player__preview" tabindex="0"
                                                                            style={{ width: "100%", height: "100%", backgroundSize: "cover", backgroundPosition: "center center", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: "url('https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/surfer-wave-sunset-the-indian-ocean-390051-1.jpeg')" }}>
                                                                            <span
                                                                                class="absolute inset-0 flex items-center justify-center ">
                                                                                <div class="nc-PostTypeFeaturedIcon hover:scale-105 transform cursor-pointer transition-transform "
                                                                                    data-nc-id="PostTypeFeaturedIcon"><span
                                                                                        class="bg-neutral-900/60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11"><svg
                                                                                            class="w-6 h-6" viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                                            <path
                                                                                                d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199"
                                                                                                stroke="currentColor"
                                                                                                stroke-width="1.5"
                                                                                                stroke-miterlimit="10"
                                                                                                stroke-linecap="round"
                                                                                                stroke-linejoin="round"></path>
                                                                                        </svg></span></div>
                                                                            </span></div>
                                                                    </div><a class="absolute block inset-0 "
                                                                        href="https://ncmaz.chisnghiax.com/suscipit-repellat-voluptas-consequatur-omnis/"></a>
                                                                    <div
                                                                        class="absolute z-20 bottom-2 left-2 h-6 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center text-sm transform transition-transform opacity-0 w-6 hover:scale-125">
                                                                        <i class="las la-volume-off"></i></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="top-3 inset-x-3 z-10 absolute">
                                                    <div class="nc-CategoryBadgeList flow-root " data-nc-id="CategoryBadgeList">
                                                        <div class="flex flex-wrap space-x-2 -my-1 "><a
                                                            href="https://ncmaz.chisnghiax.com/category/sports/"
                                                            class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-blue-800 bg-blue-100 hover:bg-blue-800">Sports</a><a
                                                                href="https://ncmaz.chisnghiax.com/category/toys/"
                                                                class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-gray-800 bg-gray-100 hover:bg-gray-800">Toys</a><a
                                                                    href="https://ncmaz.chisnghiax.com/category/videos/"
                                                                    class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-yellow-800 bg-yellow-100 hover:bg-yellow-800">Videos</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-4 h-full flex flex-col flex-grow">
                                                    <div class="nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 overflow-hidden text-xs leading-none"
                                                        data-nc-id="PostCardMeta"><a
                                                            href="https://ncmaz.chisnghiax.com/author/jaren-nader/"
                                                            class="flex-shrink-0 relative flex items-center gap-2 ">
                                                            <div
                                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm ring-1 ring-white/80 dark:ring-neutral-900">
                                                                <img class="absolute inset-0 w-full h-full object-cover"
                                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg"
                                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-239x300.jpg 239w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-814x1024.jpg 814w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-768x966.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg 354w"
                                                                    sizes="100px" alt="pcormier" loading="lazy" /><span
                                                                        class="wil-avatar__name">p</span></div><span
                                                                            class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium "><span
                                                                                class="line-clamp-1"> Frederique</span></span>
                                                        </a><span
                                                            class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                                                                class="text-neutral-500 dark:text-neutral-400 font-normal "><span
                                                                    class="line-clamp-1">Sep 24, 2021</span></span></div>
                                                    <h3
                                                        class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3">
                                                        <a href="https://ncmaz.chisnghiax.com/suscipit-repellat-voluptas-consequatur-omnis/"
                                                            class="line-clamp-2"
                                                            title="Suscipit repellat voluptas consequatur omnis">Suscipit repellat
                                                            voluptas consequatur omnis</a></h3>
                                                    <div class="flex rtl:flex-row-reverse items-end justify-between gap-2 mt-auto">
                                                        <div class="nc-PostCardLikeAndComment flex items-center gap-2 relative"
                                                            data-nc-id="PostCardLikeAndComment">
                                                            <div class="ncmaz-button-like-post relative"><button
                                                                class="simplefavorite-button has-count" data-postid="316"
                                                                data-siteid="1" data-groupid="1" data-favoritecount="72"
                                                            ><svg width="24" height="24" fill="none"
                                                                viewBox="0 0 24 24">
                                                                    <path fill-rule="evenodd" stroke="currentColor"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        stroke-width="1"
                                                                        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg> <span
                                                                    class="simplefavorite-button-count">72</span></button></div>
                                                            <a href="https://ncmaz.chisnghiax.com/suscipit-repellat-voluptas-consequatur-omnis/#comments"
                                                                class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex  px-3 h-8 text-xs focus:outline-none"
                                                                title="Comments" data-nc-id="PostCardCommentBtn"><svg width="24"
                                                                    height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" stroke-width="1"
                                                                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z">
                                                                    </path>
                                                                </svg><span
                                                                    class="ml-1 text-neutral-900 dark:text-neutral-200">1</span></a>
                                                        </div>
                                                        <div
                                                            class="flex flex-1 rtl:flex-row-reverse justify-end items-center gap-2 ">
                                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                                <button
                                                                    class="nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8"
                                                                    title="Share with" id="headlessui-menu-button-:r2:"
                                                                    type="button" aria-haspopup="menu" aria-expanded="false"
                                                                    data-headlessui-state="">
                                                                    <div><svg width="24" height="24" fill="none"
                                                                        viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75">
                                                                        </path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M12 14.25L12 5"></path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M8.75 8.25L12 4.75L15.25 8.25"></path>
                                                                    </svg><input type="text" hidden="" class="hidden"
                                                                        value="https://ncmaz.chisnghiax.com/suscipit-repellat-voluptas-consequatur-omnis/" />
                                                                    </div>
                                                                </button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full"
                                                data-nc-id="Card11"><a
                                                    href="https://ncmaz.chisnghiax.com/doloremque-magnam-saepe-deserunt/"
                                                    class="block absolute inset-0"></a>
                                                <div
                                                    class="block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden z-0 aspect-w-8 aspect-h-5 sm:aspect-w-4 sm:aspect-h-3">
                                                    <div>
                                                        <div class="nc-PostFeaturedMedia relative w-full h-full standardnotFeaturedImage"
                                                            data-nc-id="PostFeaturedMedia">
                                                            <div class="nc-NcImage absolute inset-0 overflow-hidden z-0 mabeUrlNotOk"
                                                                data-nc-id="NcImage">
                                                                <div
                                                                    class="object-cover w-full h-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500">
                                                                    <div class="h-2/4 max-w-[50%]"><svg class="w-full h-full"
                                                                        viewBox="0 0 197 193" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M145.828 48.9822C134.953 48.9822 126.105 57.8301 126.105 68.7051C126.105 79.5801 134.953 88.428 145.828 88.428C156.703 88.428 165.551 79.5805 165.551 68.7051C165.551 57.8293 156.704 48.9822 145.828 48.9822ZM145.828 80.7741C139.173 80.7741 133.759 75.3602 133.759 68.7051C133.759 62.0501 139.173 56.6361 145.828 56.6361C152.483 56.6361 157.897 62.0501 157.897 68.7051C157.897 75.3594 152.483 80.7741 145.828 80.7741Z"
                                                                            fill="currentColor"></path>
                                                                        <path
                                                                            d="M145.963 171.49C145.867 171.256 145.748 171.034 145.611 170.828C145.473 170.617 145.312 170.422 145.136 170.246C144.96 170.07 144.765 169.909 144.554 169.771C144.348 169.634 144.126 169.515 143.892 169.419C143.663 169.324 143.422 169.247 143.177 169.201C142.683 169.102 142.178 169.102 141.684 169.201C141.439 169.247 141.198 169.324 140.969 169.419C140.735 169.515 140.513 169.634 140.306 169.771C140.096 169.909 139.901 170.07 139.725 170.246C139.549 170.422 139.388 170.617 139.25 170.828C139.112 171.034 138.994 171.256 138.898 171.49C138.802 171.719 138.726 171.96 138.68 172.205C138.63 172.45 138.603 172.703 138.603 172.952C138.603 173.2 138.63 173.453 138.68 173.698C138.726 173.943 138.802 174.184 138.898 174.413C138.994 174.647 139.112 174.869 139.25 175.075C139.388 175.286 139.549 175.481 139.725 175.657C139.812 175.745 139.905 175.829 140.001 175.908C140.099 175.987 140.201 176.063 140.306 176.132C140.513 176.269 140.735 176.388 140.969 176.484C141.198 176.579 141.439 176.656 141.684 176.702C141.929 176.752 142.182 176.778 142.43 176.778C142.679 176.778 142.932 176.752 143.177 176.702C143.422 176.656 143.663 176.579 143.892 176.484C144.126 176.388 144.348 176.269 144.554 176.132C144.66 176.062 144.762 175.987 144.859 175.908C144.956 175.829 145.048 175.745 145.136 175.657C145.312 175.481 145.473 175.286 145.611 175.075C145.748 174.869 145.867 174.647 145.963 174.413C146.058 174.184 146.135 173.943 146.185 173.698C146.234 173.453 146.257 173.2 146.257 172.952C146.257 172.703 146.234 172.45 146.185 172.205C146.135 171.96 146.058 171.719 145.963 171.49Z"
                                                                            fill="currentColor"></path>
                                                                        <path
                                                                            d="M85.7341 20.0459C85.6384 19.8163 85.5198 19.5943 85.382 19.3838C85.2442 19.1772 85.0835 18.9782 84.9075 18.8021C84.7314 18.6261 84.5363 18.4653 84.3258 18.3276C84.1191 18.1898 83.8972 18.0712 83.6637 17.9755C83.4341 17.8798 83.193 17.8071 82.9481 17.7574C82.4544 17.6579 81.9492 17.6579 81.4556 17.7574C81.2106 17.8071 80.9695 17.8798 80.7361 17.9755C80.5065 18.0712 80.2845 18.1898 80.0779 18.3276C79.8674 18.4653 79.6722 18.6261 79.4962 18.8021C79.3201 18.9782 79.1594 19.1772 79.0178 19.3838C78.88 19.5943 78.7652 19.8163 78.6696 20.0459C78.5739 20.2755 78.4973 20.5166 78.4514 20.7615C78.4017 21.0103 78.3749 21.259 78.3749 21.5116C78.3749 21.7603 78.4017 22.0091 78.4514 22.2579C78.4973 22.5028 78.5739 22.7439 78.6696 22.9735C78.7652 23.2031 78.88 23.4251 79.0178 23.6356C79.1594 23.8422 79.3201 24.0412 79.4962 24.2172C79.6722 24.3933 79.8674 24.554 80.0779 24.6918C80.2845 24.8296 80.5065 24.9482 80.7361 25.0439C80.9695 25.1395 81.2106 25.2123 81.4556 25.262C81.7005 25.3118 81.9531 25.3385 82.2018 25.3385C82.4506 25.3385 82.7032 25.3118 82.9481 25.262C83.193 25.2123 83.4341 25.1395 83.6637 25.0439C83.8972 24.9482 84.1191 24.8296 84.3258 24.6918C84.5363 24.554 84.7314 24.3933 84.9075 24.2172C85.0835 24.0412 85.2442 23.8422 85.382 23.6356C85.5198 23.4251 85.6384 23.2031 85.7341 22.9735C85.8298 22.7439 85.9063 22.5028 85.9522 22.2579C86.002 22.0091 86.0288 21.7603 86.0288 21.5116C86.0288 21.259 86.002 21.0103 85.9522 20.7615C85.9063 20.5166 85.8298 20.2755 85.7341 20.0459Z"
                                                                            fill="currentColor"></path>
                                                                        <path
                                                                            d="M175.008 17.6988C172.714 7.99787 163.987 0.755371 153.594 0.755371H33.522C15.2866 0.754988 0.450684 15.5909 0.450684 33.8263V153.899C0.450684 165.824 9.98628 175.557 21.8326 175.891C24.1272 185.592 32.8542 192.835 43.2467 192.835H174.382C186.517 192.835 196.39 182.962 196.39 170.826V141.949V39.6911C196.39 27.7663 186.855 18.0329 175.008 17.6988ZM188.736 170.827C188.736 178.742 182.297 185.182 174.382 185.182H43.2467C37.1197 185.182 31.8799 181.322 29.8236 175.908C29.2232 174.327 28.8918 172.615 28.8918 170.827V168.254V150.524L72.7964 76.0808C74.1332 73.8144 76.517 72.4911 79.1323 72.5332C81.7633 72.5783 84.0851 73.9844 85.3434 76.2955L104.247 111.007L131.725 161.462C132.419 162.737 133.733 163.459 135.089 163.459C135.708 163.459 136.335 163.309 136.916 162.993C138.772 161.982 139.458 159.657 138.447 157.801L129.53 141.428C133.445 141.608 137.296 140.341 140.362 137.797L157.572 123.52C160.332 121.23 164.408 121.331 167.051 123.755L167.95 124.578L175.604 131.594L188.736 143.632V170.827ZM188.736 133.249L175.603 121.21L167.95 115.382C162.963 113.297 157.033 114.022 152.685 117.629L135.475 131.906C133.582 133.476 131.111 134.111 128.695 133.646C126.28 133.183 124.22 131.677 123.043 129.517L110.969 107.345L104.226 94.9648V94.9644L92.0655 72.6342C89.4716 67.8716 84.6856 64.9727 79.2632 64.8801C73.8423 64.7951 68.9588 67.521 66.2037 72.1922L28.8914 135.457V39.6911C28.8914 31.7758 35.331 25.3362 43.2463 25.3362H66.8937C69.0074 25.3362 70.7207 23.6229 70.7207 21.5093C70.7207 19.3957 69.0074 17.6823 66.8937 17.6823H43.2463C31.1106 17.6823 21.2375 27.5555 21.2375 39.6911V149.479V168.198C13.8924 167.575 8.10458 161.402 8.10458 153.899V33.8263C8.10458 19.8109 19.507 8.40888 33.522 8.40888H153.594C159.721 8.40888 164.961 12.2684 167.017 17.6827H97.5093C95.3957 17.6827 93.6824 19.396 93.6824 21.5097C93.6824 23.6233 95.3957 25.3366 97.5093 25.3366H167.949L175.603 25.3925C182.949 26.0147 188.736 32.1876 188.736 39.6911V133.249Z"
                                                                            fill="currentColor"></path>
                                                                    </svg></div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="nc-gallerySlider group relative z-10 xl:z-auto w-full h-full">
                                                                <div
                                                                    class=" h-full gallery_scroller hiddenScrollbar scrollBehaviorSmooth">
                                                                    <a href="https://ncmaz.chisnghiax.com/doloremque-magnam-saepe-deserunt/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354547-1.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354547-1-400x500.jpeg 400w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354547-1-819x1024.jpeg 819w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354547-1-768x960.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354547-1-240x300.jpeg 240w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354547-1.jpeg 1200w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/doloremque-magnam-saepe-deserunt/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354544-1.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/doloremque-magnam-saepe-deserunt/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354478-1.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354478-1-400x500.jpeg 400w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354478-1-819x1024.jpeg 819w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354478-1-768x960.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354478-1-240x300.jpeg 240w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354478-1.jpeg 1200w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/doloremque-magnam-saepe-deserunt/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354792-2.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354792-2-400x500.jpeg 400w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354792-2-240x300.jpeg 240w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354792-2.jpeg 500w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/doloremque-magnam-saepe-deserunt/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354475-1.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354475-1-500x333.jpeg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354475-1-1024x682.jpeg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354475-1-768x512.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354475-1-1536x1024.jpeg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354475-1-2048x1365.jpeg 2048w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354475-1-1320x880.jpeg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354475-1-300x200.jpeg 300w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/doloremque-magnam-saepe-deserunt/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354476-1-1.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354476-1-1-400x500.jpeg 400w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354476-1-1-819x1024.jpeg 819w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354476-1-1-768x960.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354476-1-1-240x300.jpeg 240w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354476-1-1.jpeg 1200w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a></div>
                                                                <div class="">
                                                                    <div class="nc-gallerySlider__prevBtn absolute opacity-0 group-hover:opacity-100 z-20 left-2 top-1/2 -translate-y-1/2 "
                                                                        title="Prev"></div>
                                                                    <div class="nc-gallerySlider__nextBtn absolute opacity-0 group-hover:opacity-100 z-20 right-2 top-1/2 -translate-y-1/2 "
                                                                        title="Next">
                                                                        <div class="nc-NextPrev flex items-center text-neutral-900 dark:text-neutral-300 space-x-2 relative"
                                                                            data-nc-id="NextPrev" data-glide-el=""><button
                                                                                class="w-8 h-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
                                                                                title="Next" data-glide-dir=""><i
                                                                                    class="las la-angle-right"></i></button></div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="absolute w-full left-0 bottom-0 h-6 bg-gradient-to-t from-neutral-800/50">
                                                                </div>
                                                                <div
                                                                    class="absolute z-10 bottom-3 left-0 w-full flex items-center justify-center glide__bullets">
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 glide__bullet--active">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="top-3 inset-x-3 z-10 absolute">
                                                    <div class="nc-CategoryBadgeList flow-root " data-nc-id="CategoryBadgeList">
                                                        <div class="flex flex-wrap space-x-2 -my-1 "><a
                                                            href="https://ncmaz.chisnghiax.com/category/animals/"
                                                            class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-purple-800 bg-purple-100 hover:bg-purple-800">Animals</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-4 h-full flex flex-col flex-grow">
                                                    <div class="nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 overflow-hidden text-xs leading-none"
                                                        data-nc-id="PostCardMeta"><a
                                                            href="https://ncmaz.chisnghiax.com/author/jaren-nader/"
                                                            class="flex-shrink-0 relative flex items-center gap-2 ">
                                                            <div
                                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm ring-1 ring-white/80 dark:ring-neutral-900">
                                                                <img class="absolute inset-0 w-full h-full object-cover"
                                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg"
                                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-239x300.jpg 239w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-814x1024.jpg 814w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-768x966.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg 354w"
                                                                    sizes="100px" alt="pcormier" loading="lazy" /><span
                                                                        class="wil-avatar__name">p</span></div><span
                                                                            class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium "><span
                                                                                class="line-clamp-1"> Frederique</span></span>
                                                        </a><span
                                                            class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                                                                class="text-neutral-500 dark:text-neutral-400 font-normal "><span
                                                                    class="line-clamp-1">Sep 24, 2021</span></span></div>
                                                    <h3
                                                        class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3">
                                                        <a href="https://ncmaz.chisnghiax.com/doloremque-magnam-saepe-deserunt/"
                                                            class="line-clamp-2" title="Doloremque magnam saepe deserunt">Doloremque
                                                            magnam saepe deserunt</a></h3>
                                                    <div class="flex rtl:flex-row-reverse items-end justify-between gap-2 mt-auto">
                                                        <div class="nc-PostCardLikeAndComment flex items-center gap-2 relative"
                                                            data-nc-id="PostCardLikeAndComment">
                                                            <div class="ncmaz-button-like-post relative"><button
                                                                class="simplefavorite-button has-count" data-postid="311"
                                                                data-siteid="1" data-groupid="1" data-favoritecount="39"
                                                            ><svg width="24" height="24" fill="none"
                                                                viewBox="0 0 24 24">
                                                                    <path fill-rule="evenodd" stroke="currentColor"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        stroke-width="1"
                                                                        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg> <span
                                                                    class="simplefavorite-button-count">39</span></button></div>
                                                            <a href="https://ncmaz.chisnghiax.com/doloremque-magnam-saepe-deserunt/#comments"
                                                                class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex  px-3 h-8 text-xs focus:outline-none"
                                                                title="Comments" data-nc-id="PostCardCommentBtn"><svg width="24"
                                                                    height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" stroke-width="1"
                                                                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z">
                                                                    </path>
                                                                </svg><span
                                                                    class="ml-1 text-neutral-900 dark:text-neutral-200">3</span></a>
                                                        </div>
                                                        <div
                                                            class="flex flex-1 rtl:flex-row-reverse justify-end items-center gap-2 ">
                                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                                <button
                                                                    class="nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8"
                                                                    title="Share with" id="headlessui-menu-button-:r3:"
                                                                    type="button" aria-haspopup="menu" aria-expanded="false"
                                                                    data-headlessui-state="">
                                                                    <div><svg width="24" height="24" fill="none"
                                                                        viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75">
                                                                        </path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M12 14.25L12 5"></path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M8.75 8.25L12 4.75L15.25 8.25"></path>
                                                                    </svg><input type="text" hidden="" class="hidden"
                                                                        value="https://ncmaz.chisnghiax.com/doloremque-magnam-saepe-deserunt/" />
                                                                    </div>
                                                                </button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full"
                                                data-nc-id="Card11"><a
                                                    href="https://ncmaz.chisnghiax.com/quaerat-voluptatum-nihil-hic-consequatur-dolorem/"
                                                    class="block absolute inset-0"></a>
                                                <div
                                                    class="block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden z-0 aspect-w-8 aspect-h-5 sm:aspect-w-4 sm:aspect-h-3">
                                                    <div>
                                                        <div class="nc-PostFeaturedMedia relative w-full h-full standardnotFeaturedImage"
                                                            data-nc-id="PostFeaturedMedia"><a
                                                                href="https://ncmaz.chisnghiax.com/quaerat-voluptatum-nihil-hic-consequatur-dolorem/"
                                                                class="absolute inset-0 group-hover:opacity-90 transition-opacity">
                                                                <div class="nc-NcImage absolute inset-0 overflow-hidden z-0 mabeUrlOk"
                                                                    data-nc-id="NcImage"><img
                                                                        src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-271795-1.jpeg"
                                                                        alt="" class="object-cover w-full h-full" loading="lazy"
                                                                        srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-271795-1-500x281.jpeg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-271795-1-1024x576.jpeg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-271795-1-768x432.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-271795-1-1536x864.jpeg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-271795-1-2048x1152.jpeg 2048w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-271795-1-1320x743.jpeg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-271795-1-300x169.jpeg 300w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-271795-1.jpeg 1920w"
                                                                        sizes="(max-width: 475px) 100vw, 475px" /></div>
                                                            </a></div>
                                                    </div>
                                                </div>
                                                <div class="top-3 inset-x-3 z-10 absolute">
                                                    <div class="nc-CategoryBadgeList flow-root " data-nc-id="CategoryBadgeList">
                                                        <div class="flex flex-wrap space-x-2 -my-1 "><a
                                                            href="https://ncmaz.chisnghiax.com/category/health/"
                                                            class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-blue-800 bg-blue-100 hover:bg-blue-800">Health</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-4 h-full flex flex-col flex-grow">
                                                    <div class="nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 overflow-hidden text-xs leading-none"
                                                        data-nc-id="PostCardMeta"><a
                                                            href="https://ncmaz.chisnghiax.com/author/jaren-nader/"
                                                            class="flex-shrink-0 relative flex items-center gap-2 ">
                                                            <div
                                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm ring-1 ring-white/80 dark:ring-neutral-900">
                                                                <img class="absolute inset-0 w-full h-full object-cover"
                                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg"
                                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-239x300.jpg 239w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-814x1024.jpg 814w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-768x966.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg 354w"
                                                                    sizes="100px" alt="pcormier" loading="lazy" /><span
                                                                        class="wil-avatar__name">p</span></div><span
                                                                            class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium "><span
                                                                                class="line-clamp-1"> Frederique</span></span>
                                                        </a><span
                                                            class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                                                                class="text-neutral-500 dark:text-neutral-400 font-normal "><span
                                                                    class="line-clamp-1">Sep 23, 2021</span></span></div>
                                                    <h3
                                                        class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3">
                                                        <a href="https://ncmaz.chisnghiax.com/quaerat-voluptatum-nihil-hic-consequatur-dolorem/"
                                                            class="line-clamp-2"
                                                            title="Quaerat voluptatum nihil hic consequatur dolorem">Quaerat
                                                            voluptatum nihil hic consequatur dolorem</a></h3>
                                                    <div class="flex rtl:flex-row-reverse items-end justify-between gap-2 mt-auto">
                                                        <div class="nc-PostCardLikeAndComment flex items-center gap-2 relative"
                                                            data-nc-id="PostCardLikeAndComment">
                                                            <div class="ncmaz-button-like-post relative"><button
                                                                class="simplefavorite-button has-count" data-postid="99"
                                                                data-siteid="1" data-groupid="1" data-favoritecount="8"
                                                            ><svg width="24" height="24" fill="none"
                                                                viewBox="0 0 24 24">
                                                                    <path fill-rule="evenodd" stroke="currentColor"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        stroke-width="1"
                                                                        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg> <span
                                                                    class="simplefavorite-button-count">8</span></button></div>
                                                            <a href="https://ncmaz.chisnghiax.com/quaerat-voluptatum-nihil-hic-consequatur-dolorem/#comments"
                                                                class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex  px-3 h-8 text-xs focus:outline-none"
                                                                title="Comments" data-nc-id="PostCardCommentBtn"><svg width="24"
                                                                    height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" stroke-width="1"
                                                                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z">
                                                                    </path>
                                                                </svg><span
                                                                    class="ml-1 text-neutral-900 dark:text-neutral-200">3</span></a>
                                                        </div>
                                                        <div
                                                            class="flex flex-1 rtl:flex-row-reverse justify-end items-center gap-2 ">
                                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                                <button
                                                                    class="nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8"
                                                                    title="Share with" id="headlessui-menu-button-:r4:"
                                                                    type="button" aria-haspopup="menu" aria-expanded="false"
                                                                    data-headlessui-state="">
                                                                    <div><svg width="24" height="24" fill="none"
                                                                        viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75">
                                                                        </path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M12 14.25L12 5"></path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M8.75 8.25L12 4.75L15.25 8.25"></path>
                                                                    </svg><input type="text" hidden="" class="hidden"
                                                                        value="https://ncmaz.chisnghiax.com/quaerat-voluptatum-nihil-hic-consequatur-dolorem/" />
                                                                    </div>
                                                                </button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full"
                                                data-nc-id="Card11"><a
                                                    href="https://ncmaz.chisnghiax.com/debitis-alias-soluta-quis-odio-impedit-et/"
                                                    class="block absolute inset-0"></a>
                                                <div
                                                    class="block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden z-0 aspect-w-8 aspect-h-5 sm:aspect-w-4 sm:aspect-h-3">
                                                    <div>
                                                        <div class="nc-PostFeaturedMedia relative w-full h-full standardnotFeaturedImage"
                                                            data-nc-id="PostFeaturedMedia">
                                                            <div>
                                                                <div class="nc-ButtonPlayMusicRunningContainer select-none absolute bg-neutral-900/20 flex items-center justify-center inset-0"
                                                                    data-nc-id="ButtonPlayMusicRunningContainer">
                                                                    <div class="nc-PostTypeFeaturedIcon hover:scale-105 transform cursor-pointer transition-transform z-30 relative"
                                                                        data-nc-id="PostTypeFeaturedIcon"><span
                                                                            class="bg-neutral-900/60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11"><svg
                                                                                class="w-6 h-6" viewBox="0 0 24 24" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.28016 22C8.00328 22 9.40016 20.6031 9.40016 18.88C9.40016 17.1569 8.00328 15.76 6.28016 15.76C4.55703 15.76 3.16016 17.1569 3.16016 18.88C3.16016 20.6031 4.55703 22 6.28016 22Z"
                                                                                    stroke="currentColor" stroke-width="1.5"
                                                                                    stroke-linecap="round" stroke-linejoin="round">
                                                                                </path>
                                                                                <path
                                                                                    d="M20.8404 7.96009V4.60009C20.8404 2.00009 19.2104 1.64009 17.5604 2.09009L11.3204 3.79009C10.1804 4.10009 9.40039 5.00009 9.40039 6.30009V8.47009V9.93009V18.8701"
                                                                                    stroke="currentColor" stroke-width="1.5"
                                                                                    stroke-linecap="round" stroke-linejoin="round">
                                                                                </path>
                                                                                <path d="M20.8398 16.8V12" stroke="currentColor"
                                                                                    stroke-width="1.5" stroke-linecap="round"
                                                                                    stroke-linejoin="round"></path>
                                                                                <path
                                                                                    d="M17.7196 19.9199C19.4427 19.9199 20.8396 18.5231 20.8396 16.7999C20.8396 15.0768 19.4427 13.6799 17.7196 13.6799C15.9965 13.6799 14.5996 15.0768 14.5996 16.7999C14.5996 18.5231 15.9965 19.9199 17.7196 19.9199Z"
                                                                                    stroke="currentColor" stroke-width="1.5"
                                                                                    stroke-linecap="round" stroke-linejoin="round">
                                                                                </path>
                                                                                <path d="M9.40039 9.5199L20.8404 6.3999"
                                                                                    stroke="currentColor" stroke-width="1.5"
                                                                                    stroke-linecap="round" stroke-linejoin="round">
                                                                                </path>
                                                                            </svg></span></div>
                                                                </div><a
                                                                    class="block absolute inset-0 group-hover:opacity-90 transition-opacity"
                                                                    href="https://ncmaz.chisnghiax.com/debitis-alias-soluta-quis-odio-impedit-et/">
                                                                    <div class="nc-NcImage absolute inset-0 overflow-hidden z-0 mabeUrlOk"
                                                                        data-nc-id="NcImage"><img
                                                                            src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1.jpeg"
                                                                            alt="" class="object-cover w-full h-full" loading="lazy"
                                                                            srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1-500x358.jpeg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1-1024x734.jpeg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1-768x550.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1-1536x1100.jpeg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1-2048x1467.jpeg 2048w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1-1320x946.jpeg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-326612-1-300x215.jpeg 300w"
                                                                            sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="top-3 inset-x-3 z-10 absolute">
                                                    <div class="nc-CategoryBadgeList flow-root " data-nc-id="CategoryBadgeList">
                                                        <div class="flex flex-wrap space-x-2 -my-1 "><a
                                                            href="https://ncmaz.chisnghiax.com/category/musics/"
                                                            class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-pink-800 bg-pink-100 hover:bg-pink-800">Musics</a><a
                                                                href="https://ncmaz.chisnghiax.com/category/travel/"
                                                                class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-indigo-800 bg-indigo-100 hover:bg-indigo-800">Travel</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-4 h-full flex flex-col flex-grow">
                                                    <div class="nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 overflow-hidden text-xs leading-none"
                                                        data-nc-id="PostCardMeta"><a
                                                            href="https://ncmaz.chisnghiax.com/author/jaren-nader/"
                                                            class="flex-shrink-0 relative flex items-center gap-2 ">
                                                            <div
                                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm ring-1 ring-white/80 dark:ring-neutral-900">
                                                                <img class="absolute inset-0 w-full h-full object-cover"
                                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg"
                                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-239x300.jpg 239w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-814x1024.jpg 814w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-768x966.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg 354w"
                                                                    sizes="100px" alt="pcormier" loading="lazy" /><span
                                                                        class="wil-avatar__name">p</span></div><span
                                                                            class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium "><span
                                                                                class="line-clamp-1"> Frederique</span></span>
                                                        </a><span
                                                            class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                                                                class="text-neutral-500 dark:text-neutral-400 font-normal "><span
                                                                    class="line-clamp-1">Sep 21, 2021</span></span></div>
                                                    <h3
                                                        class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3">
                                                        <a href="https://ncmaz.chisnghiax.com/debitis-alias-soluta-quis-odio-impedit-et/"
                                                            class="line-clamp-2"
                                                            title="Debitis alias soluta quis odio impedit et">Debitis alias soluta
                                                            quis odio impedit et</a></h3>
                                                    <div class="flex rtl:flex-row-reverse items-end justify-between gap-2 mt-auto">
                                                        <div class="nc-PostCardLikeAndComment flex items-center gap-2 relative"
                                                            data-nc-id="PostCardLikeAndComment">
                                                            <div class="ncmaz-button-like-post relative"><button
                                                                class="simplefavorite-button has-count" data-postid="94"
                                                                data-siteid="1" data-groupid="1" data-favoritecount="22"
                                                            ><svg width="24" height="24" fill="none"
                                                                viewBox="0 0 24 24">
                                                                    <path fill-rule="evenodd" stroke="currentColor"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        stroke-width="1"
                                                                        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg> <span
                                                                    class="simplefavorite-button-count">22</span></button></div>
                                                            <a href="https://ncmaz.chisnghiax.com/debitis-alias-soluta-quis-odio-impedit-et/#comments"
                                                                class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex  px-3 h-8 text-xs focus:outline-none"
                                                                title="Comments" data-nc-id="PostCardCommentBtn"><svg width="24"
                                                                    height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" stroke-width="1"
                                                                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z">
                                                                    </path>
                                                                </svg><span
                                                                    class="ml-1 text-neutral-900 dark:text-neutral-200">3</span></a>
                                                        </div>
                                                        <div
                                                            class="flex flex-1 rtl:flex-row-reverse justify-end items-center gap-2 ">
                                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                                <button
                                                                    class="nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8"
                                                                    title="Share with" id="headlessui-menu-button-:r5:"
                                                                    type="button" aria-haspopup="menu" aria-expanded="false"
                                                                    data-headlessui-state="">
                                                                    <div><svg width="24" height="24" fill="none"
                                                                        viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75">
                                                                        </path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M12 14.25L12 5"></path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M8.75 8.25L12 4.75L15.25 8.25"></path>
                                                                    </svg><input type="text" hidden="" class="hidden"
                                                                        value="https://ncmaz.chisnghiax.com/debitis-alias-soluta-quis-odio-impedit-et/" />
                                                                    </div>
                                                                </button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full"
                                                data-nc-id="Card11"><a
                                                    href="https://ncmaz.chisnghiax.com/quia-maiores-et-esse-numquam/"
                                                    class="block absolute inset-0"></a>
                                                <div
                                                    class="block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden z-0 aspect-w-8 aspect-h-5 sm:aspect-w-4 sm:aspect-h-3">
                                                    <div>
                                                        <div class="nc-PostFeaturedMedia relative w-full h-full standardnotFeaturedImage"
                                                            data-nc-id="PostFeaturedMedia">
                                                            <div class="nc-NcImage absolute inset-0 overflow-hidden z-0 mabeUrlNotOk"
                                                                data-nc-id="NcImage">
                                                                <div
                                                                    class="object-cover w-full h-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500">
                                                                    <div class="h-2/4 max-w-[50%]"><svg class="w-full h-full"
                                                                        viewBox="0 0 197 193" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M145.828 48.9822C134.953 48.9822 126.105 57.8301 126.105 68.7051C126.105 79.5801 134.953 88.428 145.828 88.428C156.703 88.428 165.551 79.5805 165.551 68.7051C165.551 57.8293 156.704 48.9822 145.828 48.9822ZM145.828 80.7741C139.173 80.7741 133.759 75.3602 133.759 68.7051C133.759 62.0501 139.173 56.6361 145.828 56.6361C152.483 56.6361 157.897 62.0501 157.897 68.7051C157.897 75.3594 152.483 80.7741 145.828 80.7741Z"
                                                                            fill="currentColor"></path>
                                                                        <path
                                                                            d="M145.963 171.49C145.867 171.256 145.748 171.034 145.611 170.828C145.473 170.617 145.312 170.422 145.136 170.246C144.96 170.07 144.765 169.909 144.554 169.771C144.348 169.634 144.126 169.515 143.892 169.419C143.663 169.324 143.422 169.247 143.177 169.201C142.683 169.102 142.178 169.102 141.684 169.201C141.439 169.247 141.198 169.324 140.969 169.419C140.735 169.515 140.513 169.634 140.306 169.771C140.096 169.909 139.901 170.07 139.725 170.246C139.549 170.422 139.388 170.617 139.25 170.828C139.112 171.034 138.994 171.256 138.898 171.49C138.802 171.719 138.726 171.96 138.68 172.205C138.63 172.45 138.603 172.703 138.603 172.952C138.603 173.2 138.63 173.453 138.68 173.698C138.726 173.943 138.802 174.184 138.898 174.413C138.994 174.647 139.112 174.869 139.25 175.075C139.388 175.286 139.549 175.481 139.725 175.657C139.812 175.745 139.905 175.829 140.001 175.908C140.099 175.987 140.201 176.063 140.306 176.132C140.513 176.269 140.735 176.388 140.969 176.484C141.198 176.579 141.439 176.656 141.684 176.702C141.929 176.752 142.182 176.778 142.43 176.778C142.679 176.778 142.932 176.752 143.177 176.702C143.422 176.656 143.663 176.579 143.892 176.484C144.126 176.388 144.348 176.269 144.554 176.132C144.66 176.062 144.762 175.987 144.859 175.908C144.956 175.829 145.048 175.745 145.136 175.657C145.312 175.481 145.473 175.286 145.611 175.075C145.748 174.869 145.867 174.647 145.963 174.413C146.058 174.184 146.135 173.943 146.185 173.698C146.234 173.453 146.257 173.2 146.257 172.952C146.257 172.703 146.234 172.45 146.185 172.205C146.135 171.96 146.058 171.719 145.963 171.49Z"
                                                                            fill="currentColor"></path>
                                                                        <path
                                                                            d="M85.7341 20.0459C85.6384 19.8163 85.5198 19.5943 85.382 19.3838C85.2442 19.1772 85.0835 18.9782 84.9075 18.8021C84.7314 18.6261 84.5363 18.4653 84.3258 18.3276C84.1191 18.1898 83.8972 18.0712 83.6637 17.9755C83.4341 17.8798 83.193 17.8071 82.9481 17.7574C82.4544 17.6579 81.9492 17.6579 81.4556 17.7574C81.2106 17.8071 80.9695 17.8798 80.7361 17.9755C80.5065 18.0712 80.2845 18.1898 80.0779 18.3276C79.8674 18.4653 79.6722 18.6261 79.4962 18.8021C79.3201 18.9782 79.1594 19.1772 79.0178 19.3838C78.88 19.5943 78.7652 19.8163 78.6696 20.0459C78.5739 20.2755 78.4973 20.5166 78.4514 20.7615C78.4017 21.0103 78.3749 21.259 78.3749 21.5116C78.3749 21.7603 78.4017 22.0091 78.4514 22.2579C78.4973 22.5028 78.5739 22.7439 78.6696 22.9735C78.7652 23.2031 78.88 23.4251 79.0178 23.6356C79.1594 23.8422 79.3201 24.0412 79.4962 24.2172C79.6722 24.3933 79.8674 24.554 80.0779 24.6918C80.2845 24.8296 80.5065 24.9482 80.7361 25.0439C80.9695 25.1395 81.2106 25.2123 81.4556 25.262C81.7005 25.3118 81.9531 25.3385 82.2018 25.3385C82.4506 25.3385 82.7032 25.3118 82.9481 25.262C83.193 25.2123 83.4341 25.1395 83.6637 25.0439C83.8972 24.9482 84.1191 24.8296 84.3258 24.6918C84.5363 24.554 84.7314 24.3933 84.9075 24.2172C85.0835 24.0412 85.2442 23.8422 85.382 23.6356C85.5198 23.4251 85.6384 23.2031 85.7341 22.9735C85.8298 22.7439 85.9063 22.5028 85.9522 22.2579C86.002 22.0091 86.0288 21.7603 86.0288 21.5116C86.0288 21.259 86.002 21.0103 85.9522 20.7615C85.9063 20.5166 85.8298 20.2755 85.7341 20.0459Z"
                                                                            fill="currentColor"></path>
                                                                        <path
                                                                            d="M175.008 17.6988C172.714 7.99787 163.987 0.755371 153.594 0.755371H33.522C15.2866 0.754988 0.450684 15.5909 0.450684 33.8263V153.899C0.450684 165.824 9.98628 175.557 21.8326 175.891C24.1272 185.592 32.8542 192.835 43.2467 192.835H174.382C186.517 192.835 196.39 182.962 196.39 170.826V141.949V39.6911C196.39 27.7663 186.855 18.0329 175.008 17.6988ZM188.736 170.827C188.736 178.742 182.297 185.182 174.382 185.182H43.2467C37.1197 185.182 31.8799 181.322 29.8236 175.908C29.2232 174.327 28.8918 172.615 28.8918 170.827V168.254V150.524L72.7964 76.0808C74.1332 73.8144 76.517 72.4911 79.1323 72.5332C81.7633 72.5783 84.0851 73.9844 85.3434 76.2955L104.247 111.007L131.725 161.462C132.419 162.737 133.733 163.459 135.089 163.459C135.708 163.459 136.335 163.309 136.916 162.993C138.772 161.982 139.458 159.657 138.447 157.801L129.53 141.428C133.445 141.608 137.296 140.341 140.362 137.797L157.572 123.52C160.332 121.23 164.408 121.331 167.051 123.755L167.95 124.578L175.604 131.594L188.736 143.632V170.827ZM188.736 133.249L175.603 121.21L167.95 115.382C162.963 113.297 157.033 114.022 152.685 117.629L135.475 131.906C133.582 133.476 131.111 134.111 128.695 133.646C126.28 133.183 124.22 131.677 123.043 129.517L110.969 107.345L104.226 94.9648V94.9644L92.0655 72.6342C89.4716 67.8716 84.6856 64.9727 79.2632 64.8801C73.8423 64.7951 68.9588 67.521 66.2037 72.1922L28.8914 135.457V39.6911C28.8914 31.7758 35.331 25.3362 43.2463 25.3362H66.8937C69.0074 25.3362 70.7207 23.6229 70.7207 21.5093C70.7207 19.3957 69.0074 17.6823 66.8937 17.6823H43.2463C31.1106 17.6823 21.2375 27.5555 21.2375 39.6911V149.479V168.198C13.8924 167.575 8.10458 161.402 8.10458 153.899V33.8263C8.10458 19.8109 19.507 8.40888 33.522 8.40888H153.594C159.721 8.40888 164.961 12.2684 167.017 17.6827H97.5093C95.3957 17.6827 93.6824 19.396 93.6824 21.5097C93.6824 23.6233 95.3957 25.3366 97.5093 25.3366H167.949L175.603 25.3925C182.949 26.0147 188.736 32.1876 188.736 39.6911V133.249Z"
                                                                            fill="currentColor"></path>
                                                                    </svg></div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="nc-gallerySlider group relative z-10 xl:z-auto w-full h-full">
                                                                <div
                                                                    class=" h-full gallery_scroller hiddenScrollbar scrollBehaviorSmooth">
                                                                    <a href="https://ncmaz.chisnghiax.com/quia-maiores-et-esse-numquam/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354588-1.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354588-1-500x400.jpeg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354588-1-1024x819.jpeg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354588-1-768x614.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354588-1-1536x1229.jpeg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354588-1-1320x1056.jpeg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354588-1-300x240.jpeg 300w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354588-1.jpeg 1875w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/quia-maiores-et-esse-numquam/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354792-2.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354792-2-400x500.jpeg 400w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354792-2-240x300.jpeg 240w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354792-2.jpeg 500w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/quia-maiores-et-esse-numquam/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354635-1.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354635-1-400x500.jpeg 400w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354635-1-240x300.jpeg 240w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354635-1.jpeg 500w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/quia-maiores-et-esse-numquam/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354626-1.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/quia-maiores-et-esse-numquam/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354635-1.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354635-1-400x500.jpeg 400w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354635-1-240x300.jpeg 240w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354635-1.jpeg 500w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a><a
                                                                        href="https://ncmaz.chisnghiax.com/quia-maiores-et-esse-numquam/"
                                                                        class="block h-full w-full flex-shrink-0 ">
                                                                        <div class="nc-NcImage w-full h-full overflow-hidden z-0 mabeUrlOk"
                                                                            data-nc-id="NcImage"><img
                                                                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354549-1.jpeg"
                                                                                alt="" class="object-cover w-full h-full"
                                                                                loading="lazy"
                                                                                srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354549-1-400x500.jpeg 400w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354549-1-819x1024.jpeg 819w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354549-1-768x960.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354549-1-240x300.jpeg 240w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354549-1.jpeg 1200w"
                                                                                sizes="(max-width: 768px) 100vw, 768px" /></div>
                                                                    </a></div>
                                                                <div class="">
                                                                    <div class="nc-gallerySlider__prevBtn absolute opacity-0 group-hover:opacity-100 z-20 left-2 top-1/2 -translate-y-1/2 "
                                                                        title="Prev"></div>
                                                                    <div class="nc-gallerySlider__nextBtn absolute opacity-0 group-hover:opacity-100 z-20 right-2 top-1/2 -translate-y-1/2 "
                                                                        title="Next">
                                                                        <div class="nc-NextPrev flex items-center text-neutral-900 dark:text-neutral-300 space-x-2 relative"
                                                                            data-nc-id="NextPrev" data-glide-el=""><button
                                                                                class="w-8 h-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
                                                                                title="Next" data-glide-dir=""><i
                                                                                    class="las la-angle-right"></i></button></div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="absolute w-full left-0 bottom-0 h-6 bg-gradient-to-t from-neutral-800/50">
                                                                </div>
                                                                <div
                                                                    class="absolute z-10 bottom-3 left-0 w-full flex items-center justify-center glide__bullets">
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 glide__bullet--active">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                    <div
                                                                        class="glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="top-3 inset-x-3 z-10 absolute">
                                                    <div class="nc-CategoryBadgeList flow-root " data-nc-id="CategoryBadgeList">
                                                        <div class="flex flex-wrap space-x-2 -my-1 "><a
                                                            href="https://ncmaz.chisnghiax.com/category/photos/"
                                                            class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-indigo-800 bg-indigo-100 hover:bg-indigo-800">Photos</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-4 h-full flex flex-col flex-grow">
                                                    <div class="nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 overflow-hidden text-xs leading-none"
                                                        data-nc-id="PostCardMeta"><a
                                                            href="https://ncmaz.chisnghiax.com/author/jaren-nader/"
                                                            class="flex-shrink-0 relative flex items-center gap-2 ">
                                                            <div
                                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm ring-1 ring-white/80 dark:ring-neutral-900">
                                                                <img class="absolute inset-0 w-full h-full object-cover"
                                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg"
                                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-239x300.jpg 239w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-814x1024.jpg 814w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-768x966.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg 354w"
                                                                    sizes="100px" alt="pcormier" loading="lazy" /><span
                                                                        class="wil-avatar__name">p</span></div><span
                                                                            class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium "><span
                                                                                class="line-clamp-1"> Frederique</span></span>
                                                        </a><span
                                                            class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                                                                class="text-neutral-500 dark:text-neutral-400 font-normal "><span
                                                                    class="line-clamp-1">Sep 19, 2021</span></span></div>
                                                    <h3
                                                        class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3">
                                                        <a href="https://ncmaz.chisnghiax.com/quia-maiores-et-esse-numquam/"
                                                            class="line-clamp-2" title="Quia maiores et esse numquam">Quia maiores
                                                            et esse numquam</a></h3>
                                                    <div class="flex rtl:flex-row-reverse items-end justify-between gap-2 mt-auto">
                                                        <div class="nc-PostCardLikeAndComment flex items-center gap-2 relative"
                                                            data-nc-id="PostCardLikeAndComment">
                                                            <div class="ncmaz-button-like-post relative"><button
                                                                class="simplefavorite-button has-count" data-postid="104"
                                                                data-siteid="1" data-groupid="1" data-favoritecount="41"
                                                            ><svg width="24" height="24" fill="none"
                                                                viewBox="0 0 24 24">
                                                                    <path fill-rule="evenodd" stroke="currentColor"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        stroke-width="1"
                                                                        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg> <span
                                                                    class="simplefavorite-button-count">41</span></button></div>
                                                            <a href="https://ncmaz.chisnghiax.com/quia-maiores-et-esse-numquam/#comments"
                                                                class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex  px-3 h-8 text-xs focus:outline-none"
                                                                title="Comments" data-nc-id="PostCardCommentBtn"><svg width="24"
                                                                    height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" stroke-width="1"
                                                                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z">
                                                                    </path>
                                                                </svg><span
                                                                    class="ml-1 text-neutral-900 dark:text-neutral-200">2</span></a>
                                                        </div>
                                                        <div
                                                            class="flex flex-1 rtl:flex-row-reverse justify-end items-center gap-2 ">
                                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                                <button
                                                                    class="nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8"
                                                                    title="Share with" id="headlessui-menu-button-:r6:"
                                                                    type="button" aria-haspopup="menu" aria-expanded="false"
                                                                    data-headlessui-state="">
                                                                    <div><svg width="24" height="24" fill="none"
                                                                        viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75">
                                                                        </path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M12 14.25L12 5"></path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M8.75 8.25L12 4.75L15.25 8.25"></path>
                                                                    </svg><input type="text" hidden="" class="hidden"
                                                                        value="https://ncmaz.chisnghiax.com/quia-maiores-et-esse-numquam/" />
                                                                    </div>
                                                                </button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full"
                                                data-nc-id="Card11"><a
                                                    href="https://ncmaz.chisnghiax.com/corrupti-velit-in-quam-eos-consequatur/"
                                                    class="block absolute inset-0"></a>
                                                <div
                                                    class="block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden z-0 aspect-w-8 aspect-h-5 sm:aspect-w-4 sm:aspect-h-3">
                                                    <div>
                                                        <div class="nc-PostFeaturedMedia relative w-full h-full standardnotFeaturedImage"
                                                            data-nc-id="PostFeaturedMedia">
                                                            <div class="nc-MediaVideo absolute inset-0">
                                                                <div>
                                                                    <div class="absolute bg-black inset-0"
                                                                        style={{ height: "100%", width: "100%" }}>
                                                                        <div class="react-player__preview" tabindex="0"
                                                                            style={{ width: "100%", height: "100%", backgroundSize: "cover", backgroundPosition: "center center", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: "url('https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-620337-1.jpeg')" }}>
                                                                            <span
                                                                                class="absolute inset-0 flex items-center justify-center ">
                                                                                <div class="nc-PostTypeFeaturedIcon hover:scale-105 transform cursor-pointer transition-transform "
                                                                                    data-nc-id="PostTypeFeaturedIcon"><span
                                                                                        class="bg-neutral-900/60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11"><svg
                                                                                            class="w-6 h-6" viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                                            <path
                                                                                                d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199"
                                                                                                stroke="currentColor"
                                                                                                stroke-width="1.5"
                                                                                                stroke-miterlimit="10"
                                                                                                stroke-linecap="round"
                                                                                                stroke-linejoin="round"></path>
                                                                                        </svg></span></div>
                                                                            </span></div>
                                                                    </div><a class="absolute block inset-0 "
                                                                        href="https://ncmaz.chisnghiax.com/corrupti-velit-in-quam-eos-consequatur/"></a>
                                                                    <div
                                                                        class="absolute z-20 bottom-2 left-2 h-6 rounded-full bg-black bg-opacity-70 text-white items-center justify-center text-sm transform transition-transform opacity-0  w-6 hover:scale-125">
                                                                        <i class="las la-volume-off"></i></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="top-3 inset-x-3 z-10 absolute">
                                                    <div class="nc-CategoryBadgeList flow-root " data-nc-id="CategoryBadgeList">
                                                        <div class="flex flex-wrap space-x-2 -my-1 "><a
                                                            href="https://ncmaz.chisnghiax.com/category/toys/"
                                                            class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-gray-800 bg-gray-100 hover:bg-gray-800">Toys</a><a
                                                                href="https://ncmaz.chisnghiax.com/category/videos/"
                                                                class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-yellow-800 bg-yellow-100 hover:bg-yellow-800">Videos</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-4 h-full flex flex-col flex-grow">
                                                    <div class="nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 overflow-hidden text-xs leading-none"
                                                        data-nc-id="PostCardMeta"><a
                                                            href="https://ncmaz.chisnghiax.com/author/jaren-nader/"
                                                            class="flex-shrink-0 relative flex items-center gap-2 ">
                                                            <div
                                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm ring-1 ring-white/80 dark:ring-neutral-900">
                                                                <img class="absolute inset-0 w-full h-full object-cover"
                                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg"
                                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-239x300.jpg 239w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-814x1024.jpg 814w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-768x966.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg 354w"
                                                                    sizes="100px" alt="pcormier" loading="lazy" /><span
                                                                        class="wil-avatar__name">p</span></div><span
                                                                            class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium "><span
                                                                                class="line-clamp-1"> Frederique</span></span>
                                                        </a><span
                                                            class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                                                                class="text-neutral-500 dark:text-neutral-400 font-normal "><span
                                                                    class="line-clamp-1">Sep 17, 2021</span></span></div>
                                                    <h3
                                                        class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3">
                                                        <a href="https://ncmaz.chisnghiax.com/corrupti-velit-in-quam-eos-consequatur/"
                                                            class="line-clamp-2"
                                                            title="Corrupti velit in quam eos consequatur">Corrupti velit in quam
                                                            eos consequatur</a></h3>
                                                    <div class="flex rtl:flex-row-reverse items-end justify-between gap-2 mt-auto">
                                                        <div class="nc-PostCardLikeAndComment flex items-center gap-2 relative"
                                                            data-nc-id="PostCardLikeAndComment">
                                                            <div class="ncmaz-button-like-post relative"><button
                                                                class="simplefavorite-button has-count" data-postid="317"
                                                                data-siteid="1" data-groupid="1" data-favoritecount="35"
                                                            ><svg width="24" height="24" fill="none"
                                                                viewBox="0 0 24 24">
                                                                    <path fill-rule="evenodd" stroke="currentColor"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        stroke-width="1"
                                                                        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg> <span
                                                                    class="simplefavorite-button-count">35</span></button></div>
                                                            <a href="https://ncmaz.chisnghiax.com/corrupti-velit-in-quam-eos-consequatur/#comments"
                                                                class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex  px-3 h-8 text-xs focus:outline-none"
                                                                title="Comments" data-nc-id="PostCardCommentBtn"><svg width="24"
                                                                    height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" stroke-width="1"
                                                                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z">
                                                                    </path>
                                                                </svg><span
                                                                    class="ml-1 text-neutral-900 dark:text-neutral-200">0</span></a>
                                                        </div>
                                                        <div
                                                            class="flex flex-1 rtl:flex-row-reverse justify-end items-center gap-2 ">
                                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                                <button
                                                                    class="nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8"
                                                                    title="Share with" id="headlessui-menu-button-:r7:"
                                                                    type="button" aria-haspopup="menu" aria-expanded="false"
                                                                    data-headlessui-state="">
                                                                    <div><svg width="24" height="24" fill="none"
                                                                        viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75">
                                                                        </path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M12 14.25L12 5"></path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M8.75 8.25L12 4.75L15.25 8.25"></path>
                                                                    </svg><input type="text" hidden="" class="hidden"
                                                                        value="https://ncmaz.chisnghiax.com/corrupti-velit-in-quam-eos-consequatur/" />
                                                                    </div>
                                                                </button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full"
                                                data-nc-id="Card11"><a
                                                    href="https://ncmaz.chisnghiax.com/id-iusto-sunt-et-atque-eum-accusantium/"
                                                    class="block absolute inset-0"></a>
                                                <div
                                                    class="block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden z-0 aspect-w-8 aspect-h-5 sm:aspect-w-4 sm:aspect-h-3">
                                                    <div>
                                                        <div class="nc-PostFeaturedMedia relative w-full h-full standardnotFeaturedImage"
                                                            data-nc-id="PostFeaturedMedia"><a
                                                                href="https://ncmaz.chisnghiax.com/id-iusto-sunt-et-atque-eum-accusantium/"
                                                                class="absolute inset-0 group-hover:opacity-90 transition-opacity">
                                                                <div class="nc-NcImage absolute inset-0 overflow-hidden z-0 mabeUrlOk"
                                                                    data-nc-id="NcImage"><img
                                                                        src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2002719-1.jpeg"
                                                                        alt="" class="object-cover w-full h-full" loading="lazy"
                                                                        srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2002719-1-500x333.jpeg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2002719-1-1024x683.jpeg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2002719-1-768x512.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2002719-1-1536x1024.jpeg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2002719-1-2048x1365.jpeg 2048w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2002719-1-1320x880.jpeg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2002719-1-300x200.jpeg 300w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2002719-1.jpeg 1920w"
                                                                        sizes="(max-width: 475px) 100vw, 475px" /></div>
                                                            </a></div>
                                                    </div>
                                                </div>
                                                <div class="top-3 inset-x-3 z-10 absolute">
                                                    <div class="nc-CategoryBadgeList flow-root " data-nc-id="CategoryBadgeList">
                                                        <div class="flex flex-wrap space-x-2 -my-1 "><a
                                                            href="https://ncmaz.chisnghiax.com/category/health/"
                                                            class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-blue-800 bg-blue-100 hover:bg-blue-800">Health</a><a
                                                                href="https://ncmaz.chisnghiax.com/category/mobile/"
                                                                class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-red-800 bg-red-100 hover:bg-red-800">Mobile</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-4 h-full flex flex-col flex-grow">
                                                    <div class="nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 overflow-hidden text-xs leading-none"
                                                        data-nc-id="PostCardMeta"><a
                                                            href="https://ncmaz.chisnghiax.com/author/jaren-nader/"
                                                            class="flex-shrink-0 relative flex items-center gap-2 ">
                                                            <div
                                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm ring-1 ring-white/80 dark:ring-neutral-900">
                                                                <img class="absolute inset-0 w-full h-full object-cover"
                                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg"
                                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-239x300.jpg 239w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-814x1024.jpg 814w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-768x966.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg 354w"
                                                                    sizes="100px" alt="pcormier" loading="lazy" /><span
                                                                        class="wil-avatar__name">p</span></div><span
                                                                            class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium "><span
                                                                                class="line-clamp-1"> Frederique</span></span>
                                                        </a><span
                                                            class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                                                                class="text-neutral-500 dark:text-neutral-400 font-normal "><span
                                                                    class="line-clamp-1">Sep 12, 2021</span></span></div>
                                                    <h3
                                                        class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3">
                                                        <a href="https://ncmaz.chisnghiax.com/id-iusto-sunt-et-atque-eum-accusantium/"
                                                            class="line-clamp-2" title="Id iusto sunt et atque eum accusantium">Id
                                                            iusto sunt et atque eum accusantium</a></h3>
                                                    <div class="flex rtl:flex-row-reverse items-end justify-between gap-2 mt-auto">
                                                        <div class="nc-PostCardLikeAndComment flex items-center gap-2 relative"
                                                            data-nc-id="PostCardLikeAndComment">
                                                            <div class="ncmaz-button-like-post relative"><button
                                                                class="simplefavorite-button has-count" data-postid="82"
                                                                data-siteid="1" data-groupid="1" data-favoritecount="8"
                                                            ><svg width="24" height="24" fill="none"
                                                                viewBox="0 0 24 24">
                                                                    <path fill-rule="evenodd" stroke="currentColor"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        stroke-width="1"
                                                                        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg> <span
                                                                    class="simplefavorite-button-count">8</span></button></div>
                                                            <a href="https://ncmaz.chisnghiax.com/id-iusto-sunt-et-atque-eum-accusantium/#comments"
                                                                class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex  px-3 h-8 text-xs focus:outline-none"
                                                                title="Comments" data-nc-id="PostCardCommentBtn"><svg width="24"
                                                                    height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" stroke-width="1"
                                                                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z">
                                                                    </path>
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z">
                                                                    </path>
                                                                </svg><span
                                                                    class="ml-1 text-neutral-900 dark:text-neutral-200">1</span></a>
                                                        </div>
                                                        <div
                                                            class="flex flex-1 rtl:flex-row-reverse justify-end items-center gap-2 ">
                                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                                <button
                                                                    class="nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8"
                                                                    title="Share with" id="headlessui-menu-button-:r8:"
                                                                    type="button" aria-haspopup="menu" aria-expanded="false"
                                                                    data-headlessui-state="">
                                                                    <div><svg width="24" height="24" fill="none"
                                                                        viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75">
                                                                        </path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M12 14.25L12 5"></path>
                                                                        <path stroke="currentColor" stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="1"
                                                                            d="M8.75 8.25L12 4.75L15.25 8.25"></path>
                                                                    </svg><input type="text" hidden="" class="hidden"
                                                                        value="https://ncmaz.chisnghiax.com/id-iusto-sunt-et-atque-eum-accusantium/" />
                                                                    </div>
                                                                </button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-center mt-8 sm:mt-10 xl:mt-14"><button
                                        class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                        title="">Show me more</button></div>
                                </div>
                            </div>
                        </div>
                        <div class="nc-PageArchiveAuthor__SectionTrendingCategories container"
                            data-is-react-component="SectionTrendingCategories"
                            data-component-props="{&quot;enable&quot;:true,&quot;orderBy&quot;:&quot;count&quot;,&quot;heading&quot;:&quot;Top trending topics&quot;,&quot;subHeading&quot;:&quot;Discover over 100 topics&quot;,&quot;itemPerPage&quot;:&quot;10&quot;}">
                            <div class="relative py-16">
                                <div class="nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100 dark:bg-black dark:bg-opacity-20 "
                                    data-nc-id="BackgroundSection"></div>
                                <div class="nc-SectionGridCategoryBox relative ">
                                    <div
                                        class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-14 text-neutral-900 dark:text-neutral-50">
                                        <div class="text-center w-full max-w-2xl mx-auto ">
                                            <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold">Top trending topics</h3><span
                                                class="mt-2 md:mt-3 font-normal block text-base md:text-xl text-neutral-500 dark:text-neutral-400">Discover
                                                over 100 topics</span>
                                        </div>
                                    </div>
                                    <div
                                        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8">
                                        <a href="https://ncmaz.chisnghiax.com/category/photos/"
                                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover nc-dark-box-bg-has-hover ] "
                                            data-nc-id="CardCategory2"><span
                                                class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-red-800 bg-red-100  absolute top-3 left-3">#1</span>
                                            <div class="nc-NcImage flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden z-0 mabeUrlOk"
                                                data-nc-id="NcImage"><img
                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-2.jpeg"
                                                    alt="Photos" class="object-cover w-full h-full" loading="lazy"
                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-2-375x500.jpeg 375w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-2-768x1024.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-2-1152x1536.jpeg 1152w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-2-1536x2048.jpeg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-2-1320x1759.jpeg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-2-225x300.jpeg 225w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-2.jpeg 1440w"
                                                    sizes="(max-width: 768px) 100vw, 768px" /></div>
                                            <div class="mt-3 ">
                                                <h4 class="text-base sm:text-lg font-semibold "><span
                                                    class="line-clamp-1">Photos</span></h4><span
                                                        class="block mt-[2px] text-sm text-neutral-500 dark:text-neutral-400">17
                                                    Articles</span>
                                            </div>
                                        </a><a href="https://ncmaz.chisnghiax.com/category/videos/"
                                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover nc-dark-box-bg-has-hover ] "
                                            data-nc-id="CardCategory2"><span
                                                class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-purple-800 bg-purple-100  absolute top-3 left-3">#2</span>
                                            <div class="nc-NcImage flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden z-0 mabeUrlOk"
                                                data-nc-id="NcImage"><img
                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-1705264-1.jpeg"
                                                    alt="Videos" class="object-cover w-full h-full" loading="lazy"
                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-1705264-1-500x333.jpeg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-1705264-1-1024x683.jpeg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-1705264-1-768x512.jpeg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-1705264-1-1536x1024.jpeg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-1705264-1-2048x1365.jpeg 2048w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-1705264-1-1320x880.jpeg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-1705264-1-300x200.jpeg 300w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-1705264-1.jpeg 1920w"
                                                    sizes="(max-width: 768px) 100vw, 768px" /></div>
                                            <div class="mt-3 ">
                                                <h4 class="text-base sm:text-lg font-semibold "><span
                                                    class="line-clamp-1">Videos</span></h4><span
                                                        class="block mt-[2px] text-sm text-neutral-500 dark:text-neutral-400">14
                                                    Articles</span>
                                            </div>
                                        </a><a href="https://ncmaz.chisnghiax.com/category/toys/"
                                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover nc-dark-box-bg-has-hover ] "
                                            data-nc-id="CardCategory2"><span
                                                class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute top-3 left-3 text-green-800 bg-green-100">#3</span>
                                            <div class="nc-NcImage flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden z-0 mabeUrlOk"
                                                data-nc-id="NcImage"><img
                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/p0olraayxly-1.jpg"
                                                    alt="Toys" class="object-cover w-full h-full" loading="lazy"
                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/p0olraayxly-1-500x500.jpg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/p0olraayxly-1-1024x1024.jpg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/p0olraayxly-1-150x150.jpg 150w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/p0olraayxly-1-768x768.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/p0olraayxly-1-300x300.jpg 300w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/p0olraayxly-1.jpg 1200w"
                                                    sizes="(max-width: 768px) 100vw, 768px" /></div>
                                            <div class="mt-3 ">
                                                <h4 class="text-base sm:text-lg font-semibold "><span
                                                    class="line-clamp-1">Toys</span></h4><span
                                                        class="block mt-[2px] text-sm text-neutral-500 dark:text-neutral-400">8
                                                    Articles</span>
                                            </div>
                                        </a><a href="https://ncmaz.chisnghiax.com/category/podcast/"
                                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover nc-dark-box-bg-has-hover ] "
                                            data-nc-id="CardCategory2">
                                            <div class="nc-NcImage flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden z-0 mabeUrlOk"
                                                data-nc-id="NcImage"><img
                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1.jpg"
                                                    alt="Podcast" class="object-cover w-full h-full" loading="lazy"
                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1-500x334.jpg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1-1024x684.jpg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1-768x513.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1-1536x1025.jpg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1-1320x881.jpg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1-300x200.jpg 300w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7lnatqymzm4-1.jpg 1600w"
                                                    sizes="(max-width: 768px) 100vw, 768px" /></div>
                                            <div class="mt-3 ">
                                                <h4 class="text-base sm:text-lg font-semibold "><span
                                                    class="line-clamp-1">Podcast</span></h4><span
                                                        class="block mt-[2px] text-sm text-neutral-500 dark:text-neutral-400">8
                                                    Articles</span>
                                            </div>
                                        </a><a href="https://ncmaz.chisnghiax.com/category/mobile/"
                                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover nc-dark-box-bg-has-hover ] "
                                            data-nc-id="CardCategory2">
                                            <div class="nc-NcImage flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden z-0 mabeUrlOk"
                                                data-nc-id="NcImage"><img
                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/k3pya0cdll0-1.jpg"
                                                    alt="Mobile" class="object-cover w-full h-full" loading="lazy"
                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/k3pya0cdll0-1-386x500.jpg 386w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/k3pya0cdll0-1-791x1024.jpg 791w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/k3pya0cdll0-1-768x994.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/k3pya0cdll0-1-232x300.jpg 232w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/k3pya0cdll0-1.jpg 927w"
                                                    sizes="(max-width: 768px) 100vw, 768px" /></div>
                                            <div class="mt-3 ">
                                                <h4 class="text-base sm:text-lg font-semibold "><span
                                                    class="line-clamp-1">Mobile</span></h4><span
                                                        class="block mt-[2px] text-sm text-neutral-500 dark:text-neutral-400">8
                                                    Articles</span>
                                            </div>
                                        </a><a href="https://ncmaz.chisnghiax.com/category/javascript/"
                                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover nc-dark-box-bg-has-hover ] "
                                            data-nc-id="CardCategory2">
                                            <div class="nc-NcImage flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden z-0 mabeUrlOk"
                                                data-nc-id="NcImage"><img
                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/m_hrflhgabo-1.jpg"
                                                    alt="Javascript" class="object-cover w-full h-full" loading="lazy"
                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/m_hrflhgabo-1-500x333.jpg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/m_hrflhgabo-1-1024x682.jpg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/m_hrflhgabo-1-768x511.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/m_hrflhgabo-1-1536x1022.jpg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/m_hrflhgabo-1-1320x879.jpg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/m_hrflhgabo-1-300x200.jpg 300w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/m_hrflhgabo-1.jpg 1600w"
                                                    sizes="(max-width: 768px) 100vw, 768px" /></div>
                                            <div class="mt-3 ">
                                                <h4 class="text-base sm:text-lg font-semibold "><span
                                                    class="line-clamp-1">Javascript</span></h4><span
                                                        class="block mt-[2px] text-sm text-neutral-500 dark:text-neutral-400">8
                                                    Articles</span>
                                            </div>
                                        </a><a href="https://ncmaz.chisnghiax.com/category/sports/"
                                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover nc-dark-box-bg-has-hover ] "
                                            data-nc-id="CardCategory2">
                                            <div class="nc-NcImage flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden z-0 mabeUrlOk"
                                                data-nc-id="NcImage"><img
                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2138922-1-1.jpeg"
                                                    alt="Sports" class="object-cover w-full h-full" loading="lazy"
                                                    sizes="(max-width: 768px) 100vw, 768px" /></div>
                                            <div class="mt-3 ">
                                                <h4 class="text-base sm:text-lg font-semibold "><span
                                                    class="line-clamp-1">Sports</span></h4><span
                                                        class="block mt-[2px] text-sm text-neutral-500 dark:text-neutral-400">7
                                                    Articles</span>
                                            </div>
                                        </a><a href="https://ncmaz.chisnghiax.com/category/travel/"
                                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover nc-dark-box-bg-has-hover ] "
                                            data-nc-id="CardCategory2">
                                            <div class="nc-NcImage flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden z-0 mabeUrlOk"
                                                data-nc-id="NcImage"><img
                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/hrrjixxrgfq-1.jpg"
                                                    alt="Travel" class="object-cover w-full h-full" loading="lazy"
                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/hrrjixxrgfq-1-500x324.jpg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/hrrjixxrgfq-1-1024x663.jpg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/hrrjixxrgfq-1-768x497.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/hrrjixxrgfq-1-1536x995.jpg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/hrrjixxrgfq-1-1320x855.jpg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/hrrjixxrgfq-1-300x194.jpg 300w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/hrrjixxrgfq-1.jpg 1600w"
                                                    sizes="(max-width: 768px) 100vw, 768px" /></div>
                                            <div class="mt-3 ">
                                                <h4 class="text-base sm:text-lg font-semibold "><span
                                                    class="line-clamp-1">Travel</span></h4><span
                                                        class="block mt-[2px] text-sm text-neutral-500 dark:text-neutral-400">5
                                                    Articles</span>
                                            </div>
                                        </a><a href="https://ncmaz.chisnghiax.com/category/outdoors/"
                                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover nc-dark-box-bg-has-hover ] "
                                            data-nc-id="CardCategory2">
                                            <div class="nc-NcImage flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden z-0 mabeUrlOk"
                                                data-nc-id="NcImage"><img
                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/jyp4urfcibw-1.jpg"
                                                    alt="Outdoors" class="object-cover w-full h-full" loading="lazy"
                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/jyp4urfcibw-1-500x333.jpg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/jyp4urfcibw-1-1024x683.jpg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/jyp4urfcibw-1-768x512.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/jyp4urfcibw-1-1536x1024.jpg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/jyp4urfcibw-1-1320x880.jpg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/jyp4urfcibw-1-300x200.jpg 300w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/jyp4urfcibw-1.jpg 1600w"
                                                    sizes="(max-width: 768px) 100vw, 768px" /></div>
                                            <div class="mt-3 ">
                                                <h4 class="text-base sm:text-lg font-semibold "><span
                                                    class="line-clamp-1">Outdoors</span></h4><span
                                                        class="block mt-[2px] text-sm text-neutral-500 dark:text-neutral-400">5
                                                    Articles</span>
                                            </div>
                                        </a><a href="https://ncmaz.chisnghiax.com/category/health/"
                                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover nc-dark-box-bg-has-hover ] "
                                            data-nc-id="CardCategory2">
                                            <div class="nc-NcImage flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden z-0 mabeUrlOk"
                                                data-nc-id="NcImage"><img
                                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/acrbf9blfve-1.jpg"
                                                    alt="Health" class="object-cover w-full h-full" loading="lazy"
                                                    srcset="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/acrbf9blfve-1-500x333.jpg 500w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/acrbf9blfve-1-1024x683.jpg 1024w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/acrbf9blfve-1-768x512.jpg 768w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/acrbf9blfve-1-1536x1024.jpg 1536w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/acrbf9blfve-1-1320x880.jpg 1320w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/acrbf9blfve-1-300x200.jpg 300w, https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/acrbf9blfve-1.jpg 1600w"
                                                    sizes="(max-width: 768px) 100vw, 768px" /></div>
                                            <div class="mt-3 ">
                                                <h4 class="text-base sm:text-lg font-semibold "><span
                                                    class="line-clamp-1">Health</span></h4><span
                                                        class="block mt-[2px] text-sm text-neutral-500 dark:text-neutral-400">5
                                                    Articles</span>
                                            </div>
                                        </a></div>
                                </div>
                                <div class="relative mx-auto flex justify-center"></div>
                            </div>
                        </div>
                    </div>
                </main>

            </Layout>
        </>
    );
}
