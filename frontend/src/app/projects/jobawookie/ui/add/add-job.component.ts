import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-addjob',
  templateUrl: './add-job.component.html',
  styleUrls: ['.././jobawookie-ui.component.css']
})
export class AddJobComponent implements OnInit {
  showForm: boolean;

  @Output() addEvt = new EventEmitter();

  toggleAptDisplay() {
    console.log(this.showForm);
    this.showForm = !this.showForm;
  }
// Template drive form
  handleAdd(formInfo: any) {
    const tempItem: object = {
        companyName: formInfo.companyName,
        companyEmail: formInfo.companyEmail,
        companyPhone: formInfo.companyPhone,
        postTitle: formInfo.postTitle,
        jobTypeList: formInfo.jobTypeList,
        jobTitle: formInfo.jobTitle,
        jobDescription: formInfo.jobDescription,
        jobRequirement: formInfo.jobRequirement
    };
    this.addEvt.emit(tempItem);
    this.showForm = !this.showForm;

  }

  constructor() {
    this.showForm = true;
  }


  ngOnInit() {
  }

}
