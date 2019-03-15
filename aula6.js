function ola(){
    alert("Oi!")}
    function teste(){
        var btn1 = document.getElementById("btn1");
        btn1.setAttribute("onclick","ola()")
    }
    function montarTabela(vetObj){
        var table =document.createElement("table");
        var tHead =document.createElement("thead");
        var trowh =document.createElement("tr");
        var thid =document.createElement("th");
        var thnome =document.createElement("th");
        var thp1 =document.createElement("th");
        var thp2 =document.createElement("th");
        var thmed =document.createElement("th");
        thid.innerHTML = "ID";
        thnome.innerHTML = "NOME";
        thp1.innerHTML = "P1";
        thp2.innerHTML = "P2";
        thmed.innerHTML = "MEDIA";
        var vetObj = resposta.dados;
        var tBody =document.createElement("tbody");
        for(var i=0; i<vetObj.length; i++){
         var trowh =document.createElement("tr");
        var thid =document.createElement("td");
        var tdnome =document.createElement("td");
        var tdp1 =document.createElement("td");
        var tdp2 =document.createElement("td");
        var tdmed =document.createElement("td");
        
    }
    }
    function iniciarTabela(){
           
            
    
    }