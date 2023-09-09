import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthLoginService } from '../auth-login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public authLoginService: AuthLoginService) {}

  ngOnInit() {
  }

}

