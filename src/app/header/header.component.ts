import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleclass:string = ""

  togglemenu(){
    if(this.toggleclass == ""){
      this.toggleclass = "active"

      document.querySelector("body")?.classList.add("no-scroll")
    } else{
      this.toggleclass = ""
      document.querySelector("body")?.classList.remove("no-scroll")
    }
  }
  

}
