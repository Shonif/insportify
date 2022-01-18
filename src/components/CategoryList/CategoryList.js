import Event from "../Event/Event";
import styles from "./CategoryList.module.css";

const CATEGORIES = [
  {
    title: "Hockey",
    events: [
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
    ],
  },
  {
    title: "Cricket",
    events: [
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
    ],
  },
  {
    title: "Bocce",
    events: [
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
    ],
  },
  {
    title: "Baseball",
    events: [
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
      {
        image:
          "D:\\Users\\faiyazkhan024\\Work\\Shonif\\projects\\clients\\insportify\\src\\assets\\image_1.png",
        title: "Aga Khan Tournament",
        content:
          "It is one of the best and most colourful tournaments in India. The tournament is currently organized by the Maharashtra Hockey Association.",
        date: 6273,
      },
    ],
  },
];

const CategoryList = () => (
  <div className={styles.categoryList}>
    {CATEGORIES.map((category, index) => (
      <div key={index} className={styles.category}>
        <h1>{category.title}</h1>
        <div className={styles.eventList}>
          {category.events.map((event, index) => (
            <Event
              key={index}
              date={event.date}
              image={event.image}
              title={event.title}
              content={event.content}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default CategoryList;
