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


export default function Index() {


    return (
        <>
            <Layout>
                <div className="nc-BgGlassmorphism absolute inset-x-0 md:top-10 xl:top-20 min-h-0 pl-20 py-24 flex overflow-hidden z-0"
                    data-nc-id="BgGlassmorphism"><span
                        className="block bg-[#ef233c] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span><span
                            className="block bg-[#04868b] w-72 h-72 -ml-20 mt-40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96 nc-animation-delay-2000"></span>
                </div>
                <div className="relative">
                    <div className="wp-block-group container">
                        <HeroSection />
                    </div>
                    <ExploreLatestArticles />

                    <div className="wp-block-group container">
                        <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                            <div style={{ height: "112px" }} aria-hidden="true" className="wp-block-spacer"></div>
                            <TheVideos />
                            <div style={{ height: "112px" }} aria-hidden="true" className="wp-block-spacer"></div>
                            <BecomeAuthor />
                            <div style={{ height: "112px" }} aria-hidden="true" className="wp-block-spacer"></div>
                            <TrendingArticles />
                        </div>
                    </div>
                    <p></p>
                </div>
            </Layout>
        </>
    );
}
