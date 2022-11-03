import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user!: { id: string; name: string };

  constructor(private _router: Router, private route: ActivatedRoute) {}

  moveToCategories() {
    this._router.navigate(['/categories']);
  }
  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.route.params.subscribe((data) => {
      this.user = {
        id: data['id'],
        name: data['name'],
      };
    });
  }

  getRamas() {
    this._router.navigate(['/users', 2, 'ramas']);
  }
}

//getting data from url to page --> activateRouter ---> snapshot
//sending data from page to url --->  <a [routerLink]="['/users', 1, 'leela']" ---> in html and suscribe
