import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta: any) => resposta);
    }

    // public getOfertas2(): Promise<Array<Oferta>> {
    //     // tslint:disable-next-line: no-shadowed-variable
    //     return new Promise((resolve, reject) => {
    //         const correct = true;

    //         if (correct) {
    //             setTimeout(() => resolve(this.ofertas), 3000);
    //         } else {
    //             reject({ codigo_erro: 404, msg: 'Não foi possível obter dados!'});
    //         }
    //     })
    //     .then((ofertas: Array<Oferta>) => {
    //         console.log('Primeiro then');
    //         return ofertas;
    //     })
    //     .then((ofertas: Array<Oferta>) => {
    //         console.log('Segundo then');
    //         return new Promise((resolve2, reject2) => {
    //             setTimeout(() => { resolve2(ofertas); }, 3000);
    //         });
    //     })
    //     .then((ofertas: Array<Oferta>) => {
    //         console.log('Terceiro then com 3 segundos');
    //         return ofertas;
    //     });
    // }
}
