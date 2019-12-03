import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';

@Component({
	selector: 'app-page',
	templateUrl: './animes.page.html',
	styleUrls: ['./animes.page.scss'],
})
export class AnimesPage{
  disableButton;
  disableButton2;
  disableButton3;
  public catalogo : Array<Object> = [];
  
  @ViewChild(IonSlides,{static: true}) slides: IonSlides;
  private loading: any;

	constructor(public alertController: AlertController, private loadingCtrl: LoadingController, private toastCtrl: ToastController,) {}

  ngOnInit() {
  }

  async presentAlert(title: string) {
		const alert = await this.alertController.create({
			header: title,
			buttons: ['OK']
		})

		await alert.present()
  }

  truthClick3() {
    this.disableButton3 = true;
    this.presentAlert('Este anime foi adicionado à sua Lista!')
    }
  
  truthClick2() {
    this.disableButton2 = true;
    this.presentAlert('Este anime foi adicionado à sua Lista!')
    }

  truthClick() {
    this.disableButton = true;
    this.presentAlert('Este anime foi adicionado à sua Lista!')
    }

    async presentLoading() {
      this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
      return this.loading.present();
    }
  
filtro(){
  let i = 0;
 let animes = document.getElementById('detalhes?');
  const select = document.getElementById("ion-select-option");

}
  //while(i<5){
    //if(select[i].selected == true){
      //console.log(select[i].value) 
   //}
    //i++
  //}
 


