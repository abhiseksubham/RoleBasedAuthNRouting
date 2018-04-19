import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email    :string;
  password :string;
  valid : boolean;
    constructor(
    private router :  Router
    ) { }
 
 users={'users':
	[{'name': 'admin@gmail.com', 'pass' :'admin' , 'role':'admin'},
	{'name': 'user@gmail.com', 'pass' :'user', 'role':'user'}]
};

	public ngOnInit(){
		localStorage.setItem('users',JSON.stringify(this.users));
	}

	// validate()
	// {
	  
	// for (let user of this.users.users) {
	//   if(user.name ===this.email && this.password){
	//   this.valid = true  ;console.log('validated'); 
	//       if(user.role==='admin'){
	//       	this.router.navigate(['/admin']);
	//       }	
 //      	 else if(user.role==='user'){
 //            this.router.navigate(['/user']);
 //      	 }
 //      break;
	// }
 //  }

	// }
	  
}
