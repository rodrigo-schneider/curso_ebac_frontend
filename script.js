let table = document.getElementById("table")
let contactName = document.getElementById("name")
let contactPhone = document.getElementById("phone")


function addContact() {
    let nameInput = contactName.value;
    let phoneInput = contactPhone.value;

    if(nameInput === "" || phoneInput === ""){
        alert("Os campos precisam ser preenchidos!");
    }

    let newTableRow = `
        <tr>
            <td>
                ${nameInput}
            </td>
            <td>
                ${phoneInput}
            </td>
        </tr>
        `

    table.innerHTML += newTableRow;

    contactName.value = "";
    contactPhone.value = "";
}


