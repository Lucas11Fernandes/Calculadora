
// declaração da variável global document denominada como d
let d = document;

function insert(num)
{
    
	//Pegar o valor do objeto HTML resultado e armazena na variável número
	var numero = d.getElementById('resultado').innerHTML;
	//Faz a concatenação da variável com o valor numérico indicado pela tecla
    d.getElementById('resultado').innerHTML = numero + num;
	
	
	//Forma avançada de representar o mesmo algoritmo do bloco acima
	//d.getElementById('resultado').innerHTML += num;
	
}

function clean()
{
    
	// Limpa todos os valores contidos no objeto Html resultado
	d.getElementById('resultado').innerHTML = "";
}
function back()
{
    // Armazena o conteúdo do objeto Html resultado na variável denominada como resultado
	var resultado = d.getElementById('resultado').innerHTML;
	// Usa a função substring para transformar a variável resultado em um vetor e subtrair uma posição do vetor, retornando o resultado para o objeto Html resultado
    d.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    // Armazena o conteúdo do objeto Html resultado na variável denominada como resultado
	var resultado = d.getElementById('resultado').innerHTML;
    
	// Verifica se existe um valor na varíável
	if(resultado)
    {
        // Se existe um valor é executado a função eval para calcular qualquer valor que está na variável resultado e retornado o resultado para o objeto Html resultado
		d.getElementById('resultado').innerHTML = eval(resultado);
    }
    // Caso o objeto Html resultado esteja vazio é retornado um valor "Nada..."
	else
    {
		d.getElementById('resultado').innerHTML = "Nada..."
    }
}