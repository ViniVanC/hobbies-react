import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./sections/Intro/Intro";
import { ThemeProvider } from "./context/ThemeContext";
import { Hobby } from "./sections/Hobby/Hobby";
import { FaUserNinja } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";
import { FaGun, FaMusic, FaCode } from "react-icons/fa6";
import { Element } from "react-scroll";

const data = [
  {
    id: 1,
    name: "karate",
    title: "Карате",
    description: `Карате є бойовим мистецтвом, що розвинулося з китайських бойових мистецтв та мистецтв островів Рюкю. Карате, у загальному сенсі, — це мистецтво самозахисту за допомогою ударів, блоків та рухів. Удари завдаються як руками, так і ногами.

Займаюсь я ним майже чотири роки, за цей час я багато чому навчилась та досягла певних цілей. Я маю зелений пояс, що є великою гордістю для мене. Починавши я поставила собі ціль отримати чорний пояс, тож на кожному тренуванні я стараюсь по максимуму працювати над собою, щоб в майбутньому досягти висот.`,
    icon: <FaUserNinja />,
    imgLink: "",
  },
  {
    id: 2,
    name: "sooting",
    title: "Стрільба",
    description: `**Стрільба** - ведення вогню з різних видів зброї. Терміном «стрільба» позначають також наукову дисципліну, яка розробляє теорію стрільби і предмет бойової підготовки. Також «стрільбою» називають стрілецький спорт і його дисципліни — кульова стрільба, стендова стрільба тощо.

Це досить дивне заняття для дівчини, але дуже цікаве. Воно потребує обережності, спокою, сконцентрованості та головне влучності. З зброєю варто обходитись дуже обережно, відчувати її, для того щоб потрапити в ціль.
    `,
    icon: <FaGun />,
    imgLink: "https://pin.it/5M2PuZT",
  },
  {
    id: 3,
    name: "dance",
    title: "Пол денс",
    description: `**Пол денс** - вид спорту, який поєднує танець з гімнастичними вправами на пілоні. Танець на пілоні, визнаний видом фітнесу, який базується на аеробних та анаеробних вправах. Поєднує в собі елементи танцю та акробатичні трюки.

Я не довго займалась пол денсом, але я вважаю це дуже ніжний та гарний вид спорту, який поєднує в собі силу та легкість. Цей танець вимагає великою роботою над своєю витримкою, тілом та уміннями, кожен рух має бути ідеально опрацьований. Щоб створити захоплюючий виступ так, щоб не тільки публіка була в захваті, а і ти сам був задоволений та вражений своїми вміннями, для цього треба ідеально продумати кожну зв'язку, щоб все впивалось в музику, відчуваючи кожну ноту.`,
    icon: <FaMusic />,
    imgLink: "https://pin.it/4QIq3Wq",
  },
  {
    id: 4,
    name: "cooking",
    title: "Кулінарія",
    description: `**Кулінарія** - мистецтво приготування їжі, це такий захоплюючий світ! Тут ти можеш відчути себе справжнім шеф-кухарем, експериментувати з різними інгредієнтами та, звісно ж, насолоджуватися найголовнішим – смачною їжею. А ще, не забуваймо про те, що приготування їжі – це чудовий спосіб розслабитися та відволіктися від щоденних турбот. Готувати я почала досить рано, мама з малечку привчала мене бути хазяйновитою. Мама вчила мене готувати та розповідала всі секрети самих смачних страв. В кожну приготовлену страву я вкладаю душу, стараюся зробити все як найкраще. Готую я майже кожного дня, для усієї сім'ї. Мені подобається готувати щось нове, адже новий досвід це завжди добре.`,
    icon: <PiCookingPotBold />,
    imgLink: "https://pin.it/1rFewSg",
  },
  {
    id: 5,
    name: "coding",
    title: "Програмування",
    description: `**Програмуваня** - процес проєктування, написання, тестування, зневадження і підтримки комп'ютерних програм. Програмування поєднує в собі елементи інженерії, фундаментальних наук і мистецтва.
Я займаюсь саме інженерією програмного забезпечення і надалі планую працювати в цій сфері. Хочу піти навчатися за цією спеціальністю та отримавши вищу освіту, влаштуватись на престижну роботу.

### *_Інженерія програмного забезпечення цікава для мене з трьох причин:_*

1. Це творча професія, яка дозволяє вирішувати реальні проблеми та покращувати життя людей.
2. Це галузь, яка постійно розвивається, що дає інженерам можливість постійно вчитися та розвиватися.
3. Це галузь, яка має величезний вплив на світ, оскільки програмне забезпечення є основою більшості сучасних технологій.

### *_Ось декілька переваг мати цю професію:_*

1. Інженери програмного забезпечення можуть створювати програми, які розважатимуть, навчатимуть або допомагатимуть компаніям бути більш ефективними.
2. Вони можуть працювати над новими технологіями, такими як штучний інтелект або віртуальна реальність.
3. Вони можуть працювати в будь-якому місці світу.`,
    icon: <FaCode />,
    imgLink: "https://pin.it/1vjgH7U",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
    setMenuOpen(false);
  };

  return (
    <ThemeProvider>
      <Header
        menuOpen={menuOpen}
        handleMenuOpen={handleMenuOpen}
        activeSection={activeSection}
        handleSetActive={handleSetActive}
      />
      <main>
        <Intro handleSetActive={handleSetActive} />
        <div className="hobbies">
          {data.map(({ id, name, title, description, icon, imgLink }) => (
            <Element key={id} name={name}>
              <Hobby
                name={name}
                title={title}
                description={description}
                icon={icon}
                reverse={id % 2 === 0 ? true : false}
                imgLink={imgLink}
              />
            </Element>
          ))}
        </div>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
