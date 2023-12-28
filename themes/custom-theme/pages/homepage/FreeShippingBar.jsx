import React from "react";

function FreeShippingBar() {
  return (
    <div className="page-width">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x border-divider border my-3">
        <div className="p-2 border-divider">
          <h2>Livraison gratuite</h2>
          <p>Bénéficiez de la livraison gratuite sur toutes les commandes de plus de X$.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Meilleur prix</h2>
          <p>Nous offrons les meilleurs prix sur tous nos produits.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Service de qualité</h2>
          <p>Notre service client est disponible 24h/24 et 7j/7.</p>
        </div>
      </div>
    </div>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2,
};