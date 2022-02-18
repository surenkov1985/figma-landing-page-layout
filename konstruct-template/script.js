const Header = {
	data() {
		return {
			text: "PARTNER WITH KONSTUCT",
			property: "An award-winning construction management firm",
			downText: "SCROLL DOWN",
		};
	},
};
const Navbar = {
	data() {
		return {
			list: ["HOME", "ABOUT", "SERVICES", "WORK", "CONTACT"],
		};
	},
};

Vue.createApp(Header).mount("#header");
Vue.createApp(Navbar).mount("#navbar");
