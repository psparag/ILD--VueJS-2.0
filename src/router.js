import Vue from "vue";
import VueRouter from "vue-router";
import home from "./views/home";
import about from "./views/about";
import projects from "./json/projects.json";
import services from "./json/services.json";
import designApproach from "./json/designProcess.json";
import teams from "./json/team.json";
import brands from "./json/brand.json";
import featuredProducts from "./json/featuredProducts.json";
import featuredProjects from "./json/featuredProjects.json";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
    routes: [
        {
            path: "/",
            name: "home",
            component: home,
            props: true,
        },
        {
            path: "/about",
            name: "about",
            props: true,
            component: about,
            // lazy load routes
            //component: () => import(/* webpackChunkName: "about" */ "./views/about")
        },
        {
            path: "/loader",
            name: "loader",
            props: true,
            // lazy load routes
            component: () => import(/* webpackChunkName: "loaderpage" */ "./views/loaderpage"),
        },
        {
            path: "/project/:slug",
            name: "ProductSingle",
            props: true,
            // lazy load routes
            component: () => import(/* webpackChunkName: "productsingle" */ "./views/productsingle"),
            beforeEnter: (to, from, next) => {
                const exist = projects.find((project) => project.slug === to.params.slug);
                if (exist) {
                    next();
                } else {
                    next({ name: "notFound" });
                }
            },
        },
        {
            path: "/featured/products/:slug",
            name: "FeaturedProductSingle",
            props: true,
            // lazy load routes
            component: () => import(/* webpackChunkName: "featureedProductSingle" */ "./views/featuredProductSingle"),
            beforeEnter: (to, from, next) => {
                const exist = featuredProducts.find((featuredProduct) => featuredProduct.slug === to.params.slug);
                if (exist) {
                    next();
                } else {
                    next({ name: "notFound" });
                }
            },
        },
        {
            path: "/featured/projects/:slug",
            name: "FeaturedProjectSingle",
            props: true,
            // lazy load routes
            component: () => import(/* webpackChunkName: "featuredProjectSingle" */ "./views/featuredProjectSingle"),
            beforeEnter: (to, from, next) => {
                const exist = featuredProjects.find((featuredProject) => featuredProject.slug === to.params.slug);
                if (exist) {
                    next();
                } else {
                    next({ name: "notFound" });
                }
            },
        },

        {
            path: "/service/:slug",
            name: "ServiceSingle",
            props: true,
            // lazy load routes
            component: () => import(/* webpackChunkName: "ServiceSingle" */ "./views/singleservice"),
            beforeEnter: (to, from, next) => {
                const exist = services.find((service) => service.slug === to.params.slug);
                if (exist) {
                    next();
                } else {
                    next({ name: "notFound" });
                }
            },
        },
        {
            path: "/design/:slug",
            name: "DesignSingle",
            props: true,
            // lazy load routes
            component: () => import(/* webpackChunkName: "DesignSingle" */ "./views/singleDesign"),
            beforeEnter: (to, from, next) => {
                const exist = designApproach.find((design) => design.slug === to.params.slug);
                if (exist) {
                    next();
                } else {
                    next({ name: "notFound" });
                }
            },
        },
        {
            path: "/team",
            name: "team",
            props: true,
            // lazy load routes
            component: () => import(/* webpackChunkName: "team" */ "./views/team"),
        },
        {
            path: "/partners",
            name: "Partners",
            props: true,
            // lazy load routes
            component: () => import(/* webpackChunkName: "Partners" */ "./views/brands"),
        },
        {
            path: "/work",
            name: "works",
            props: true,
            // lazy load routes
            component: () => import(/* webpackChunkName: "works" */ "./views/work"),
        },
        // {
        //     path: "/service",
        //     name: "service",
        //     props: true,
        //     // lazy load routes
        //     component: () => import(/* webpackChunkName: "service" */ "./views/singleservice"),
        // },
        {
            path: "/team/:slug",
            name: "TeamSingle",
            props: true,
            // lazy load routes
            component: () => import(/* webpackChunkName: "teamsingle" */ "./views/TeamSingle"),
            beforeEnter: (to, from, next) => {
                const exist = teams.find((team) => team.slug === to.params.slug);
                if (exist) {
                    next();
                } else {
                    next({ name: "notFound" });
                }
            },
        },
        {
            path: "/brands/:slug",
            name: "BrandSingle",
            props: true,
            // lazy load routes
            component: () => import(/* webpackChunkName: "BrandSingle" */ "./views/BrandSingle"),
            beforeEnter: (to, from, next) => {
                const exist = brands.find((brand) => brand.slug === to.params.slug);
                if (exist) {
                    next();
                } else {
                    next({ name: "notFound" });
                }
            },
        },
        {
            path: "/404",
            alias: "*",
            name: "notFound",
            component: () => import(/* webpackChunkName: "notfound" */ "./views/404"),
        },
    ],
});
