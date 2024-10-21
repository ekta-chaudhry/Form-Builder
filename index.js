let fieldCount = 0;
function addFieldToPreview() {
    if(fieldCount >= 5) {
        alert("Maximum 5 fields can be added!");
        return;
    }

    if(!document.getElementById('fieldLabelInput').value) {
        alert("Please add a label to the field!");
        return;
    }
    fieldCount++;

    const previewDiv = document.getElementById('preview-div');
    const selectElem = document.querySelector('select');

    const newDiv = document.createElement('div');

    const inputElem = document.createElement('input');
    inputElem.setAttribute('type', selectElem.value);
    inputElem.setAttribute('id', `field${fieldCount}`);

    const labelElem = document.createElement('label');
    labelElem.setAttribute('for', `field${fieldCount}`);
    labelElem.innerText = document.getElementById('fieldLabelInput').value;
    
    newDiv.appendChild(labelElem);
    newDiv.appendChild(inputElem);
    previewDiv.appendChild(newDiv);

    document.getElementById('fieldLabelInput').value = "";
    
}