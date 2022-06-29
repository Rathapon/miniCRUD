import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {ConfirmationService, PrimeNGConfig} from 'primeng/api';


@Component({
  selector: 'app-insert-module',
  templateUrl: './insert-module.component.html',
  styleUrls: ['./insert-module.component.css']
})
export class InsertModuleComponent implements OnInit {

  blockedDocument: boolean = false;

  mName = '';
  moduleList: any = [];

  constructor(private api: ApiService, private route: Router,
              private confirmationService: ConfirmationService,
              private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.blockDocument();
    setTimeout(() => {
      this.getModuleAll();
    }, 300);
    
  }

  blockDocument() {
    this.blockedDocument = true;
    setTimeout(() => {
      this.blockedDocument = false;
    }, 450);
  }

  async addModule(): Promise<any> {
    const data = {
      name: this.mName
    }
   
    console.log(data);
    const rs: any = await this.api.addModule(data);
    this.ngOnInit();
    this.mName = '';


  }

  async getModuleAll(): Promise<any>{
    const rs: any = await this.api.getModuleAll();
    console.log(rs);

    this.moduleList = rs.message;
  }

  async deleteModule(id: number): Promise<any> {
    const rs: any = await this.api.deleteModule(id);
    this.blockDocument();
    setTimeout(() => {
      this.getModuleAll();
    }, 300);
    
  }

  confirmDel(event: Event, id: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'ยืนยันที่จะลบข้อมูล?',
      accept: () => {
        this.deleteModule(id)
      },
      reject: () => {}
    });
  }

  confirmAddModule(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'ตรวจสอบข้อมูลก่อนยืนยัน',
      accept: () => {
        this.addModule();
      },
      reject: () => {}
    });
  }

  
}
