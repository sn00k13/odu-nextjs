export const STRIPE_DONATE_URL =
  process.env.NEXT_PUBLIC_STRIPE_DONATE_URL ??
  'https://buy.stripe.com/bJe00j5L72XCaKQ8rV9EI01';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://theoduproject.com';

export const TESTIMONIALS = [
  { img: '/images/Johnson.jpg',   name: 'Malik Johnson',      role: 'Community Farmer',     message: 'The Odu Project has transformed not just my farming practices, but my entire perspective on sustainable agriculture. The training and community support have been invaluable.', rating: 5 },
  { img: '/images/Cruz.jpg',      name: 'Isabella Cruz',      role: 'Weaver',               message: 'For the first time, my craft is being appreciated beyond my village. ODU helped me understand how to preserve and market our traditional skills.', rating: 5 },
  { img: '/images/Walker.jpg',    name: 'Ethan Walker',       role: 'Teacher',              message: 'Introducing my students to cultural preservation activities revived their interest in our heritage. This program is a gift to the next generation.', rating: 4 },
  { img: '/images/Anderson.jpg',  name: 'Chloe Anderson',     role: 'Agripreneur',          message: 'The farming techniques I learned tripled my harvest. I\'ve gained confidence and stability for my family.', rating: 5 },
  { img: '/images/Williams.jpg',  name: 'Nia Williams',       role: 'Cultural Researcher',  message: 'This project preserves stories and traditions that would have disappeared. It\'s a lighthouse for our heritage.', rating: 4 },
  { img: '/images/Miller.jpg',    name: 'Grace Miller',       role: 'Student',              message: 'I joined out of curiosity, but I\'ve stayed because it has helped me appreciate where I come from.', rating: 5 },
  { img: '/images/Brown.jpg',     name: 'Marcus Brown',       role: 'Local Trader',         message: 'ODU empowered me to turn cultural products into sustainable income. My business has grown steadily.', rating: 4 },
  { img: '/images/Robinson.jpg',  name: 'Zoe Robinson',       role: 'Local Craftsman',      message: 'My weaving skills are now recognised and documented. I feel seen and valued.', rating: 4 },
];

export const FAQ_ITEMS = [
  {
    q: 'What does "Odu" mean, and why is it the name of this project?',
    a: 'The word Odù is sacred in Afa, Ifá, and Fa — West African spiritual systems that carry the wisdom, destiny, and stories of our people. We chose this name to ground our work in ancestral intelligence. Just as an Odu contains multitudes of meaning, our project seeks to address the multitude of ways we can reclaim our land, culture, and self-determination.',
  },
  {
    q: 'What is the political vision of The Odu Project?',
    a: 'Our vision is a future where Black and oppressed communities are liberated and self-determined, with food systems, culture, and governance rooted in ancestral wisdom and ecological justice.',
  },
  {
    q: 'What do you actually do?',
    a: 'We operate on three fronts: Urban Farming & Food Sovereignty (growing ancestral crops using regenerative practices), Community Organizing (Garden Clubs as bases for political education), and Political Education (workshops connecting agroecology to African diasporic traditions).',
  },
  {
    q: 'Where are you located?',
    a: 'We are on the ground in Durham, Orange County, and Winston-Salem, North Carolina, with plans to expand into Southeast North Carolina, Atlanta, and the Gullah Geechee corridor.',
  },
  {
    q: 'How can I join a Garden Club?',
    a: 'If you are near one of our locations, click "Join a Garden Club" on our website. No prior farming experience is necessary — only a commitment to collective work and liberation.',
  },
  {
    q: 'How are you funded?',
    a: 'We are sustained by the people. Our primary support comes from individual donations, community grants, and the collective labor of our members.',
  },
  {
    q: 'I have more questions. What\'s the best way to contact you?',
    a: 'For all inquiries: contact@theoduproject.com. You can also message us on Instagram @oduproject.',
  },
];
