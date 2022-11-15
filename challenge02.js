/**
Reto 2: ¡Atrapa a esos ciber criminales!

Problema

Un grupo de ciber criminales están usando mensajes encriptados para comunicarse. El FBI nos ha pedido ayuda para descifrarlos.

Los mensajes son cadenas de texto que incluyen números enteros muy largos y espacios en blanco. Aunque los números no parecen tener sentido... una chica llamada Alice ha descubierto que podrían usar el código ASCII de las letras en minúscula.

Con su método ha conseguido descifrar estos mensajes:

"109105100117" -> midu
"9911110010110998101114" -> codember
"9911110010110998101114 109105100117" -> codember midu
"11210897121 116101116114105115" -> play tetris
Pero han interceptado un mensaje más largo que no han podido y nos han dicho que es muy importante que lo descifremos:

11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101

Ahora que ya sabes esto, ./encrypted.txt

Pistas
Recuerda que los mensajes son cadenas de texto conformadas por números y espacios en blanco.
Parece que los números tienen algo que ver con el código ASCII.
Los espacios en blanco parece que son simplemente espacios...
Cómo enviar la solución
*/

const getEncryptedMessage = () => {
  fetch("https://codember.dev/encrypted.txt")
    .then((resp) => {
      return resp.text();
    })
    .then((text) => {
      const numbers = text.split(" ");

      let message = "";

      numbers.forEach((number) => {
        message += `${String.fromCharCode(...stringToAsciiCode(number))} `;
      });

      console.log(message);
    });
};

const stringToAsciiCode = (string, array = []) => {
  if (string.length > 0) {
    if (string[0] === "9") {
      array.push(parseInt(string.slice(0, 2)));
      string = string.substring(2);

      stringToAsciiCode(string, array);
    } else {
      array.push(parseInt(string.slice(0, 3)));
      string = string.substring(3);

      stringToAsciiCode(string, array);
    }
  }

  return array;
};

getEncryptedMessage();
