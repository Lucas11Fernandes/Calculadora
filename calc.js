// Variável global que armazena os valores a serem calculados
var vdisplay = [];

// Variável global que armazena o objeto 'document' do navegador
var d = document;

// Função para limpar o campo de resultado e o array de valores a serem calculados
function clean() {
	// Limpa o campo de resultado
	d.getElementById('resultado').innerHTML = "";
	// Limpa o array de valores
	vdisplay = [];
}

// Função para apagar o último caractere digitado no campo de resultado
function back() {
	// Obtém o valor atual do campo de resultado
	let texto = d.getElementById('resultado').innerHTML;
	// Remove o último caractere do valor obtido
	d.getElementById('resultado').innerHTML = texto.substring(0, texto.length-1);
}

// Função para adicionar um valor ou operador ao campo de resultado
function insert(num) {
	// Verifica se o valor passado é um operador (+, -, /, *) 
	if (num == "+" || num == "-" || num == "/" || num == "*") {
		// Verifica se o array de valores está vazio
		if (vdisplay.length == 0) {
			// Adiciona o valor atual do campo de resultado ao array de valores
			vdisplay.push(d.getElementById('resultado').innerHTML);
			// Adiciona o operador ao array de valores
			vdisplay.push(num);
			// Limpa o campo de resultado
			d.getElementById('resultado').innerHTML = "";
		} else if (vdisplay[vdisplay.length-1] != d.getElementById('resultado').innerHTML && d.getElementById('resultado').innerHTML != "") {
			// Adiciona o valor atual do campo de resultado ao array de valores
			vdisplay.push(d.getElementById('resultado').innerHTML);
			// Adiciona o operador ao array de valores
			vdisplay.push(num);
			// Limpa o campo de resultado
			d.getElementById('resultado').innerHTML = "";
		} else if (vdisplay[vdisplay.length-1] != "+" && vdisplay[vdisplay.length-1] !="-" && vdisplay[vdisplay.length-1] != "/" && vdisplay[vdisplay.length-1] != "*") {
			// Adiciona o operador ao array de valores
			vdisplay.push(num);
			// Limpa o campo de resultado
			d.getElementById('resultado').innerHTML = "";
		}
	} else if (num =="=") {
		// Verifica se o último valor do array de valores é um operador
		if (vdisplay[vdisplay.length-1] == "+" || vdisplay[vdisplay.length-1] =="-" || vdisplay[vdisplay.length-1] =="/" || vdisplay[vdisplay.length-1] == "*") {
			// Adiciona o valor atual do campo de resultado ao array de valores
			vdisplay.push(d.getElementById('resultado').innerHTML);
			// Chama a função para calcular o resultado
			calcular();
		}
	}else{
		// Verifica se o array de valores contém somente um valor
		if (vdisplay.length == 1) {
			// Chama a função para limpar o campo de resultado e o array de valores
			clean();
			// Adiciona o valor ao campo de resultado
			d.getElementById('resultado').innerHTML += num;
		}else{
            // Adiciona o valor ao campo de resultado
			d.getElementById('resultado').innerHTML += num;
		}
	}
}

// Cria uma função chamada "calcular"
function calcular(){ 
	// Declara uma variável "result" vazia
	let result = "";

	// Inicia um bloco "try" para lidar com exceções
	try{ 
		// Inicia um laço de repetição "for" com uma variável "i" inicializada como 0 e um limite de repetições igual ao tamanho do array "vdisplay"
		for(let i = 0 ; i <vdisplay.length; i++) { 
			// Adiciona o valor da posição atual do array "vdisplay" à variável "result"
			result += vdisplay[i]; 
			// Exibe o valor da variável "result" no console com a mensagem "Resultado ="
			console.log(" Resultado = " + result); 

		}
		// Executa a função "eval" com o valor da variável "result" como argumento e armazena o resultado de volta na variável "result"
		result = eval(result); 
		// Define o valor da propriedade "innerHTML" do elemento HTML com o id "resultado" como o valor da variável "result"
		d.getElementById('resultado').innerHTML = result; 
		// Define o array "vdisplay" como vazio
		vdisplay = []; 
		// Adiciona o valor da variável "result" ao final do array "vdisplay"
		vdisplay.push(result); 
		// Exibe o valor do array "vdisplay" no console
		console.log(vdisplay); 
	// Se ocorrer uma exceção durante a execução do bloco "try", entra no bloco "catch"
	}catch(e){ 
		// Define o valor da propriedade "innerHTML" do elemento HTML com o id "resultado" como "--- Nan ---"
		d.getElementById('resultado').innerHTML = " --- Nan ---"; 
	}

}
