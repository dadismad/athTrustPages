<script lang="ts">

	import type { IGetEventsReturn, IEvent } from '~lib/types';
	import {
		formatDate,
		isNextWeek,
		isCurrentWeek,
		isDateInCurrentMonth,
		isDateInNextMonth, EventCard
	} from '~lib';

	export let data: { events: IGetEventsReturn };

	// const host = import.meta.env.VITE_HOST;
	// const apiHost = import.meta.env.VITE_API_HOST;

	const dateRanges = ['today', 'tomorrow', 'thisWeek', 'nextWeek', 'thisMonth', 'nextMonth', 'allOthers'];
	type Keys = typeof dateRanges[number];
	type AllEvents = {
		[K in Keys]: IEvent[];
	};
	let allEvents: AllEvents = {
		today: [],
		tomorrow: [],
		thisWeek: [],
		nextWeek: [],
		thisMonth: [],
		nextMonth: [],
		allOthers: [],
	}

	const mapDateRange: Record<Keys, string> = {
		today: 'Today',
		tomorrow: 'Tomorrow',
		thisWeek: 'This week',
		nextWeek: 'Next week',
		thisMonth: 'This month',
		nextMonth: 'Next month',
		allOthers: 'Others',
	}

	let today = new Date();
	let tomorrow = new Date();
	tomorrow.setDate(today.getDate() + 1);

	const formatToday = formatDate(today);
	const formatTomorrow = formatDate(tomorrow);

	const updateAllEvents = (content: IEvent[]) => {
		content.map((event) => {
			if (event.date) {
				let currentArticleDate = new Date(event.date);
				if (formatToday === event.date) {
					allEvents.today.push(event);
				} else if (formatTomorrow === event.date) {
					allEvents.tomorrow.push(event);
				} else if (isCurrentWeek(currentArticleDate)) {
					allEvents.thisWeek.push(event);
				} else if (isNextWeek(currentArticleDate)) {
					allEvents.nextWeek.push(event)
				} else if (isDateInCurrentMonth(currentArticleDate)) {
					allEvents.thisMonth.push(event);
				} else if (isDateInNextMonth(currentArticleDate)) {
					allEvents.nextMonth.push(event);
				} else {
					allEvents.allOthers.push(event);
				}
			}
		});

		allEvents = structuredClone(allEvents);

	}

	$: events = data.events.result.data
	$: updateAllEvents(events);

</script>



<div class="EventsPage">
	<div class="container">

		{#each dateRanges as dateRange}
			{#if allEvents?.[dateRange]?.length > 0 }
				<div class="date-range">
					<p class="date-range-title">{mapDateRange[dateRange]}</p>

					{#each allEvents?.[dateRange] as event}

						<EventCard data={event} />

					{/each}
				</div>
			{/if}
		{/each}


	</div>
</div>


<style lang="scss">

	.date-range {
    margin-bottom: 4rem;
	}

	.date-range-title {
    font-weight: 700;
    text-transform: uppercase;
		letter-spacing: 1px;
    padding: .5rem;
		background: var(--color-bg-base-200);
		color: var(--color-text-primary-100);
	}


</style>
