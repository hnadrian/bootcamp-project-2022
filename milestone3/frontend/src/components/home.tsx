import React from "react";
import { Link } from 'react-router-dom';
import "./home.css";

export default function Home() {
  return (
    <div className="cards" id="recipe-list">
        <Link className="card" to="location.href='caramelizedporkegg.html';">
            <h2 className="food-title">Carameilzed Pork & Eggs</h2>
            <img className="card-prev"
                src="https://images.food52.com/pp2ABj0NxvrSTzcBlKOz-e5x88M=/1200x1200/8364ea06-c08c-45b7-bd78-51a2eec002da--2021-1008_sponsored_erath_big-feast_recipe_thit-kho-trung_branded_3x2_bette-blau-187.jpg"
                alt="Cramelized Pork & Eggs"/>
            <p className="food-description">A dish made with caramelized pork, braised until tender in coconut juice,
                with soft and flavorful eggs. Serve this authentic dish over fluffy white rice and crunchy
                vegetables.</p>
        </Link>
        <Link className="card" to="location.href='vietnamesepizza.html';">
            <h2 className="food-title">Vietnamese Pizza</h2>
            <img className="card-prev"
                src="https://fullofplants.com/wp-content/uploads/2021/06/vegan-banh-trang-nuong-rice-paper-vietnamese-pizza-with-mayo-and-chili-sauce-thumb.jpg"
                alt="Vietnamese Pizza"/>
            <p className="food-description">This dish consists of a crispy grilled rice paper sheet topped with egg,
                sausage, and plenty of green onions. It is then generously drizzled with mayo and sweet chili sauce.
            </p>
        </Link>
        <Link className="card" to="location.href='squashsoup.html';">
            <h2 className="food-title">Squash Soup with Pork Ribs</h2>
            <img className="card-prev" id="squashsoup-img"
                src="https://bunbobae.com/wp-content/uploads/2020/12/IMG_5260.jpg" alt="Squash Soup with Pork Ribs"/>
            <p className="food-description">A dish of flavorful broth made with kabocha squash, simple seasonings of
                fish sauce, bouillon and short pork ribs. It is finished with some pepper and green onion.</p>
        </Link>
    </div>
  );
}