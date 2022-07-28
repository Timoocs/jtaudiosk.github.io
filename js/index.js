
      
        const headerEl = document.querySelector('header');
      

        const setTranslate = (xPos, yPos, el) => {
            el.style.transform = `translate3d(${xPos}, ${yPos}px, 0)`;
        }
        let xScrollPosition;
        let yScrollPosition;

        const scrollLoop = () => {
            yScrollPosition = window.scrollY
            xScrollPosition = window.scrollX
          

             setTranslate(0, yScrollPosition * 0.75, headerEl);

            requestAnimationFrame(scrollLoop);
        }

        window.addEventListener('DOMContentLoaded', scrollLoop, false);
 