import Vue from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueRouter from "vue-router";
import PricingPage from "./containers/PricingPage.vue";
import HomePage from "./containers/HomePage";
import ContactPage from "./containers/ContactPage";
import LoginPage from "./containers/LoginPage";
import GetStartedPage from "./containers/GetStartedPage";
import { ToggleButton } from "vue-js-toggle-button";
import RegisterPage from "./containers/RegisterPage";
import SupportPage from "./containers/SupportPage";
import CreateAccountPage from "./containers/CreateAccountPage";
import AccountPage from "./containers/AccountPage";

Vue.use(VueRouter);

const routes = [
	{
		path: "/pricing",
		component: PricingPage,
	},
	{
		path: "/",
		component: HomePage,
	},
	{
		path: "/contact",
		component: ContactPage,
	},
	{
		path: "/login",
		component: LoginPage,
	},
	{
		path: "/getstarted",
		component: GetStartedPage,
	},
	{
		path: "/register",
		component: RegisterPage,
	},
	{
		path: "/support",
		component: SupportPage,
	},
	{
		path: "/create-account",
		component: CreateAccountPage,
	},
	{
		path: "/account",
		component: AccountPage,
	},
];

const router = new VueRouter({
	routes,
	mode: "history",
});

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("ToggleButton", ToggleButton);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router,
}).$mount("#app");
