import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

    getProfile(){
      return this.http.get("http://localhost:3000/profile")
    }

    createProfile(data:any){
      return this.http.post("http://localhost:3000/profile",data)
    }

    deleteProfile(data:any){
      return this.http.delete("http://localhost:3000/profile/"+data.id)
    }

    updateProfile(data:any){
      return this.http.put("http://localhost:3000/profile/"+data.id,data)
    }

}
