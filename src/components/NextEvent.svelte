<script lang="ts">
  import { formatDate, getNextOccurence } from "@lib/utils/date-helper";

  export let wiederholungsRule: string | null = null;
  export let date: string;
  export let recurring = false;
  export let formatDateConfig: Intl.DateTimeFormatOptions = {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  };
</script>

<div>
  {recurring
    ? formatDate(getNextOccurence(wiederholungsRule, date), formatDateConfig)
    : formatDate(new Date(date ?? 0), formatDateConfig)}
</div>
