Vue.config.devtools = true;



const app = new Vue(
      {
          el: '#app',

          data: {
                photos: [
                      'img/image1.jpg',
                      'img/image2.jpg',
                      'img/image3.jpg',
                      'img/image4.jpg',
                      'img/image5.jpg'

                ],

                pictureIndex: 0,
              
            },
            //dove mettiamo il tempo? introduciamo created: la pagina vue.js è stata creata 
            //ATTENZIONE dopo data  e sintassi (che equivale a created: function ())
            created () {
                  //tutto ciò che è eseguoto qui viene lanciato dopo la creazione
                  //della pagina - sarebbe a dire che il component è pronto
                  //il nostro component attuale è app PER ORA ACCONTENTIAMOCI
                  //mettiamo il setInterval in modalità ES6
                  setInterval (()=> {
                      this.next();
                  }, 9000)


            },

            methods: {

                  next: function () {
                        //if per allineare contatore che parte da zero nn da 1
                        // se è ultimo non incrementare

                        if ( this.pictureIndex === this.photos.length -1){
                              this.pictureIndex = 0;
                        
                        } else{
                              this.pictureIndex++;
                        }
                  },
                  
                  prev: function () {
                        //idem ma se è all inizio non decrementare
                        
                        if ( this.pictureIndex === 0){
                              this.pictureIndex = this.photos.length -1;
                        } else {
                              this.pictureIndex--;
                        }

                  },

                  //nuova function che indirizza il singolo
                        //dot all immagine equivalente ->sempre utilizzando
                        // index che ancora una volta , ad ogni click,verrà riscritto

                  dotMoveTo: function (index){
                              this.pictureIndex = index;
      
                        },

                        //questa classe ritorna e assegna una classe diversa se
                        // isCurrentDot === this.pictureIndex e gli attributi saranno
                        //adeguatamente gestita in CSS
                  isCurrentDot: function (index){
                        if (index === this.pictureIndex){
                              return 'current';
                        }else {
                              return '';
                        }

                  },






                        



            
            
            
            
            
            }
          
          
          

       
      
      
      
      
      
      
      } )