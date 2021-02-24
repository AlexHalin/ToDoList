import {Component, OnDestroy, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {List} from '../../../shared/interfaces';
import {ListService} from '../../../shared/list.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-day-page',
  templateUrl: './day-page.component.html',
  styleUrls: ['./day-page.component.scss']
})
export class DayPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  lists: List[];
  listSub: Subscription;
  hideForm = true;

  constructor(private listService: ListService) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      todo: new FormControl(null, [
        Validators.required,
      ])
    });

    this.listSub = this.listService.getAll().subscribe(lists => {
      this.lists = lists;
    });
  }

  showForm() {
    this.hideForm = false;
  }

  addToDo() {
    if (this.form.invalid) {
      return;
    }

    const list: List = {
      todo: this.form.value.todo
    };

    this.listService.create(list).subscribe(() => {
      this.form.reset();
    });
  }

  ngOnDestroy() {
    if (this.listSub) {
      this.listSub.unsubscribe();
    }
  }
}
