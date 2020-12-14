$(document).ready(function(){
	//Jquery
	ChargerCategorie();
});

function ChargerCategorie(){
	//ajax
	$.get("listUser.php",function(data){
		$("#di3").html(data);
	});
}

