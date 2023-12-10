 //break and continue
 console.log("Break ! for loop ---------------------------------")
 for(let i=0; i<10; i++){
     if( i == 5 )
         break;
     console.log('Number : ' + i);
     }
     console.log("Continue ! for loop ---------------------------------")
 for(let i=0; i<10; i0++){
     if( i == 5 )
         continue;
     console.log('Number : ' + i);
     }
     /// labels for break and continue
     outer : for(let i=0; i<3; i++){
         for(let j=0; j<3; j++){
             let input= prompt(`Enter number: (${i} , ${j})` , '' );
             if(!input) break outer;
         }
     }
         alert(`done`);