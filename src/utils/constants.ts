import { parseCookies, setCookie as setCookieLib } from 'nookies'

export const CITY_API_KEY = '54139d21b48bbb2c6bbc17d5c9432cd3c4b640d1'

export type TAction = {
  type: string
  [key: string]: any
}

export const createAction = (type: string) => ({ type })

export const mySetCookie = (key: string, value: string, time: number = 10 * 24 * 60 * 60) => {
  setCookieLib(null, key, value, {
    maxAge: time
  })
}

export const myGetCookies = () => {
  const cookies = parseCookies()
  return cookies
}

export const catalogData = [
  {
    name: 'Гитара',
    subcatalog: [
      {
        name: 'Классические гитары',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Акустические гитары',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Электрогитары',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Басгитары',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Струны',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Чехлы',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Укулеле',
    subcatalog: [
      {
        name: 'Струны',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Чехлы',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Клавишные инструменты',
    subcatalog: [
      {
        name: 'Синтезаторы',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Цифровые пианино',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Ударные инструменты',
    subcatalog: [
      {
        name: 'Акустические ударные',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Электронные ударные',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Духовые инструменты',
    subcatalog: [
      {
        name: 'Блокфлейты',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Флейты',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Саксофоны',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Кларнеты',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Трубы',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Тромбоны',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Смычковые инструменты',
    subcatalog: [
      {
        name: 'Скрипки',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Альты',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Виолончели',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Контрабасы',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      },
      {
        name: 'Смычки',
        parameters: [
          {
            name: 'параметр 1',
            list: [
              {
                name: 'подпараметр 1',
                amount: 3
              },
              {
                name: 'подпараметр 2',
                amount: 1
              },
              {
                name: 'подпараметр 3',
                amount: 0
              }
            ]
          },
          {
            name: 'параметр 2',
            list: [
              {
                name: 'подпараметр 1',
                amount: 5
              },
              {
                name: 'подпараметр 2',
                amount: 2
              },
              {
                name: 'подпараметр 3',
                amount: 4
              }
            ]
          }
        ]
      }
    ]
  }
]
