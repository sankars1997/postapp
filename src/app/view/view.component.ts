import { Component } from '@angular/core';
import { ServiceapipostService } from '../serviceapipost.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

constructor(private api:ServiceapipostService){
  api.fetchpost().subscribe(
    (reponse)=>{
      this.data=reponse;
    }
  )

}


data:any =[]
}
