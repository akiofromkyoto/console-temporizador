function temporizador(duracao) {
    let contagem = duracao;
  
    const atualizar = setInterval(() => {
      if (contagem > 0) {
        console.log(`Tempo restante: ${contagem} segundos`);
        contagem--;
      } else {
        console.log('Tempo esgotado!');
        clearInterval(atualizar);
      }
    }, 1000); 
  
    return () => {
      clearInterval(atualizar);
      console.log('Temporizador interrompido.');
    };
  }
  
  const stopCountdown = temporizador(60);
   setTimeout(() => {
    stopCountdown();
  }, 61000);
  