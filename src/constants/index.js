import foodImg from 'images/food.jpg';
import desertImg from 'images/desert.jpeg';
import drinkImg from 'images/drink.jpg';

export const menuData = [
  {
    title: 'Food Menu',
    content: 'その日に採れた野菜や果物など、こだわりの料理。',
    src: foodImg,
  },
  {
    title: 'Desert Menu',
    content:
      '日替わりのケーキや野菜を使ったアイスなど季節により内容が変わります。',
    src: desertImg,
  },
  {
    title: 'Drink Menu',
    content: 'ワインは世界中から当店のソムリエが厳選して集めたものばかり。',
    src: drinkImg,
  },
];

export const blogData = [{ title: 'test', date: '2019/01/20' }];

export const eventData = [
  {
    title: 'オープン記念party',
    date: '2019.01.20',
    content:
      'Bon Houseの姉妹店、Bon Cafe Kyotoのオープンを記念して、立食パーティーを行います。ワインやビールを片手に、シェフ自慢のフレンチビュッフェをお楽しみください。',
  },
  {
    title: 'ワイン試飲会',
    date: '2019.5.9',
    content:
      '当店シェフ選りすぐりの世界中のワインをご試飲いただけます。参加費は3000円。サンドイッチやサラダなど、軽食をご用意しております。',
  },
  {
    title: 'Whiteday Night',
    date: '2019.3.14',
    content:
      'ホワイトデー限定ディナーコースをご用意しております。店内もこの日限定でおしゃれに飾り付け♪カップルだけでなく、女子会にもおすすめ。',
  },
];
