const inputElement = document.getElementById("input_text");
const submitButton = document.getElementById("adding_button");
const showingText = document.querySelector(".showing table tbody");



submitButton.addEventListener("click", function(){
    const text = inputElement.value;
    if( text !== "" ){
        const tr = document.createElement( "tr" );
        tr.innerHTML = `
        <td id="showing_text" class="descriptions">${text}</td>
        <td><button id="edit" class="edits">Edit</button></td>
        <td><button id="delete" class="delete">Delete</button></td>`;
        showingText.appendChild(tr);
        inputElement.value = "";
    }
    showingText.addEventListener("click", (e) =>{
            const checkEle = e.target;
            if( checkEle.className === "delete" ){
                checkEle.parentElement.remove();  
            }
    } );
    
});
