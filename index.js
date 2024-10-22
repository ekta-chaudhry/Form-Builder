let fieldCount = 0;
function addFieldToPreview() {
    if(fieldCount > 7) {
        alert("Maximum 7 fields can be added!");
        return;
    }

    if(!document.getElementById('field-label-input').value) {
        alert("Please add a label to the field!");
        return;
    }
    fieldCount++;

    const previewDiv = document.getElementById('preview-div');
    const selectElem = document.querySelector('select');

    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'preview-field-div');

    if(selectElem.value == "button") {
        const button = document.createElement('button');
        button.innerText = document.getElementById('field-label-input').value;
        button.setAttribute('class', 'add-field-button');
        newDiv.appendChild(button);
        previewDiv.appendChild(newDiv);
        return;
    }
    
    const inputDiv = document.createElement('div');
    const inputElem = document.createElement('input');
    inputElem.setAttribute('type', selectElem.value);
    inputElem.setAttribute('id', `field${fieldCount}`);
    if(selectElem.value == "text") {
        inputElem.setAttribute('class', 'text-field');
    }
    const labelDiv = document.createElement('div');
    const labelElem = document.createElement('label');
    labelElem.setAttribute('for', `field${fieldCount}`);
    labelElem.setAttribute('class', 'field-label');
    labelElem.innerText = document.getElementById('field-label-input').value;
    
    if(selectElem.value == "text") {
        inputDiv.appendChild(inputElem);
        labelDiv.appendChild(labelElem);
        newDiv.appendChild(labelDiv);
        newDiv.appendChild(inputDiv);
    }else{
        newDiv.appendChild(labelElem);
        newDiv.appendChild(inputElem);
    }
    
    previewDiv.appendChild(newDiv);

    document.getElementById('field-label-input').value = "";
    
}
