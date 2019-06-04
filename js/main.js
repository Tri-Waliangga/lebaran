function encrypt(text, n) {
  if(text == null) {
    return text;
  }
  
  for(let i=0; i<n; i++) {
    let second = '';
    let first = '';
    
    for(let j=0; j<text.length; j++) {
      if(j%2 == 0) {
        first += text[j];
      } else {
        second += text[j];
      }
    }
    
    text = second.concat(first);
  }
  
  return text;
}

let inner = document.getElementById('maaf').innerHTML;
document.getElementById('maaf').innerHTML = encrypt(inner, 1);

function decrypt(encryptedText, n) {
  if(encryptedText == null) {
    return encryptedText;
  }
  
  let index = 0;
  let c = encryptedText.split('');
  
  for(let i=0; i<encryptedText.length; i++) {
    if(i%2 ==1) {
      index++;
    }
  }
  
  for(let i=0; i<n; i++) {
    let start = 0;
    let start2 = 0;
    let second = c.slice(0, index);
    let first = c.slice(index);
    
    for(let j=0; j<c.length; j++) {
      if(j%2 == 0) {
        c[j] = first[start];
        start++;
        if(start >= c.length-index)
          continue;
      } else {
        c[j] = second[start2];
        start2++;
        if(start2 >= index)
          continue;
      }
    }
  }
  
  return c.join('');
}
document.getElementById('mengerti').addEventListener('click', function() {
    let salam = document.getElementById('salam');
    $("#salam").hide();
    $("#maaf").hide();
  if(document.getElementById('mengerti').innerHTML == "Mohon Dimaafkan") {
    document.getElementById('maaf').innerHTML = encrypt(inner, 1);
    document.getElementById('mengerti').innerHTML = "Mengertilah";
    salam.innerHTML = "Bagai kata penuh tanda...";
  } else {
    let innerEncrypt = document.getElementById('maaf').innerHTML;
    document.getElementById('maaf').innerHTML = decrypt(innerEncrypt, 1);
    document.getElementById('mengerti').innerHTML = "Mohon Dimaafkan";
    salam.innerHTML = "Selamat Hari Raya Idul Fitri 1440H";
  }
    $("#salam").fadeIn(300);
    $("#maaf").fadeIn(800);
})