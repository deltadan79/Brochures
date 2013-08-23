
function showConfirm() {
        navigator.notification.confirm(
            'Do you really want to exit?',  // message
            exitFromApp,              // callback to invoke with index of button pressed
            'Exit',            // title
            'Cancel,OK'         // buttonLabels
        );
    }
 
    
    function exitFromApp(buttonIndex) {
      if (buttonIndex==2){
       navigator.app.exitApp();
    	}
