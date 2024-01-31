function esperar(segundos) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, segundos * 1000);
  });
}

async function proceso() {
  console.log("Iniciando proceso");
  await esperar(2);  // Espera 2 segundos antes de continuar
  console.log("Proceso completado");
}

proceso();
