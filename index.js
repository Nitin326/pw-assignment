let fileInputs = document.getElementById("my-files");
let listing = document.getElementById('listing');
let tableItem = document.getElementById('table-item');
let textValue = document.getElementById('text');
let fileValue = document.getElementById('files');
var size;

const calculateSize = (n) => {
     if(0 < n && n < 1000){
       size = n + ' ' + 'Bytes';
     }
     if(1000 <= n && n < 1000000){
      n= n/1000;
      size = n + ' ' + 'KB';
    }
    if(1000000 <= n && n < 1000000000){
      n= n/1000000;
      size = n + ' ' + 'MB';
    }
    if(1000000000 <= n && n < 10000000000000){
      n= n/1000000000;
      size = n + ' ' + 'GB';
    }
    if(n >= 10000000000000){
      n= n/10000000000000;
      size = n + ' ' + 'TB';
    }
}

  fileInputs.addEventListener('change', e => {
    let arr = Array.from(e.target.files);
    arr.sort();
    fileValue.innerHTML = arr.length + ' ' +'files';
    for (let file of arr) {
        textValue.style.display='none';
        tableItem.style.display='block';
        let tableRow = document.createElement('tr');
        let itemFileName = document.createElement('td');
        let itemFileSize = document.createElement('td');
        itemFileName.textContent = file.webkitRelativePath;
        size = file.size;
        calculateSize(size);
        itemFileSize.textContent = size;
        tableRow.appendChild(itemFileName);
        tableRow.appendChild(itemFileSize);
        tableItem.appendChild(tableRow);
    };
  });

  const myInput = () => {
    document.getElementById('my-files').click()
  }