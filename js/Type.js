$(document).ready(function(){
	//Jquery
	ChargerCategorie();
});

function ChargerCategorie(){
	//ajax
	$.get("TypeOption.php",function(data){
		$("#divCat1").html(data);
		$("#cssC").change(function(){
        ChangerProduit($(this).val());
	});
	});
}

function ChangerProduit(id){
	$.get("Type.php?idid="+id,function(data){
		$("#divCat2").html(data);
	});
}

