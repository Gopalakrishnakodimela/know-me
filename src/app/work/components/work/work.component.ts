import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  public work1: string;
  public work2: string;
  public certificationImg: string;

  public company1: string;
  public company2: string;
  public company3: string;

  public techIcons: string;
  public oraCertAiLink:string;

  constructor(private readonly router: Router) {
    this.work1 = 'assets/images/professional.png';
    this.work2 = 'assets/images/achievements.png';
    this.certificationImg = 'assets/images/certifications.jpg';
    this.techIcons = 'assets/images/';
    this.company3 = 'assets/images/oracle.jpeg';
    this.company2 = 'assets/images/hexaware.png';
    this.company1 = 'assets/images/fss.jpeg';
    this.oraCertAiLink = "https://catalog-education.oracle.com/pls/certview/sharebadge?id=380681C2AA3B3FF005BE3F04B356545650989681BD2E3F8BD65C4522007C1273";
  }

  ngOnInit(): void {}

  public navigateTo(url: string) {
    this.router.navigateByUrl('/' + url);
  }

  public downloadResume() {
    alert(
      'If you are restricted to visit Google Drive links, Please use Contact Me option in Home page'
    );
    window.open('https://bit.ly/gopalaResume', '_blank ');
  }

  public navExternal(url: string) {
    window.open(url, '_blank');
  }
}
