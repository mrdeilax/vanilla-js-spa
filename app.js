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
        console.log('homepage');
        
      }else if(pathname === '/register'){
        console.log('register');
        
      }
      
  }

  window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
  }


//====CRUD====



