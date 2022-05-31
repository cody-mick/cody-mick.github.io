fetch("https://api.adviceslip.com/advice")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data.slip);
		let adviceId = document.getElementById("advice-id");
		adviceId.textContent = data.slip.id;
		let adviceText = document.getElementById("advice-text");
		adviceText.textContent = data.slip.advice;
	});
