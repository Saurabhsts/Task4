import { TasksrvService } from './../tasksrv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
})
export class Task2Component implements OnInit {
  List = [];

  constructor(private _task: TasksrvService) {}

  ngOnInit(): void {
    this._task.lists().subscribe((Data) => (this.List = Data));
  }
}
