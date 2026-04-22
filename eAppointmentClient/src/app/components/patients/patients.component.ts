import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PatientModel } from '../../models/patient.model';
import { HttpService } from '../../services/http.service';
import { SwalService } from '../../services/swal.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormValidateDirective } from 'form-validate-angular';
import { PatientPipe } from '../../pipe/patient.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [CommonModule,FormsModule, RouterLink ,FormValidateDirective,PatientPipe],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css',
})
export class PatientsComponent implements OnInit {

  patients:PatientModel[]=[];

  @ViewChild("addModalCloseBtn") addModalCloseBtn:ElementRef<HTMLButtonElement>|undefined;
  @ViewChild("updateModalCloseBtn") updateModalCloseBtn:ElementRef<HTMLButtonElement>|undefined;

  createModel:PatientModel=new PatientModel();
  updateModel:PatientModel=new PatientModel();
  search:string = "";
  constructor(
    private http:HttpService,
    private swal:SwalService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.getAll();
    setTimeout(() => {
    if (this.patients.length === 0) {
      this.getAll();
    }
  }, 300);
  }

  getAll(){
    this.http.post<PatientModel[]>("Patients/GetAll",{},(res)=>{
      this.patients=[];
      this.patients=res.data;
      this.cdr.detectChanges();
    })
  }
  add(form:NgForm){
    if(form.valid){
      this.http.post<string>("Patients/Create",this.createModel,(res)=>{
        this.swal.callToast(res.data,"success");
        this.getAll();
        this.addModalCloseBtn?.nativeElement.click();
        this.createModel=new PatientModel();
      });
    }
  }
  delete(id: string, fullName: string){
    this.swal.callSwal("Delete patient?",`You want to delete ${fullName}?`,()=> {
      this.http.post<string>("Patients/Delete", {id: id}, (res)=> {
        this.swal.callToast(res.data,"info");
        this.getAll();
      })
    })
  }

get(data: PatientModel) {    
  this.updateModel = {...data};

}

  update(form:NgForm){
    if(form.valid){
      this.http.post<string>("Patients/Update",this.updateModel,(res)=>{
        this.swal.callToast(res.data,"success");
        this.getAll();
        this.updateModalCloseBtn?.nativeElement.click();
      });
    }
  }
}
