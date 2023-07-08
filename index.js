let goodmessage = "i love eslint";

let i;

function showmessage() {
  for (i = 0; i < 7; i++) {
    // eslint-disable-next-line no-console
    console.log(goodmessage);
  }
}

showmessage();
