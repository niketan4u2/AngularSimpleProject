import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ProfileViewComponent } from '../profile-view/profile-view.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

	profile : any;
	
	isEdit : boolean=false
  constructor(private service:ProfileService,private matDialog: MatDialog) { }

  getProfile(){
	this.service.getProfile().subscribe(data=>
		{
			this.profile=data
		})
  }

  ngOnInit(): void {
    this.getProfile()
  }

   url:string=" "
  selectFile(event:any){
	  if(event.target.files){
		  var reader=new FileReader()
		  reader.readAsDataURL(event.target.files[0])
		  reader.onload=(event:any)=>{
			  this.url=event.target.result
		  }
	  }
  }

  createProfile(data:any){
	this.service.createProfile(data).subscribe((response)=>
	{
		console.log(response)
		this.getProfile()
	}),
	this.matDialog.open(ProfileViewComponent,
		{
		  height:'650px',width:'600px',
		  
		});
  	}

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
	  
	  
	
	  updateProfile(){
		this.service.updateProfile(this.profileObject).subscribe((response)=>
		{
	
		})
	  }
  }

 
