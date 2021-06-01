import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ProfileComponent } from './profile/profile.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAssignment';

  constructor(private matDialog: MatDialog){

  }
  onOpenDialogClick(){
    this.matDialog.open(ProfileComponent,
      {
        height:'650px',width:'600px',
        
      });
  }

  
}
