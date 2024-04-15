import { ICar } from '@/types/ICar';

export const fetchCars = async () => {
	const headers = {
		'X-RapidAPI-Key': '3f5532e4bemsh8fa34d68deacbcap1ba02fjsnf3ebe499b195',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	};

	const response = await fetch(
		'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',
		{
			headers,
		},
	);

	const result = await response.json();

	return result;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50;
	const mileageFactor = 0.1;
	const ageFactor = 0.05;

	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: ICar, angle?: string) => {
	const url = new URL('https://cdn.imagin.studio/getimage');

	const { make, year, model } = car;

	url.searchParams.append('customer', 'hrjavascript-mastery');
	url.searchParams.append('make', make);
	url.searchParams.append('modelFamily', model.split(' ')[0]);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('modelYear', `${year}`);
	url.searchParams.append('angle', `${angle}`);

	return `${url}`;
};
