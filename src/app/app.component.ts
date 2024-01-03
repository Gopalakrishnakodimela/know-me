import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'About Gopala Krishna Kodimela';

  constructor(private readonly router: Router) {}

  public navigateTo(url: any) {
    this.router.navigateByUrl(url);
  }

  public navigateExt(
    url: string,
    type: string = '_blank',
    showAlert: string = 'CV'
  ) {
    if (showAlert === 'CV') {
      alert(
        'If you are restricted to visit Google Drive links, Please use Contact Me option in Home page'
      );
    }
    window.open(url, type);
  }
}
