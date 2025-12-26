// FORMAT DATE TO XXXX-XX-XX

export const formatDate = (date: Date): string => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
};

export const isNextWeek = (dateToCheck: Date, currentDate = new Date()): boolean => {
	currentDate.setHours(0, 0, 0, 0);
	// Получаем начало текущей недели (понедельник)
	const currentDay = currentDate.getDay();
	const startOfThisWeek = new Date(currentDate);
	startOfThisWeek.setDate(currentDate.getDate() - (currentDay === 0 ? 6 : currentDay - 1)); // Если воскресенье, то отнимаем 6, иначе отнимаем дни до понедельника

	// Получаем начало следующей недели (понедельник)
	const startOfNextWeek = new Date(startOfThisWeek);
	startOfNextWeek.setDate(startOfThisWeek.getDate() + 7);

	// Получаем конец следующей недели (воскресенье)
	const endOfNextWeek = new Date(startOfNextWeek);
	endOfNextWeek.setDate(startOfNextWeek.getDate() + 6);

	// Проверяем, входит ли дата в диапазон следующей недели
	return dateToCheck >= startOfNextWeek && dateToCheck <= endOfNextWeek;
}



export const isCurrentWeek = (dateToCheck: Date, currentDate = new Date()): boolean => {

	currentDate.setHours(0, 0, 0, 0);
	// Получаем начало текущей недели (понедельник)
	const currentDay = currentDate.getDay();
	const startOfThisWeek = new Date(currentDate);
	startOfThisWeek.setDate(currentDate.getDate() - (currentDay === 0 ? 6 : currentDay - 1)); // Если воскресенье, то отнимаем 6, иначе отнимаем дни до понедельника

	// Получаем конец текущей недели (воскресенье)
	const endOfThisWeek = new Date(startOfThisWeek);
	endOfThisWeek.setDate(startOfThisWeek.getDate() + 6);

	// Проверяем, входит ли дата в диапазон текущей недели
	return dateToCheck >= startOfThisWeek && dateToCheck <= endOfThisWeek;
}

export const isDateInCurrentMonth = (date: Date) => {
	// Получаем текущую дату
	const now = new Date();

	// Получаем год и месяц из текущей даты
	const currentYear = now.getFullYear();
	const currentMonth = now.getMonth(); // Номера месяцев начинаются с 0 (январь = 0)

	// Получаем год и месяц из переданной даты
	const inputYear = date.getFullYear();
	const inputMonth = date.getMonth();

	// Сравниваем год и месяц
	return currentYear === inputYear && currentMonth === inputMonth;
}

export const isDateInNextMonth = (date: Date) => {
	// Получаем текущую дату
	const now = new Date();

	// Получаем год и месяц из текущей даты
	const currentYear = now.getFullYear();
	const currentMonth = now.getMonth(); // Номера месяцев начинаются с 0 (январь = 0)

	// Рассчитываем следующий месяц и год
	const nextMonth = (currentMonth + 1) % 12; // Переход на январь, если текущий месяц — декабрь
	const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear; // Увеличиваем год, если текущий месяц — декабрь

	// Получаем год и месяц из переданной даты
	const inputYear = date.getFullYear();
	const inputMonth = date.getMonth();

	// Сравниваем год и месяц с расчетным следующим месяцем
	return inputYear === nextYear && inputMonth === nextMonth;
}
