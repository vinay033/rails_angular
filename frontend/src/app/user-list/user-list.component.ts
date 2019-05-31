import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public columns = ['id', 'first_name', 'last_name', 'email'];
  public rows : Array<User>;
  public url : string;
  public page = 1;
  public itemsPerPage = 10;
  public pageSize : number;
  constructor(public apiService: ApiService , public router : Router) { 
    this.rows = [];
  }

  ngOnInit() {
    this.apiService.get("users").subscribe((data : User[])=>{
      console.log(data);
      this.rows = data;
      console.log(this.rows);
    });
  }

  public delete(id:string){
    console.log("delete : " + id);
    var path = 'users/' + id;
    this.apiService.delete(path).subscribe((r)=>{

    this.rows = this.rows.filter((p,i)=>{
        
        if(Number(id) === p.id ) 
        {
        return false;
        }
        return true;
    },this.rows)

    });
  }

  public onPageChange(pageNum: number): void {
    console.log(pageNum);
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }

  public onSubmit(){
    var path = "users/upload.json?url=" + this.url
    this.apiService.post(path, this.url).subscribe((r)=>{
    alert("added!");
    this.url = "";
    
    });
  }

}