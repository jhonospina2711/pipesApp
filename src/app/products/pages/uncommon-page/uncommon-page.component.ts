import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Fernando'
  public gender: 'male' | 'female' = 'male'
  public invitacionMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{
    this.name = 'Melisa';
    this.gender = 'female';
  }

  //i18nPlural
  public clientes: string[] = ['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia']
  public clientesMap = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clientes.shift();
  }

  //Key Value Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Otawa, Canadá'
  }

  //Async pipe
  // public myObservableTimer = interval(2000).pipe(
  //   tap( value => console.log('tap:', value) )
  // );

  public promiseValue: Promise<string> = new Promise((resolve, rejeact) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.')
      console.log('Tenemos data en la promesa');
      this.person.name = 'Otro nombre'
  },3500);
})


}
