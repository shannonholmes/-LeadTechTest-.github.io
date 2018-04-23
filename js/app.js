function showStep(stepIndex) {
    for (var i=0; i < 3; i++) {
	var elem = document.getElementById('step' + (i + 1));
	elem.style.display = i === stepIndex ? 'block' : 'none';
    }

    if (stepIndex === 2) {
	document.getElementById('emailDisplay').innerHTML = document.getElementById('email').value;
	document.getElementById('nameDisplay').innerHTML = document.getElementById('name').value;
	document.getElementById('postcodeDisplay').innerHTML = document.getElementById('postcode').value;
    }
}
