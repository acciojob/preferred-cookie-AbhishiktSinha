//your JS code here. If required.
const form = document.querySelector('form');

const cookies = document.cookie.split('; ');

// apply pre-existing styling
function applyCookieStyling() {
	
	const fontsizeCookie = cookies.find((element)=> {
		return (decodeURIComponent(element.trim()).startsWith('fontsize'));
	});
	
	const fontcolorCookie = cookies.find((element)=> {
		return (decodeURIComponent(element.trim()).startsWith('fontcolor'));
	});

	console.log(fontsizeCookie, fontcolorCookie);
	
	if (fontsizeCookie) {
		const fontsize = fontsizeCookie.slice(fontsizeCookie.indexOf('=') + 1);
		form.fontsize.value = Number(decodeURIComponent(fontsize));
	}
	if (fontcolorCookie) {
		const fontcolor = fontcolorCookie.slice(fontcolorCookie.indexOf('=') + 1);
		form.fontcolor.value = decodeURIComponent(fontcolor);
	}
}

applyCookieStyling();

form.addEventListener('submit', (event)=> {

	event.preventDefault();
    console.log('submit event');
	document.cookie = `fontsize = ${form.fontsize.value}`;
	document.cookie = `fontcolor = ${form.fontcolor.value}`;
})


