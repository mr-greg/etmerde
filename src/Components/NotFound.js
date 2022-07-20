import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div id="notfound">
		<div class="notfound-bg"></div>
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2>Cette page n'existe pas !</h2>
			<div class="links">
            
				<a href="https://fr.linkedin.com/in/gregory-dervyn" target="blank">
                    <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"/>
                </a>

                <a href="https://github.com/GorgeousGoat/" target="blank">
                    <img src="https://img.icons8.com/ios-filled/40/000000/github.png"/>
                </a>
			</div>
            <Link to="/">
			    <a href="#">retour à l'accueil</a>
            </Link>
		</div>
	</div>
    );
}
 
export default NotFound;