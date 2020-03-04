const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');

container.addEventListener ('click', function(e) {


	// lakukan pengecekan jika betul ini thumb

	if (e.target.className =='thumb') {

		jumbo.src = e.target.src;

	}
});