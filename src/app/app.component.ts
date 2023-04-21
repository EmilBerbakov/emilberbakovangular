import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'emilberbakovangular';
  //isMenuCollapsed= true;
  isLoggedin = false;
  isDarkTheme = false;
  opened = false;

  constructor(
    private appService: AppService,
    private renderer: Renderer2){
  }

  ngOnInit():void {
    let jwt:any = sessionStorage.getItem("JWT");
    this.isLoggedin=(jwt!==null && jwt!==undefined);
    this.appService.loadColorScheme();
    if (this.appService.currentColorScheme() === 'light' && !document.body.classList.contains('non-preferred-theme')) {
      this.isDarkTheme = false;
    }
    else{
      this.isDarkTheme = true;
    }
  }

  logout() {
    sessionStorage.clear();
    window.location.replace("/home");
  }

  //what we'll do here is add
  themeSwitch(): void {
    const theme = 'non-preferred-theme';
    document.body.classList.contains(theme) ? this.renderer.removeClass(document.body, theme): this.renderer.addClass(document.body, theme);
    console.log(document.body.classList);

  }
}
