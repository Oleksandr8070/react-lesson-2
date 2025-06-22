import Task1 from './components/task1/Task1'
import Task2 from './components/task2/Task2'
import Task3 from './components/task3/Task3'
import Task4 from './components/task4/Task4'
import Task5 from './components/task5/Task5'
import Task6 from './components/task6/Task6'

function App() {
  const usersData = [
    {
      login: 'login1',
      password: 'password1'
    },
    {
      login: 'login2',
      password: 'password2'
    }
  ]
  const words = [
    {
      id:'1',
      eng: 'table',
      ua: 'стіл',
      imgSrc: '/img/task3/img01.png',
    },
    {
      id: '2',
      eng: 'cat',
      ua: 'кіт',
      imgSrc: '/img/task3/img02.png',
    },
    {
      id: '3',
      eng: 'dog',
      ua: 'собака',
      imgSrc: '/img/task3/img03.png',
    }

  ]
  const employees = [
    {
      id: '111',
      name: 'Іванов',
      salary: 1000,
    },
    {
      id: '222',
      name: 'Олександров',
      salary: 10200,
    },
    {
      id: '333',
      name: 'Михайлов',
      salary: 122000,
    },
    {
      id: '444',
      name: 'Денисов',
      salary: 100230,
    }
  ]
  const services = [
  {
    id: 1,
    url: "https://react.dev/",
    title: "React",
    imgSrc: "/img/task5/img01.png",
    short: "Бібліотека UI від Meta",
    description: "JavaScript-бібліотека для створення інтерфейсів користувача. Підходить для SPA, підтримує компоненти, JSX і хуки."
  },
  {
    id: 2,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    title: "JavaScript",
    imgSrc: "/img/task5/img02.png",
    short: "Основна мова вебу",
    description: "Мова програмування, яка дозволяє створювати інтерактивні елементи на веб-сторінках. Працює в усіх браузерах і підтримується фреймворками як React, Vue, Angular."
  },
  {
    id: 3,
    url: "https://vitejs.dev/",
    title: "Vite",
    imgSrc: "/img/task5/img03.png",
    short: "Швидкий збирач проєктів",
    description: "Сучасний інструмент для фронтенд-розробки. Має дуже швидкий дев-сервер, підтримує React, Vue, TypeScript та модульну структуру."
  }
];
  return(
    <div >
      < Task1 usersData={usersData} />
      < Task2 />
      < Task3 words= {words} />
      < Task4 employees = {employees} />
      < Task5 services= {services} />
      < Task6 />

    </div>
  )
}

export default App
