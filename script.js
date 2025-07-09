const shoes = [
  {
    name: "Brown Penny Loafer",
    id: "SKU1001",
    price: "N45,000",
    image: "Brown_Penny_Loafer-removebg-preview.png",
  },
  {
    name: "Suede Monk Strap",
    id: "SKU1002",
    price: "N52,000",
    image: "Suede_Monk_Strap-removebg-preview.png",
  },
  {
    name: "Monk Strap Mule",
    id: "SKU1003",
    price: "N48,000",
    image: "Monk_Strap_Mule-removebg-preview.png",
  },
  {
    name: "Alligator Texture Monk Strap",
    id: "SKU1004",
    price: "N60,000",
    image: "Alligator_Texture_Monk_Strap-removebg-preview.png",
  },
  {
    name: "Textured Slip-On Mule",
    id: "SKU1005",
    price: "N42,000",
    image: "Textured_Slip-On_Mule-removebg-preview.png",
  },
  {
    name: "Hand-Stitched Tassel Loafer",
    id: "SKU1006",
    price: "N50,000",
    image: "Hand-Stitched_Tassel_Loafer-removebg-preview.png",
  },
  {
    name: "Classic Leather Derby",
    id: "SKU1007",
    price: "N50,000",
    image: "Classic_Leather_Derby-removebg-preview.png",
  },
  {
    name: "Oxford Brogue Elegance",
    id: "SKU1005",
    price: "N55,000",
    image: "Oxford_Brogue_Elegance-removebg-preview.png",
  },
  {
    name: "Chelsea Boot Burnished",
    id: "SKU1009",
    price: "N65,000",
    image: "Chelsea_Boot_Burnished.png",
  },
  {
    name: "Nubuck Ankle Boot",
    id: "SKU1010",
    price: "N58,000",
    image: "Nubuck_Ankle_Boot.png",
  },
  {
    name: "Vintage Leather Chukka",
    id: "SKU1011",
    price: "N54,000",
    image: "Vintage_Leather_Chukka.png",
  },
  {
    name: "Handcrafted Wholecut",
    id: "SKU1012",
    price: "N70,000",
    image: "Handcrafted_Wholecut.png",
  },
  {
    name: "Croc-Embossed Formal Shoe",
    id: "SKU1013",
    price: "N75,000",
    image: "Croc_Embossed_Formal_Shoe.png",
  },
  {
    name: "Classic Suede Derby",
    id: "SKU1014",
    price: "N53,000",
    image: "Classic_Suede_Derby.png",
  },
  {
    name: "Elegant Leather Tassel Loafer",
    id: "SKU1015",
    price: "N55,000",
    image: "Elegant_Leather_Tassel_Loafer.png",
  },
  {
    name: "Modern Buckled Monk",
    id: "SKU1016",
    price: "N58,000",
    image: "Modern_Buckled_Monk.png",
  },
  {
    name: "Lace-Up Combat Boot",
    id: "SKU1017",
    price: "N63,000",
    image: "Lace_Up_Combat_Boot.png",
  },
  {
    name: "Antique Patina Oxford",
    id: "SKU1018",
    price: "N68,000",
    image: "Antique_Patina_Oxford.png",
  },
  {
    name: "Minimalist Black Slip-On",
    id: "SKU1019",
    price: "N40,000",
    image: "Minimalist_Black_SlipOn.png",
  },
  {
    name: "Italian Woven Loafer",
    id: "SKU1020",
    price: "N72,000",
    image: "Italian_Woven_Loafer.png",
  },
  {
    name: "Signature Derby Lace-Up",
    id: "SKU1021",
    price: "N49,000",
    image: "Signature_Derby_LaceUp.png",
  },
  {
    name: "Rustic Tan Hiking Boot",
    id: "SKU1022",
    price: "N67,000",
    image: "Rustic_Tan_Hiking_Boot.png",
  },
  {
    name: "Premium Woven Oxford",
    id: "SKU1023",
    price: "N62,000",
    image: "Premium_Woven_Oxford.png",
  },
  {
    name: "Royal Blue Velvet Loafer",
    id: "SKU1024",
    price: "N74,000",
    image: "Royal_Blue_Velvet_Loafer.png",
  },
];

const container = document.getElementById("shoeContainer");

shoes.forEach((shoe, index) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.id = `shoe-${index}`;

  const whatsappMessage = encodeURIComponent(
    `Hello Emmanuel, I would like to buy "${shoe.name}" with ID ${shoe.id}.`
  );
  const whatsappLink = `https://wa.me/2347041545267?text=${whatsappMessage}`;

  card.innerHTML = `
                <img src="${shoe.image}" alt="${shoe.name}">
                <h3>${shoe.name}</h3>
                <p class="product-id">ID: ${shoe.id}</p>
                <p class="price">${shoe.price}</p>
                <a href="${whatsappLink}" target="_blank">
                    <button>Buy Now</button>
                </a>
            `;
  container.appendChild(card);
});

// Search functionality
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", () => {
  const query = searchBar.value.trim().toLowerCase();
  if (!query) return;

  const foundIndex = shoes.findIndex(
    (shoe) =>
      shoe.name.toLowerCase().includes(query) ||
      shoe.id.toLowerCase().includes(query)
  );

  if (foundIndex !== -1) {
    document.getElementById(`shoe-${foundIndex}`).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
});
