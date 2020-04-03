import { Component, OnInit } from '@angular/core';
import { Foto } from 'src/app/models/foto';
import { CasaDoPobreService } from 'src/app/services/casa-do-pobre.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
})
export class FotosPage implements OnInit {

  fotos: Foto[] = []
  constructor(private casaDoPobreSrv:CasaDoPobreService, private photoViewer: PhotoViewer) { }

  async ngOnInit() {
    this.fotos = await this.casaDoPobreSrv.getFotos();
  }

  abrirFoto(foto:Foto) {
    this.photoViewer.show(foto.url)
  }

}
