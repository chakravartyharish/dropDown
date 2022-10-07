const data = [
  { id: 80727, label: "Aliment" },
  { id: 82913, label: "Boisson", parentId: 80727 },
  { id: 82914, label: "Boisson alcoolisée", parentId: 82913 },
  { id: 82915, label: "Vin & champagne, mousseux", parentId: 82914 },
  { id: 82916, label: "Bière, cidre & poiré", parentId: 82914 },
  { id: 82917, label: "Autres alcools", parentId: 82914 },
  { id: 82918, label: "Boisson non alcoolisée", parentId: 82913 },
  { id: 82919, label: "Eau", parentId: 82918 },
  {
    id: 82920,
    label: "Boisson non alcoolisée prête-à-boire",
    parentId: 82918,
  },
  {
    id: 82921,
    label: "Préparation pour boisson non alcoolisée",
    parentId: 82918,
  },
  {
    id: 82922,
    label: "Préparation pour boisson chaudes",
    parentId: 82918,
  },
  { id: 82923, label: "Café", parentId: 82918 },
  { id: 82924, label: "Thé/infusion", parentId: 82918 },
  { id: 82925, label: "Produit animal", parentId: 80727 },
  { id: 82926, label: "Viande, volaille & tripes", parentId: 82925 },
  { id: 82927, label: "Charcuterie", parentId: 82925 },
  {
    id: 82928,
    label: "Produits de la mer ou des rivières",
    parentId: 82925,
  },
  { id: 82929, label: "Traiteur de la mer", parentId: 82925 },
  { id: 82930, label: "Œuf", parentId: 82925 },
  { id: 82931, label: "Matière grasse animale", parentId: 82925 },
  { id: 82932, label: "Produit laitier", parentId: 82925 },
  { id: 82933, label: "Lait", parentId: 82932 },
  { id: 82934, label: "Yaourt & assimilés", parentId: 82932 },
  { id: 82935, label: "Fromage", parentId: 82932 },
  { id: 82936, label: "Crèmerie", parentId: 82932 },
  { id: 82937, label: "Matière grasse laitière", parentId: 82932 },
  { id: 82938, label: "Produit végétal", parentId: 80727 },
  {
    id: 82939,
    label: "Fruit, légume & champignon [non transformé],",
    parentId: 82938,
  },
  { id: 82940, label: "Céréales", parentId: 82938 },
  { id: 82941, label: "Matière grasse végétale", parentId: 82938 },
  { id: 82942, label: "Condiments", parentId: 82938 },
  { id: 82943, label: "Lait végétal", parentId: 82938 },
  { id: 82944, label: "Yaourt végétal", parentId: 82938 },
  { id: 82945, label: "Aliment préparé/transformé", parentId: 80727 },
  { id: 82946, label: "Dessert", parentId: 82945 },
  {
    id: 82947,
    label: "Fruit & légume préparé/transformé",
    parentId: 82945,
  },
  { id: 82948, label: "Plat préparé", parentId: 82945 },
  { id: 82949, label: "Epicerie sucrée", parentId: 82945 },
  {
    id: 82950,
    label: "Matière première cuisine patisserie",
    parentId: 82945,
  },
  {
    id: 82951,
    label: "Produits panifiés, viennoiseries, pâtisseries",
    parentId: 82945,
  },
  { id: 82952, label: "Pâtes alimentaires", parentId: 82945 },
  { id: 82953, label: "Epicerie salée", parentId: 82945 },
  { id: 82954, label: "Glace & sorbet", parentId: 82945 },
  { id: 80728, label: "Beauté & hygiène" },
  { id: 80743, label: "Parfumerie", parentId: 80728 },
  { id: 80744, label: "Maquillage", parentId: 80728 },
  { id: 80745, label: "Parapharmacie", parentId: 80728 },
  { id: 80746, label: "Accessoire", parentId: 80728 },
  { id: 80747, label: "Hygiène & soin", parentId: 80728 },
  {
    id: 82955,
    label: "Essuie-tout, papier, mouchoir coton, coton-tige & protection",
    parentId: 80728,
  },
  { id: 80729, label: "Entretien ménager" },
  { id: 82961, label: "Entretien ménager", parentId: 80729 },
  { id: 82962, label: "Nettoyant ménager", parentId: 82961 },
  { id: 82963, label: "Ustensiles de cuisine", parentId: 82961 },
  { id: 82964, label: "Produit pour le feu", parentId: 82961 },
  { id: 82965, label: "Lessive & soin du linge", parentId: 82961 },
  { id: 82966, label: "Accessoires textiles", parentId: 82961 },
  { id: 82967, label: "Emballage ménager", parentId: 82961 },
  {
    id: 82968,
    label: "Eponge, lavette, chiffons, plumeau & accesoires de nettoyage",
    parentId: 82961,
  },
  {
    id: 82969,
    label: "Désodorisant / bougie désodorisante",
    parentId: 82961,
  },
  { id: 82970, label: "Insecticide", parentId: 82961 },
  { id: 82904, label: "Animalerie" },
  { id: 80734, label: "Aliment pour animal", parentId: 82904 },
  { id: 82905, label: "Hygiène pour animaux", parentId: 82904 },
  { id: 82906, label: "Accessoires pour animaux", parentId: 82904 },
  { id: 82908, label: "Puériculture" },
  {
    id: 82909,
    label: "Aliment pour bébé diversification",
    parentId: 82908,
  },
  { id: 82910, label: "Lait infantile", parentId: 82908 },
  { id: 82911, label: "Hygiène et soin puériculture", parentId: 82908 },
  { id: 82912, label: "Accessoires bébé", parentId: 82908 },
  { id: 82956, label: "Maison" },
  { id: 82957, label: "Vaisselle jetable", parentId: 82956 },
  { id: 82958, label: "Bazar", parentId: 82956 },
  { id: 82959, label: "Meubles de maison", parentId: 82956 },
  { id: 82960, label: "Accesoires pour lalcool", parentId: 82956 },
  { id: 82971, label: "Article culturel" },
  { id: 80730, label: "Imprimés", parentId: 82971 },
  { id: 80733, label: "Multimédia", parentId: 82971 },
  { id: 82972, label: "Materiel électrique" },
  { id: 80732, label: "Électroménager", parentId: 82972 },
  { id: 80736, label: "Petit électroménager", parentId: 80732 },
  { id: 80737, label: "Gros électroménager", parentId: 80732 },
  {
    id: 82973,
    label: "Connexion/distribution de courant",
    parentId: 82972,
  },
  { id: 82974, label: "Dispositif lumineux", parentId: 82972 },
  { id: 82975, label: "Pile", parentId: 82972 },
]

export default data
