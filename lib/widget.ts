class Widgets {

  index: number;
  image: string = 'fa fa-user'
  label: string = 'Label';
  color: string = 'white'; 
  
  constructor() {}
  
  setColor(color = 'red') {
    this.color = color;	  
  }

}
