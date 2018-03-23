var recherches=[];//tableau contenant des chaines de caracteres correspondant aux recherches stockees
var recherche_courante;// chaine de caracteres correspondant a la recherche courante
var recherche_courante_news=[]; // tableau d'objets de type resultats (avec titre, date et url)

function ajouter_recherche(){
	recherche_courante = document.getElementById('zone_saisie').value;
	if(recherches.indexOf(recherche_courante) == -1){
		recherches.push(recherche_courante);

		$("#recherches-stockees").append($("<p></p>").attr("class", "titre-recherche")
														.append($("<label>")
														.attr("onclick","selectionner_recherche(this)")
														.text(recherche_courante))
														.append($("<img></img>").attr({"src":"croix30.jpg",
																													 "class":"icone-croix",
																												 	 "onclick":"supprimer_recherche(this)"})));

	 var obj = {"recherches" : recherches};
	 $.cookie("recherches_sauvegardees", JSON.stringify(obj), {expires:1000});

	} else {
		alert('Cette recherche est déjà enregistrée');
	}
}

function supprimer_recherche(e){
	var index_rech = recherches.indexOf(e.parentNode.firstChild.innerHTML);
	 $(e).parent().remove();
	 recherches.splice(index_rech, 1);

	 var obj = {"recherches" : recherches};
 	 $.cookie("recherches_sauvegardees", JSON.stringify(obj), {expires:1000});
}


function selectionner_recherche(e){
	recherche_courante = e.innerHTML;
	$("#zone_saisie").val(recherche_courante);
}


function init(){

}


function rechercher_nouvelles(){

}


function maj_resultats(res){

}


function sauver_nouvelle(e){

}


function supprimer_nouvelle(e){

}
