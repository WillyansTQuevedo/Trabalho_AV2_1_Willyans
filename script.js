 
 function verificarCPF(c){
    var i;
    s = c;
    var c = s.substr(0,9);
    var dv = s.substr(9,2);
    var d1 = 0;
    var v = false;
 
    for (i = 0; i < 9; i++){
        d1 += c.charAt(i)*(10-i);
    }
    if (d1 == 0){
        alert("Campo Obrigatório - Por favor informe um CPF válido")
		document.cadastro.cpf.focus();
        v = true;
        return false;
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(0) != d1){
        alert("Campo Obrigatório - Por favor informe um CPF válido")
		document.cadastro.cpf.focus();
        v = true;
        return false;
    }
 
    d1 *= 2;
    for (i = 0; i < 9; i++){
        d1 += c.charAt(i)*(11-i);
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(1) != d1){
        alert("Campo Obrigatório - Por favor informe um CPF válido")
		document.cadastro.cpf.focus();
        v = true;
        return false;
    }
    if (!v) {
       alert(c + "nCPF Válido")
    }
};

 
 function validaNome(campo) { 
		//se não desejar números é só remover da regex abaixo 
		var regex = '[^a-zA-Z]+'; 
		if(campo.match(regex)) { 
		//encontrou então não passa na validação
		alert ("Campo Obrigatório - Não é permitido números ou caracteres especiais!!!") 
		document.cadastro.nome.focus();
return false; 
		} else { 
		
		document.cadastro.endereco.focus();
		//não encontrou caracteres especiais 
		
return true;
	}
 };


function validaCampos(valor){
		
	
		if(valor==""){
			alert("Esse Campo é Obrigatório!!!");	
			document.cadastro.nome.focus();
		return false;
		} else{
			
			
		}
		
};
 
 
function validaEmail(){

if( document.cadastro.email.value=="" 
   || document.cadastro.email.value.indexOf('@')==-1 
     || document.cadastro.email.value.indexOf('.')==-1 )
	{
		alert( "Campo Obrigatório - Por favor, informe um E-MAIL válido!" );
		document.cadastro.email.focus();
		return false;
	}
		
};

function validaSelect() {
        var comboSexo = document.getElementById("sexo");
        if (comboSexo.options[comboSexo.selectedIndex].value == "--Escolher Sexo--" ){
                alert("Selecione uma opção antes de prosseguir");
				document.cadastro.sexo.focus();
        }
				
		if (comboSexo.options[comboSexo.selectedIndex].value != "--Escolher Sexo--" ){
                
				document.cadastro.telefone.focus();
		}
    };    
	
function validaChekBox(){
	
	if (document.cadastro.sim.checked) {
		
      alert ("Campo x é Obrigatório");
     //document.cadastro.sim.focus();
     return false;
}
	if(document.cadastro.sim.checked && document.cadastro.nao.checked){
		
		alert ("Selecione Apenas Uma Opção")
		return false;
	}
	
};

function showhidefield()
 
  {
    if (document.cadastro.sim.checked)
    {
      document.getElementById("msgPromo").style.visibility = 'visible';
    }else{
      document.getElementById("msgPromo").style.visibility = 'hidden';
    }
  };