import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToDoList} from '../../../shared/interfaces';
import {ListService} from '../../../shared/list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-day-page',
  templateUrl: './day-page.component.html',
  styleUrls: ['./day-page.component.scss']
})
export class DayPageComponent implements OnInit, OnDestroy {
  @ViewChild('inputAdd') inputAddElement: ElementRef;

  form: FormGroup;
  lists: ToDoList[];
  checked: boolean;
  listSub: Subscription;
  deleteSub: Subscription;
  hideForm = true;

  constructor(
    private listService: ListService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      todo: new FormControl(null, [
        Validators.maxLength(18) // todo change this
      ])
    });

    this.listSub = this.listService.getAll().subscribe(lists => {
      this.lists = lists;
    });
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

      // location.reload()
      this.ngOnInit();
    });
  }

  remove(id: string) {
    this.deleteSub = this.listService.remove(id).subscribe(() => {
      this.lists = this.lists.filter(list => list.id !== id);
    });
  }

  checkBoxValue(event){
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
