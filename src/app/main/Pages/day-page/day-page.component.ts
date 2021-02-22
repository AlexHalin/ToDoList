import {Component} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  },
  {
    name: 'Milk'
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];


@Component({
  selector: 'app-day-page',
  templateUrl: './day-page.component.html',
  styleUrls: ['./day-page.component.scss']
})
export class DayPageComponent {

  form: FormGroup;

  hideForm = true;

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;


  ngOnInit() {
    this.form = new FormGroup({
      ToDo: new FormControl(null, [
        Validators.required,
      ])
    });
  }

  showForm() {
    this.hideForm = false;
  }

  addToDo() {
    console.log(TREE_DATA);
  }

  onInput(event: any, inputValue: string) {

    const value = event.target.value;
    console.log(inputValue);
    TREE_DATA.push({name: value});
    this.form.reset();
    this.hideForm = true;
  }
}
