import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Todo} from "../../todo";
import {LoadingStatus} from "../../state/todos.reducer";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {

  form!: FormGroup;
  @Output() onSubmit: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Input() loadingSubmitFormStatus: LoadingStatus | null = 'idle';

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes?.loadingSubmitFormStatus.previousValue === 'loading' && changes?.loadingSubmitFormStatus.currentValue === 'idle') {
      this.resetForm();
    }
  }

  initForm(): void {
    this.form = this.fb.group({
      title: this.fb.control('', Validators.required),
      status: this.fb.control('Pending', Validators.required)
    });
  }

  submit(): void {
    for (const i in this.form.controls) {
      if (this.form.controls.hasOwnProperty(i)) {
        this.form.controls[i].markAsDirty();
        this.form.controls[i].updateValueAndValidity();
      }
    }

    if (this.form.invalid) { return; }

    this.onSubmit.emit(this.form.value);
  }

  resetForm() {
    this.form.patchValue({
      title: '',
      status: 'Pending'
    });
  }
}
