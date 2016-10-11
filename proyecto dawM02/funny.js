

var cuenta = new Array(4);
var totalAcreedor= 0;
var suma= 0;

	for(var i= 0; i < cuenta.length; i++)
	{
		cuenta[0] = prompt("Introduce el numero de cuenta");
	
		cuenta[1] = prompt("Introduce el nombre del cliente");
		
		cuenta[2] = prompt("Introduce el importe");
		
			if(cuenta[0] < 0){
				break;	
			
				cuenta.pop(cuenta.length -1);
			}
				else if(cuenta[2] > 0){
					cuenta[3] = "Acreedor"; 
					
						suma = cuenta[2];
					
							}else if(cuenta[2] < 0){
								cuenta[3] = "Deudor";
								}else{
									cuenta[3] = "Nulo";			
				} 
		
		document.write("Numero de cuenta es: " + cuenta[0] + "&emsp;" +" Nombre de cliente: " + cuenta[1] + "&emsp;" +" Saldo: " +cuenta[2] + "&emsp;" +" Estado: " + cuenta[3] + "<br>");
		cuenta.length++;
		
		totalAcreedor=totalAcreedor + parseInt(suma);
		}
		document.write("Total del saldo acreedor: " + totalAcreedor);	
		
		
		
		
		var base = 0;
		var altura = 0;
		var superficie = 0;
		var count= 0;
		
		for(var i= 0; i < 3; i++){
			base = prompt("Escribre la medida de la base ");
			
			altura = prompt("Escribe la medida de la altura");
			superficie=(parseInt(base)*parseInt(altura))/2;
			
			
			document.write("la base es " + base + "<br>" + ", la altura es " + altura + "<br>" +" y la superficie es" + superficie + "<br><br>");
			
			if(superficie> 12)
			{
				count++;
			}
		}
		document.write("Hay " + count + " triangulos cuya superficie es mayor a 12");
	
	 
	 
	/* 7 - Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) El valor acumulado de los números ingresados que son pares*/
	 
	 
	var numeros = new Array();
	var valores;
	var positivos = 0;
	var multiplos = 0;
	var pares = 0;
	
	for(var i =0; i <10; i++){
		
		valores = prompt("Escribe un número");
			valores = parseInt(valores);
				numeros.push(valores);
		
					if(numeros[i] >0 ){
					positivos++;}
				
					if(numeros[i]%15 == 0){
					multiplos ++;}
								
					if(numeros[i]%2 == 0)
					{pares += numeros[i]; 
						}
				
				
				
			
				
	document.write("los números introducidos son; " + numeros[i] +"<br>");
	document.write("los números positivos son " + positivos + " y los multiplos de quince son: " + multiplos  +"<br>");
	document.write("el acumulado de los números pares es: " + pares  +"<br>");
			}
		