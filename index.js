const nameField = document.getElementById('nameField');
const emailField = document.getElementById('emailField');
const messageField = document.getElementById('messageField');


// name field 
const addName = () => {
    const name = nameField.value;
    nameField.value = '';
    localStorage.setItem('name',name);
}
const delName = () => {
    localStorage.removeItem('name');
}

// email field 
const addEmail = () => {
    const email = emailField.value;
    emailField.value = '';
    localStorage.setItem('email',email);
}
const delEmail = () => {
    localStorage.removeItem('email');
}

// message field 
const addMessage = () => {
    const message = messageField.value;
    messageField.value = '';
    localStorage.setItem('message',message);
}
const delMessage = () => localStorage.removeItem('message');

// const send = () => {
//     let obj = {};
//     let prevObj = localStorage.getItem('objectValue');
//     if(prevObj){
//         obj = JSON.parse(prevObj);
//         console.log('prevObj',obj)
//     }
//     for (let [key, value] of Object.entries(localStorage)) {
//         obj[key] = value;
//     }
//     const objString = JSON.stringify(obj);
//     localStorage.setItem('objectValue',objString);
// }

const send = () => {
  let obj = {};
  let prevObj = localStorage.getItem('objectValue');
  if (prevObj) {
    obj = JSON.parse(prevObj);
    console.log('prevObj', obj);
  }
  for (let [key, value] of Object.entries(localStorage)) {
    if (key !== 'objectValue') {
      obj[key] = value;
    }
  }
  const objString = JSON.stringify(obj);
  localStorage.setItem('objectValue', objString);
}



const reset = () => localStorage.clear();

const loadingInputData = () => {
    nameField.value = localStorage.getItem('name');
    emailField.value = localStorage.getItem('email');
    messageField.value = localStorage.getItem('message');
}