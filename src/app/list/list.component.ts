import { ListserService } from './../listser.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  fetching = false;

  @ViewChild('id') id: ElementRef;
  @ViewChild('userid') userid: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('body') body: ElementRef;

  Editmode: boolean = false;
  EditIndex;

  products = [
    // { id: 'P1', name: 'Laptop', price: '50000' },
    // { id: 'P2', name: 'Tablet', price: '25000' },
    // { id: 'P3', name: 'Mobile', price: '20000' },
    // { id: 'P4', name: 'Scanner', price: '15000' },
    // { id: 'P5', name: 'Printer', price: '10000' },
  ];
  constructor(private _list: ListserService) {}

  ngOnInit(): void {
    this.OnfetchPro();
  }

  OnaddPro(id, userid, title, body) {
    if (this.Editmode) {
      this.products[this.EditIndex] = {
        id: id.value,
        userid: userid.value,
        title: title.value,
        body: body.value,
      };
      this.Editmode = false;
      this.id.nativeElement.value = '';
      this.userid.nativeElement.value = '';
      this.title.nativeElement.value = '';
      this.body.nativeElement.value = '';
    } else {
      this.products.push({
        id: id.value,
        userid: userid.value,
        title: title.value,
        body: body.value,
      });
    }
    this.OnsavePro();
  }

  onEdit(index: number) {
    this.Editmode = true;
    this.EditIndex = index;
    // console.log(this.products[index]);
    this.id.nativeElement.value = this.products[index].id;
    this.userid.nativeElement.value = this.products[index].userid;
    this.title.nativeElement.value = this.products[index].title;
    this.body.nativeElement.value = this.products[index].body;
  }
  onDelete(id) {
    this.products.splice(id, 1);
    this.OnsavePro();
  }
  OnsavePro() {
    this._list.onSave(this.products).subscribe((response) => {
      console.log(response);
    });
  }
  OnfetchPro() {
    this.fetching = true;
    this._list.onfetch().subscribe((Response) => {
      const Data = JSON.stringify(Response);
      this.products = JSON.parse(Data);
      this.fetching = false;
    });
  }
}
