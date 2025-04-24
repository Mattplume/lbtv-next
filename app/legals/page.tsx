/* eslint-disable react/no-unescaped-entities */
export default function LegalPage() {
  return (
    <main className="container mx-auto px-4 py-10 text-darkColor">
      <h1 className="text-2xl font-bold mb-6">Mentions Légales</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Éditeur du site</h2>
        <p>
          <strong>Nom :</strong> LA BAULE TV <br />
          <strong>Email :</strong> contact@labaule.tv <br />
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Hébergement</h2>
        <p>
          <strong>Hébergeur :</strong> Vercel Inc. <br />
          <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789,
          USA <br />
          <strong>Site :</strong>{" "}
          <a
            href="https://vercel.com"
            className="text-blue-500"
            target="_blank"
          >
            https://vercel.com
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
        <p>
          Tous les contenus présents sur le site (textes, vidéos, images, etc.)
          sont la propriété exclusive de <strong>La Baule TV</strong> ou de
          leurs titulaires respectifs. Toute reproduction sans autorisation est
          interdite.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Responsabilité</h2>
        <p>
          L'éditeur du site s'efforce d'assurer l'exactitude des informations,
          mais ne peut être tenu responsable des erreurs ou indisponibilités du
          site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Données personnelles</h2>
        <p>
          Les données collectées sont traitées selon le RGPD. Vous pouvez
          exercer vos droits en nous contactant à l'adresse suivante :{" "}
          <strong>contact@labaule.tv</strong>.
        </p>
      </section>

      {/* <section className="mb-6">
				<h2 className="text-xl font-semibold">Cookies</h2>
				<p>
					Le site utilise des cookies à des fins d'analyse et d'amélioration de
					l'expérience utilisateur. Vous pouvez modifier vos préférences via les
					paramètres de votre navigateur.
				</p>
			</section> */}

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Liens externes</h2>
        <p>
          Le site peut contenir des liens vers d'autres sites. L'éditeur ne peut
          être tenu responsable du contenu de ces sites tiers.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Droit applicable</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. En
          cas de litige, les tribunaux compétents seront ceux du siège de
          l'éditeur.
        </p>
      </section>
    </main>
  );
}
