import { afterRender, Component, Input, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent  implements OnInit {
  @Input() messages:any
  scroll=true
  scrollTop=0
  constructor() {
    afterRender(
      ()=>{if (this.scroll) document.getElementsByClassName("vege")[0]
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
          }
    )
   }

  ngOnInit() {}

  // handleScrollStart() {
  //   console.log('scroll start');
  // }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    // console.log('scroll', JSON.stringify(ev.detail));
    this.scroll=false
    this.scrollTop=Number(ev.detail.scrollTop)
  }

  handleScrollEnd() {
    console.log('scroll end');
    let ich= document.getElementsByClassName('ion-padding')[0].clientHeight
    // let ict= document.getElementsByClassName('ion-padding')[0].clientTop
    // let ish= document.getElementsByClassName('ion-padding')[0].scrollHeight
    // console.log("ion: ",ich,";",ict,";",ish)
    let cch= document.getElementsByClassName('container2')[0].clientHeight
    // let cct= document.getElementsByClassName('container')[0].clientTop
    // let csh= document.getElementsByClassName('container')[0].scrollHeight
    // console.log("con: ",cch,";",cct,";",csh)
    if (ich+this.scrollTop>cch) this.scroll=true
    else this.scroll=false

  }

}
