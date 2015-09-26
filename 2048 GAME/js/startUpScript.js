$(document).ready(function () {
    localStorage.setItem('MAX_HIGH_SCORE', 0);
	toastrInit();
    setStartUpValues();	
});

function toastrInit() { 

	toastr.options = {
		"closeButton": false,
		"debug": false,
		"newestOnTop": true,
		"progressBar": false,
		"positionClass": "toast-top-center",
		"preventDuplicates": true,
		"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "2000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	}
}
function setStartUpValues() {
    var firstRandomStartPosition = Math.ceil(Math.random() * 15) + 1;
    var secondRandomStartPosition = firstRandomStartPosition;

    while (secondRandomStartPosition === firstRandomStartPosition) {
        secondRandomStartPosition = Math.ceil(Math.random() * 15) + 1;
    }

    $('#' + firstRandomStartPosition).find('span').text('2');
    $('#' + secondRandomStartPosition).find('span').text('2');
    $('#' + firstRandomStartPosition).addClass('hasUnit');
    $('#' + secondRandomStartPosition).addClass('hasUnit');

}