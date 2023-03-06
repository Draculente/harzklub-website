import rrule from "rrule/dist/es5/rrule";

const { RRule, rrulestr } = rrule;

export function formatDate(
  date: Date,
  options?: Intl.DateTimeFormatOptions
): string {
  const o = options || {
    month: "2-digit",
    day: "2-digit",
  };
  return date.toLocaleDateString("de-DE", o);
}

//https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript

export function getNextOccurence(
  wiederholung: string | null,
  date: string
): Date {
  if (!wiederholung) new Date(0);
  const parsedRule = rrulestr(wiederholung!);

  const rrule = new RRule(
    {
      ...parsedRule.options,
      dtstart: new Date(date),
      tzid: "Europe/Berlin",
    },
    false
  );

  try {
    const nextOccurence = rrule.after(new Date(), true);
    return new Date(nextOccurence ?? 0);
  } catch (error) {
    throw new Error("Error while parsing rrule");
  }
}
