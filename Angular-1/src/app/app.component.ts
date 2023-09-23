import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data ={
  title : 'Welcome to the first angular tutorialS'
  };
  onLogoClicked(){
    alert("Hello World");
  }
  OnKeyUp(newTitle:string){
     this.data.title = newTitle;
  }
}

