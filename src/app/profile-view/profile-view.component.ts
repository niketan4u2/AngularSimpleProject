import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  profile:any

  

  constructor( private service:ProfileService) { }

  ngOnInit(): void {
    this.service.getProfile().subscribe(data=>
      {
      this.profile=data
      })
  }
  deleteProfile(data:any){
    this.service.deleteProfile(data).subscribe((response)=>
    {
      console.log(response)
      
    })
  }

  isEdit : boolean=false

  profileObject={
		"fname": " ",
		"lname": " ",
		"email": " ",
		"phone": " ",
		"age": " ",
		"state": " ",
		"Country": " ",
		"address": " ",
		"tags": " ",
		"url": " "
	  }
    
  profileEdit(data:any){
		this.isEdit=true
		this.profileObject=data
	  }
  

}
