import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentPage: string = 'Create Order';
  time = new Date();
  intervalId: number | undefined;
  user: { name: string; img: string } = {
    name: 'Ashraf',
    img: 'https://media.licdn.com/dms/image/D4E03AQFGZbGLoXYkwA/profile-displayphoto-shrink_200_200/0/1683069482424?e=1704326400&v=beta&t=VraacLjOikonzMl__iQktX7UqPBsMZHEQoCQ98orzvI',
  };

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000) as unknown as number;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
