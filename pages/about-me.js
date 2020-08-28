document.getElementById('menu-me').addEventListener('click', function (){
    console.log('clicked');
    document.getElementById('body-me').innerHTML = `
        <div class = "popup-menu">
            <div id = "close">
                <a href=""><i class="fa fa-times" aria-hidden="true"></i></a>
            </div>
            <ul>
                <li><a href="../index.html"><i class="fa fa-home" aria-hidden="true"></i>HOME</a></li>
                <li><a href=""><i class="fa fa-user" aria-hidden="true"></i> ABOUT</a></li>
                <li><a href=""><i class="fa fa-briefcase" aria-hidden="true"></i>PORTFOLIO</a></li>
                <li><a href=""><i class="fa fa-envelope-open" aria-hidden="true"></i>CONTACT</a></li>
                <li><a href=""><i class="fa fa-comments" aria-hidden="true"></i>BLOG</a></li>
            </ul>
        </div>
        `
    })



console.log('clicked');


