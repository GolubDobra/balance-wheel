export const START_VALUE = 10
export const NUM_OF_VALUES = 8

export const TITLES_ID = [
  'Друзья',
  'Здоровье',
  'Работа',
  'Финансы',
  'Семья',
  'Отдых',
  'Личностный рост',
  'Творчество',
]

export const RANGE_ID = [
  'friends-range',
  'health-range',
  'work-range',
  'money-range',
  'family-range',
  'rest-range',
  'personal-growth-range',
  'creation-range',
]

export const DATA = {
  labels: TITLES_ID,
  datasets: [
    {
      label: "Очки",
      data: new Array(NUM_OF_VALUES).fill(START_VALUE),
      backgroundColor: [
        "rgba(255, 99, 132, .5)",
        "rgba(75, 192, 192, .5)",
        "rgba(255, 205, 86, .5)",
        "rgba(201, 203, 207, .5)",
        "rgba(54, 162, 235, .5)",
        "rgba(255, 20, 86, .5)",
        "rgba(201, 203, 27, .5)",
        "rgba(14, 16, 235, .5)",
      ],
      borderWidth: 1,
    },
  ],
};
