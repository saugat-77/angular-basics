import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  isLikeDisabled: boolean = false;
  isShareDisabled: boolean = false;
  title: string = 'Data Binding';
  port: number = 4200;
  likeCount: number =0;
  shareCount: number =0;
  size: string = '1.2 rem';
  style: string = 'font-size: 1.2rem; color: cornflowerblue;';
  server: {id: number, status: string} = {id: 10, status: 'offline'};

  onLike(): void {
    this.likeCount++;
    // alert('You liked Shiba!');
  }

  onShare(): void{
    this.shareCount++;
    // alert('You shared shiba!');
  }

  getServerStatus(): string {
    return this.server.status;
  }
}
