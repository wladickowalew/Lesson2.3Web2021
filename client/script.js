$("#request").on("click", function () {
	let req = $.get("http://localhost:8080/");

	req.done(function(data){
		console.log(data);
	});

	req.fail(function(xhr, textStatus, error){
		console.log(textStatus, error);
	})
})