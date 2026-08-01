import { business } from "@/config/business";

/**
 * JSON-LD de negócio local (schema.org/PetStore).
 * Alimenta o painel de conhecimento do Google e a busca local — é o que faz
 * horário, telefone e endereço aparecerem direto no resultado da busca.
 */
export function StructuredData() {
  const { address } = business;

  // Só publica o endereço quando a cidade estiver preenchida: endereço pela
  // metade no schema atrapalha mais do que ajuda na busca local.
  const postalAddress = address.city
    ? {
        "@type": "PostalAddress",
        streetAddress: `${address.street}, ${address.number}`,
        addressLocality: address.city,
        addressRegion: address.state,
        ...(address.neighborhood && { addressNeighborhood: address.neighborhood }),
        ...(address.postalCode && { postalCode: address.postalCode }),
        addressCountry: "BR",
      }
    : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: business.name,
    description: business.slogan,
    url: business.siteUrl,
    telephone: `+${business.whatsapp}`,
    image: `${business.siteUrl}/images/logo/caios-dog-pet.png`,
    logo: `${business.siteUrl}/images/logo/caios-dog-pet.png`,
    priceRange: "$$",
    currenciesAccepted: "BRL",
    areaServed: address.city ? { "@type": "City", name: address.city } : undefined,
    ...(postalAddress && { address: postalAddress }),
    sameAs: [business.links.instagram],
    openingHoursSpecification: business.hours.schema.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: business.services
        .filter((service) => service.active)
        .map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify remove as chaves `undefined`, então os campos ainda não
      // preenchidos simplesmente não vão pro HTML.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
