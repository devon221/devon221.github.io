/*
    anime({
        targets: 'li.colBox1',
        translateX:[{ value : 100 , duration : 2000},
        {value : 0 , duration : 800}],
        loop : true ,
        autoplay : true
        
      });
      document.getElementById("homepage").addEventListener(click , ()=>{
        document.getElementById("homepage").classList.add("colG");
        document.getElementById("contactpage").classList.remove("colG");
        document.getElementById("aboutpage").classList.remove("colG");

      })
      document.getElementById("contactpage").addEventListener(click , ()=>{
        document.getElementById("homepage").classList.remove("colG");
        document.getElementById("contactpage").classList.add("colG");
        document.getElementById("aboutpage").classList.remove("colG");
      })
      document.getElementById("aboutpage").addEventListener(click , ()=>{
        document.getElementById("aboutpage").classList.add("colG");
        document.getElementById("contactpage").classList.remove("colG");
        document.getElementById("homepage").classList.remove("colG");
      })*/
  var flag = 0;
      anime({
        targets: 'li.colBox',
        translateX: [{ value : 50, duration : 2000},
            {value : 0 , duration : 800}],
            loop : true ,
        delay: anime.stagger(100) // increase delay by 100ms for each elements.
      });
      
      anime({
        targets: 'li.colBox3',
        translateX: [{ value : 20, duration : 2000},
            {value : 0 , duration : 800}],
            loop : true ,
        delay: anime.stagger(100) // increase delay by 100ms for each elements.
      });
      document.getElementById("transit").addEventListener("click" , ()=>{
        if(flag==0){
        document.getElementById("transit").innerText = "competetive programmer";
        flag = 1;
        }
        else if(flag==1){
          document.getElementById("transit").innerText = "Open Source Enthusiast";
          flag = 2;
          }
          else if(flag==2){
            document.getElementById("transit").innerText = "Btech Student";
            flag = 3;
          }
          else if(flag==3){
            document.getElementById("transit").innerText = "Web developer";
            flag = 0;
          }
      })
     

