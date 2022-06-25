let attending = $("input:radio[name=attending]");
let conditionalField = $(".form__conditional");

attending.on("change", function () {
	if (this.value == "Yes" || this.value == "Maybe") {
		conditionalField.removeClass("hidden");
	} else {
		conditionalField.addClass("hidden");
	}
});

window.addEventListener("load", function () {
	const form = document.getElementById("wedding-form");
	form.addEventListener("submit", function (e) {
		e.preventDefault();
		const data = new FormData(form);
		const action = e.target.action;
		fetch(action, {
			method: "POST",
			body: data,
		}).then(() => {
			$(".form").hide();
			$(".form-success").show();
		});
	});
});

// https://script.google.com/macros/s/AKfycbwlde-OicLMZeyrAcZvXZgkPFbYA0yhKy4TlPfVBu-OP4LNn_Fkm1Kx99T5Mogm1Lfc/exec
// AKfycbwlde-OicLMZeyrAcZvXZgkPFbYA0yhKy4TlPfVBu-OP4LNn_Fkm1Kx99T5Mogm1Lfc
