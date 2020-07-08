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
      var formData = readFormData();
      const id = Math.random().toString(36).substr(2, 9);
      localStorage.setItem(id, JSON.stringify(formData))
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

function insertNewRecord(formData){
  let table = document.getElementById("formTable");
  console.log(table);
  
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
      cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                         <a onClick="onDelete(this)">Delete</a>`;

  }
}

renderFormData();

