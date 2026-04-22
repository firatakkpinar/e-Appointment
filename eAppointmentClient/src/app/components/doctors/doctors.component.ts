import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DoctorModel } from '../../models/doctor.model';
import { HttpService } from '../../services/http.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from "@angular/forms";
import { departments } from '../../constants';
import { FormValidateDirective } from 'form-validate-angular';
import { SwalService } from '../../services/swal.service';
import { ChangeDetectorRef } from '@angular/core';
import { DoctorPipe } from '../../pipe/doctor.pipe';

@Component({
  selector: 'app-doctors',
  imports: [CommonModule, RouterLink, FormsModule,FormValidateDirective,DoctorPipe],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css',
})
export class DoctorsComponent implements OnInit{
  doctors:DoctorModel[]=[];
  departments = departments;

  @ViewChild("addModalCloseBtn") addModalCloseBtn:ElementRef<HTMLButtonElement>|undefined;
  @ViewChild("updateModalCloseBtn") updateModalCloseBtn:ElementRef<HTMLButtonElement>|undefined;

  createModel:DoctorModel=new DoctorModel();
  updateModel:DoctorModel=new DoctorModel();
  search:string = "";
  constructor(
    private http:HttpService,
    private swal:SwalService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.getAll();
    setTimeout(() => {
    if (this.doctors.length === 0) {
      this.getAll();
    }
  }, 300);
  }

  getAll(){
    this.http.post<DoctorModel[]>("Doctors/GetAll",{},(res)=>{
      this.doctors=[];
      this.doctors=res.data;
      this.cdr.detectChanges();
    })
  }
  add(form:NgForm){
    if(form.valid){
      this.http.post<string>("Doctors/Create",this.createModel,(res)=>{
        this.swal.callToast(res.data,"success");
        this.getAll();
        this.addModalCloseBtn?.nativeElement.click();
        this.createModel=new DoctorModel();
      });
    }
  }
  delete(id: string, fullName: string){
    this.swal.callSwal("Delete doctor?",`You want to delete ${fullName}?`,()=> {
      this.http.post<string>("Doctors/Delete", {id: id}, (res)=> {
        this.swal.callToast(res.data,"info");
        this.getAll();
      })
    })
  }

get(data: DoctorModel) {    
  this.updateModel = {...data};
  
  console.log("1. Tüm Gelen Data:", data);
  console.log("2. Departman Objesi:", data.department);
  

     this.updateModel.departmentValue = data.department.value;
     console.log("3. Atanan Value:", this.updateModel.departmentValue);
  
}

  update(form:NgForm){
    if(form.valid){
      this.http.post<string>("Doctors/Update",this.updateModel,(res)=>{
        this.swal.callToast(res.data,"success");
        this.getAll();
        this.updateModalCloseBtn?.nativeElement.click();
      });
    }
  }
}
