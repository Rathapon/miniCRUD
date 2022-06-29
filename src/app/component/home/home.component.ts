import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { MForm } from '../m-form';
import { mFormModel } from 'src/app/model/mForm/mForm.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: any;

  blockedDocument: boolean = false;

  formList = [];

  moduleList: any = [];


  constructor(private router: Router, private api: ApiService,
              private confirmationService: ConfirmationService,
              private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.blockDocument();
    setTimeout(() => {
      this.getdata();
      this.getModuleAll();
    }, 300);

    this.primengConfig.ripple = true;

  }

  // Search(){
  //   if(this.name == ""){
  //     this.ngOnInit();
  //   }
  //   else{
  //     this.formList = this.formList.filter(this.name.match(this.name))
  //   }
  // }

  blockDocument() {
    this.blockedDocument = true;
    setTimeout(() => {
      this.blockedDocument = false;
    }, 450);
  }
  addForm() {
    this.router.navigate(['add-form'])
  }


  async deleteForm(id: number): Promise<any> {
    console.log(id);
    const rs: any = await this.api.deleteData(id);
    console.log(rs);
    this.ngOnInit();
  }

  confirmDel(event: Event, id: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'ยืนยันที่จะลบข้อมูล?',
      accept: () => {
        this.deleteForm(id)
      },
      reject: () => {

      }
    });
  }


  async getdata(): Promise<any> {
    const rs: any = await this.api.getData();

    console.log(rs);
    this.formList = rs.message;
  }

  async getModuleAll(): Promise<any>{
    const rs: any = await this.api.getModuleAll();
    console.log(rs);

    this.moduleList = rs.message;
  }


}
