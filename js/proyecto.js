$(document).ready(function(){
    var pag_recarga=2
    var win = $(window);
    win.scroll(function(){
        if (($(document).height() - win.height())-10 <= win.scrollTop()){
            $("#gif").append( $("<img class=gif src=imagenes/carga.gif >"));
            setTimeout(function(){
                $("#gif").empty();
            },2000);
           recarga(pag_recarga);
            pag_recarga+=1
		};
	});
    
    
    $("input[name=tipo]").click(function () {
        tipo = $(this);
    });
    
    function llamada(){
        var pagina = 1;
        var titulo = $("#Titulo").val();
        $.getJSON("http://www.omdbapi.com/?s="+titulo+"&page="+pagina,function(data){
            var array_peliculas = data.Search;
            $(".contenedor").empty();
            for(i in array_peliculas){
                if(i.Poster == "N/A"){
                   $(".contenedor").append($("<img class=card pelicula src=imagenes/error.png >")); 
                }else{
                    $(".contenedor").append($("<img class=card pelicula src="+array_peliculas[i].Poster+">"));  
                };
            };

            
        });
    };
    
    function recarga(pagina=2){
        var titulo = $("#Titulo").val();
        $.getJSON("http://www.omdbapi.com/?s="+titulo+"&page="+pagina,function(data){
            var array_peliculas = data.Search;
            for(i in array_peliculas){
                if(i.Poster == "N/A"){
                    $(".contenedor").append($("<img class=card pelicula src=imagenes/error.png >")); 
                }else{
                    $(".contenedor").append($("<img class=card pelicula src="+array_peliculas[i].Poster+">"));  
                };
            };
        });
    };
    
    $("button").click(function(){
        llamada();
    });
});