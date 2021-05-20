    convertFahrToCelsius = (fahr) =>{

            // C = (f-32) / 1.8           
            let C = (fahr-32)*5/9;
            let ans = C.toFixed(4);
                      
            if(typeof(fahr) == "number" || typeof(fahr) == "string"){
                console.log(ans);
            }else{
                console.log(`${fahr} is not a valid number but a/an ${typeof(fahr)}`);
            }
            

        }

        convertFahrToCelsius(1);

        checkYuGiOh = (n) =>{
            
                let result = n;

            result = [];

            if(typeof(n) == "number" || typeof(n) == "string"){

                for(i = 1; i <= n; i++){
                    if(i === 10 ){
                        
                        result.push("yu-oh");
                    }
                    if(i === 30 ){
                        
                        result.push("yu-gi-oh");
                    }
                    else if(i % 2 == 0){
                        
                        result.push("yu");
                    }
                    else if(i % 3 == 0){
                        
                        result.push("gi");
                    }
                    else if(i % 5 == 0){
                        
                        result.push("oh");
                    }
                    else{
                        result.push(i);
                    }
                           
                    
                }
                console.log(result);
                
                
            }else{                
                
                console.log(`${n} is not a valid number but a/an ${typeof(n)}`);
                
            }

        }
        
        checkYuGiOh(30);
