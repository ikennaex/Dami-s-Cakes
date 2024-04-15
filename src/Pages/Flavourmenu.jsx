import React from "react";
import "./flavourmenu.css"

export const data =  [
    {
        header: "Vanilla",
        subtext: "Classic moist vanilla cake, with vanilla buttercream and a strawberry jam filling."
    },
    {
        header: "Funfetti",
        subtext: "Banana Moist banana and cinnamon sponge with vanilla buttercream filling."
    },
    {
        header: "Chocolate Peanut Butter",
        subtext: "Rich Chocolate Sponge with Sweet and Salty Peanut Butter Buttercream"
    },
    {
        header: "Lemon",
        subtext: "Sponge made with fresh lemon zest filled with lemon buttercream made with fresh lemon juice. Ask for Lemon Curd for an extra zingy filling."
    },
    {
        header: "Chocolate",
        subtext: "Rich chocolate sponge with rich chocolate buttercream filling"
    },
    {
        header: "Speculoos",
        subtext: "Vanilla sponge with Speculoos (Biscoff) spread and Speculoos buttercream filling. "
    },
    {
        header: "Caramel",
        subtext: "Vanilla sponge with caramel and caramel buttercream filling. Can also be made with salted caramel."
    },
    {
        header: "Cookies and Cream",
        subtext: "Rich Chocolate Sponge with Cookies and Cream (Oreo) Buttercream"
    },
    {
        header: "Red Velvet",
        subtext: "A popular American classic.  Dramatic dark red cake flavored with vanilla, cocoa and a tang of buttermilk. Filled with a cream cheese buttercream."
    },
    {
        header: "Carrot",
        subtext: "Moist, lightly cinnamon spiced sponge with carrot, walnuts and sultanas. Filled with a cream cheese buttercream."
    },
    {
        header: "Banana",
        subtext: "Moist banana and cinnamon sponge with vanilla buttercream filling."
    },
]

const Flavourmenu = () => {

  return (
    <div>
      <p className="flavour-txt pink">----- Flavour Menu -----</p>
      <p className="cake-flavour">Cake Flavours</p>
        
        <div className="cake-flavours">
            {data.map((data) => 
            <div className="flex-item">
                <p className="pink flavour-header">{data.header}</p>
                <p>{data.subtext}</p>
            </div>
        )}
        </div>
        
        <div className="flavour-footerdiv">
        <p className="flavour-footertxt">
        If you can't see what you fancy then get in touch, I'm happy to mix and match flavours or whip up something special for you.
        </p>
        </div>
    </div>
  );
};

export default Flavourmenu;

