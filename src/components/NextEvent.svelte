<script lang="ts">
  import { RRule, rrulestr } from "rrule";

  export let wiederholungsRule: string | null = null;
  export let date: string | null;
  export let recurring = false;
  export let formatDateConfig: Intl.DateTimeFormatOptions = {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  };

  function formatDate(date: Date): string {
    return date.toLocaleDateString("de-DE", formatDateConfig);
  }

  function getNextOccurence(wiederholung: string | null): string {
    if (!wiederholung) return "Unbekannt";
    const rrule = new RRule(
      { ...rrulestr(wiederholung).options, count: 1 },
      false
    );

    return formatDate(new Date(rrule.after(new Date(), true) ?? 0));
  }
</script>

<div>
  {recurring
    ? getNextOccurence(wiederholungsRule)
    : formatDate(new Date(date ?? 0))}
</div>
