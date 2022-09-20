//var listafilmes = ["Peaky Blinders" ,"Sad Man" ,"Mr. Robot"];
// indice            0                 1                 2 
//elemento           1                 2                 3

//adicionando novos elementos - indice 3
//listafilmes.push(" Arcane ")

//  valor inicial,   condição   ,expressão final
//for (var indice = 0; indice < listafilmes.length; indice++ ) {
   // document.write("<p>" + listafilmes[indice] + "</p>");


//}
var listafilmes = ["https://nomoremag.com/wp-content/uploads/2020/09/Peaky-Blinders.jpg","https://i0.wp.com/trilhadomedo.com/wp-content/uploads/2021/11/Arcane-serie-netflix.jpg?ssl=1","https://cinema10.com.br/upload/series/series_854_MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SY1000_CR0,0,666,1000_AL_.jpg","https://br.web.img2.acsta.net/pictures/20/06/29/10/22/2148622.jpg"]

for (var i = 0; i < listafilmes.length; i++) {document.write("<img src=" + listafilmes[i] + ">")}