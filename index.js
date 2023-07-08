let thisshowmessage = false;

const goodmessage = "i love eslint";

function showmessage() {
  for (i = 0; i < 7; i++) {
    // eslint-disable-next-line no-console
    console.log(goodmessage);
  }
}

showmessage();
