// Sweets, snacks and nuts
import dessert from "./assets/image/Sweets/Dessert.jpg";
import snacks from "./assets/image/Sweets/Snacks.jpg";
import chewing from "./assets/image/Sweets/Chewing.jpg";
import lollipops from "./assets/image/Sweets/lollipops.jpg";
import honey from "./assets/image/Sweets/Honey.jpg";

// Fruits and dried fruits
import driedFruits from "./assets/image/Fruits/Dried-fruits.jpg";
import vegetables from "./assets/image/Fruits/Vegetables.jpg";
import berries from "./assets/image/Fruits/berries.jpg";

// Water, drinks and juices
import water from "./assets/image/Drinks/Water.jpg";
import drinks from "./assets/image/Drinks/Drinks.jpg";
import juices from "./assets/image/Drinks/Juices.jpg";
import energy from "./assets/image/Drinks/Energy.jpg";
import soda from "./assets/image/Drinks/Soda.jpg";

// Coffee and tea
import coffee from "./assets/image/Coffee/Coffee.jpg";
import tea from "./assets/image/Coffee/Tea.jpg";

// Dairy products and eggs
import dairy from "./assets/image/Dairy/Dairy.jpg";
import eggs from "./assets/image/Dairy/Eggs.jpg";
import yogurt from "./assets/image/Dairy/Milk.jpg";
import iceCream from "./assets/image/Dairy/Ice-cream.jpg";

// Ready-made food and pastries
import readyMade from "./assets/image/Ready-made/Ready-made.jpg";
import pastries from "./assets/image/Ready-made/Pastries.jpg";

// Grocery
import breakfast from "./assets/image/Grocery/Breakfast.jpg";
import preserves from "./assets/image/Grocery/Preserves.jpg";
import quickCooking from "./assets/image/Grocery/Quick-cooking.jpg";
import cereals from "./assets/image/Grocery/cereals.jpg";
import sauces from "./assets/image/Grocery/sauces.jpg";

// Cheeses, sausages and freezing
import cheeses from "./assets/image/Cheeses/Cheeses.jpg";
import sausages from "./assets/image/Cheeses/Sausages.jpg";
import freezing from "./assets/image/Cheeses/Freezing.jpg";

// Baby food, child care
import food from "./assets/image/Child-care/Food.jpg";
import care from "./assets/image/Child-care/Care.jpg";

// Healthy and delicious
import vegetableMilk from "./assets/image/Healthy/Vegetable-milk.jpg";
import bars from "./assets/image/Healthy/Bars.jpg";
import supplements from "./assets/image/Healthy/Supplements.jpg";

// For home
import foreign from "./assets/image/For-home/Foreign.jpg";
import cleaning from "./assets/image/For-home/Cleaning.jpg";
import laundry from "./assets/image/For-home/Laundry.jpg";
import kitchen from "./assets/image/For-home/Kitchen.jpg";
import useful from "./assets/image/For-home/Useful.jpg";

// Hygiene
import body from "./assets/image/Hygiene/Body.jpg";
import hair from "./assets/image/Hygiene/Hair.jpg";
import oral from "./assets/image/Hygiene/Oral.jpg";
import personalHygiene from "./assets/image/Hygiene/Personal-hygiene.jpg";
import toilet from "./assets/image/Hygiene/Toilet.jpg";

// For school and office
import paper from "./assets/image/stationery/paper.jpg";
import pens from "./assets/image/stationery/Pens.jpg";
import stationery from "./assets/image/stationery/Stationery.jpg";

// For pets
import cats from "./assets/image/Pets/cats.jpg";
import dogs from "./assets/image/Pets/dogs.jpg";

