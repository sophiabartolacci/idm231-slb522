/**
 * @description
 * Given a month and day, determine the corresponding Zodiac sign.
 * @param {number} month - month of the year (1-12)
 * @param {number} day - day of the month (1-31)
 * @returns {string} the corresponding Zodiac sign
 */
function get_zodiac(month, day) {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return 'amaryllis';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return 'tulip';
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    return 'lily-of-the-valley';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    return 'bluebell';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return 'violas';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return 'zinnia';
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return 'sunflower';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return 'marigold';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return 'hibiscus';
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return 'daisy';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return 'sweet-pea';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return 'snapdragon';
  } else return null;
}


const flower_data = {
  'amaryllis': {
    name: 'Amaryllis',
    description: 'A bulb flower with large, trumpet-shaped blooms that thrive indoors or in mild climates. They prefer bright, indirect light and evenly moist soil. ',
    funFact: 'Amaryllis bulbs can bloom year after year if cared for properly.',
    image: './flower-icons/12-amaryllis.png',
    sound: './sounds/12-amaryllis.mp3',
    difficulty: 3,  
    sunlight: 3,    
    watering: 3    
  },
  'tulip': {
    name: 'Tulip',
    description: 'A flower known for their vivid cup-shaped blooms. Plant bulbs in fall and give them full sun for best display. ',
    funFact: 'Tulips were once more valuable than gold in the Netherlands during “Tulip Mania” in the 1600s.',
    image: './flower-icons/11-tulip.png',
    sound: './sounds/11-tulip.mp3',
    difficulty: 2,  
    sunlight: 5,   
    watering: 3     
  },
  'lily-of-the-valley': {
    name: 'Lily of the Valley',
    description: 'Fragrant, bell-shaped white flowers that spread easily and thrive in part shade to shade. They prefer consistently moist soil. ',
    funFact: 'Lily of the Valley can spread and form colonies that last for years in the garden. ',
    image: './flower-icons/10-lily-of-the-valley.png',
    sound: './sounds/10-lily-of-the-valley.mp3',
    difficulty: 1,  
    sunlight: 1,    
    watering: 4     
  },
  'bluebell': {
    name: 'Bluebell',
    description: 'Delicate, nodding blue flowers often seen in spring woodlands. They prefer moderate sun and moist, rich soil. ',
    funFact: 'Bluebells often carpet entire forest floors in the spring, creating stunning blue carpets.',
    image: './flower-icons/9-bluebell.png',
    sound: './sounds/9-bluebell.mp3',
    difficulty: 2,  
    sunlight: 2,    
    watering: 3
  },
  'violas': {
    name: 'Violas',
    description: 'Small, cheerful flowers that tolerate cooler weather and bloom in spring and fall. Easy to grow from seed or seedlings. ',
    funFact: 'Violas are edible flowers often used to decorate salads and desserts.',
    image: './flower-icons/8-violas.png',
    sound: './sounds/8-violas.mp3',
    difficulty: 1,
    sunlight: 4,    
    watering: 3
  },
  'zinnia': {
    name: 'Zinnia',
    description: 'Bright, daisy-like blooms that are excellent for beginner gardeners. They thrive in warm, sunny locations and are drought tolerant. ',
    funFact: 'Zinnias attract butterflies and hummingbirds to the garden.',
    image: './flower-icons/7-zinnia.png',
    sound: './sounds/7-zinnia.mp3',
    difficulty: 1,
    sunlight: 5,    
    watering: 2     
  },
  'sunflower': {
    name: 'Sunflower',
    description: 'Tall, cheerful flowers that love heat and sun. They are easy to grow from seed and can reach impressive heights in the garden. ',
    funFact: 'Sunflowers can turn their heads to follow the sun during the day, a behavior called heliotropism.',
    image: './flower-icons/6-sunflower.png',
    sound: './sounds/6-sunflower.mp3',
    difficulty: 1,
    sunlight: 5,   
    watering: 3
  },
  'marigold': {
    name: 'Marigold',
    description: 'Vibrant flowers that bloom all summer in warm conditions. They are hardy and attract beneficial insects. ',
    funFact: 'Marigolds are known to repel certain pests, making them great companion plants.',
    image: './flower-icons/5-marigold.png',
    sound: './sounds/5-marigold.mp3',
    difficulty: 1,
    sunlight: 5,
    watering: 3
  },
  'hibiscus': {
    name: 'Hibiscus',
    description: 'Tropical blooms with large, showy flowers. Hibiscus prefers warm conditions, rich soil, and regular water. ',
    funFact: 'Some hibiscus varieties are used to make herbal teas.',
    image: './flower-icons/4-hibiscus.png',
    sound: './sounds/4-hibiscus.mp3',
    difficulty: 4,  
    sunlight: 5,
    watering: 4
  },
  'daisy': {
    name: 'Daisy',
    description: 'Classic white-petaled flowers that are easy to grow and cheerful in appearance. They do well in sunny spots. ',
    funFact: 'Daisies close their petals at night and open them again in the morning.',
    image: './flower-icons/3-daisy.png',
    sound: './sounds/3-daisy.mp3',
    difficulty: 1,
    sunlight: 5,
    watering: 3
  },
  'sweet-pea': {
    name: 'Sweet Pea',
    description: 'Climbing vines with fragrant, colorful blossoms. They prefer cooler weather and need support to climb. ',
    funFact: 'Sweet peas have been grown for their delightful fragrance since the 17th century.',
    image: './flower-icons/2-sweet-pea.png',
    sound: './sounds/2-sweet-pea.mp3',
    difficulty: 3,  
    sunlight: 4,
    watering: 3
  },
  'snapdragon': {
    name: 'Snapdragon',
    description: 'Tall spikes of colorful flowers that are great for borders and containers. They are relatively easy to grow in full sun. ',
    funFact: 'Snapdragon flowers look like dragon mouths that open and close when squeezed.',
    image: './flower-icons/1-snapdragon.png',
    sound: './sounds/1-snapdragon.mp3',
    difficulty: 2,
    sunlight: 5,
    watering: 3
  }
};
