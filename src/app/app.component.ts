import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-name';
  // cardsTitle: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];
  cardsTitle: string[] = ['Maia'];

  tableData: any;
  columnHeader: any;

  addCard(title: string) {
    this.cardsTitle.push(title);
  }

}