  detalhes(){
    document.getElementById('info').style.display = 'block';
    document.getElementById('detalhes').style.zIndex='0';
    document.getElementById('vermenos').style.zIndex='1';

    console.log('detalhes')
}
  mostrarmenos(){
    document.getElementById('vermenos').style.zIndex='0';
    document.getElementById('detalhes').style.zIndex='1';
    document.getElementById('info').style.display = 'none';
  
}
detalhes2(){
  document.getElementById('info2').style.display = 'block';
  document.getElementById('detalhes2').style.zIndex='0';
  document.getElementById('vermenos2').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos2(){
  document.getElementById('vermenos2').style.zIndex='0';
  document.getElementById('detalhes2').style.zIndex='1';
  document.getElementById('info2').style.display = 'none';

}
detalhes3(){
  document.getElementById('info3').style.display = 'block';
  document.getElementById('detalhes3').style.zIndex='0';
  document.getElementById('vermenos3').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos3(){
  document.getElementById('vermenos3').style.zIndex='0';
  document.getElementById('detalhes3').style.zIndex='1';
  document.getElementById('info3').style.display = 'none';

}
detalhes4(){
  document.getElementById('info4').style.display = 'block';
  document.getElementById('detalhes4').style.zIndex='0';
  document.getElementById('vermenos4').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos4(){
  document.getElementById('vermenos4').style.zIndex='0';
  document.getElementById('detalhes4').style.zIndex='1';
  document.getElementById('info4').style.display = 'none';

}
detalhes5(){
  document.getElementById('info5').style.display = 'block';
  document.getElementById('detalhes5').style.zIndex='0';
  document.getElementById('vermenos5').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos5(){
  document.getElementById('vermenos5').style.zIndex='0';
  document.getElementById('detalhes5').style.zIndex='1';
  document.getElementById('info5').style.display = 'none';

}
detalhes6(){
  document.getElementById('info6').style.display = 'block';
  document.getElementById('detalhes6').style.zIndex='0';
  document.getElementById('vermenos6').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos6(){
  document.getElementById('vermenos6').style.zIndex='0';
  document.getElementById('detalhes6').style.zIndex='1';
  document.getElementById('info6').style.display = 'none';

}
detalhes7(){
  document.getElementById('info7').style.display = 'block';
  document.getElementById('detalhes7').style.zIndex='0';
  document.getElementById('vermenos7').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos7(){
  document.getElementById('vermenos7').style.zIndex='0';
  document.getElementById('detalhes7').style.zIndex='1';
  document.getElementById('info7').style.display = 'none';

}
detalhes8(){
  document.getElementById('info8').style.display = 'block';
  document.getElementById('detalhes8').style.zIndex='0';
  document.getElementById('vermenos8').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos8(){
  document.getElementById('vermenos8').style.zIndex='0';
  document.getElementById('detalhes8').style.zIndex='1';
  document.getElementById('info8').style.display = 'none';

}
detalhes9(){
  document.getElementById('info9').style.display = 'block';
  document.getElementById('detalhes9').style.zIndex='0';
  document.getElementById('vermenos9').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos9(){
  document.getElementById('vermenos9').style.zIndex='0';
  document.getElementById('detalhes9').style.zIndex='1';
  document.getElementById('info9').style.display = 'none';

}
detalhes10(){
  document.getElementById('info10').style.display = 'block';
  document.getElementById('detalhes10').style.zIndex='0';
  document.getElementById('vermenos10').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos10(){
  document.getElementById('vermenos10').style.zIndex='0';
  document.getElementById('detalhes10').style.zIndex='1';
  document.getElementById('info10').style.display = 'none';

}
detalhes11(){
  document.getElementById('info11').style.display = 'block';
  document.getElementById('detalhes11').style.zIndex='0';
  document.getElementById('vermenos11').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos11(){
  document.getElementById('vermenos11').style.zIndex='0';
  document.getElementById('detalhes11').style.zIndex='1';
  document.getElementById('info11').style.display = 'none';

}
detalhes12(){
  document.getElementById('info12').style.display = 'block';
  document.getElementById('detalhes12').style.zIndex='0';
  document.getElementById('vermenos12').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos12(){
  document.getElementById('vermenos12').style.zIndex='0';
  document.getElementById('detalhes12').style.zIndex='1';
  document.getElementById('info12').style.display = 'none';

}
detalhes13(){
  document.getElementById('info13').style.display = 'block';
  document.getElementById('detalhes13').style.zIndex='0';
  document.getElementById('vermenos13').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos13(){
  document.getElementById('vermenos13').style.zIndex='0';
  document.getElementById('detalhes13').style.zIndex='1';
  document.getElementById('info13').style.display = 'none';

}
detalhes14(){
  document.getElementById('info14').style.display = 'block';
  document.getElementById('detalhes14').style.zIndex='0';
  document.getElementById('vermenos14').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos14(){
  document.getElementById('vermenos14').style.zIndex='0';
  document.getElementById('detalhes14').style.zIndex='1';
  document.getElementById('info14').style.display = 'none';

}detalhes15(){
  document.getElementById('info15').style.display = 'block';
  document.getElementById('detalhes15').style.zIndex='0';
  document.getElementById('vermenos15').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos15(){
  document.getElementById('vermenos15').style.zIndex='0';
  document.getElementById('detalhes15').style.zIndex='1';
  document.getElementById('info15').style.display = 'none';

}detalhes16(){
  document.getElementById('info16').style.display = 'block';
  document.getElementById('detalhes16').style.zIndex='0';
  document.getElementById('vermenos16').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos16(){
  document.getElementById('vermenos16').style.zIndex='0';
  document.getElementById('detalhes16').style.zIndex='1';
  document.getElementById('info16').style.display = 'none';

}detalhes17(){
  document.getElementById('info17').style.display = 'block';
  document.getElementById('detalhes17').style.zIndex='0';
  document.getElementById('vermenos17').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos17(){
  document.getElementById('vermenos17').style.zIndex='0';
  document.getElementById('detalhes17').style.zIndex='1';
  document.getElementById('info17').style.display = 'none';

}detalhes18(){
  document.getElementById('info18').style.display = 'block';
  document.getElementById('detalhes18').style.zIndex='0';
  document.getElementById('vermenos18').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos18(){
  document.getElementById('vermenos18').style.zIndex='0';
  document.getElementById('detalhes18').style.zIndex='1';
  document.getElementById('info18').style.display = 'none';

}detalhes19(){
  document.getElementById('info19').style.display = 'block';
  document.getElementById('detalhes19').style.zIndex='0';
  document.getElementById('vermenos19').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos19(){
  document.getElementById('vermenos19').style.zIndex='0';
  document.getElementById('detalhes19').style.zIndex='1';
  document.getElementById('info19').style.display = 'none';

}detalhes20(){
  document.getElementById('info20').style.display = 'block';
  document.getElementById('detalhes20').style.zIndex='0';
  document.getElementById('vermenos20').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos20(){
  document.getElementById('vermenos20').style.zIndex='0';
  document.getElementById('detalhes20').style.zIndex='1';
  document.getElementById('info20').style.display = 'none';

}detalhes21(){
  document.getElementById('info21').style.display = 'block';
  document.getElementById('detalhes21').style.zIndex='0';
  document.getElementById('vermenos21').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos21(){
  document.getElementById('vermenos21').style.zIndex='0';
  document.getElementById('detalhes21').style.zIndex='1';
  document.getElementById('info21').style.display = 'none';

}detalhes22(){
  document.getElementById('info22').style.display = 'block';
  document.getElementById('detalhes22').style.zIndex='0';
  document.getElementById('vermenos22').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos22(){
  document.getElementById('vermenos22').style.zIndex='0';
  document.getElementById('detalhes22').style.zIndex='1';
  document.getElementById('info22').style.display = 'none';

}detalhes23(){
  document.getElementById('info23').style.display = 'block';
  document.getElementById('detalhes23').style.zIndex='0';
  document.getElementById('vermenos23').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos23(){
  document.getElementById('vermenos23').style.zIndex='0';
  document.getElementById('detalhes23').style.zIndex='1';
  document.getElementById('info23').style.display = 'none';

}detalhes24(){
  document.getElementById('info24').style.display = 'block';
  document.getElementById('detalhes24').style.zIndex='0';
  document.getElementById('vermenos24').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos24(){
  document.getElementById('vermenos24').style.zIndex='0';
  document.getElementById('detalhes24').style.zIndex='1';
  document.getElementById('info24').style.display = 'none';
}detalhes25(){
  document.getElementById('info25').style.display = 'block';
  document.getElementById('detalhes25').style.zIndex='0';
  document.getElementById('vermenos25').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos25(){
  document.getElementById('vermenos25').style.zIndex='0';
  document.getElementById('detalhes25').style.zIndex='1';
  document.getElementById('info25').style.display = 'none';

}detalhes26(){
  document.getElementById('info26').style.display = 'block';
  document.getElementById('detalhes26').style.zIndex='0';
  document.getElementById('vermenos26').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos26(){
  document.getElementById('vermenos26').style.zIndex='0';
  document.getElementById('detalhes26').style.zIndex='1';
  document.getElementById('info26').style.display = 'none';

}
detalhes27(){
  document.getElementById('info27').style.display = 'block';
  document.getElementById('detalhes27').style.zIndex='0';
  document.getElementById('vermenos27').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos27(){
  document.getElementById('vermenos27').style.zIndex='0';
  document.getElementById('detalhes27').style.zIndex='1';
  document.getElementById('info27').style.display = 'none';

}detalhes28(){
  document.getElementById('info28').style.display = 'block';
  document.getElementById('detalhes28').style.zIndex='0';
  document.getElementById('vermenos28').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos28(){
  document.getElementById('vermenos28').style.zIndex='0';
  document.getElementById('detalhes28').style.zIndex='1';
  document.getElementById('info28').style.display = 'none';

}detalhes29(){
  document.getElementById('info29').style.display = 'block';
  document.getElementById('detalhes29').style.zIndex='0';
  document.getElementById('vermenos29').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos29(){
  document.getElementById('vermenos29').style.zIndex='0';
  document.getElementById('detalhes29').style.zIndex='1';
  document.getElementById('info29').style.display = 'none';

}detalhes30(){
  document.getElementById('info30').style.display = 'block';
  document.getElementById('detalhes30').style.zIndex='0';
  document.getElementById('vermenos30').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos31(){
  document.getElementById('vermenos31').style.zIndex='0';
  document.getElementById('detalhes31').style.zIndex='1';
  document.getElementById('info31').style.display = 'none';

}detalhes32(){
  document.getElementById('info32').style.display = 'block';
  document.getElementById('detalhes32').style.zIndex='0';
  document.getElementById('vermenos32').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos32(){
  document.getElementById('vermenos32').style.zIndex='0';
  document.getElementById('detalhes32').style.zIndex='1';
  document.getElementById('info32').style.display = 'none';

}detalhes33(){
  document.getElementById('info33').style.display = 'block';
  document.getElementById('detalhes33').style.zIndex='0';
  document.getElementById('vermenos33').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos33(){
  document.getElementById('vermenos33').style.zIndex='0';
  document.getElementById('detalhes33').style.zIndex='1';
  document.getElementById('info33').style.display = 'none';

}detalhes34(){
  document.getElementById('info34').style.display = 'block';
  document.getElementById('detalhes34').style.zIndex='0';
  document.getElementById('vermenos34').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos34(){
  document.getElementById('vermenos34').style.zIndex='0';
  document.getElementById('detalhes34').style.zIndex='1';
  document.getElementById('info34').style.display = 'none';

}detalhes35(){
  document.getElementById('info35').style.display = 'block';
  document.getElementById('detalhes35').style.zIndex='0';
  document.getElementById('vermenos35').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos35(){
  document.getElementById('vermenos35').style.zIndex='0';
  document.getElementById('detalhes35').style.zIndex='1';
  document.getElementById('info35').style.display = 'none';

}detalhes36(){
  document.getElementById('info36').style.display = 'block';
  document.getElementById('detalhes36').style.zIndex='0';
  document.getElementById('vermenos36').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos36(){
  document.getElementById('vermenos36').style.zIndex='0';
  document.getElementById('detalhes36').style.zIndex='1';
  document.getElementById('info36').style.display = 'none';

}detalhes37(){
  document.getElementById('info37').style.display = 'block';
  document.getElementById('detalhes37').style.zIndex='0';
  document.getElementById('vermenos37').style.zIndex='1';
  }
mostrarmenos37(){
  document.getElementById('vermenos37').style.zIndex='0';
  document.getElementById('detalhes37').style.zIndex='1';
  document.getElementById('info37').style.display = 'none';

}detalhes38(){
  document.getElementById('info38').style.display = 'block';
  document.getElementById('detalhes38').style.zIndex='0';
  document.getElementById('vermenos38').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos38(){
  document.getElementById('vermenos38').style.zIndex='0';
  document.getElementById('detalhes38').style.zIndex='1';
  document.getElementById('info38').style.display = 'none';

}detalhes39(){
  document.getElementById('info39').style.display = 'block';
  document.getElementById('detalhes39').style.zIndex='0';
  document.getElementById('vermenos39').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos39(){
  document.getElementById('vermenos39').style.zIndex='0';
  document.getElementById('detalhes39').style.zIndex='1';
  document.getElementById('info39').style.display = 'none';

}
detalhes40(){
  document.getElementById('info40').style.display = 'block';
  document.getElementById('detalhes40').style.zIndex='0';
  document.getElementById('vermenos40').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos40(){
  document.getElementById('vermenos40').style.zIndex='0';
  document.getElementById('detalhes40').style.zIndex='1';
  document.getElementById('info40').style.display = 'none';

}detalhes41(){
  document.getElementById('info41').style.display = 'block';
  document.getElementById('detalhes41').style.zIndex='0';
  document.getElementById('vermenos41').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos41(){
  document.getElementById('vermenos41').style.zIndex='0';
  document.getElementById('detalhes41').style.zIndex='1';
  document.getElementById('info41').style.display = 'none';

}detalhes42(){
  document.getElementById('info42').style.display = 'block';
  document.getElementById('detalhes42').style.zIndex='0';
  document.getElementById('vermenos42').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos42(){
  document.getElementById('vermenos42').style.zIndex='0';
  document.getElementById('detalhes42').style.zIndex='1';
  document.getElementById('info42').style.display = 'none';

}detalhes43(){
  document.getElementById('info43').style.display = 'block';
  document.getElementById('detalhes43').style.zIndex='0';
  document.getElementById('vermenos43').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos43(){
  document.getElementById('vermenos43').style.zIndex='0';
  document.getElementById('detalhes43').style.zIndex='1';
  document.getElementById('info43').style.display = 'none';

}detalhes44(){
  document.getElementById('info44').style.display = 'block';
  document.getElementById('detalhes44').style.zIndex='0';
  document.getElementById('vermenos44').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos44(){
  document.getElementById('vermenos44').style.zIndex='0';
  document.getElementById('detalhes44').style.zIndex='1';
  document.getElementById('info44').style.display = 'none';
}detalhes45(){
  document.getElementById('info45').style.display = 'block';
  document.getElementById('detalhes45').style.zIndex='0';
  document.getElementById('vermenos45').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos45(){
  document.getElementById('vermenos45').style.zIndex='0';
  document.getElementById('detalhes45').style.zIndex='1';
  document.getElementById('info45').style.display = 'none';
}detalhes46(){
  document.getElementById('info46').style.display = 'block';
  document.getElementById('detalhes46').style.zIndex='0';
  document.getElementById('vermenos46').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos46(){
  document.getElementById('vermenos46').style.zIndex='0';
  document.getElementById('detalhes46').style.zIndex='1';
  document.getElementById('info46').style.display = 'none';
}detalhes47(){
  document.getElementById('info47').style.display = 'block';
  document.getElementById('detalhes47').style.zIndex='0';
  document.getElementById('vermenos47').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos47(){
  document.getElementById('vermenos47').style.zIndex='0';
  document.getElementById('detalhes47').style.zIndex='1';
  document.getElementById('info47').style.display = 'none';
}
detalhes48(){
  document.getElementById('info48').style.display = 'block';
  document.getElementById('detalhes48').style.zIndex='0';
  document.getElementById('vermenos48').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos48(){
  document.getElementById('vermenos48').style.zIndex='0';
  document.getElementById('detalhes48').style.zIndex='1';
  document.getElementById('info48').style.display = 'none';
}detalhes49(){
  document.getElementById('info49').style.display = 'block';
  document.getElementById('detalhes49').style.zIndex='0';
  document.getElementById('vermenos49').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos49(){
  document.getElementById('vermenos49').style.zIndex='0';
  document.getElementById('detalhes49').style.zIndex='1';
  document.getElementById('info49').style.display = 'none';
}detalhes50(){
  document.getElementById('info50').style.display = 'block';
  document.getElementById('detalhes50').style.zIndex='0';
  document.getElementById('vermenos50').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos50(){
  document.getElementById('vermenos50').style.zIndex='0';
  document.getElementById('detalhes50').style.zIndex='1';
  document.getElementById('info50').style.display = 'none';
}detalhes51(){
  document.getElementById('info51').style.display = 'block';
  document.getElementById('detalhes51').style.zIndex='0';
  document.getElementById('vermenos51').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos51(){
  document.getElementById('vermenos51').style.zIndex='0';
  document.getElementById('detalhes51').style.zIndex='1';
  document.getElementById('info51').style.display = 'none';
}
detalhes52(){
  document.getElementById('info52').style.display = 'block';
  document.getElementById('detalhes52').style.zIndex='0';
  document.getElementById('vermenos52').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos52(){
  document.getElementById('vermenos52').style.zIndex='0';
  document.getElementById('detalhes52').style.zIndex='1';
  document.getElementById('info52').style.display = 'none';
}
detalhes53(){
  document.getElementById('info53').style.display = 'block';
  document.getElementById('detalhes53').style.zIndex='0';
  document.getElementById('vermenos53').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos53(){
  document.getElementById('vermenos53').style.zIndex='0';
  document.getElementById('detalhes53').style.zIndex='1';
  document.getElementById('info53').style.display = 'none';

}
detalhes54(){
  document.getElementById('info54').style.display = 'block';
  document.getElementById('detalhes54').style.zIndex='0';
  document.getElementById('vermenos54').style.zIndex='1';
}
mostrarmenos54(){
  document.getElementById('vermenos54').style.zIndex='0';
  document.getElementById('detalhes54').style.zIndex='1';
  document.getElementById('info54').style.display = 'none';
}detalhes55(){
  document.getElementById('info55').style.display = 'block';
  document.getElementById('detalhes55').style.zIndex='0';
  document.getElementById('vermenos55').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos55(){
  document.getElementById('vermenos55').style.zIndex='0';
  document.getElementById('detalhes55').style.zIndex='1';
  document.getElementById('info55').style.display = 'none';
}detalhes56(){
  document.getElementById('info56').style.display = 'block';
  document.getElementById('detalhes56').style.zIndex='0';
  document.getElementById('vermenos56').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos56(){
  document.getElementById('vermenos56').style.zIndex='0';
  document.getElementById('detalhes56').style.zIndex='1';
  document.getElementById('info56').style.display = 'none';
}detalhes57(){
  document.getElementById('info57').style.display = 'block';
  document.getElementById('detalhes57').style.zIndex='0';
  document.getElementById('vermenos57').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos57(){
  document.getElementById('vermenos57').style.zIndex='0';
  document.getElementById('detalhes57').style.zIndex='1';
  document.getElementById('info57').style.display = 'none';
}detalhes58(){
  document.getElementById('info58').style.display = 'block';
  document.getElementById('detalhes58').style.zIndex='0';
  document.getElementById('vermenos58').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos58(){
  document.getElementById('vermenos58').style.zIndex='0';
  document.getElementById('detalhes58').style.zIndex='1';
  document.getElementById('info58').style.display = 'none';
}detalhes59(){
  document.getElementById('info59').style.display = 'block';
  document.getElementById('detalhes59').style.zIndex='0';
  document.getElementById('vermenos59').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos59(){
  document.getElementById('vermenos59').style.zIndex='0';
  document.getElementById('detalhes59').style.zIndex='1';
  document.getElementById('info59').style.display = 'none';
}detalhes60(){
  document.getElementById('info60').style.display = 'block';
  document.getElementById('detalhes60').style.zIndex='0';
  document.getElementById('vermenos60').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos60(){
  document.getElementById('vermenos60').style.zIndex='0';
  document.getElementById('detalhes60').style.zIndex='1';
  document.getElementById('info60').style.display = 'none';
}detalhes61(){
  document.getElementById('info61').style.display = 'block';
  document.getElementById('detalhes61').style.zIndex='0';
  document.getElementById('vermenos61').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos61(){
  document.getElementById('vermenos61').style.zIndex='0';
  document.getElementById('detalhes61').style.zIndex='1';
  document.getElementById('info61').style.display = 'none';
}detalhes62(){
  document.getElementById('info62').style.display = 'block';
  document.getElementById('detalhes62').style.zIndex='0';
  document.getElementById('vermenos62').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos62(){
  document.getElementById('vermenos62').style.zIndex='0';
  document.getElementById('detalhes62').style.zIndex='1';
  document.getElementById('info62').style.display = 'none';
}detalhes63(){
  document.getElementById('info63').style.display = 'block';
  document.getElementById('detalhes63').style.zIndex='0';
  document.getElementById('vermenos63').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos63(){
  document.getElementById('vermenos63').style.zIndex='0';
  document.getElementById('detalhes63').style.zIndex='1';
  document.getElementById('info63').style.display = 'none';
}detalhes64(){
  document.getElementById('info64').style.display = 'block';
  document.getElementById('detalhes64').style.zIndex='0';
  document.getElementById('vermenos64').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos64(){
  document.getElementById('vermenos64').style.zIndex='0';
  document.getElementById('detalhes64').style.zIndex='1';
  document.getElementById('info64').style.display = 'none';
}detalhes65(){
  document.getElementById('info65').style.display = 'block';
  document.getElementById('detalhes65').style.zIndex='0';
  document.getElementById('vermenos65').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos65(){
  document.getElementById('vermenos65').style.zIndex='0';
  document.getElementById('detalhes65').style.zIndex='1';
  document.getElementById('info65').style.display = 'none';
}detalhes66(){
  document.getElementById('info66').style.display = 'block';
  document.getElementById('detalhes66').style.zIndex='0';
  document.getElementById('vermenos66').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos66(){
  document.getElementById('vermenos66').style.zIndex='0';
  document.getElementById('detalhes66').style.zIndex='1';
  document.getElementById('info66').style.display = 'none';
}detalhes67(){
  document.getElementById('info67').style.display = 'block';
  document.getElementById('detalhes67').style.zIndex='0';
  document.getElementById('vermenos67').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos67(){
  document.getElementById('vermenos67').style.zIndex='0';
  document.getElementById('detalhes67').style.zIndex='1';
  document.getElementById('info67').style.display = 'none';
}detalhes68(){
  document.getElementById('info68').style.display = 'block';
  document.getElementById('detalhes68').style.zIndex='0';
  document.getElementById('vermenos68').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos68(){
  document.getElementById('vermenos68').style.zIndex='0';
  document.getElementById('detalhes68').style.zIndex='1';
  document.getElementById('info68').style.display = 'none';
}detalhes69(){
  document.getElementById('info69').style.display = 'block';
  document.getElementById('detalhes69').style.zIndex='0';
  document.getElementById('vermenos69').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos69(){
  document.getElementById('vermenos69').style.zIndex='0';
  document.getElementById('detalhes69').style.zIndex='1';
  document.getElementById('info69').style.display = 'none';
}detalhes70(){
  document.getElementById('info70').style.display = 'block';
  document.getElementById('detalhes70').style.zIndex='0';
  document.getElementById('vermenos70').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos70(){
  document.getElementById('vermenos70').style.zIndex='0';
  document.getElementById('detalhes70').style.zIndex='1';
  document.getElementById('info70').style.display = 'none';
}detalhes71(){
  document.getElementById('info71').style.display = 'block';
  document.getElementById('detalhes71').style.zIndex='0';
  document.getElementById('vermenos71').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos71(){
  document.getElementById('vermenos71').style.zIndex='0';
  document.getElementById('detalhes71').style.zIndex='1';
  document.getElementById('info71').style.display = 'none';
}detalhes72(){
  document.getElementById('info72').style.display = 'block';
  document.getElementById('detalhes72').style.zIndex='0';
  document.getElementById('vermenos72').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos72(){
  document.getElementById('vermenos72').style.zIndex='0';
  document.getElementById('detalhes72').style.zIndex='1';
  document.getElementById('info72').style.display = 'none';
}detalhes73(){
  document.getElementById('info73').style.display = 'block';
  document.getElementById('detalhes73').style.zIndex='0';
  document.getElementById('vermenos73').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos73(){
  document.getElementById('vermenos73').style.zIndex='0';
  document.getElementById('detalhes73').style.zIndex='1';
  document.getElementById('info73').style.display = 'none';
}detalhes74(){
  document.getElementById('info74').style.display = 'block';
  document.getElementById('detalhes74').style.zIndex='0';
  document.getElementById('vermenos74').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos74(){
  document.getElementById('vermenos74').style.zIndex='0';
  document.getElementById('detalhes74').style.zIndex='1';
  document.getElementById('info74').style.display = 'none';
}detalhes75(){
  document.getElementById('info75').style.display = 'block';
  document.getElementById('detalhes75').style.zIndex='0';
  document.getElementById('vermenos75').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos75(){
  document.getElementById('vermenos75').style.zIndex='0';
  document.getElementById('detalhes75').style.zIndex='1';
  document.getElementById('info75').style.display = 'none';




}detalhes76(){
  document.getElementById('info76').style.display = 'block';
  document.getElementById('detalhes76').style.zIndex='0';
  document.getElementById('vermenos76').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos76(){
  document.getElementById('vermenos76').style.zIndex='0';
  document.getElementById('detalhes76').style.zIndex='1';
  document.getElementById('info76').style.display = 'none';

}detalhes77(){
  document.getElementById('info77').style.display = 'block';
  document.getElementById('detalhes77').style.zIndex='0';
  document.getElementById('vermenos77').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos77(){
  document.getElementById('vermenos77').style.zIndex='0';
  document.getElementById('detalhes77').style.zIndex='1';
  document.getElementById('info77').style.display = 'none';

}detalhes78(){
  document.getElementById('info78').style.display = 'block';
  document.getElementById('detalhes78').style.zIndex='0';
  document.getElementById('vermenos78').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos78(){
  document.getElementById('vermenos78').style.zIndex='0';
  document.getElementById('detalhes78').style.zIndex='1';
  document.getElementById('info78').style.display = 'none';
}detalhes79(){
  document.getElementById('info79').style.display = 'block';
  document.getElementById('detalhes79').style.zIndex='0';
  document.getElementById('vermenos79').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos79(){
  document.getElementById('vermenos79').style.zIndex='0';
  document.getElementById('detalhes79').style.zIndex='1';
  document.getElementById('info79').style.display = 'none';}
detalhes80(){
  document.getElementById('info80').style.display = 'block';
  document.getElementById('detalhes80').style.zIndex='0';
  document.getElementById('vermenos80').style.zIndex='1';

  console.log('detalhes')
}
mostrarmenos80(){
  document.getElementById('vermenos80').style.zIndex='0';
  document.getElementById('detalhes80').style.zIndex='1';
  document.getElementById('info80').style.display = 'none';}
  detalhes81(){
    document.getElementById('info81').style.display = 'block';
    document.getElementById('detalhes81').style.zIndex='0';
    document.getElementById('vermenos81').style.zIndex='1';
  
    console.log('detalhes')
  }
  mostrarmenos81(){
    document.getElementById('vermenos81').style.zIndex='0';
    document.getElementById('detalhes81').style.zIndex='1';
    document.getElementById('info81').style.display = 'none';}
    detalhes82(){
      document.getElementById('info82').style.display = 'block';
      document.getElementById('detalhes82').style.zIndex='0';
      document.getElementById('vermenos82').style.zIndex='1';
    
      console.log('detalhes')
    }
    mostrarmenos82(){
      document.getElementById('vermenos82').style.zIndex='0';
      document.getElementById('detalhes82').style.zIndex='1';
      document.getElementById('info82').style.display = 'none';}
      detalhes83(){
        document.getElementById('info83').style.display = 'block';
        document.getElementById('detalhes83').style.zIndex='0';
        document.getElementById('vermenos83').style.zIndex='1';
      
        console.log('detalhes')
      }
      mostrarmenos83(){
        document.getElementById('vermenos83').style.zIndex='0';
        document.getElementById('detalhes83').style.zIndex='1';
        document.getElementById('info83').style.display = 'none';}
        detalhes84(){
          document.getElementById('info84').style.display = 'block';
          document.getElementById('detalhes84').style.zIndex='0';
          document.getElementById('vermenos84').style.zIndex='1';
        
          console.log('detalhes')
        }
        mostrarmenos84(){
          document.getElementById('vermenos84').style.zIndex='0';
          document.getElementById('detalhes84').style.zIndex='1';
          document.getElementById('info84').style.display = 'none';}
          detalhes85(){
            document.getElementById('info85').style.display = 'block';
            document.getElementById('detalhes85').style.zIndex='0';
            document.getElementById('vermenos85').style.zIndex='1';
          
            console.log('detalhes')
          }
          mostrarmenos85(){
            document.getElementById('vermenos85').style.zIndex='0';
            document.getElementById('detalhes85').style.zIndex='1';
            document.getElementById('info85').style.display = 'none';}
            detalhes86(){
              document.getElementById('info86').style.display = 'block';
              document.getElementById('detalhes86').style.zIndex='0';
              document.getElementById('vermenos86').style.zIndex='1';
            
              console.log('detalhes')
            }
            mostrarmenos86(){
              document.getElementById('vermenos86').style.zIndex='0';
              document.getElementById('detalhes86').style.zIndex='1';
              document.getElementById('info86').style.display = 'none';}
              detalhes87(){
                document.getElementById('info87').style.display = 'block';
                document.getElementById('detalhes87').style.zIndex='0';
                document.getElementById('vermenos87').style.zIndex='1';
              
                console.log('detalhes')
              }
              mostrarmenos87(){
                document.getElementById('vermenos87').style.zIndex='0';
                document.getElementById('detalhes87').style.zIndex='1';
                document.getElementById('info87').style.display = 'none';}
                detalhes88(){
                  document.getElementById('info88').style.display = 'block';
                  document.getElementById('detalhes88').style.zIndex='0';
                  document.getElementById('vermenos88').style.zIndex='1';
                
                  console.log('detalhes')
                }
                mostrarmenos88(){
                  document.getElementById('vermenos88').style.zIndex='0';
                  document.getElementById('detalhes88').style.zIndex='1';
                  document.getElementById('info88').style.display = 'none';}
                  detalhes89(){
                    document.getElementById('info89').style.display = 'block';
                    document.getElementById('detalhes89').style.zIndex='0';
                    document.getElementById('vermenos89').style.zIndex='1';
                  
                    console.log('detalhes')
                  }
                  mostrarmenos89(){
                    document.getElementById('vermenos89').style.zIndex='0';
                    document.getElementById('detalhes89').style.zIndex='1';
                    document.getElementById('info89').style.display = 'none';}
                    detalhes90(){
                      document.getElementById('info90').style.display = 'block';
                      document.getElementById('detalhes90').style.zIndex='0';
                      document.getElementById('vermenos90').style.zIndex='1';
                    
                      console.log('detalhes')
                    }
                    mostrarmenos90(){
                      document.getElementById('vermenos90').style.zIndex='0';
                      document.getElementById('detalhes90').style.zIndex='1';
                      document.getElementById('info90').style.display = 'none';}
                      detalhes91(){
                        document.getElementById('info91').style.display = 'block';
                        document.getElementById('detalhes91').style.zIndex='0';
                        document.getElementById('vermenos91').style.zIndex='1';
                      
                        console.log('detalhes')
                      }
                      mostrarmenos91(){
                        document.getElementById('vermenos91').style.zIndex='0';
                        document.getElementById('detalhes91').style.zIndex='1';
                        document.getElementById('info91').style.display = 'none';}
                        detalhes92(){
                          document.getElementById('info92').style.display = 'block';
                          document.getElementById('detalhes92').style.zIndex='0';
                          document.getElementById('vermenos92').style.zIndex='1';
                        
                          console.log('detalhes')
                        }
                        mostrarmenos92(){
                          document.getElementById('vermenos92').style.zIndex='0';
                          document.getElementById('detalhes92').style.zIndex='1';
                          document.getElementById('info92').style.display = 'none';}
                          detalhes93(){
                            document.getElementById('info93').style.display = 'block';
                            document.getElementById('detalhes93').style.zIndex='0';
                            document.getElementById('vermenos93').style.zIndex='1';
                          
                            console.log('detalhes')
                          }
                          mostrarmenos93(){
                            document.getElementById('vermenos93').style.zIndex='0';
                            document.getElementById('detalhes93').style.zIndex='1';
                            document.getElementById('info93').style.display = 'none';}
                            detalhes94(){
                              document.getElementById('info94').style.display = 'block';
                              document.getElementById('detalhes94').style.zIndex='0';
                              document.getElementById('vermenos94').style.zIndex='1';
                            
                              console.log('detalhes')
                            }
                            mostrarmenos94(){
                              document.getElementById('vermenos94').style.zIndex='0';
                              document.getElementById('detalhes94').style.zIndex='1';
                              document.getElementById('info94').style.display = 'none';}
                              detalhes95(){
                                document.getElementById('info95').style.display = 'block';
                                document.getElementById('detalhes95').style.zIndex='0';
                                document.getElementById('vermenos95').style.zIndex='1';
                              
                                console.log('detalhes')
                              }
                              mostrarmenos95(){
                                document.getElementById('vermenos95').style.zIndex='0';
                                document.getElementById('detalhes95').style.zIndex='1';
                                document.getElementById('info95').style.display = 'none';}
                                detalhes96(){
                                  document.getElementById('info96').style.display = 'block';
                                  document.getElementById('detalhes96').style.zIndex='0';
                                  document.getElementById('vermenos96').style.zIndex='1';
                                
                                  console.log('detalhes')
                                }
                                mostrarmenos96(){
                                  document.getElementById('vermenos96').style.zIndex='0';
                                  document.getElementById('detalhes96').style.zIndex='1';
                                  document.getElementById('info96').style.display = 'none';}
                                  detalhes97(){
                                    document.getElementById('info97').style.display = 'block';
                                    document.getElementById('detalhes97').style.zIndex='0';
                                    document.getElementById('vermenos97').style.zIndex='1';
                                  
                                    console.log('detalhes')
                                  }
                                  mostrarmenos97(){
                                    document.getElementById('vermenos97').style.zIndex='0';
                                    document.getElementById('detalhes97').style.zIndex='1';
                                    document.getElementById('info97').style.display = 'none';}
                                    detalhes98(){
                                      document.getElementById('info98').style.display = 'block';
                                      document.getElementById('detalhes98').style.zIndex='0';
                                      document.getElementById('vermenos98').style.zIndex='1';
                                    
                                      console.log('detalhes')
                                    }
                                    mostrarmenos98(){
                                      document.getElementById('vermenos98').style.zIndex='0';
                                      document.getElementById('detalhes98').style.zIndex='1';
                                      document.getElementById('info98').style.display = 'none';}
                                    }