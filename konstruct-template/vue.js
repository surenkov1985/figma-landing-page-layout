const Header = {
	data() {
		return {
			title: "PARTNER WITH KONSTUCT",
			titleText: "An award-winning construction management firm",
			downText: "SCROLL DOWN",
			list: ["HOME", "ABOUT", "SERVICES", "WORK", "CONTACT"],
		};
	},
};
const Main = {
	data() {
		return {
			title: "OUR STORY",
			storyTitle:
				"Founded in 2011 by John Mathew Smith, Konstruct has become the number one construction management firm",
			storyParagraph:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
			storyItems: [
				{
					class: "left",
					text: "we plan",
					style: {
						backgroundImage: "url('./images/image1.png')",
						backgroundRepeat: "no-repeat",
						backgroundSize: "400px 300px",
						backgroundPosition: "-248px -8px",
					},
				},
				{
					class: "center",
					text: "we manage",
					style: {
						backgroundImage: "url('./images/image2.png')",
						backgroundRepeat: "no-repeat",
						backgroundSize: "300px 225px",
						backgroundPosition: "-59px -0px",
					},
				},
				{
					class: "right",
					text: "we build",
					style: {
						backgroundImage: "url('./images/image3.png')",
						backgroundRepeat: "no-repeat",
						backgroundSize: "300px 225px",
						backgroundPosition: "-102px -3px",
					},
				},
			],
			presLeft: "WE PLAN",
			presCenter: "WE MANAGE",
			presRight: "WE BUILD",
			servTitle: "OUR CAPABILITIES",
			servDesc:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
			servLink: "ALL SERVICES",
			servList: [
				{
					servLogo: "images/Bitmap.svg",
					listHead: "PROJECT AND CONSTRUCTION MANAGEMENT",
					listDesc:
						"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
				},
				{
					servLogo: "images/Bitmap2.svg",
					listHead: "STRUCTURE AUDIT AND MAINTENANCE",
					listDesc:
						"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
				},
				{
					servLogo: "images/Bitmap3.svg",
					listHead: "FACTORY CONSTRUCTION AND MODELING",
					listDesc:
						"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
				},
			],
			buildBack: {
				height: "498px",
				backgroundImage: "url('./images/build.png')",
			},
			buildHead: "Want to build something amazing?",
			buildBtn: "GET IN TOUCH",
			signTitle: "Newsletter Signup",
		};
	},
};

const Footer = {
	data() {
		return {
			presetsTitle: "COMPANY",
			footerLogo: "./images/projeco-logo.svg",
			footerDesk:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
			footerLink: "LINKS",
			navList: [
				["HOME", "ABOUT", "SERVICES", "PROJECTS", "CONTACT US"],
				["FAQ", "TERMS", "CAREERS"],
				["BLOG", "PARTNERS", "NEWS"],
			],
			contaktLink: "CONTACT US",
			contacts: [
				{
					info: "#",
					text: "213 Baker StreetOriel City Kounty7000 KNW,Kountry Name",
				},
				{
					info: "tel:+239942334022",
					text: "+23 994 233 4022",
				},
				{
					info: "mailto:info@konstruct.com",
					text: "info@konstruct.com",
				},
			],
			socialStyle: [
				{
					style: {
						backgroundImage: "url('./images/facebook.svg')",
						backgroundRepeat: "no-repeat",
						backgroundSize: "100%",
						width: "12px",
						height: "12px",
					},
				},
				{
					style: {
						backgroundImage: "url('./images/twitter.svg')",
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
						width: "12px",
						height: "12px",
					},
				},
				{
					style: {
						backgroundImage: "url('./images/google.svg')",
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
						width: "12px",
						height: "12px",
					},
				},
			],
			// {
			// 		image: "./facebook.svg",
			// 		alt: "fbLogo",
			// 	},
			// 	{
			// 		image: "./twitter.svg",
			// 		alt: "twitLogo",
			// 	},
			// 	{
			// 		image: "./google.svg",
			// 		alt: "googleLogo",
			// 	},
		};
	},
};

Vue.createApp(Header).mount(".header");
Vue.createApp(Main).mount(".main");
Vue.createApp(Footer).mount(".footer");
