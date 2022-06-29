import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-insert-mform',
  templateUrl: './insert-mform.component.html',
  styleUrls: ['./insert-mform.component.css']
})
export class InsertMformComponent implements OnInit {
  mForm = {
    fmodule: '',
    formval: '',
    formdesc: '',
  }
  isSubmitted: boolean = false;

  mList: any = '';
  moduleList: any = [];

  constructor(private api: ApiService, private router: Router, private confirmationService: ConfirmationService, private primgngConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.getModuleAll();
  }
  async regForm(): Promise<any> {
    const data = {
      module_id: this.mForm.fmodule,
      name: this.mForm.formval,
      detail: this.mForm.formdesc
    };
    console.log(data);

    const rs: any = await this.api.saveData(data);
    console.log(rs);
    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 100);
  }

  confirmRegForm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'ยืนยันที่จะเพิ่มข้อมูล?',
      accept: () => {
        this.regForm()
      },
      reject: () => {

      }
    });
  }

  async getModuleAll(): Promise<any> {
    const rs: any = await this.api.getModuleAll();
    console.log(rs);

    this.moduleList = rs.message;

  }


}


