import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  isLikeDisabled: boolean = false;
  isShareDisabled: boolean = true;
  // titles: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];
  port: number = 4200;
  likeCount: number =0;
  shareCount: number =0;
  size: string = '1.2 rem';
  style: string = 'font-size: 1.2rem; color: cornflowerblue;';
  server: {id: number, status: string} = {id: 10, status: 'offline'};
  isSpecial: any;
  @Input() titles: string[] = [];

  @Output() titleEvent$ = new EventEmitter<string>();
  cardTitle: string="Shiba";

  onAddCard(title: string): void {
    this.titleEvent$.emit(title);
  }

  onLike(): void {
    this.likeCount++;
    // alert('You liked Shiba!');
  }
  deleteCard():void{
    console.log("Deleted");
    // alert("Deleted");
  }

  onShare(): void{
    this.shareCount++;
    // alert('You shared shiba!');
  }

  getServerStatus(): string {
    return this.server.status;
  }
}