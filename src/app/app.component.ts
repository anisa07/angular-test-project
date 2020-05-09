import { Component } from '@angular/core';
import { AuthorizationService } from '@app/services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthorizationService) { }
}
