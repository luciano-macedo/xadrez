
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
	var partida, branco, preto, delay, ligado, som, jogadas, aviso;
	var mBranco,  mPreto, sBranco, sPreto, lado=4, play=0, pause=1;
	var contadorBranco=0, contadorPreto=0, dvalor;
//Botão configurar (Confgiuraçãoes)
	// funções combo Box 
	function tempo(){
		if(document.getElementById('cBranco').value==0){
		document.getElementById('cPreto').options[4].selected = true;
		}
		if(document.getElementById('cBranco').value==1){
		document.getElementById('cPreto').options[3].selected = true;
		}
		if(document.getElementById('cBranco').value==2){
		document.getElementById('cPreto').options[2].selected = true;
		}
		if(document.getElementById('cBranco').value==3){
		document.getElementById('cPreto').options[1].selected = true;
		}
		if(document.getElementById('cBranco').value==4){
		document.getElementById('cPreto').options[0].selected = true;
		}
	}
	// funções combo Box 
	function tempo1(){
		if(document.getElementById('cPreto').value==0){
		document.getElementById('cBranco').options[4].selected = true;
		}
		if(document.getElementById('cPreto').value==1){
		document.getElementById('cBranco').options[3].selected = true;
		}
		if(document.getElementById('cPreto').value==2){
		document.getElementById('cBranco').options[2].selected = true;
		}
		if(document.getElementById('cPreto').value==3){
		document.getElementById('cBranco').options[1].selected = true;
		}
		if(document.getElementById('cPreto').value==4){
		document.getElementById('cBranco').options[0].selected = true;
		}
	}
	// funções atualizar configuração quando botão acionado
	function configurar(){
		carregarconfig();
		document.getElementById('config').style.display = 'block';
		document.getElementById('cPartida').options[partida].selected = true;
		document.getElementById('cBranco').options[branco].selected = true
		document.getElementById('cPreto').options[preto].selected = true;
		document.getElementById('cDelay').options[delay].selected = true;
		document.getElementById('cLigado').options[ligado].selected = true;
		document.getElementById('cSom').options[som].selected = true;
		document.getElementById('cJogadas').options[jogadas].selected = true;
		document.getElementById('cAviso').options[aviso].selected = true;
}
	//Salvar Configuração 	
	function salvar(){
		localStorage.setItem('Partida', document.getElementById('cPartida').value);
		localStorage.setItem('Branco', document.getElementById('cBranco').value);
		localStorage.setItem('Preto', document.getElementById('cPreto').value);	
		localStorage.setItem('Delay', document.getElementById('cDelay').value);	
		localStorage.setItem('Ligado', document.getElementById('cLigado').value);
		localStorage.setItem('Som', document.getElementById('cSom').value);	
		localStorage.setItem('Jogadas', document.getElementById('cJogadas').value);	
		localStorage.setItem('Aviso', document.getElementById('cAviso').value);	
		document.getElementById('config').style.display = 'none';
		window.location.reload()
		carregarconfig();
		
	}
	//Cancelar configuração
	function cancelar(){
		document.getElementById('config').style.display = 'none';
	}
	//Selecionar som e escutar
	function barulho(){
		if(som==0){
		var sound = new Audio('som/0.wav');    
		}
		if(som==1){
		var sound = new Audio('som/1.wav');    
		}
		if(som==2){
		var sound = new Audio('som/2.wav');    
		}
		sound.play();
	}
		//Selecionar som e escutar
	function troca(){
		if(document.getElementById('cSom').value==0){
			som=0;
		var sound = new Audio('som/0.wav');    
		}
		if(document.getElementById('cSom').value==1){
			som=1;
		var sound = new Audio('som/1.wav');    
		}
		if(document.getElementById('cSom').value==2){
			som=2;
		var sound = new Audio('som/2.wav');    
		}
		sound.play();
	}
	//Restaura Configuração de Fabrica
	function resetar(){
		document.getElementById('cPartida').options[0].selected = true;
		document.getElementById('cBranco').options[2].selected = true
		document.getElementById('cPreto').options[2].selected = true;
		document.getElementById('cDelay').options[0].selected = true;
		document.getElementById('cLigado').options[1].selected = true;
		document.getElementById('cSom').options[0].selected = true;
		document.getElementById('cJogadas').options[0].selected = true;
		document.getElementById('cAviso').options[1].selected = true;	
}
	// Carregar configuração local
	function carregarconfig(){
		partida = localStorage.getItem('Partida');
		branco = localStorage.getItem('Branco');
		preto = localStorage.getItem('Preto');
		delay = localStorage.getItem('Delay');
		carregarDelay();
		ligado = localStorage.getItem('Ligado');
		som = localStorage.getItem('Som');
		jogadas = localStorage.getItem('Jogadas');
		aviso = localStorage.getItem('Aviso');
		
		
	if(partida==undefined | branco==undefined| preto==undefined | delay==undefined | ligado==undefined | som==undefined | jogadas==undefined | aviso==undefined){
		partida=0;
		branco=2;
		preto=2;
		delay=0;
		carregarDelay();
		ligado=1;
		som=0;
		jogadas=0;
		aviso=8;
		salvar();
		window.location.reload()	
		}
		somImg();
	}
	function carregarDelay(){
		delay = localStorage.getItem('Delay');
		switch(delay) {
			case "0":
				dvalor=0; 
				break;
			case "1":
				dvalor=2; 
				break;
			case "2":
				dvalor=3; 
				break;
			case "3":
				dvalor=5; 
				break;
		}
	
	}
	// click(barulho) do botão
	function ladoBranco(){
		document.getElementById('bBranco').disabled = true;
		document.getElementById('bPreto').disabled = false;
		carregarDelay();
		if(ligado==1){barulho();}
		if(lado==4){
			lado=1;
			start()
		}
		 if(play==0){
			document.getElementById("inicio").src="img/iniciar.png";
		}
		lado=1;
		play=1;
		
		if(jogadas==1){
		contadorBranco++;
		document.getElementById("contBranco").innerText ="Jogadas: "+ contadorBranco ;
		}
	}
	function ladoPreto(){
		document.getElementById('bPreto').disabled = true;
		document.getElementById('bBranco').disabled = false;
		carregarDelay();
		if(ligado==1){barulho();}
		lado=0;
		 if(play==0){
			document.getElementById("inicio").src="img/iniciar.png";
		}
		if(jogadas==1){
		contadorPreto++;
		document.getElementById("contPreto").innerText = "Jogadas: "+ contadorPreto;
		}

	}
	//Receber os tempo de 
	function valorTempo(){
		switch(partida) {
			case "0":
				if (branco == "1") {
					mBranco=4;
					mPreto=6;
				} else if (branco == "2") {
					mBranco=5;
					mPreto=5;
				} else if (branco == "3") {
					mBranco=6;
					mPreto=4;
				} else if (branco == "4") {
					mBranco=8;
					mPreto=2;
				}else {
					mBranco=1;
					mPreto=1;
				}
				break;
			case "1":
				if (branco == "1") {
					mBranco=8;
					mPreto=12;
				} else if (branco == "2") {
					mBranco=10;
					mPreto=10;
				} else if (branco == "3") {
					mBranco=12;
					mPreto=8;
				} else if (branco == "4") {
					mBranco=16;
					mPreto=4;
				}else {
					mBranco=4;
					mPreto=16;
				}
				break;
			case "2":
				if (branco == "1") {
					mBranco=12;
					mPreto=18;
				} else if (branco == "2") {
					mBranco=15;
					mPreto=15;
				} else if (branco == "3") {
					mBranco=18;
					mPreto=12;
				} else if (branco == "4") {
					mBranco=24;
					mPreto=6;
				}else {
					mBranco=6;
					mPreto=24;
				}
				break;	
			case "3":
				if (branco == "1") {
					mBranco=24;
					mPreto=36;
				} else if (branco == "2") {
					mBranco=30;
					mPreto=30;
				} else if (branco == "3") {
					mBranco=36;
					mPreto=24;
				} else if (branco == "4") {
					mBranco=48;
					mPreto=12;
				}else {
					mBranco=12;
					mPreto=48;
				}
				break;	
			case "4":
				if (branco == "1") {
					mBranco=48;
					mPreto=72;
				} else if (branco == "2") {
					mBranco=60;
					mPreto=60;
				} else if (branco == "3") {
					mBranco=72;
					mPreto=48;
				} else if (branco == "4") {
					mBranco=24;
					mPreto=96;
				}else {
					mBranco=24;
					mPreto=96;
				}
				break;
				}
	}
	//Inicio da contagemcada jogador
	 function start(){
		
		if(delay==0){
			if (lado==0){
				if(sBranco>0){
					sBranco--;
				}else{
					if(mBranco>0){
						mBranco--;
						sBranco=59;
					}else{
						if(aviso==1 && ligado==1){
							document.getElementById('bBranco').innerText ="Fim";
							var fim = new Audio('som/mp3.wav');    
							fim.play();
						}
					
					bleak;}
						
				} 
				if (sBranco<10){
					if(mBranco<10){document.getElementById('bBranco').innerText ="0"+mBranco+":0"+sBranco;}
					else{document.getElementById('bBranco').innerText =mBranco+":0"+sBranco;}
				}else{
					if(mBranco<10){document.getElementById('bBranco').innerText ="0"+mBranco+":"+sBranco;}
					else{document.getElementById('bBranco').innerText =mBranco+":"+sBranco;}
				}
				
			}
			else if (lado==1){

				if(sPreto>0){
					sPreto--;
				}else{
					if(mPreto>0){
						mPreto--;
						sPreto=59;
					}else{
						if(aviso==1 && ligado==1){
							document.getElementById('bPreto').innerText ="Fim";
							var fim = new Audio('som/fim.mp3');    
							fim.play();
						}
						bleak;}
					
				} 
				if (sPreto<10){
					if(mPreto<10){document.getElementById('bPreto').innerText ="0"+mPreto+":0"+sPreto;}
					else{document.getElementById('bPreto').innerText =mPreto+":0"+sPreto;}
				}else{
					if(mPreto<10){document.getElementById('bPreto').innerText ="0"+mPreto+":"+sPreto;}
					else{document.getElementById('bPreto').innerText =mPreto+":"+sPreto;}
				}
				
			}
		}else{
		
			if (lado==0){
				if(dvalor==0){
					carregarDelay()
					document.getElementById("delayBranco").innerText = "Delay: "+ 0 ;
					delay=0;
			}else{
					document.getElementById("delayBranco").innerText = "Delay: "+ dvalor;
					dvalor--;	
			}
			}else if (lado==1){
				if(dvalor==0){
					carregarDelay()
					document.getElementById("delayPreto").innerText = "Delay: "+ 0 ;
					delay=0;
				}else{
					document.getElementById("delayPreto").innerText = "Delay: "+ dvalor;
				dvalor--;	
				}	
			}
		}
		setTimeout('start();',1000);
	}
	 function reiniciar(){
		 window.location.reload()	 
	 } 
	 function ativaSom(){
		  if(ligado==0){
			document.getElementById("audio").src="img/som.png";
			ligado=1;
			localStorage.setItem('Ligado', 1);
			}else{
			document.getElementById("audio").src="img/somoff.png";
			ligado=0;
			localStorage.setItem('Ligado', 0);
			}
	 }
	 function somImg(){
				  if(ligado==0){
			document.getElementById("audio").src="img/somoff.png";
			}else{
			document.getElementById("audio").src="img/som.png";
			} 
	 } 
	 function iniciar(){
		 if(ligado==1){barulho();}
		 if(play==0){
			document.getElementById("inicio").src="img/iniciar.png";
			if(lado==4){
				document.getElementById('bBranco').disabled = true;
				document.getElementById('bPreto').disabled = false;
				lado=1;
				play=1;
				start()
			}else {
			play=1;
			lado=pause;
			}

		}else{
			document.getElementById("inicio").src="img/pause.png";
			play=0;
			pause=lado;
			lado=3;
		}
	 }
	 function regras(){
			document.getElementById('msnpopup1').style.display = 'block';
}
	 function notRegras(){
			document.getElementById('msnpopup1').style.display = 'none';
}
//Regras
	function esconder(){
	document.getElementById('dBispo').style.display = 'none';
	document.getElementById('dCavalo').style.display = 'none';
	document.getElementById('dPeao').style.display = 'none';
	document.getElementById('dRainha').style.display = 'none';
	document.getElementById('dRei').style.display = 'none';
	document.getElementById('dTorre').style.display = 'none';		
	}
function regraBispo(){
	esconder();
	document.getElementById('dBispo').style.display = 'block';
	
}
function regraCavalo(){
	esconder();
	document.getElementById('dCavalo').style.display = 'block';
	
}
function regraPeao(){
	esconder();
	document.getElementById('dPeao').style.display = 'block';
	
}
function regraRainha(){
	esconder();
	document.getElementById('dRainha').style.display = 'block';
	
}
function regraRei(){
	esconder();
	document.getElementById('dRei').style.display = 'block';
	
}
function regraTorre(){
	esconder();
	document.getElementById('dTorre').style.display = 'block';
	
}

