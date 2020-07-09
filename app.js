//create all posible routes
const routes = {
    '/' : home,
    '/register' : register
  };

  //get the root div file from DOM
  const rootDiv = document.getElementById('root');
  //add content to the root element based on path
  rootDiv.innerHTML = routes[window.location.pathname];

  //method that takes path name and renders section based on it
  const onNavigate = (pathname) => {
      window.history.pushState(
          {},
          pathname,
          window.location.origin + pathname
      )
      rootDiv.innerHTML = routes[pathname]
      
      if(pathname === '/'){
        renderFormData();
        
      }else if(pathname === '/register'){
        console.log('register');
        
      }
      
  }

  window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
  }

let selectedRow = null;

function onFormSubmit() {
  if(validateUnique()){
    var formData = readFormData();
    if(selectedRow === null){
      const id = Math.random().toString(36).substr(2, 9);
      localStorage.setItem(id, JSON.stringify(formData));
      onNavigate('/');
    }else{
      updateFormData();
    }
  }
  
      
}

function readFormData(){
  const formData = {};
  formData['fname'] = document.getElementById('fname').value;
  formData['lname'] = document.getElementById('lname').value;
  formData['date'] = document.getElementById('date').value;
  formData['phone'] = document.getElementById('phone').value;
  formData['email'] = document.getElementById('email').value;
  formData['adress'] = document.getElementById('adress').value;
  return formData
}

function renderFormData(){
  //get table
  const table = document.getElementById("userInfo");

  //render all objects in local storage
  for(let i=0; i<localStorage.length;i++){
      //get all object keys
      let id = localStorage.key(i);
      //get objects
      let item = JSON.parse(window.localStorage.getItem(id));
      //insert objects
      let row = table.insertRow(i);
      //lname
      let cell1 = row.insertCell(0);
      cell1.innerHTML = item.fname;
      //fname
      let cell2 = row.insertCell(1);
      cell2.innerHTML = item.lname;
      //date
      let cell3 = row.insertCell(2);
      cell3.innerHTML = item.date;
      //phone number
      let cell4 = row.insertCell(3);
      cell4.innerHTML = item.phone;
      //email
      let cell5 = row.insertCell(4);
      cell5.innerHTML = item.email;
      //address
      let cell6 = row.insertCell(5);
      cell6.innerHTML = item.adress;
      //insert buttons
      cell7 = row.insertCell(6);
      cell7.innerHTML = `<a onClick="onNavigate('/register');onEdit(this);">Edit</a>
                         <a onClick="onDelete(this)">Delete</a>`;
      //inserts the id of element
      cell8 = row.insertCell(7);
      cell8.hidden = true;
      cell8.innerHTML = id;

  }
}

function onEdit(item){
  //select the whole entry
  selectedRow = item.parentElement.parentElement;
  document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
  document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("date").value = selectedRow.cells[2].innerHTML;
  document.getElementById("phone").value = selectedRow.cells[3].innerHTML;
  document.getElementById("email").value = selectedRow.cells[4].innerHTML;
  document.getElementById("adress").value = selectedRow.cells[5].innerHTML;
}

function updateFormData(){
    //get selected item id and convert to js object
    const id = selectedRow.lastChild.innerHTML;
    const item = JSON.parse(window.localStorage.getItem(id));

    //edit ogject information based on input value
    item.fname = document.getElementById("fname").value;
    item.lname = document.getElementById("lname").value;
    item.date = document.getElementById("date").value;
    item.phone = document.getElementById("phone").value;
    item.email = document.getElementById("email").value;
    item.adress = document.getElementById("adress").value;
    
    
    //save new item
    localStorage.setItem(id, JSON.stringify(item));
    onNavigate('/');
}

function onDelete(item){
  selectedRow = item.parentElement.parentElement;
  const id = selectedRow.lastChild.innerHTML;
  localStorage.removeItem(id)
  onNavigate('/');
}

function validateUnique(){
  isValid = true;

  for(let i=0; i<localStorage.length;i++){
    let id = localStorage.key(i);
    let item = JSON.parse(window.localStorage.getItem(id));
    //validate if phone number exists
    if(document.getElementById('phone').value === item.phone){
      document.getElementById('phoneValidation').classList.remove('hide');
      isValid=false;
    }else{
      if (!document.getElementById("phoneValidation").classList.contains("hide"))
          document.getElementById("phoneValidation").classList.add("hide");
    //validate if email exists    
    if(document.getElementById('email').value === item.email){
      document.getElementById('emailValidation').classList.remove('hide');
      isValid=false;
    }else{
      if (!document.getElementById("emailValidation").classList.contains("hide"))
      document.getElementById("emailValidation").classList.add("hide");
      isValid=true;
      }
    }
          
      
    
  }
  return isValid;
}

renderFormData();

