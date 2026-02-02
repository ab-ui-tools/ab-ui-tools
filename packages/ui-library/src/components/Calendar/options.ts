import type { TMonthOption, TMonthOptionLabel } from './types';

export const monthOptions: TMonthOption[] = [
  { value: 0, label: { en: 'Jan', ru: 'Янв', hy: 'Հնվ' } },
  { value: 1, label: { en: 'Feb', ru: 'Фев', hy: 'Փտվ' } },
  { value: 2, label: { en: 'Mar', ru: 'Мар', hy: 'Մրտ' } },
  { value: 3, label: { en: 'Apr', ru: 'Апр', hy: 'Ապր' } },
  { value: 4, label: { en: 'May', ru: 'Май', hy: 'Մայ' } },
  { value: 5, label: { en: 'Jun', ru: 'Июн', hy: 'Հնս' } },
  { value: 6, label: { en: 'Jul', ru: 'Июл', hy: 'Հլս' } },
  { value: 7, label: { en: 'Aug', ru: 'Авг', hy: 'Օգս' } },
  { value: 8, label: { en: 'Sep', ru: 'Сен', hy: 'Սպտ' } },
  { value: 9, label: { en: 'Oct', ru: 'Окт', hy: 'Հոկ' } },
  { value: 10, label: { en: 'Nov', ru: 'Ноя', hy: 'Նոյ' } },
  { value: 11, label: { en: 'Dec', ru: 'Дек', hy: 'Դեկ' } },
];

export const getMonthOptions = (locale: string) => {
  const lang = locale as keyof TMonthOptionLabel;
  return monthOptions.map(option => ({ ...option, label: option.label[lang] }));
};
