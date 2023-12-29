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

    updatePage();
}

applyCookieStyling();

form.addEventListener('submit', (event)=> {

	event.preventDefault();
    console.log('submit event');

    updateCookies();
    updatePage();
})
form.addEventListener('change', (event)=> {
    console.log('change event');
    
    updateCookies();
    updatePage();
})


function updateCookies() {
    document.cookie = `fontsize = ${form.fontsize.value}`;
	document.cookie = `fontcolor = ${form.fontcolor.value}`;
}

function updatePage() {
    document.body.style.fontSize = `${form.fontsize.value}px`;
    document.body.style.backgroundColor = `${form.fontcolor.value}`;
    document.body.style.color = `${form.fontcolor.value}`;    
}


