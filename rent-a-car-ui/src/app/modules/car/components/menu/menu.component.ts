import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  username: string | undefined; // İstifadəçinin adını saxlamaq üçün dəyişən

  constructor(private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token'); // Tokeni localStorage-dan götür

    if (token) {
      const decodedToken: any = jwtDecode(token); // Tokeni dekod et
      this.username = decodedToken.getName; // Dekod edilmiş tokenin içindən istifadəçinin adını götür
    }

    // Aktiv olan linki işarələmək üçün hazırlanan kod
    const linkColor = document.querySelectorAll('.nav-link');
    linkColor.forEach(link => {
      if (window.location.href.endsWith(link.getAttribute('href') || '')) {
        link.classList.add('active');
      }
      link.addEventListener('click', () => {
        linkColor.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
  }

  logout() {
    localStorage.removeItem('token'); // Tokeni sil
    window.location.reload(); // Səhifəni yenilə
  }

  findCarName() {
    this.router.navigate(['cars', '']); // 'cars' səhifəsinə yönləndir
  }
}
