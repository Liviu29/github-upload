import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MetricElement} from '../audio-serve.models';

interface DataItem {
  item: MetricElement;
}

@Component({
  selector: 'app-audio-serve-dashboard-dialog',
  templateUrl: './audio-serve-dashboard-dialog.component.html',
  styleUrls: ['./audio-serve-dashboard-dialog.component.css']
})
export class AudioServeDashboardDialogComponent implements OnInit {

  form: FormGroup;
  description: DataItem;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AudioServeDashboardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    if (data) {
      this.description = data;
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      metric1: new FormControl('', Validators.required),
      metric2: new FormControl('', Validators.required),
      metric3: new FormControl('', Validators.required),
      metric4: new FormControl('', Validators.required),
      action: new FormControl('', Validators.required)
    });

    if (this.description) {
      this.form.get('name').setValue(this.description.item.name);
      this.form.get('metric1').setValue(this.description.item.metric1);
      this.form.get('metric2').setValue(this.description.item.metric2);
      this.form.get('metric3').setValue(this.description.item.metric3);
      this.form.get('metric4').setValue(this.description.item.metric4);
      this.form.get('action').setValue(this.description.item.action);
    }
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
