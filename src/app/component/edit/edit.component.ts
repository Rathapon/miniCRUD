import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  isLoadingResult = false;

  mForm = {
    module_id: '',
    name: '',
    detail: ''
  }
  data: any;

  mFormList: any = [];

  res = this.route.snapshot.params['id']


  constructor(public api: ApiService, private router: Router, private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {

    this.getFormByID();
    this.primengConfig.ripple = true;

  }

  async getFormByID(): Promise<any> {
    const rs: any = await this.api.getDataByID(this.res)
    console.log(rs)

    this.mFormList = rs.message;

  }

  backHome(){
    this.router.navigate(['/home']);
  }

  confirmUpd(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'ข้อมูลครบถ้วน?',
      accept: () => {
        this.saveData();
      },
      reject: () => {

      }
    });
  }

  async saveData() {
    const data = {
      module_id: this.mForm.module_id,
      name: this.mForm.name,
      detail: this.mForm.detail
    };

    const rs: any = await this.api.updateData(this.res, data)
    console.log(this.res, data);

    this.router.navigate(['/home'])
  }
}


