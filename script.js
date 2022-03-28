const data = [
    {
      id: 123,
      title: "Великий Гэтсби",
      poster: "https://st.kp.yandex.net/images/film_iphone/iphone360_463724.jpg"
    },
    {
      id: 234,
      title: "Дневник баскетболиста",
      poster: "https://www.kinopoisk.ru/images/film_big/6175.jpg"
    },
    {
      id: 175,
      title: "Авиатор",
      poster:
        "https://upload.wikimedia.org/wikipedia/ru/thumb/9/9e/TheAviatorPoster.jpg/211px-TheAviatorPoster.jpg"
    },
    {
      id: 131,
      title: "Поймай меня, если сможешь",
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e38dd6f9-610e-4c90-8540-dc48560cb9cc/360"
    },
    {
      id: 355,
      title: "Настоящий детектив",
      poster:
        "https://i.pinimg.com/originals/6f/51/73/6f5173a19bc4647296b4760df30ec681.jpg"
    },
    {
      id: 441,
      title: "Интерстеллар",
      poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf/300x450"
    },
    {
      id: 382,
      title: "Джентльмены",
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/600x900"
    },
    {
      id: 501,
      title: "Начало",
      poster:
        "https://st.kp.yandex.net/im/poster/1/3/1/kinopoisk.ru-Inception-1310268.jpg"
    },
    {
      id: 662,
      title: "Выживший",
      poster: "https://www.kino-teatr.ru/movie/posters/big/7/112967.jpg"
    },
    {
      id: 431,
      title: "Тёмный рыцарь: Возрождение легенды",
      poster:
        "https://st.kp.yandex.net/im/poster/7/9/7/kinopoisk.ru-The-Dark-Knight-797796.jpg"
    }
  ];
  
  /*
  1. Вывести фильмы из состояния movies. Чтобы отрисовать
  один блок с фильмом используйте компонент MovieItem.
  Передайте данные фильма через пропсы в этот компонент.
  2. Поиск должен работать следующим образом:
  - Если он пустой выводятся все фильмы.
  - Если вбили текст, выводятся фильмы, названия
  которых содержит введенный текст
  */
  
  function MovieItem({title,poster}) {
    return (
      <article className="movie">
        <img
          src={poster}
          className="movie__poster"
          alt=""
        />
        <h1>{title}</h1>
      </article>
    )
  }
  
  const App = () => {
    const [movies, setMovies] = React.useState(data);
    let tempMovies=[]
    const isIncluding=(e)=>{
        tempMovies=movies.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        // setMovies(tempMovies)
    }
    return (
      <main>
        <h1 className="title">Поиск фильмов</h1>
        <section className="search">
          <input type="text" placeholder="Введите название или год фильма" onChange={isIncluding}/>
          <button onClick={()=>{setMovies(tempMovies)}}>Поиск</button>
        </section>
        <section className="movie-list">
            {movies.map((item)=>{return <MovieItem title={item.title} poster={item.poster}/>})}
        </section>
      </main>
    )
  };
  
  
  
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
  