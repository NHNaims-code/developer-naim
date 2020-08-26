document.getElementById('menu').addEventListener('click', function (){
    console.log('clicked');
    document.getElementById('body').innerHTML = `
        <div class = "popup-menu">
            <div id = "close">
                <a href=""><i class="fa fa-times" aria-hidden="true"></i></a>
            </div>
            <ul>
                <li><a href=""><i class="fa fa-home" aria-hidden="true"></i>HOME</a></li>
                <li><a href=""><i class="fa fa-user" aria-hidden="true"></i> ABOUT</a></li>
                <li><a href=""><i class="fa fa-briefcase" aria-hidden="true"></i>PORTFOLIO</a></li>
                <li><a href=""><i class="fa fa-envelope-open" aria-hidden="true"></i>CONTACT</a></li>
                <li><a href=""><i class="fa fa-comments" aria-hidden="true"></i>BLOG</a></li>
            </ul>
        </div>
        `
    })
document.getElementById('close').addEventListener('click', () =>{
    document.getElementById('body').innerHTML = `
    <header>
    <div id="menu" class="menu"> 
        <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
</header>
<div class="container">
    <div id="img" class="img-section">
    </div>
    <div class="info-section">
       <div class="inner-info-section">
            <h6>HI THERE</h6>
            <h1>I'M <span id="name">DEVELOPER NAIM</span></h1>
            <P>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</P>
            <div class="button">MORE ABOUT ME</div>
       </div>
    </div>
    <div class="menu-section">
            <div class="inner-menu-section">
                <ul>
                    <li><a href=""><i class="fa fa-home" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fa fa-user" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fa fa-briefcase" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fa fa-envelope-open" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fa fa-comments" aria-hidden="true"></i></a></li>
                </ul>
            </div>
    </div>
</div>
    `
})
console.log('clicked');
