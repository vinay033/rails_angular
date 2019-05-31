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

  public onPageChange(pageNum: number): void {
    console.log(pageNum);
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }

}