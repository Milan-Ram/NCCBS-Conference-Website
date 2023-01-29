

      const left_arrow = document.getElementById('image-scroll-arrow-left');
      const right_arrow = document.getElementById('image-scroll-arrow-right');
      const image_container =document.getElementById('scroll-images-container');
      let num=0;
      left_arrow.addEventListener('click',()=>{
        if(num==0){
        image_container.style.transform = "translateX(" + (-100) + "vw)";
        num +=1;
      }
      else{
          image_container.style.transform = "translateX(" + (0) + "px)";
          num -=1;
        }
      })
      right_arrow.addEventListener('click',()=>{
       if(num==1){
         image_container.style.transform = "translateX(" + (0) + "vw)";
        num -=1;
      }
      else{
        image_container.style.transform = "translateX(" + (-100) + "vw)";
        num +=1;

       }
       function auto_slide(){
        alert('hi');
        image_container.style.transform = "translateX(" + (-100) + "vw)";
       }
       setTimeout(auto_slide, 2000)

      // =============================== Mobile Menu ===================== //

        })
        const menu_icon =document.getElementById('mobile-menu-icon');
        const close_icon =document.getElementById('mobile-close-icon');
        const header =document.querySelector('.header');

        menu_icon.addEventListener('click',()=>{
          header.style.display ="block";
        });
        close_icon.addEventListener('click',()=>{
          header.style.display ="none";
        })
   