export let productInfo = [
   // Sweets, snacks and nuts
   {
      id: 1,
      title: "Сладкое, снеки и орешки",
      cards: [
         { id: 1, title: "Сладкое", url: `${dessert}` },
         { id: 2, title: "Снеки и орешки", url: `${snacks}` },
         { id: 3, title: "Жвачки", url: `${chewing}` },
         { id: 4, title: "Драже и леденцы", url: `${lollipops}` },
         { id: 5, title: "Мед, джем и варенье", url: `${honey}` },
      ],
   },

   // Fruits and dried fruits
   {
      id: 2,
      title: "Фрукты и сухофрукты",
      cards: [
         { id: 1, title: "Фрукты, ягоды и бахчевые", url: `${driedFruits}` },
         { id: 2, title: "Овощи, зелень и грибы", url: `${vegetables}` },
         { id: 3, title: "Сухофрукты", url: `${berries}` },
      ],
   },

   // Water, drinks and juices
   {
      id: 3,
      title: "Вода, напитки и соки",
      cards: [
         { id: 1, title: "Вода", url: `${water}` },
         { id: 2, title: "Напитки", url: `${drinks}` },
         { id: 3, title: "Соки", url: `${juices}` },
         { id: 4, title: "Энергетики", url: `${energy}` },
         { id: 5, title: "Газировка", url: `${soda}` },
      ],
   },

   // Coffee and tea
   {
      id: 4,
      title: "Кофе и чай",
      cards: [
         { id: 1, title: "Кофе", url: `${coffee}` },
         { id: 2, title: "Чай", url: `${tea}` },
      ],
   },

   // Dairy products and eggs
   {
      id: 5,
      title: "Молочные продукты и яйца",
      cards: [
         { id: 1, title: "Молочная продукция", url: `${dairy}` },
         { id: 2, title: "Яйца", url: `${eggs}` },
         { id: 3, title: "Йогурты, десерты и сырки", url: `${yogurt}` },
         { id: 4, title: "Мороженое", url: `${iceCream}` },
      ],
   },

   // Ready-made food and pastries
   {
      id: 6,
      title: "Готовая еда и выпечка",
      cards: [
         { id: 1, title: "Готовая еда и выпечка", url: `${readyMade}` },
         {
            id: 2,
            title: "Выпечка, десерты и сэндвичи",
            url: `${pastries}`,
         },
      ],
   },

   // Grocery
   {
      id: 7,
      title: "Бакалея",
      cards: [
         { id: 1, title: "Завтраки, каши, хлопья", url: `${breakfast}` },
         { id: 2, title: "Консервы", url: `${preserves}` },
         { id: 3, title: "Быстрое приготовление", url: `${quickCooking}` },
         { id: 4, title: "Макароны, крупы и мука", url: `${cereals}` },
         { id: 5, title: "Масло, соусы и специи", url: `${sauces}` },
      ],
   },

   // Cheeses, sausages and freezing
   {
      id: 8,
      title: "Сыры, колбасы и замарозка",
      cards: [
         { id: 1, title: "Сыры", url: `${cheeses}` },
         { id: 2, title: "Колбасы и сосиски", url: `${sausages}` },
         { id: 3, title: "Заморозка и лёд", url: `${freezing}` },
      ],
   },

   // Baby food, child care
   {
      id: 9,
      title: "Детское питание, уход за детьми",
      cards: [
         { id: 1, title: "Питание", url: `${food}` },
         { id: 2, title: "Уход", url: `${care}` },
      ],
   },

   // Healthy and delicious
   {
      id: 10,
      title: "Полезно и вкусно",
      cards: [
         { id: 1, title: "Растительное молоко", url: `${vegetableMilk}` },
         { id: 2, title: "Батончики, пастила и хлебцы", url: `${bars}` },
         { id: 3, title: "Добавки", url: `${supplements}` },
      ],
   },

   // For home
   {
      id: 11,
      title: "Для дома",
      cards: [
         { id: 1, title: "Зарубежная бытовая химия", url: `${foreign}` },
         { id: 2, title: "Уборка", url: `${cleaning}` },
         { id: 3, title: "Стирка", url: `${laundry}` },
         { id: 4, title: "Кухня", url: `${kitchen}` },
         { id: 5, title: "Полезные мелочи", url: `${useful}` },
      ],
   },

   // Hygiene
   {
      id: 12,
      title: "Гигиена",
      cards: [
         { id: 1, title: "Уход за телом", url: `${body}` },
         { id: 2, title: "Уход за волосами", url: `${hair}` },
         { id: 3, title: "Уход за полостью рта", url: `${oral}` },
         {
            id: 4,
            title: "Личная гигиена и аптечка",
            url: `${personalHygiene}`,
         },
         { id: 5, title: "Туалетная бумага и салфетки", url: `${toilet}` },
      ],
   },

   // For school and office
   {
      id: 13,
      title: "Для школы и офиса",
      cards: [
         { id: 1, title: "Тетради и бумага", url: `${paper}` },
         { id: 2, title: "Ручки и карандаши", url: `${pens}` },
         { id: 3, title: "Канцтовары", url: `${stationery}` },
      ],
   },

   // For pets
   {
      id: 14,
      title: "Для питомцев",
      cards: [
         { id: 1, title: "Для кошек", url: `${cats}` },
         { id: 2, title: "Для собак", url: `${dogs}` },
      ],
   },
];
