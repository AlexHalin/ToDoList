import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToDoList} from '../../../shared/interfaces';
import {Subscription} from 'rxjs';
import {ListService} from '../../../shared/list.service';

@Component({
  selector: 'app-all-todos-page',
  templateUrl: './all-todos-page.component.html',
  styleUrls: ['./all-todos-page.component.scss']
})
export class AllTodosPageComponent implements OnInit {
  @ViewChild('inputAdd') inputAddElement: ElementRef;

  form: FormGroup;
  lists: ToDoList[];
  checked: boolean;
  listSub: Subscription;
  deleteSub: Subscription;
  hideForm = true;

  constructor(
    private formBuilder: FormBuilder,
    private listService: ListService
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      todo: [null, [Validators.maxLength(18)]], // todo change this
      check: this.formBuilder.array([])
    });

    this.getToDo();
  }

  showForm() {
    this.hideForm = false;
    setTimeout(() => {
      this.inputAddElement.nativeElement.focus();
    }, 0);
  }

  addToDo() {
    if (this.form.invalid) {
      return;
    } else if (this.form.get('todo').value === null || this.form.get('todo').value.trim().length === 0) {

      this.form.reset();
      return;
    }

    const list: ToDoList = {
      toDo: this.form.value.todo,
      checked: false
    };

    this.listService.create(list).subscribe(() => {
      this.form.reset();
      this.hideForm = true;
      this.getToDo();
    });
  }

  getToDo() {
    this.listSub = this.listService.getAll().subscribe(lists => {
      this.lists = lists;
    });
  }

  checkBoxValue(event) {
    const list: ToDoList = {
      id: event.id,
      checked: event.checked = !event.checked
    };

    this.listService.update(list).subscribe(() => {
      this.checked = event.checked;
      this.getToDo();
    });
    console.log(event);
  }

  ngOnDestroy() {
    if (this.listSub) {
      this.listSub.unsubscribe();
    }

    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
  }
}
